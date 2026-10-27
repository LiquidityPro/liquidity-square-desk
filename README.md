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

The production build calls `https://thesquare.ng/api/server`. On the Square backend, set `ADMIN_URL` to this site's public origin so the browser is allowed to call the API.
