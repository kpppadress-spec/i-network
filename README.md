# i-network - Full Stack Next.js Application

A modern full-stack Next.js application for office space and coworking solutions, built with TypeScript, MongoDB, and Tailwind CSS.

## Features

- **Full Stack Next.js**: Server-side rendering and API routes
- **TypeScript**: Type-safe codebase
- **Static Data**: In-memory data storage for API endpoints
- **Modern UI**: Built with Radix UI and Tailwind CSS
- **Responsive Design**: Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Data Storage**: In-memory static data
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
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

3. Run the development server
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

No environment variables required! The application uses static in-memory data storage.

**Note**: API data is stored in-memory and will reset on server restart. For production use, consider implementing a proper database or external storage service.

## License

Private - All rights reserved
