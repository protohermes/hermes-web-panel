# Hermes Web Panel

A Next.js chat interface for Hermes AI employees.

## Features
- Select employee role (Executive Assistant, DevOps Engineer, etc.)
- Chat via OpenAI-compatible API server running in Docker containers
- Environment variable configuration for API URLs
- Built with TypeScript, Tailwind CSS

## Setup
1. Deploy to Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_API_BASE_EXEC_ASSISTANT`
   - `NEXT_PUBLIC_API_BASE_DEVOPSENGINEER`
3. Ensure Hermes API servers are running and accessible at those URLs.

## Development
```bash
npm install
npm run dev
```# Test
