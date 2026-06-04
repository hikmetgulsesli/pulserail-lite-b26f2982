import type { PulseRailLiteAction } from "../pulserail-lite/pulserail-lite.store";

export function actStartGame(dispatch: (action: PulseRailLiteAction) => void) {
  dispatch({ type: "START_GAME" });
}
