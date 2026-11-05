# Vivid Performer Prototype

Sandbox for prototyping the Vivid Seats performer page. Front-end only — no backend, no real data.

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build → ./dist
```

## Notes

- Desktop-only, light mode only.
- A version switcher in the bottom-right toggles between three performer page layout templates:
  - **V1** — gradient hero with a 340px right sidebar, 1200px content width.
  - **V2** — white header with inline performer image and tabs, single 1024px column.
  - **V3** — short gradient header with inline performer image, single 1024px column.
  All three share the same content column, so the AI recommendation layer behaves identically in each.
- See `CLAUDE.md` and `src/guidelines/Guidelines.md` for design system and code conventions.
