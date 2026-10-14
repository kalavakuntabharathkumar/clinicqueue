# ClinicQueue — Appointment Booking Portal
Full-stack Next.js App Router demo with TypeScript, React, Tailwind CSS, Prisma persistence, appointment CRUD, search/filtering, and a responsive dashboard.

## Run
Requires Node.js 20+.
```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run dev
```
Open http://localhost:3000. Windows PowerShell: `Copy-Item .env.example .env`.

The default database is SQLite for quick local setup. For PostgreSQL, change `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma` and set `DATABASE_URL` in `.env` to your PostgreSQL connection string.

This is a portfolio demo with synthetic sample records, not a production medical system. Add authentication, authorization, audit logs, backups, and privacy controls before real use. Resume performance metrics should be independently measured.
