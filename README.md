# i-network - Full Stack Next.js Application

A modern full-stack Next.js application for office space and coworking solutions, built with TypeScript, MongoDB, and Tailwind CSS.

## Features

- **Full Stack Next.js**: Server-side rendering and API routes
- **TypeScript**: Type-safe codebase
- **MongoDB**: Database integration for status checks and data storage
- **Modern UI**: Built with Radix UI and Tailwind CSS
- **Responsive Design**: Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd i-network
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your MongoDB connection string:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=i-network
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
i-network/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── contact/      # Contact page
│   │   ├── locations/     # Locations pages
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── ui/            # UI components (shadcn/ui)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SolutionCard.tsx
│   ├── lib/               # Utilities
│   │   ├── mongodb.ts     # MongoDB connection
│   │   └── utils.ts       # Helper functions
│   ├── data/              # Mock data
│   ├── hooks/             # Custom React hooks
│   └── types/              # TypeScript types
├── public/                 # Static assets
└── package.json
```

## API Routes

- `GET /api` - Hello World endpoint
- `GET /api/status` - Get all status checks
- `POST /api/status` - Create a new status check

## Pages

- `/` - Home page
- `/office-space` - Office space solutions
- `/coworking` - Coworking solutions
- `/virtual-offices` - Virtual office solutions
- `/meeting-rooms` - Meeting room solutions
- `/membership` - Membership options
- `/locations` - All locations
- `/locations/[city]` - City-specific location page
- `/contact` - Contact form
- `/about` - About us
- `/hybrid-working` - Hybrid working information
- `/careers` - Careers page
- `/blog` - Blog page
- `/help` - Help center
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy
- `/cookies` - Cookie Policy
- `/sitemap` - Sitemap

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Environment Variables

- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name
- `CORS_ORIGINS` - Comma-separated list of allowed CORS origins

## License

Private - All rights reserved
