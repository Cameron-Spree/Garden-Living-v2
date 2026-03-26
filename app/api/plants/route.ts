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
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const plants = await prisma.plant.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(plants);
  } catch (e) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { name, species, notes, lastWatered } = body;

    if (!name || !species) {
      return NextResponse.json({ error: "Name and species are required" }, { status: 400 });
    }

    const newPlant = await prisma.plant.create({
      data: {
        name,
        species,
        notes,
        lastWatered: lastWatered ? new Date(lastWatered) : null,
        userId,
      },
    });

    return NextResponse.json(newPlant);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
