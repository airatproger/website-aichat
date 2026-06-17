# airatiik AI Chat — Design System

A design system for **airatiik**, a Chrome-extension AI chat assistant. The
extension opens as a slim browser **side panel** (~451px wide) and lets users
talk to multiple AI models (ChatGPT, Gemini, Claude, Grok, DeepSeek) by text or
voice, attach pages/files/images, and manage chat history — all inside a light,
minimal, glassmorphic interface.

> **Vibe in one line:** calm warm-white glass, generous breathing room, one
> confident blue accent, soft frosted chrome that floats over the page content.

---

## Sources

- **Figma:** *“airatiik - AI чат Redesign.fig”* — page `/Design` (136 frames):
  chat states, model picker, settings, history, modals, toasts, hints, voice,
  drag-and-drop, the **UI-Kit**, **Icons**, and **Fonts** specimen frames.
  Components live under `/Design/components/` (the `iconixto/linear/*` icon set,
  `Buttons icn round`, `Input text`, `Model row menu`, `Toast`, `Toggle`, etc.).
- No codebase or live URL was provided — this system is reconstructed from the
  Figma file. UI copy in the source is a mix of English and Russian; English is
  treated as canonical here.

---

## Index / manifest

| Path | What |
|---|---|
| `styles.css` | Global entry point — link this one file. `@import`s all tokens + fonts. |
| `tokens/colors.css` | Palette + semantic color aliases. |
| `tokens/typography.css` | Inter scale (H1–Small) + weights. |
| `tokens/spacing.css` | 4px spacing grid + radii. |
| `tokens/effects.css` | Glass, shadows, blur, protection gradients, motion. |
| `tokens/fonts.css` | Inter `@import` (Google Fonts). |
| `components/core/` | Reusable React primitives (see below) + baked icon data. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors / Type / Spacing / Brand). |
| `ui_kits/extension/` | Click-through recreation of the side-panel chat. |
| `assets/icons/` | The 38-glyph `iconixto` linear SVG set (currentColor). |
| `SKILL.md` | Agent-Skill manifest for download/Claude Code use. |

**Components** (`components/core/`): `Icon`, `Button`, `IconButton`, `Pill`,
`Composer`, `ChatBubble`, `Toggle`, `Chip`, `Card`, `Toast`, `Hint`, `Badge`,
`MenuRow`, `ModelRow`, `RateStars`.

**UI kits**: `ui_kits/extension/` — the airatiik side-panel chat (empty state,
live conversation, model picker, settings, history).

---

## CONTENT FUNDAMENTALS

How airatiik writes.

- **Voice:** plain, friendly, low-ceremony. It speaks like a capable assistant,
  not a brand mascot. Sentences are short and direct.
- **Person:** addresses the user as **“you”**; the assistant refers to itself
  implicitly (“How can I help you?”), never “I, airatiik…”. First-person “I”
  appears only as the assistant voice in the empty state.
- **Casing:** **Sentence case** everywhere — buttons, menu items, settings
  labels, titles. Not Title Case. (“New chat”, “Delete chats history”,
  “Account settings”, “Auto-hide top bar”.)
- **Buttons / actions:** verb-first and concrete — “Send”, “Save chat”,
  “Delete”, “Create image”. Destructive actions say exactly what they delete.
- **Empty / helper text:** warm and useful. Hero line is a question
  (“How can I help you?”); helper lines give a concrete tip
  (“Open this sidebar: Ctrl+Shift+Y”, “Attach photo or file”).
- **System notices:** factual, specific, no exclamation spam. Toast example:
  “Your subscription is active for user@gmail.com until June 19, 2026.”
- **Disclaimers:** quiet, footnote-sized, centered under the composer
  (“Gemini can make mistakes. Check important info.”).
- **Numbers / limits:** stated plainly (“Messages to AI remaining · 99”).
- **Emoji:** **not used** in the product UI. Don’t introduce them.
- **Punctuation:** minimal. No trailing periods on labels/buttons; periods only
  in full sentences and disclaimers.

---

## VISUAL FOUNDATIONS

The look and feel.

### Color
- **One accent, used sparingly.** Primary **`#2573E9`** (a clean, slightly cool
  blue) powers toggles, selected checks, send, and primary CTAs. A distinct
  **indigo `#4C55FD`** is reserved for the **voice/mic** affordance — it’s the
  only place that hue appears, which makes voice feel special.
- **Warm-neutral ground.** Surfaces are pure white `#FFFFFF` and a warm
  off-white **paper `#F8F8F6`**. The warmth (not a cold grey) is core to the
  brand — keep it.
- **Ink, not pure black for everything.** Primary text is near-black
  `#0A0A0A`; secondary `#484848`; tertiary is 48%-opacity ink. Icons default to
  `#363538`.
- **Hairlines over heavy borders.** Strokes are `#D2D2D1` (default) and
  `#EDEDED` (dividers), almost always drawn as an **inset ring**, never a 2px
  border.
- **Semantic hues:** danger `#E92528`, success/teal `#3DC6B6`,
  warning `#FE9900`, generative-purple `#7C3AED`. Used only for status.

