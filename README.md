Test Assignment for JetBrains Internship 2026 (React Router Migration: JetBrains.com)

# Kotlin Website - React Router 7 SSR Migration

## Overview

This project is a migration of the Kotlin homepage (from the provided legacy repository) to React Router 7 Framework Mode with Server-Side Rendering (SSR).

The application preserves the original visual appearance and interactive behavior, while modernizing the architecture using:

- React 19
- React Router 7 (Framework Mode)
- TypeScript
- Vite
- SSR with proper hydration

## Implementation Notes

- Migrated to React Router 7 Framework Mode (with route configuration at `app/routes.ts`)
- Implemented full SSR with hydration
- Ensured all browser-only APIs (e.g., localStorage) are handled safely using effects to avoid hydration mismatches.
- Preserved @rescui components
- Configured Vite SSR to properly bundle @rescui packages
- Used TypeScript for improved maintainability and type safety

## Project Structure

- app/
  - routes/ - File-based routes (homepage in \_index.tsx)
  - components/ - UI components
  - styles/ - Global styles
  - hooks/ - Custom React hooks

- public/ - Static files (favicon, etc.)

## Development

Install dependencies:

`npm install`

Start development server:

`npm run dev`

The app will be available at:
http://localhost:3000

## Production

Build the app:

`npm run build`

Start the production server:

`npm run start`

## Running with Docker

Build the image:

`docker build -t kotlin-website .`

Run the container:

`docker run -p 3000:3000 kotlin-website`

## SSR Verification

To verify server-side rendering:

1. Run the production build
2. Disable JavaScript in the browser
3. Reload the page

The full homepage should render correctly without client-side JavaScript.
