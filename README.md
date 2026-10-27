# Cartlane

An original, Amazon-inspired e-commerce storefront built as a portfolio project.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19

**Database-free:** products, users, orders, reviews and coupons are local mock data (`src/store/seed.ts`). Changes are saved in your browser's localStorage. No PostgreSQL, Prisma, Docker, Better Auth or `.env` needed.

**Features:** browsing, search and filters, product pages with variants, cart, wishlist, coupons, simulated checkout, order history, reviews, account settings, and a demo admin area (products, categories, coupons, orders, reviews).

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Step-by-step Windows + VS Code instructions: [HOW_TO_RUN.md](HOW_TO_RUN.md).

Requires Node.js 20.19+ (22 LTS recommended).

## Demo accounts and coupons

- `user@cartlane.test` (customer) and `admin@cartlane.test` (admin) – passwordless demo sign-in.
- Coupons: `WELCOME10`, `SAVE5` (min $30), `BIGSPENDER` (min $100).
- Account → Settings → Reset demo data restores the seed.

## Demo-only limits

- Sign-in and the admin gate are client-side and **not secure**. Only a session user id is stored; no passwords.
- Checkout takes **no payment**.
- Data is per browser and per device.

## Scripts

`dev`, `build`, `start`, `lint`, `typecheck`, `format`, `format:check`, `images:generate`.

## Verification (Linux, headless Chromium)

lint, typecheck and production build pass; a crawl of 150 internal pages found no broken links or console errors; a 29-step browser flow (login, browse, search, cart, wishlist, checkout, orders, admin) passed against the production server. Not tested on Windows.

See [RECONSTRUCTION.md](RECONSTRUCTION.md) for project history.
