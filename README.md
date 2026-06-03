# Code Executor

A browser-based code editor built with React, Vite, Monaco Editor, and Chakra UI.

## Prerequisites

This project uses a self-hosted [Piston](https://github.com/engineer-man/piston) instance for code execution. Docker Desktop is required.

### 1. Start the Piston container

```bash
docker run --privileged -v piston:/piston --tmpfs /piston/jobs -dit -p 2000:2000 --name piston ghcr.io/engineer-man/piston
```

### 2. Install language runtimes

```bash
curl -s http://localhost:2000/api/v2/packages -X POST -H "Content-Type: application/json" -d '{"language":"python","version":"3.10.0"}'
curl -s http://localhost:2000/api/v2/packages -X POST -H "Content-Type: application/json" -d '{"language":"c++","version":"10.2.0"}'
curl -s http://localhost:2000/api/v2/packages -X POST -H "Content-Type: application/json" -d '{"language":"php","version":"8.2.3"}'
curl -s http://localhost:2000/api/v2/packages -X POST -H "Content-Type: application/json" -d '{"language":"java","version":"15.0.2"}'
```

On Windows (PowerShell):

```powershell
Invoke-RestMethod -Uri "http://localhost:2000/api/v2/packages" -Method POST -ContentType "application/json" -Body '{"language":"python","version":"3.10.0"}'
Invoke-RestMethod -Uri "http://localhost:2000/api/v2/packages" -Method POST -ContentType "application/json" -Body '{"language":"c++","version":"10.2.0"}'
Invoke-RestMethod -Uri "http://localhost:2000/api/v2/packages" -Method POST -ContentType "application/json" -Body '{"language":"php","version":"8.2.3"}'
Invoke-RestMethod -Uri "http://localhost:2000/api/v2/packages" -Method POST -ContentType "application/json" -Body '{"language":"java","version":"15.0.2"}'
```

> The Piston container must be running before starting the dev server. To restart it after a reboot: `docker start piston`

## Getting Started

After cloning the repo, install dependencies before starting the dev server:

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
