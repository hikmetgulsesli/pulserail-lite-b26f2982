import type { PulseRailLiteAction } from "../pulserail-lite/pulserail-lite.store";

export function actRestartGame(dispatch: (action: PulseRailLiteAction) => void) {
  dispatch({ type: "RESTART" });
}
