import {
  PulseRailLiteState,
  PulseRailLiteAction,
} from "../features/pulserail-lite/pulserail-lite.store";
import { createPulseRailLiteRepo, PulseRailLiteRepo } from "../features/pulserail-lite/pulserail-lite.repo";

export interface GameRuntime {
  repo: PulseRailLiteRepo;
  start(): void;
  stop(): void;
  tick(delta: number): void;
}

export function createGameRuntime(): GameRuntime {
  const repo = createPulseRailLiteRepo();
  let rafId: number | null = null;
  let lastTs = 0;

  function loop(ts: number) {
    if (lastTs === 0) lastTs = ts;
    const delta = ts - lastTs;
    lastTs = ts;

    repo.dispatch({ type: "TICK", delta });

    rafId = requestAnimationFrame(loop);
  }

  return {
    repo,
    start() {
      if (rafId !== null) return;
      lastTs = 0;
      rafId = requestAnimationFrame(loop);
    },
    stop() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      lastTs = 0;
    },
    tick(delta: number) {
      repo.dispatch({ type: "TICK", delta });
    },
  };
}
