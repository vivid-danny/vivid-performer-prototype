# Event Decision Prototype

An interactive prototype exploring agentic AI concepts on the Vivid Seats performer page. Users can ask natural-language questions about tour dates (e.g. "Which show is the best value?") and see events re-ranked with contextual recommendations.

## Current Features

- **Decision Chips** — clickable questions in the right sidebar that re-rank the event list based on criteria like best value, cheapest, biggest crowd, selling fastest, best weekend, and easiest weeknight
- **Loading state** — brief spinner animation while "thinking"
- **Best Match badges** — top 3 results get highlighted with a recommendation reason
- **Performer page shell** — navbar, header, tabs, filters, event cards, and right sidebar faithfully mirroring the Vivid Seats production layout

## Running

```bash
npm install
npm run dev     # starts at http://localhost:3000
npm run build   # production build → ./build
```

## Tech Stack

- **React 18** with TypeScript
- **Vite** (SWC) for dev/build
- **Tailwind CSS** via utility classes (no config file — classes are inlined from the Figma export)
- **Motion** (Framer Motion) for animations
- **Lucide React** for icons
- **GT Walsheim** font family (Vivid Seats brand typeface)

## Project Structure

```
src/
  App.tsx                  # Main page layout and state
  main.tsx                 # Entry point
  index.css                # Global styles and font-face declarations
  components/
    DecisionChips.tsx       # AI decision chip selector
    ProductionCard.tsx      # Event listing card
  data/
    events.ts              # Event data, ranking logic, recommendation reasons
  imports/
    svg-fksusjrh5n.ts      # SVG path data from Figma export
  assets/                  # Images (Unsplash, see Attributions.md)
  guidelines/
    Guidelines.md           # Design & code conventions
```
