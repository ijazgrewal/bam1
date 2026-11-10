# BAM Transport website

This is a Next.js 16 App Router application.

## Run locally

Requirements: Node.js 22.13 or later.

```powershell
cd C:\Users\JSON\Documents\ChatGPT\bam1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If port 3000 is already in use, choose another port:

```powershell
npm run dev -- --port 3001
```

Then open [http://localhost:3001](http://localhost:3001).

## Checks

```powershell
npm run typecheck
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` only when connecting the optional enquiry backend. Do not commit `.env.local` or production credentials.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel deployment notes.
