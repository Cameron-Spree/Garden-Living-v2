import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_local_dev";

function getUserIdFromRequest(req: NextRequest): string | null {
  const token = req.cookies.get("auth_token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return decoded.userId;
  } catch (e) {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.clinicPost.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true, hardinessZone: true } } }
    });
    return NextResponse.json(posts);
  } catch (e) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { title, description } = await req.json();
    if (!title || !description) return NextResponse.json({ error: "Fields required" }, { status: 400 });

    const newPost = await prisma.clinicPost.create({
      data: { title, description, userId }
    });

    const populated = await prisma.clinicPost.findUnique({
      where: { id: newPost.id },
      include: { user: { select: { name: true, hardinessZone: true } } }
    });

    return NextResponse.json(populated);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
