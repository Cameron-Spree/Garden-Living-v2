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

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    const messages = await prisma.groupMessage.findMany({
      where: { groupId: context.params.id },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { name: true } } }
    });
    return NextResponse.json(messages);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, context: { params: { id: string } }) {
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { content } = await req.json();

    const newMsg = await prisma.groupMessage.create({
      data: { content, groupId: context.params.id, userId }
    });

    const populated = await prisma.groupMessage.findUnique({
      where: { id: newMsg.id },
      include: { user: { select: { name: true } } }
    });

    return NextResponse.json(populated);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
