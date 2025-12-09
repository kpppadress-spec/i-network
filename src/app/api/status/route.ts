import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

// Static data storage (in-memory for demo purposes)
// In a real app, you might want to use a file or external service
let statusChecks: Array<{
  id: string;
  client_name: string;
  timestamp: Date;
}> = [];

export async function GET() {
  try {
    // Return all status checks
    return NextResponse.json(statusChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch status checks', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { client_name } = body;

    if (!client_name) {
      return NextResponse.json(
        { error: 'client_name is required' },
        { status: 400 }
      );
    }

    const statusCheck = {
      id: randomUUID(),
      client_name,
      timestamp: new Date(),
    };

    // Add to static storage
    statusChecks.push(statusCheck);

    // Keep only last 1000 entries to prevent memory issues
    if (statusChecks.length > 1000) {
      statusChecks = statusChecks.slice(-1000);
    }

    return NextResponse.json(statusCheck, { status: 201 });
  } catch (error) {
    console.error('Error creating status check:', error);
    return NextResponse.json(
      { error: 'Failed to create status check', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
