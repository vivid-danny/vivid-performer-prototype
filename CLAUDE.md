# Event Decision — Claude Code Context

## Project Overview

An interactive prototype exploring agentic AI on the Vivid Seats performer page. Fans ask natural-language questions about tour dates and see events intelligently re-ranked with contextual reasoning. Used for both internal stakeholder evaluation and UX research / user testing.

**This is a design prototype — no backend or real AI.** All "intelligence" is deterministic ranking logic in `src/data/events.ts`.

## Tech Stack

- React 18 + TypeScript
- Vite (SWC)
- Tailwind CSS v4 (utility classes inline, no config file)
- Motion (Framer Motion) for animations
- Lucide React for icons
- GT Walsheim font (Vivid Seats brand typeface)

## Key Files

- `src/App.tsx` — page state, chip interaction logic, and the shared content column
- `src/components/layouts/LayoutV{1,2,3}.tsx` — the three layout shells; each wraps the shared content column passed as children
- `src/components/VersionSwitcher.tsx` — floating V1/V2/V3 switcher and the `LayoutVersion` union
- `src/components/PerformerHeader.tsx` (V1) / `PerformerHeaderV2.tsx` / `PerformerHeaderV3.tsx` — per-layout page headers
- `src/components/DecisionChips.tsx` — AI chip selector (level 0 + level 1 follow-ups, streaming view)
- `src/components/ProductionCard.tsx` — event listing card with Best Match badge
- `src/data/events.ts` — event data, ranking functions, recommendation reason generators
- `src/data/decisionTree.ts` — follow-up chip definitions and streaming response copy
- `src/guidelines/Guidelines.md` — design system reference (colors, typography, code conventions)

## Design System

### Color Palette
| Token       | Hex       | Usage                              |
|-------------|-----------|----------------------------------- |
| Navy        | `#04092c` | Primary text, navbar, headers      |
| Pink        | `#ce3197` | CTAs, active states, Best Match    |
| Deep Pink   | `#8f1564` | Badge text (limited)               |
| Teal        | `#086e88` | Icons, follow-up chip active state |
| Aqua        | `#13bdc3` | Accents, shield icon               |
| Gray text   | `#717488` | Secondary text, descriptions       |
| Gray subtle | `#474b5e` | Tertiary text (dates, locations)   |
| Gray muted  | `#a0a2b3` | Dots, separators                   |
| Gray border | `#d3d3dc` | Borders, dividers                  |
| Gray bg     | `#efeff6` | Card borders, section dividers     |
| Light bg    | `#f6f6fb` | Search bar background              |
| Pink bg     | `#fef9fd` | Recommended card background        |
| Pink light  | `#fbe5f3` | Limited badges background          |
| Pink reason | `#fef2f9` | Recommendation reason background   |
| Teal light  | `#dafafb` | Deals badges background            |

### Typography
- **Font**: GT Walsheim (Regular, Medium, Bold, Black) — fallback `sans-serif`
- **Sizes**: 12, 14, 16, 18, 20, 24, 32px (from Figma)
- **Font references**: `font-['GT_Walsheim:Bold',sans-serif]` (Figma export syntax)

### Constraints
- Desktop-only prototype (1440px+), no responsive behavior
- Light mode only
- No accessibility requirements for this prototype stage

---

## Design Context

### Users
This prototype serves two overlapping audiences:
1. **Internal stakeholders** (PMs, designers, execs) evaluating whether to build the AI feature into production — needs to feel polished and convincing
2. **UX research participants** (real fans in usability sessions) validating whether the concept is understandable and useful

Both audiences need to immediately grasp what the AI layer does and feel confident using it.

### Brand Personality
Vivid Seats is a live events marketplace — the brand should feel like a trusted, knowledgeable friend who loves concerts and wants to help you get to the right show.

**3-word personality**: Warm, confident, helpful

**Emotional goal**: Users should feel guided and reassured, not overwhelmed. The AI should reduce anxiety about choosing from dozens of tour dates — it should feel like getting a great recommendation from someone who already did the research for you.

### Aesthetic Direction
- **Visual tone**: Clean and consumer-grade, anchored to the Vivid Seats brand palette. The AI elements should feel native to the VS design language, not bolted on.
- **AI interaction style**: Warm and helpful — friendly assistant energy, encouraging, never cold or robotic. Streaming text and loading states should feel alive and thoughtful, not mechanical.
- **References**: No strong external reference — Vivid Seats should define its own AI interaction patterns that feel distinctly VS.
- **Anti-references**: Avoid generic chatbot UI (chat bubbles, AI avatar icons), overly technical "model thinking" aesthetics, or anything that feels separate from the performer page shell.
- **Theme**: Light mode only. Pink (`#ce3197`) as the primary AI signal color — it anchors all active states, badges, and streaming indicators.

### Motion Style
- **Energy level**: Polished consumer — smooth and satisfying, like a well-made iOS app. Animations should be noticeable and feel crafted, but always purposeful.
- **AI interactions** are the exception where slightly more expressive moments are welcome (e.g. shimmer effects, streaming indicators, card re-ranking stagger).
- **Defaults**: Prefer `easeInOut` or spring-based easing. Duration sweet spot is 200–400ms for UI transitions, 600–900ms for more elaborate sequences. Avoid linear or bouncy easing.
- **Never**: Add motion just to fill space. Every animated element should help the user understand a state change or feel more confident.

### AI Voice & Microcopy
- **Tone**: Warm and conversational — friendly, slightly informal, never corporate or robotic.
- **Style**: First-person framing ("Based on what you told me…"), avoiding stiff phrasing. The AI should sound like a knowledgeable friend, not a help center article.
- **Chip labels**: Short, fan-friendly questions ("Which show is the best value?", "What's closest to me?") — not feature descriptions.
- **Recommendation reasons**: 1–2 sentences max. Plain language. Lead with the benefit, follow with the signal ("Best prices on this tour · Seats still available").
- **Streaming copy**: Should feel like the AI is thinking out loud, not reciting a template.

### Design Principles

1. **AI feels native, not foreign** — The recommendation layer should blend seamlessly into the VS performer page. Chips, badges, and streaming text use brand colors and GT Walsheim type, never generic AI chrome.

2. **Confidence without overwhelm** — Show clear, decisive recommendations (Best Match badges, ranked results) but pair them with brief, plain-language reasoning so users understand *why*, not just *what*.

3. **Motion as feedback, not decoration** — Animations (loading spinner, card stagger, chip transitions) communicate state changes and give the AI layer a sense of "thinking." Never add motion just to be flashy.

4. **The fan's job first** — Every design decision should serve the fan's core job: picking a show to go to. Recommendations, copy, and IA should reduce cognitive load, not add to it.

5. **Prototype fidelity matters** — This is a stakeholder and research artifact. Visual polish, faithful layout matching the VS production page, and believable interaction patterns are as important as correctness.

### Code Patterns (Design-Relevant)
- **Icons**: Use Lucide React for all icons. Avoid custom inline SVGs or Figma-exported icon boilerplate — Lucide's consistent stroke style fits the VS aesthetic and keeps code clean.
- **Figma export cleanup**: When touching Figma-exported components, collapse unnecessary wrapper chains (e.g. `Container6 → MaskedIcon → ActionChips`) into flat, semantically named components.
- **Animation library**: Motion (Framer Motion) for all animated elements. Use `motion.div` with `animate`/`transition` props — not CSS keyframes.
