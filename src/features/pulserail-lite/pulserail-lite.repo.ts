import {
  PulseRailLiteState,
  PulseRailLiteAction,
  pulseRailLiteReducer,
  INITIAL_STATE,
} from "./pulserail-lite.store";

export interface PulseRailLiteRepo {
  getState(): PulseRailLiteState;
  dispatch(action: PulseRailLiteAction): void;
  subscribe(listener: (state: PulseRailLiteState) => void): () => void;
}

export function createPulseRailLiteRepo(
  initial: PulseRailLiteState = INITIAL_STATE
): PulseRailLiteRepo {
  let state = initial;
  const listeners = new Set<(state: PulseRailLiteState) => void>();

  return {
    getState() {
      return state;
    },
    dispatch(action: PulseRailLiteAction) {
      state = pulseRailLiteReducer(state, action);
      listeners.forEach((l) => l(state));
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
