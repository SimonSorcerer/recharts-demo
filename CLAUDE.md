# recharts-test

A small demo web application showcasing the capabilities of the [Recharts](https://recharts.org) charting library.

## Project goal

Demonstrate a range of Recharts chart types and features in a single, browsable TypeScript web app. The app is purely a visual showcase — no backend, no auth, no persistence.

## Tech stack

- **Framework**: React (Vite)
- **Language**: TypeScript (strict)
- **Charts**: Recharts
- **Styling**: plain CSS or CSS modules — no UI framework unless added later

## Project structure

```
src/
  charts/        # One file per chart demo
  App.tsx         # Navigation / layout shell
  main.tsx
```

## Development

```bash
npm install
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

- Each chart lives in its own file under `src/charts/`, named after the chart type (e.g. `BarChartDemo.tsx`).
- Use realistic-looking but fully static/hardcoded data — no API calls.
- TypeScript strict mode is on; no `any` unless unavoidable.
- No comments explaining what Recharts components do — the code should be self-evident.
