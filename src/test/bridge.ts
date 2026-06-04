import { createPulseRailLiteRepo, PulseRailLiteRepo } from "../features/pulserail-lite/pulserail-lite.repo";
import { PulseRailLiteState, INITIAL_STATE } from "../features/pulserail-lite/pulserail-lite.store";

export interface TestBridge {
  repo: PulseRailLiteRepo;
  getState(): PulseRailLiteState;
  dispatch(action: Parameters<PulseRailLiteRepo["dispatch"]>[0]): void;
  reset(): void;
}

export function createTestBridge(initial: PulseRailLiteState = INITIAL_STATE): TestBridge {
  const repo = createPulseRailLiteRepo(initial);
  return {
    repo,
    getState() {
      return repo.getState();
    },
    dispatch(action) {
      repo.dispatch(action);
    },
    reset() {
      // Re-create repo with initial state
      const next = createPulseRailLiteRepo(initial);
      (repo as any).getState = next.getState.bind(next);
      (repo as any).dispatch = next.dispatch.bind(next);
      (repo as any).subscribe = next.subscribe.bind(next);
    },
  };
}
