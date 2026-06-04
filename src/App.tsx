import { useEffect, useRef, useState, useCallback } from "react";
import { GameplayPulserailLite } from "./screens";
import { GameSettingsPulserailLite } from "./screens";
import { createGameRuntime } from "./game/game-runtime";
import type { PulseRailLiteState } from "./features/pulserail-lite/pulserail-lite.store";

export default function App() {
  const runtimeRef = useRef(createGameRuntime());
  const [state, setState] = useState<PulseRailLiteState>(runtimeRef.current.repo.getState());

  useEffect(() => {
    const runtime = runtimeRef.current;
    const unsub = runtime.repo.subscribe((s) => setState(s));
    runtime.start();
    return () => {
      unsub();
      runtime.stop();
    };
  }, []);

  const actions = useCallback(
    () => ({
      "start-game-2": () => runtimeRef.current.repo.dispatch({ type: "START_GAME" }),
      "restart-3": () => runtimeRef.current.repo.dispatch({ type: "RESTART" }),
      "overdrive-1": () => runtimeRef.current.repo.dispatch({ type: "OVERDRIVE" }),
      "energy-1": () => {},
      "grid-2": () => {},
      "sync-3": () => {},
      "pulse-4": () => {},
      "pause-1": () => runtimeRef.current.repo.dispatch({ type: "TOGGLE_PAUSE" }),
      "reset-1": () => runtimeRef.current.repo.dispatch({ type: "RESTART" }),
      "mute-1": () => {},

    }),
    []
  );

  const settingsActions = useCallback(
    () => ({
      "return-to-game-1": () => runtimeRef.current.repo.dispatch({ type: "SET_SCREEN", screen: "gameplay" }),
      "return-to-game-5": () => runtimeRef.current.repo.dispatch({ type: "SET_SCREEN", screen: "gameplay" }),
      "save-preferences-6": () => runtimeRef.current.repo.dispatch({ type: "SAVE_PREFERENCES" }),
      "reset-preferences-4": () => runtimeRef.current.repo.dispatch({ type: "RESET_PREFERENCES" }),
      "button-2-2": () => {},
      "button-3-3": () => {},
    }),
    []
  );

  const runtimePayload = {
    player: { lane: state.playerLane, position: state.playerPosition },
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };

  useEffect(() => {
    const app = {
      state,
      actions: {
        start: () => runtimeRef.current.repo.dispatch({ type: "START_GAME" }),
        restart: () => runtimeRef.current.repo.dispatch({ type: "RESTART" }),
        overdrive: () => runtimeRef.current.repo.dispatch({ type: "OVERDRIVE" }),
        moveLeft: () => runtimeRef.current.repo.dispatch({ type: "MOVE_LEFT" }),
        moveRight: () => runtimeRef.current.repo.dispatch({ type: "MOVE_RIGHT" }),
        pause: () => runtimeRef.current.repo.dispatch({ type: "TOGGLE_PAUSE" }),
        setScreen: (screen: "gameplay" | "settings") =>
          runtimeRef.current.repo.dispatch({ type: "SET_SCREEN", screen }),
      },
    };
    (window as any).app = app;
    (globalThis as any).app = app;
  }, [state]);

  return (
    <div
      data-setfarm-root="pulserail-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-50"
    >
      {state.screen === "gameplay" ? (
        <GameplayPulserailLite actions={actions()} runtime={runtimePayload} />
      ) : (
        <GameSettingsPulserailLite actions={settingsActions()} />
      )}
    </div>
  );
}
