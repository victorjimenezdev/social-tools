# AGENTS.md
Guidelines for Codex agents contributing to **social‑tools**.
Keep commits minimal, self‑contained, and passing all quality gates.

## Dev commands
| Task          | Command                                     |
|---------------|---------------------------------------------|
| Install deps  | `pnpm install --frozen-lockfile`            |
| Start dev     | `pnpm --filter site dev`                    |
| Build         | `pnpm --filter site build`                  |
| Tests         | `pnpm test`                                 |
| Lint          | `pnpm lint`                                 |
| Type‑check    | `pnpm exec tsc --noEmit -p apps/site/tsconfig.json` |

## Environment
* Node 20 LTS
* pnpm 8 workspaces – main app in `apps/site`
* Vercel Edge runtime (for deployed serverless routes)

## Tools
| Tool | Route |
| --- | --- |
| Bio Caption Ideas | `/tool/bio-caption-ideas` |
| Challenge Spinner | `/tool/challenge-spinner` |
| Fancy Text | `/tool/fancy-text` |
| Grid & Panorama Splitter | `/tool/grid-splitter` |
| Instagram Profile Pic Viewer | `/tool/profile-pic-viewer` |
| Story Template Maker | `/tool/story-templates` |
| Username Checker | `/tool/username-checker` |

## Environment Variables
| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_AD_NETWORK` | `'adsense'` (default) or `'exoclick'` to choose the ad network. |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID. |
| `NEXT_PUBLIC_ADSENSE_SLOT` | AdSense slot for banner ads. |
| `NEXT_PUBLIC_EXOCLICK_PID` | ExoClick publisher ID. |
| `NEXT_PUBLIC_EXOCLICK_ZONE` | ExoClick zone for banner ads. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain for Plausible analytics. |
| `NEXT_PUBLIC_SENTRY_DSN` / `SENTRY_DSN` | Sentry DSN for client/server errors. |

### Ad network examples

**AdSense**

```
NEXT_PUBLIC_AD_NETWORK=adsense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_SLOT=1234567890
```

**ExoClick**

```
NEXT_PUBLIC_AD_NETWORK=exoclick
NEXT_PUBLIC_EXOCLICK_PID=123456
NEXT_PUBLIC_EXOCLICK_ZONE=987654
```

## Coding conventions
* ES2020+, React 18, TypeScript strict mode
* Tailwind CSS; WCAG 2.1 AA compliance (color palette, ARIA labels, keyboard traps)
* Prettier + ESLint (`next/core-web-vitals`) – **no warnings allowed**
* Test stack: Vitest + React Testing Library; axe-core accessibility checks in CI

## Continuous quality gates
When executing a task, agents MUST ensure **all** of these commands pass before opening/merging a PR:

pnpm lint
pnpm test
pnpm a11y
pnpm exec tsc --noEmit -p apps/site/tsconfig.json
pnpm analyze

If any command fails, **fix and rerun** until the project is green.

## Security & maintenance checklist

1. No plaintext secrets; use environment variables only.
2. Run `pnpm audit --prod`; resolve or document medium/high findings clearly.
3. Prefer native Web Crypto APIs over external libraries.
4. Validate and sanitize all external input (API routes, form data).
5. Keep dependencies up‑to‑date; minor version bumps allowed in the same PR if tests pass.

## PR / commit etiquette

* Follow Conventional Commits (`feat: add grid-splitter tool`).
* Scope each PR to one feature or fix.
* Update documentation (`README.md` / route README) with behavioral changes.
* Maintain ≥ 80% line coverage; add or update tests accordingly.
* Proactively resolve merge conflicts; escalate if unsure of context.

## Auto‑fix policy

> **If any quality gate fails**, the agent should:
>
> 1. Diagnose root cause.
> 2. Apply the minimal necessary fix (code or dependency).
> 3. Re‑run gates to confirm success.
> 4. Provide a concise explanation in commit messages.
>
> **If the solution requires extensive changes**, escalate clearly for human review.

## Quick reference

* Shared packages: `@ui`, `@lib`, `@ads` (see `/packages`)
* Public routes: `apps/site/src/app/tool/[slug]`
* API routes: `apps/site/src/app/api/*/route.ts`
* Global Ad & SEO helpers: `@ads/AdsProvider`, `@lib/seo`
