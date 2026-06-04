// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PulseRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { AudioWaveform, Gauge, Keyboard, RotateCcw, X } from "lucide-react";


export type GameSettingsPulserailLiteActionId = "return-to-game-1" | "button-2-2" | "button-3-3" | "reset-preferences-4" | "return-to-game-5" | "save-preferences-6";

export interface GameSettingsPulserailLiteProps {
  actions?: Partial<Record<GameSettingsPulserailLiteActionId, () => void>>;

}

export function GameSettingsPulserailLite({ actions }: GameSettingsPulserailLiteProps) {
  return (
    <>
      {/* Gameplay Background Simulation */}
      <div className="absolute inset-0 z-0 bg-center bg-cover blur-md scale-105" data-alt="A high-speed, futuristic cyberpunk highway at night. Blazing neon streaks of cyan and magenta blur past the viewer, simulating intense forward momentum. The asphalt is slick and dark, reflecting the synthetic glow of distant megacity structures. The mood is adrenaline-fueled, energetic, and heavily stylized with a dark, vaporwave aesthetic. Deep obsidian voids contrast with high-luminance kinetic energy lines." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWiegopzZSU1W89iXZ3zvNoH177XU7O407rtbiqDoJXmF9MFxfh_U1KzQCI7dKoupU5cxeknGQ47Uj8Hi6Ii6KSNOvBge36K1XM4aFWZdQDA1GIMzNAvzg7MtMDUXI_Xe74xd3g_O2Uk8QtHFlYSUYqaXbZFA-VHYWpj32cf9h7v5U_e3xkbIhkbhIBq2C8G2BVznxgP-WPeiiGP4iLIzCjE3g4freGqcBBaGNoQecHioq3KBq5ib-x-iesis6bStiYhISKxf-8uc')"}}>
      </div>
      {/* Main Overlay Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface/40 backdrop-blur-sm">
      {/* Settings Panel */}
      <main className="relative w-full max-w-2xl bg-surface-dim/80 backdrop-blur-xl border border-primary/30 shadow-[0_0_30px_rgba(0,219,231,0.1)] rounded p-6 md:p-8 flex flex-col gap-8 cyber-grid">
      <div className="glitch-overlay opacity-30"></div>
      {/* Header */}
      <header className="flex justify-between items-start relative z-20 border-b border-primary/20 pb-4">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary tracking-wider drop-shadow-[0_0_8px_rgba(0,219,231,0.5)]">SYSTEM_CONFIG</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">PULSERAIL LITE // OVERRIDE PROTOCOL</p>
      </div>
      <button aria-label="Return to Game" className="text-on-surface-variant hover:text-primary transition-colors duration-300" type="button" data-action-id="return-to-game-1" onClick={actions?.["return-to-game-1"]}>
      <X className="text-[32px]" aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Settings Content */}
      <div className="flex flex-col gap-8 relative z-20 overflow-y-auto pr-2 custom-scrollbar">
      {/* Difficulty */}
      <section className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
      <Gauge className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-secondary tracking-widest">KINETIC_VELOCITY</h2>
      </div>
      <div className="bg-surface/50 border border-outline-variant p-4 rounded neon-bloom-primary">
      <div className="flex justify-between font-label-caps text-label-caps text-on-surface mb-4">
      <span className="opacity-50">Slow</span>
      <span className="text-primary font-bold">Standard</span>
      <span className="text-secondary drop-shadow-[0_0_5px_rgba(255,36,228,0.8)]">Overdrive</span>
      </div>
      <div className="relative">
      <input className="w-full" max="3" min="1" type="range" defaultValue="2" />
      {/* Segment markers */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-1 pointer-events-none -translate-y-1/2">
      <div className="w-1 h-3 bg-primary/50"></div>
      <div className="w-1 h-3 bg-primary"></div>
      <div className="w-1 h-3 bg-secondary/80"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Audio */}
      <section className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
      <AudioWaveform className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary tracking-widest">AUDIO_TELEMETRY</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
      {/* Music Toggle */}
      <div className="bg-surface/50 border border-outline-variant p-3 flex justify-between items-center hover:border-primary/50 transition-colors cursor-pointer group">
      <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">Music</span>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-container/20 border border-primary" type="button" aria-label="Button 2" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-primary shadow-[0_0_10px_#00f2ff] transition"></span>
      </button>
      </div>
      {/* SFX Toggle */}
      <div className="bg-surface/50 border border-outline-variant p-3 flex justify-between items-center hover:border-primary/50 transition-colors cursor-pointer group">
      <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">SFX</span>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-container/20 border border-primary" type="button" aria-label="Button 3" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-primary shadow-[0_0_10px_#00f2ff] transition"></span>
      </button>
      </div>
      </div>
      </section>
      {/* Controls Help */}
      <section className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
      <Keyboard className="text-tertiary-container text-[20px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-tertiary-container tracking-widest">INPUT_MATRIX</h2>
      </div>
      <div className="bg-surface/30 border border-outline-variant p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-3">
      <div className="flex gap-1">
      <kbd className="bg-surface-container-high border border-outline-variant text-on-surface font-label-caps px-2 py-1 rounded min-w-[24px] text-center shadow-inner">A</kbd>
      <span className="text-on-surface-variant">/</span>
      <kbd className="bg-surface-container-high border border-outline-variant text-on-surface font-label-caps px-2 py-1 rounded min-w-[24px] text-center shadow-inner">D</kbd>
      </div>
      <span className="font-body-md text-on-surface-variant text-sm">Switch Rails</span>
      </div>
      <div className="flex items-center gap-3">
      <kbd className="bg-surface-container-high border border-primary/50 text-primary font-label-caps px-4 py-1 rounded shadow-[inset_0_0_8px_rgba(0,219,231,0.2)] text-center">SPACE</kbd>
      <span className="font-body-md text-on-surface-variant text-sm">Pulse Boost</span>
      </div>
      <div className="flex items-center gap-3">
      <kbd className="bg-surface-container-high border border-outline-variant text-on-surface font-label-caps px-2 py-1 rounded min-w-[24px] text-center shadow-inner">P</kbd>
      <span className="font-body-md text-on-surface-variant text-sm">Pause Protocol</span>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <footer className="relative z-20 flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-6 border-t border-primary/20 mt-4">
      <button className="font-label-caps text-label-caps text-error opacity-70 hover:opacity-100 hover:text-error-container transition-colors duration-300 flex items-center gap-2" type="button" data-action-id="reset-preferences-4" onClick={actions?.["reset-preferences-4"]}>
      <RotateCcw className="text-[16px]" aria-hidden={true} focusable="false" />
                          Reset Preferences
                      </button>
      <div className="flex gap-4 w-full md:w-auto">
      <button className="flex-1 md:flex-none border border-outline-variant bg-surface-container-low text-on-surface font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-container-high transition-colors text-center" type="button" data-action-id="return-to-game-5" onClick={actions?.["return-to-game-5"]}>
                              RETURN TO GAME
                          </button>
      <button className="flex-1 md:flex-none border border-primary bg-primary/10 text-primary font-label-caps text-label-caps py-3 px-6 rounded neon-bloom-primary hover:bg-primary hover:text-on-primary transition-colors duration-300 text-center font-bold" type="button" data-action-id="save-preferences-6" onClick={actions?.["save-preferences-6"]}>
                              SAVE PREFERENCES
                          </button>
      </div>
      </footer>
      </main>
      </div>
    </>
  );
}
