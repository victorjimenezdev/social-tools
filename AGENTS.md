# AGENTS.md

## Dev commands
- Install deps  `pnpm install --frozen-lockfile`
- Start dev     `pnpm --filter site dev`
- Build         `pnpm --filter site build`
- Tests         `pnpm test`
- Lint          `pnpm lint`

## Environment
- Node 20 LTS
- Uses pnpm workspaces; main app lives in `apps/site`

## Coding conventions
- ES2020+, Tailwind, accessibility (WCAG AA, ARIA labels)
