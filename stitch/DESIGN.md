---
name: Neon Kinetic
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#e4ffd6'
  on-tertiary: '#053900'
  tertiary-container: '#34fc0d'
  on-tertiary-container: '#106f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style
The design system is engineered for high-velocity engagement, capturing the adrenaline of a cyberpunk arcade environment. It targets a competitive, tech-savvy audience that values speed, precision, and visual immersion. 

The aesthetic is a fusion of **Vaporwave** and **Modern Cyberpunk**, characterized by deep obsidian voids punctuated by high-luminance kinetic energy. The UI should evoke a sense of being "inside the machine," utilizing "glitch" textures, scanlines, and digital "noise" to create a living, breathing interface. Every interaction must feel like a power surge, utilizing light as the primary signifier of state and importance.

## Colors
This design system operates exclusively in a dark mode environment to maximize the contrast of neon luminance. 

- **Primary (Electric Cyan):** Reserved for the "Pulse" – active rails, player progress, and primary actions. It represents flow and energy.
- **Secondary (Magenta):** Used for "Overload" states, critical warnings, and high-intensity zones.
- **Tertiary (Lime Green):** Reserved strictly for success states, completed objectives, and "safe" zones.
- **Neutral/Background:** A layered approach using Deep Obsidian for the base canvas and Dark Navy for structural UI panels to provide depth without breaking the immersion of the dark environment.

## Typography
The typography strategy creates a contrast between high-impact display faces and technical data readouts. 

- **Headlines:** Utilize **Sora** for its aggressive, geometric structure. Large titles should use tight letter-spacing to feel compact and powerful.
- **Data & Body:** Utilize **JetBrains Mono** to reinforce the "hacker" and "system readout" narrative. Monospaced characters ensure that rapidly changing scores and timers do not cause layout jitter.
- **Styling:** Use uppercase for all labels and button text to maintain a high-energy, authoritative tone.

## Layout & Spacing
The layout follows a strict **4px baseline grid** to ensure mathematical precision across all UI elements. 

- **Grid:** Use a 12-column fluid grid for desktop and a 4-column grid for mobile.
- **Margins:** Screens should maintain generous outer margins to simulate a "HUD" (Heads-Up Display) feel, where the UI elements are pinned to the corners of the viewport.
- **Composition:** Avoid centered, document-style layouts. Instead, favor asymmetrical compositions and corner-anchored data clusters.

## Elevation & Depth
Depth in this design system is achieved through **luminance and translucency** rather than traditional shadows.

- **Glassmorphism:** All UI panels (surfaces) must use a backdrop-blur (12px to 20px) with a semi-transparent Dark Navy fill (60-80% opacity). 
- **Inner Glows:** Instead of drop shadows, use thin 1px inner borders with 30% opacity of the Primary color to simulate light refracting off the edges of glass panels.
- **Neon Bloom:** Interactive elements should emit a "bloom" effect (outer glow) using the Primary or Secondary color, with a blur radius ranging from 10px to 30px depending on the element's energy level.

## Shapes
The design system utilizes a **Sharp (0px)** roundedness philosophy to maintain a high-tech, aggressive industrial aesthetic. 

- **Clipping:** Use 45-degree "clipped corners" on large panels and buttons to reinforce the futuristic military-grade hardware theme.
- **Borders:** Every interactive element must have a visible 1px or 2px solid border. Use high-contrast colors (Electric Cyan) for these borders to ensure they "cut" through the dark background.

## Components
- **Buttons:** Sharp corners only. Default state has a 1px Primary border; Hover state triggers a full Primary color fill with a strong Neon Bloom effect and black text.
- **Progress Bars:** Segmented design (e.g., 10-20 small blocks instead of a solid line) to mimic vintage digital readouts. Active segments should pulse.
- **HUD Chips:** Small, rectangular labels with the `label-caps` typography. These should look like serial numbers or system status tags.
- **Input Fields:** Bottom-border only, with a subtle scanline pattern inside the focus area. 
- **Cards:** Transparent glass panels with a subtle grid pattern overlay (20% opacity) to provide texture to the surface.
- **Pulse Rails:** Long horizontal or vertical lines that act as dividers, featuring a "comet" animation (a bright point of light traveling along the line) to indicate the system is "live."