import { NextRequest, NextResponse } from "next/server";

const posts = ["Post #1", "Post #2"];

export async function POST(req: NextRequest) {
  const body = await req.json();
  posts.push(body.post);
  return new NextResponse();
}

export async function GET() {
  return NextResponse.json({ posts });
}

export async function DELETE() {
  posts.splice(2, posts.length - 1);
  return new NextResponse();
}
