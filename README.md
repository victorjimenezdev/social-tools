# Social Tools

[![CI](https://github.com/your-org/social-tools/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/social-tools/actions/workflows/ci.yml)

Icons are provided by [Font Awesome](https://fontawesome.com/).

## Development
| Task | Command |
| --- | --- |
| Install deps | `pnpm install --frozen-lockfile` |
| Start dev | `pnpm --filter site dev` |
| Build | `pnpm --filter site build` |
| Tests | `pnpm test` |
| Lint | `pnpm lint` |
| Type-check | `pnpm exec tsc --noEmit -p apps/site/tsconfig.json` |

### Lando

This repo includes a [Lando](https://docs.lando.dev/) recipe for a Node 20 + pnpm
development environment.

1. Install Docker and Lando.
2. Run `lando start` to provision the containers.
3. Install dependencies with `lando pnpm install --frozen-lockfile`.
4. Start the dev server with `lando dev`.

## Environment Variables
| Name | Description |
| --- | --- |
| `NEXT_PUBLIC_AD_NETWORK` | `'adsense'` (default) or `'exoclick'` to choose the ad network. |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID used by the AdsProvider. |
| `NEXT_PUBLIC_ADSENSE_SLOT` | AdSense slot for banner ads. |
| `NEXT_PUBLIC_EXOCLICK_PID` | ExoClick publisher ID. |
| `NEXT_PUBLIC_EXOCLICK_ZONE` | ExoClick zone for banner ads. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain name for Plausible analytics. |
| `NEXT_PUBLIC_SENTRY_DSN` / `SENTRY_DSN` | Sentry DSN for client/server error tracking. |

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

## Tailwind CSS Guidelines (Tailwind v4)

- **Always use Tailwind CSS v4** utilities, syntax, and recommended patterns.
- Do **not** use deprecated utilities or outdated patterns from previous versions.
- Prioritize logical properties (`ms-`, `me-`, `ps-`, `pe-`, `block-start-`) over directional properties.
- Follow updated color naming conventions (`neutral` instead of deprecated `gray`, etc.).
- Utilize latest Tailwind typography utilities (`text-balance`).
- Favor CSS Grid/Flexbox layouts recommended by Tailwind v4 documentation.
- Minimize arbitrary-value utilities usage.
- Ensure accessibility: use built-in `focus-visible` utilities and WCAG-compliant colors.

## Design Tokens

| Token | Value |
| --- | --- |
| `primary` | `#A8184A` |
| `surface` | `#D3D3D3` |
| `accent` | `#6554FF` |
| `font-sans` | `DM Sans, system-ui, sans-serif` |
| `container` | centered, `1rem` padding, `1280px` max width |

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
