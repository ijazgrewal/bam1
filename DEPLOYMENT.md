# BAM Transport deployment

## Local development

```powershell
cd C:\Users\JSON\Documents\ChatGPT\bam1
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Set the build command to `npm run build` and use the standard Next.js runtime.
4. Add approved environment variables from `.env.example` in Vercel; never commit real webhook URLs or secrets.
5. Set `NEXT_PUBLIC_SITE_URL` to the approved production domain before deploying.
6. Add the MongoDB and optional notification values from `.env.example` in Vercel.
7. Deploy only after business owners approve contact details, legal terms, policies, vehicle imagery, testimonials and the enquiry backend.

The built-in enquiry planner currently confirms only that a request is ready for human review. It does not send data or create a booking until an approved backend is connected.
