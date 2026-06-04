import type { PulseRailLiteAction } from "../pulserail-lite/pulserail-lite.store";

export function actPauseGame(dispatch: (action: PulseRailLiteAction) => void) {
  dispatch({ type: "TOGGLE_PAUSE" });
}
