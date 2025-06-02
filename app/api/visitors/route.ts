import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Visitor from '@/app/models/Visitor';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI || '');
};

export async function GET() {
  try {
    await connectDB();
    let visitor = await Visitor.findOne();
    
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      visitor.lastUpdated = new Date();
      await visitor.save();
    }
    
    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
} 