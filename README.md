# Liquidity Square Desk

Staff screens for Liquidity Square. Verification, post removal, and account takedowns are enforced by the Square API. This app only calls it.

## Local

Run the Square API on port 5000, then:

```
npm install
npm run dev
```

Open http://localhost:3001 and sign in with a staff account.

## Production

The production build calls `https://thesquare.ng/api/server` and is served at `/desk`. Square rewrites `https://thesquare.ng/desk` to this deployment. On the Square backend, set `ADMIN_URL` to `https://liquidity-square-desk.vercel.app` as well if people open that host directly.
