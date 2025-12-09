import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { randomUUID } from 'crypto';

export async function GET() {
  try {
    const db = await getDb();
    const statusChecks = await db
      .collection('status_checks')
      .find({}, { projection: { _id: 0 } })
      .limit(1000)
      .toArray();

    // Convert ISO string timestamps back to Date objects
    const formattedChecks = statusChecks.map((check: any) => ({
      ...check,
      timestamp: check.timestamp instanceof Date 
        ? check.timestamp 
        : new Date(check.timestamp),
    }));

    return NextResponse.json(formattedChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch status checks' },
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

    const db = await getDb();
    
    // Convert timestamp to ISO string for MongoDB storage
    const doc = {
      ...statusCheck,
      timestamp: statusCheck.timestamp.toISOString(),
    };

    await db.collection('status_checks').insertOne(doc);

    return NextResponse.json(statusCheck, { status: 201 });
  } catch (error) {
    console.error('Error creating status check:', error);
    return NextResponse.json(
      { error: 'Failed to create status check' },
      { status: 500 }
    );
  }
}