### Type
- **Inter** throughout (Regular 400, Medium 500, Semibold 600). Roboto appears in
  the source as a fallback only — standardize on Inter.
- Compact, sidebar-first scale: **H1 24/36, H2 20/30, H3 18/26, H4 16/24**
  (all Semibold); **Button 16/24 Medium**; **Body 16/24 Regular**;
  **Footnote 14/20**; **Small 12/16**. Body text never goes below 14px in chat.
- Headings carry a faint negative tracking (-0.01em); body is neutral.

### Spacing & layout
- **4px base grid.** Common steps: 8 / 12 / 16 / 24.
- The panel is a **fixed-width vertical column**. Header and composer are
  **pinned** (sticky top/bottom); the conversation scrolls behind them.
- Chrome floats *over* content — the header and composer are translucent glass,
  so text scrolls visibly beneath them rather than hitting a hard bar.
- Generous vertical air around the empty state; content is centered.

### Backgrounds
- **Flat warm white** — no photographic backgrounds, no busy patterns, no
  full-bleed imagery, no decorative gradients on the canvas. The only gradients
  are the **protection fades** (see below).

### Corners & cards
- Radii cascade: **frame/input 32**, large sheet 24, button/panel 16,
  small input/row 12, chip/tag 8, and **pill 100** for chrome capsules and round
  icon buttons.
- A **card** = surface fill + **inset hairline ring** + a soft ambient shadow
  (`0 4px 24px rgba(0,0,0,.08)`). Frosted cards add `backdrop-filter: blur(16px)`.

### Transparency & blur (the glassmorphism)
- The signature surface: **`rgba(248,248,246,0.64)` + `backdrop-filter:
  blur(16px)` + inset 1px `#D2D2D1` ring + `0 0 16px rgba(0,0,0,.08)`**.
- Used for: the header pill cluster, the model selector, the composer bar, and
  floating toasts/hints. Reserve blur for chrome that overlaps scrolling content
  — don’t frost flat panels that sit on white.

### Protection gradients
- Instead of a solid bar, the top header and bottom composer zones fade content
  out with a **white→transparent gradient** (`--fade-top` / `--fade-bottom`,
  `rgba(255,255,255,0.48)→0`) plus a light blur, so scrolled text dissolves
  gracefully under the floating chrome.

### Shadows
- Three ambient tiers, all low-opacity black, no spread, soft:
  `--shadow-glass` `0 0 16/.08` (floating chrome),
  `--shadow-card` `0 4 24/.08` (modals/popovers),
  `--shadow-pop` `0 8 32/.12` (menus over content). Pair every one with the ring.

### Motion
- Quiet and quick. Fades and gentle slides; **ease-out**
  `cubic-bezier(.22,1,.36,1)` at 120–320ms. The mic/voice state may pulse a
  waveform, but content never bounces or springs aggressively.

### Hover / press states
- **Hover:** ghost controls fill with **paper `#F8F8F6`**; pills lighten;
  links/checks don’t change hue.
- **Press:** subtle **scale-down** — buttons to `0.97`, round icon buttons to
  `0.92`. No color inversion.
- **Selected:** accent check (model rows), accent fill (toggle), accent
  tint + ring (instrument chips).
- **Disabled:** 40% opacity, no shadow.

---

## ICONOGRAPHY

- **One set: `iconixto / linear`.** A single coherent outline family —
  rounded joins, even ~1.5px-feel weight, 24×24 box with the glyph optically
  inset. A few **solid** variants exist for filled states (`help`, `close-circle`,
  `pin`, `stop`).
- **Format:** monochrome **SVG** using `fill="currentColor"`, so an icon takes
  the CSS `color` of its context. All 38 are copied into `assets/icons/` and
  also **baked into `components/core/icons-data.js`** so the `<Icon>` component is
  fully self-contained (no path resolution, no flash).
- **Default color** `#363538`; accent/voice icons go white on their fill.
- **Usage:** render via the `Icon` component — `<Icon name="send-alt" />`. Names
  match the file stems: `ai`, `send-alt`, `microphone-alt`, `history`,
  `settings`, `message-add-alt`, `export`, `search`, `trash-alt`, `image-ai`,
  `light-bulb`, `flash`, `star` / `star-filled`, `tick`, `arrow-small-down`,
  `add`, `close`, `copy`, `sync`, `attachment`, `link-alt`, `document`,
  `desktop`, `video`, `music-note`, `pin`, `dots-v`, `download`, `edit-alt`,
  `help`, `close-circle`, `stop`, … (see the *Iconography* card for the full grid).
- **No emoji, no unicode-glyph icons.** Stay within the iconixto set; if a needed
  glyph is missing, draw it in the same linear style rather than mixing families.

---

## Using this system

1. Link the global CSS: `<link rel="stylesheet" href="styles.css">`.
2. Load the compiled bundle and pull components off the namespace
   (`window.AiratiikAIChatDesignSystem_b8300c`) — see any `*.card.html` for the pattern.
3. Build with the tokens (`var(--accent)`, `var(--surface-glass)`,
   `var(--radius-frame)`, …) — don’t hard-code hexes.
4. For full-screen recreations, start from `ui_kits/extension/`.
