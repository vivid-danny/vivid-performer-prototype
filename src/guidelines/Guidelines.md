# Event Decision — Guidelines

## Vision

Explore how agentic AI can help fans on the Vivid Seats performer page make better ticket-buying decisions. Instead of scrolling through dozens of tour dates, users ask a natural-language question and see events intelligently re-ranked with contextual reasoning.

This is a design prototype — no backend or real AI model. All "intelligence" is simulated with deterministic ranking functions in `src/data/events.ts`.

## Feature Roadmap

### Decision Chips (current)
Clickable questions in the right sidebar ("Which show is the best value?", "Which is selling fastest?", etc.) that re-rank the event list and highlight the top 3 results with Best Match badges and recommendation reasons.

### Event Comparison (future)
Side-by-side comparison of 2–3 events with trade-off explanations (e.g. "Show A is $40 cheaper but Show B has better seats available").

### Rich Event Context (future)
AI-generated summaries per event combining venue info, weather forecasts, nearby dining, and travel tips.

## Code Conventions

### File Organization
- **Components** live in `src/components/` — one component per file, named exports
- **Data and logic** live in `src/data/` — pure functions, no React imports
- **Assets** (images, SVG paths) live in `src/assets/` and `src/imports/`
- **Entry point** is `src/main.tsx` → `src/App.tsx`

### Component Patterns
- Functional components only, with hooks for state
- Props interfaces defined in the same file as the component
- Tailwind utility classes inline — no CSS modules, no styled-components
- Font references use `font-['GT_Walsheim:Weight',sans-serif]` syntax from the Figma export

### Data / Logic Separation
- `events.ts` exports the data array, ranking functions, and recommendation reason generators
- Components import from `src/data/` and never contain sorting/ranking logic
- New features should follow this pattern: data in `src/data/`, UI in `src/components/`, integration in `App.tsx`

### Reference Pattern
Follow `DecisionChips` as the template for new features:
1. Component in `src/components/DecisionChips.tsx` (UI + interaction)
2. Logic in `src/data/events.ts` (`rankEvents`, `getRecommendationReason`)
3. State and wiring in `App.tsx` (`selectedChip`, `handleChipSelect`, loading simulation)

## Design System

### Color Palette
| Token        | Hex       | Usage                              |
|------------- |---------- |----------------------------------- |
| Navy         | `#04092c` | Primary text, navbar, headers      |
| Pink         | `#ce3197` | CTAs, active states, Best Match    |
| Deep Pink    | `#8f1564` | Badge text (limited)               |
| Teal         | `#086e88` | Icons, badge text (deals)          |
| Aqua         | `#13bdc3` | Accents, shield icon               |
| Gray text    | `#717488` | Secondary text, descriptions       |
| Gray subtle  | `#474b5e` | Tertiary text (dates, locations)   |
| Gray muted   | `#a0a2b3` | Dots, separators                   |
| Gray border  | `#d3d3dc` | Borders, dividers                  |
| Gray bg      | `#efeff6` | Card borders, section dividers     |
| Light bg     | `#f6f6fb` | Search bar background              |
| Pink bg      | `#fef9fd` | Recommended card background        |
| Pink light   | `#fbe5f3` | Limited badges background          |
| Pink reason  | `#fef2f9` | Recommendation reason background   |
| Teal light   | `#dafafb` | Deals badges background            |

### Typography
- **Font family**: GT Walsheim (weights: Regular, Medium, Bold, Black)
- **Fallback**: `sans-serif`
- Sizes follow the Figma export: 12px, 14px, 16px, 18px, 20px, 24px, 32px

### Styling Approach
- Tailwind utility classes applied directly in JSX
- No `tailwind.config.js` — all values are hardcoded in classes (colors, spacing, fonts)
- Responsive behavior is not yet implemented (desktop-only prototype at 1440px+)
