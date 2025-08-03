# Social Tools

[![CI](https://github.com/your-org/social-tools/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/social-tools/actions/workflows/ci.yml)

## Development
| Task | Command |
| --- | --- |
| Install deps | `pnpm install --frozen-lockfile` |
| Start dev | `pnpm --filter site dev` |
| Build | `pnpm --filter site build` |
| Tests | `pnpm test` |
| Lint | `pnpm lint` |
| Type-check | `pnpm exec tsc --noEmit -p apps/site/tsconfig.json` |

## Environment Variables
| Name | Description |
| --- | --- |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID used by the AdsProvider. |
| `NEXT_PUBLIC_ADSENSE_SLOT` | AdSense slot for banner ads. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain name for Plausible analytics. |
| `NEXT_PUBLIC_SENTRY_DSN` / `SENTRY_DSN` | Sentry DSN for client/server error tracking. |

## Content

Sample bio caption categories are stored as MDX in `content/bio` and parsed at build time.

## Data

Sample challenges for the Challenge Spinner tool are stored in `data/challenges.json`.

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
