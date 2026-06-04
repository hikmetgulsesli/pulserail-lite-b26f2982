// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - PulseRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, CircleUserRound, Gamepad2, Grid3X3, Heart, RefreshCw, SlidersHorizontal } from "lucide-react";


export type GameplayPulserailLiteActionId = "overdrive-1" | "start-game-2" | "restart-3" | "energy-1" | "grid-2" | "sync-3" | "pulse-4" | "pause-1" | "reset-1" | "mute-1";

export interface GameplayPulserailLiteProps {
  actions?: Partial<Record<GameplayPulserailLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayPulserailLite({ actions, runtime }: GameplayPulserailLiteProps) {
  void runtime;
  return (
    <>
      <div className="scanlines"></div>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,219,231,0.1)]">
      <div className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg italic text-primary drop-shadow-[0_0_10px_rgba(225,253,255,0.8)]">PulseRail Lite</div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4">
      <Gamepad2 className="text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-300 p-2 rounded-DEFAULT cursor-pointer" aria-hidden={true} focusable="false" />
      <Heart className="text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors duration-300 p-2 rounded-DEFAULT cursor-pointer" aria-hidden={true} focusable="false" />
      <Bolt className="text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors duration-300 p-2 rounded-DEFAULT cursor-pointer" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col py-20 bg-surface-dim/90 backdrop-blur-2xl docked left-0 h-full w-20 md:w-64 border-r border-secondary/20 shadow-[-10px_0_30px_rgba(255,36,228,0.1)]">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center border border-secondary/30">
      <CircleUserRound className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="hidden md:block">
      <div className="font-headline-md text-headline-md text-secondary-container">OPERATOR_01</div>
      <div className="font-label-caps text-label-caps text-secondary opacity-80">LVL 42 SYNC</div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-2 w-full">
      <a className="text-on-surface-variant p-4 flex items-center gap-4 opacity-60 hover:bg-secondary/10 hover:opacity-100 transition-opacity w-full" href="#" data-action-id="energy-1" onClick={(event) => { event.preventDefault(); actions?.["energy-1"]?.(); }}>
      <Bolt aria-hidden={true} focusable="false" />
      <span className="hidden md:block font-label-caps text-label-caps">Energy</span>
      </a>
      <a className="bg-secondary-container/20 text-secondary border-r-4 border-secondary p-4 flex items-center gap-4 w-full translate-x-1 duration-150" href="#" data-action-id="grid-2" onClick={(event) => { event.preventDefault(); actions?.["grid-2"]?.(); }}>
      <Grid3X3 aria-hidden={true} focusable="false" />
      <span className="hidden md:block font-label-caps text-label-caps">Grid</span>
      </a>
      <a className="text-on-surface-variant p-4 flex items-center gap-4 opacity-60 hover:bg-secondary/10 hover:opacity-100 transition-opacity w-full" href="#" data-action-id="sync-3" onClick={(event) => { event.preventDefault(); actions?.["sync-3"]?.(); }}>
      <RefreshCw aria-hidden={true} focusable="false" />
      <span className="hidden md:block font-label-caps text-label-caps">Sync</span>
      </a>
      <a className="text-on-surface-variant p-4 flex items-center gap-4 opacity-60 hover:bg-secondary/10 hover:opacity-100 transition-opacity w-full" href="#" data-action-id="pulse-4" onClick={(event) => { event.preventDefault(); actions?.["pulse-4"]?.(); }}>
      <SlidersHorizontal aria-hidden={true} focusable="false" />
      <span className="hidden md:block font-label-caps text-label-caps">Pulse</span>
      </a>
      </div>
      <div className="mt-auto px-4 w-full">
      <button className="w-full bg-secondary-container/10 border border-secondary/50 text-secondary font-label-caps text-label-caps py-3 px-4 hover:bg-secondary hover:text-on-secondary transition-colors uppercase tracking-widest" type="button" data-action-id="overdrive-1" onClick={actions?.["overdrive-1"]}>
                      OVERDRIVE
                  </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="relative w-full h-full pt-16 md:pl-64 flex flex-col z-20">
      {/* HUD Layer */}
      <div className="absolute top-20 left-0 w-full px-margin-mobile md:px-margin-desktop flex justify-between items-start pointer-events-none z-30">
      {/* Top Left Stats */}
      <div className="flex flex-col gap-2">
      <div className="hud-chip px-4 py-2 font-label-caps text-label-caps text-primary flex items-center gap-2">
      <span className="opacity-70">SCORE:</span>
      <span className="font-bold text-[16px]">12,450</span>
      </div>
      <div className="hud-chip px-4 py-2 font-label-caps text-label-caps text-secondary flex items-center gap-2 w-max">
      <span className="opacity-70">COMBO:</span>
      <span className="font-bold">x5</span>
      </div>
      </div>
      {/* Top Right Stats */}
      <div className="flex flex-col gap-2 items-end">
      <div className="hud-chip px-4 py-2 font-label-caps text-label-caps text-primary flex items-center gap-2">
      <span className="opacity-70">LEVEL:</span>
      <span className="font-bold">04</span>
      </div>
      <div className="flex gap-1 mt-1">
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Gameplay Area (3D Grid) */}
      <div className="flex-1 relative w-full h-full overflow-hidden flex items-center justify-center perspective-container">
      {/* The 3D Grid */}
      <div className="w-[200%] h-[200%] absolute bottom-[-50%] left-[-50%] grid-perspective pointer-events-none border-t border-primary/20">
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,219,231,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,219,231,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      {/* Rails and Pulses */}
      <div className="absolute top-1/2 left-1/4 w-1/2 h-[2px] bg-primary/20 rotate-45 transform origin-left">
      <div className="w-full h-full pulse-rail"></div>
      </div>
      <div className="absolute top-1/3 left-1/2 w-1/3 h-[2px] bg-primary/20 -rotate-12 transform origin-left">
      <div className="w-full h-full pulse-rail" style={{animationDelay: "0.5s", background: "linear-gradient(90deg, transparent, rgba(0, 242, 255, 0.9), transparent)"}}></div>
      </div>
      {/* Overload Zone (Magenta) */}
      <div className="absolute top-[40%] left-[60%] w-32 h-32 border border-secondary/50 rounded-full magenta-bloom bg-secondary/5 flex items-center justify-center">
      <div className="w-16 h-16 border border-secondary rounded-full animate-ping opacity-50"></div>
      </div>
      </div>
      {/* Floating Action Overlay (Start/Restart) - Active State */}
      <div className="z-40 flex flex-col items-center gap-6 p-8 bg-surface-dim/80 backdrop-blur-md border border-primary/30 rounded-lg neon-bloom-active relative pointer-events-auto shadow-2xl">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMjE5LCAyMzEsIDAuMSkiLz4KPC9zdmc+')] opacity-50 rounded-lg pointer-events-none"></div>
      <h2 className="font-headline-md text-headline-md text-primary tracking-[0.1em] text-center drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">SYSTEM READY</h2>
      <div className="flex flex-col gap-4 w-full min-w-[200px]">
      <button className="w-full py-4 border border-primary text-primary font-label-caps text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] relative group overflow-hidden" type="button" data-action-id="start-game-2" onClick={actions?.["start-game-2"]}>
      <span className="relative z-10">Start Game</span>
      <div className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      </button>
      <button className="w-full py-3 border border-outline-variant text-on-surface-variant font-label-caps text-label-caps uppercase hover:border-secondary hover:text-secondary transition-colors duration-300" type="button" data-action-id="restart-3" onClick={actions?.["restart-3"]}>
                              Restart
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-30 flex justify-between items-center px-margin-mobile py-2 pointer-events-none bg-transparent font-label-caps text-label-caps md:pl-[calc(16rem+40px)]">
      <div className="text-on-surface">© 2024 PULSERAIL_OS // VER 2.0.4</div>
      <div className="flex gap-4">
      <button className="text-on-surface-variant/50 hover:text-primary transition-colors cursor-pointer pointer-events-auto hover:underline bg-transparent border-none" type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>[P] PAUSE</button>
      <button className="text-on-surface-variant/50 hover:text-primary transition-colors cursor-pointer pointer-events-auto bg-transparent border-none" type="button" data-action-id="reset-1" onClick={actions?.["reset-1"]}>[R] RESET</button>
      <button className="text-on-surface-variant/50 hover:text-primary transition-colors cursor-pointer pointer-events-auto bg-transparent border-none" type="button" data-action-id="mute-1" onClick={actions?.["mute-1"]}>[M] MUTE</button>
      </div>
      </footer>
    </>
  );
}
