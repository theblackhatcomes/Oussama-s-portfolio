import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(dataFilePath))) {
  fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
}

// Initialize projects.json if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

export async function GET() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    const projects = JSON.parse(data);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    
    // Read current data
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    const projects = JSON.parse(data);
    
    // Find or create project
    let project = projects.find((p: any) => p.title === title);
    if (!project) {
      project = { title, stars: 0 };
      projects.push(project);
    }
    
    // Increment stars
    project.stars += 1;
    
    // Save updated data
    fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error updating project stars:', error);
    return NextResponse.json({ error: 'Failed to update project stars' }, { status: 500 });
  }
} 