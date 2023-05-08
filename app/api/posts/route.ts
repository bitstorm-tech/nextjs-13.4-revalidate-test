import { NextRequest, NextResponse } from "next/server";

const posts = ["Ncie", "Test"];

export async function POST(req: NextRequest) {
  const body = await req.json();
  posts.push(body.post);
  return NextResponse.json({});
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ posts });
}
