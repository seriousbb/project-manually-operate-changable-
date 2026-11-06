<<<<<<< HEAD
# Full-stack starter

A simple full-stack template using React, Vite, and Express.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Setup

Install dependencies in the root, frontend, and backend:

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

Copy `backend/.env.example` to `backend/.env` and adjust values if needed.

## Run locally

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health endpoint: http://localhost:3000/api/health

The Vite development server proxies `/api` requests to the backend.

## Production

```bash
npm run build
npm start
```

The frontend build is written to `frontend/dist`. The Express server currently
serves only the API; deploy the built frontend separately or add static serving
when you choose a production hosting setup.

## Project layout

```text
frontend/     React UI and Vite configuration
backend/      Express API and server configuration
```
=======
# project-manually-operate-changable-
>>>>>>> 1a2f1c22db430cd0283112554934046a7de24bfe
