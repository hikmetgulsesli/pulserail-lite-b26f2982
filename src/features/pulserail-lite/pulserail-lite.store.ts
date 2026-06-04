export type Lane = 0 | 1 | 2;

export interface Obstacle {
  id: string;
  lane: Lane;
  position: number;
}

export interface Shard {
  id: string;
  lane: Lane;
  position: number;
}

export interface PulseRailLiteState {
  playerLane: Lane;
  playerPosition: number;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  started: boolean;
  speed: number;
  overdriveActive: boolean;
  overdriveTimer: number;
  screen: "gameplay" | "settings";
}

export const INITIAL_STATE: PulseRailLiteState = {
  playerLane: 1,
  playerPosition: 10,
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  paused: false,
  gameOver: false,
  started: false,
  speed: 2,
  overdriveActive: false,
  overdriveTimer: 0,
  screen: "gameplay",
};

export type PulseRailLiteAction =
  | { type: "TICK"; delta: number }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "START_GAME" }
  | { type: "RESTART" }
  | { type: "TOGGLE_PAUSE" }
  | { type: "OVERDRIVE" }
  | { type: "SET_SCREEN"; screen: "gameplay" | "settings" }
  | { type: "RESET_PREFERENCES" }
  | { type: "SAVE_PREFERENCES" }
  | { type: "SPAWN_OBSTACLE"; obstacle: Obstacle }
  | { type: "SPAWN_SHARD"; shard: Shard }
  | { type: "COLLISION"; obstacleId: string }
  | { type: "COLLECT"; shardId: string };

let obstacleIdCounter = 0;
let shardIdCounter = 0;

function makeObstacleLane(state: PulseRailLiteState): Lane {
  const lanes: Lane[] = [0, 1, 2];
  const safe = lanes.filter((l) => l !== state.playerLane);
  return safe[Math.floor(Math.random() * safe.length)];
}

function spawnObstacle(state: PulseRailLiteState): Obstacle {
  obstacleIdCounter += 1;
  return {
    id: `obs-${obstacleIdCounter}`,
    lane: makeObstacleLane(state),
    position: 100 + Math.random() * 50,
  };
}

function spawnShard(state: PulseRailLiteState): Shard {
  shardIdCounter += 1;
  const lanes: Lane[] = [0, 1, 2];
  return {
    id: `shard-${shardIdCounter}`,
    lane: lanes[Math.floor(Math.random() * lanes.length)],
    position: 100 + Math.random() * 80,
  };
}

export function pulseRailLiteReducer(
  state: PulseRailLiteState,
  action: PulseRailLiteAction
): PulseRailLiteState {
  switch (action.type) {
    case "START_GAME": {
      if (state.started && !state.gameOver) return { ...state, paused: false };
      obstacleIdCounter = 0;
      shardIdCounter = 0;
      return {
        ...INITIAL_STATE,
        started: true,
        screen: state.screen,
      };
    }
    case "RESTART": {
      obstacleIdCounter = 0;
      shardIdCounter = 0;
      return {
        ...INITIAL_STATE,
        started: true,
        screen: state.screen,
      };
    }
    case "TOGGLE_PAUSE": {
      if (!state.started || state.gameOver) return state;
      return { ...state, paused: !state.paused };
    }
    case "MOVE_LEFT": {
      if (!state.started || state.paused || state.gameOver) return state;
      return {
        ...state,
        playerLane: Math.max(0, state.playerLane - 1) as Lane,
      };
    }
    case "MOVE_RIGHT": {
      if (!state.started || state.paused || state.gameOver) return state;
      return {
        ...state,
        playerLane: Math.min(2, state.playerLane + 1) as Lane,
      };
    }
    case "OVERDRIVE": {
      if (!state.started || state.gameOver) return state;
      if (state.energy < 30) return state;
      return {
        ...state,
        energy: state.energy - 30,
        overdriveActive: true,
        overdriveTimer: 3000,
        speed: state.speed + 2,
      };
    }
    case "SET_SCREEN":
      return { ...state, screen: action.screen };
    case "RESET_PREFERENCES":
      return { ...state, speed: INITIAL_STATE.speed };
    case "SAVE_PREFERENCES":
      return state;
    case "SPAWN_OBSTACLE":
      return {
        ...state,
        obstacles: [...state.obstacles, action.obstacle],
      };
    case "SPAWN_SHARD":
      return {
        ...state,
        shards: [...state.shards, action.shard],
      };
    case "COLLISION": {
      const obstacles = state.obstacles.filter((o) => o.id !== action.obstacleId);
      const lives = state.lives - 1;
      if (lives <= 0) {
        return { ...state, obstacles, lives: 0, gameOver: true, paused: true };
      }
      return { ...state, obstacles, lives };
    }
    case "COLLECT": {
      const shards = state.shards.filter((s) => s.id !== action.shardId);
      return {
        ...state,
        shards,
        score: state.score + 10,
        energy: Math.min(100, state.energy + 10),
      };
    }
    case "TICK": {
      if (!state.started || state.paused || state.gameOver) return state;

      let next = { ...state };
      const dt = action.delta;
      const moveSpeed = next.overdriveActive ? next.speed * 1.5 : next.speed;

      // Move obstacles toward player
      next.obstacles = next.obstacles
        .map((o) => ({ ...o, position: o.position - moveSpeed * (dt / 16) }))
        .filter((o) => o.position > -10);

      // Move shards toward player
      next.shards = next.shards
        .map((s) => ({ ...s, position: s.position - moveSpeed * (dt / 16) }))
        .filter((s) => s.position > -10);

      // Overdrive timer
      if (next.overdriveActive) {
        next.overdriveTimer -= dt;
        if (next.overdriveTimer <= 0) {
          next.overdriveActive = false;
          next.speed = Math.max(2, next.speed - 2);
        }
      }

      // Spawn logic
      if (Math.random() < 0.02) {
        next.obstacles = [...next.obstacles, spawnObstacle(next)];
      }
      if (Math.random() < 0.015) {
        next.shards = [...next.shards, spawnShard(next)];
      }

      // Collision detection with player
      const hitObstacle = next.obstacles.find(
        (o) => o.lane === next.playerLane && o.position <= next.playerPosition + 2 && o.position >= next.playerPosition - 2
      );
      if (hitObstacle) {
        next.obstacles = next.obstacles.filter((o) => o.id !== hitObstacle.id);
        next.lives -= 1;
        if (next.lives <= 0) {
          next.lives = 0;
          next.gameOver = true;
          next.paused = true;
        }
      }

      const hitShard = next.shards.find(
        (s) => s.lane === next.playerLane && s.position <= next.playerPosition + 2 && s.position >= next.playerPosition - 2
      );
      if (hitShard) {
        next.shards = next.shards.filter((s) => s.id !== hitShard.id);
        next.score += 10;
        next.energy = Math.min(100, next.energy + 10);
      }

      // Score for distance
      next.score += Math.floor(moveSpeed * (dt / 16));

      return next;
    }
    default:
      return state;
  }
}
