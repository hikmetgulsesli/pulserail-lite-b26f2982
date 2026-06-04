import {
  PulseRailLiteState,
  Obstacle,
  Shard,
} from "../features/pulserail-lite/pulserail-lite.store";

export function makeFixtureState(overrides: Partial<PulseRailLiteState> = {}): PulseRailLiteState {
  return {
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
    ...overrides,
  };
}

export function makeObstacle(overrides: Partial<Obstacle> = {}): Obstacle {
  return {
    id: "obs-test",
    lane: 0,
    position: 50,
    ...overrides,
  };
}

export function makeShard(overrides: Partial<Shard> = {}): Shard {
  return {
    id: "shard-test",
    lane: 1,
    position: 60,
    ...overrides,
  };
}
