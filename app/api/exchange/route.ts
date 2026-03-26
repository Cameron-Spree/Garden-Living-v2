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
    const items = await prisma.exchangeItem.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true } } }
    });
    return NextResponse.json(items);
  } catch (e) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { title, description, location, type } = await req.json();

    const newItem = await prisma.exchangeItem.create({
      data: { title, description, location, type, userId }
    });

    const populated = await prisma.exchangeItem.findUnique({
      where: { id: newItem.id },
      include: { user: { select: { name: true } } }
    });

    return NextResponse.json(populated);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
