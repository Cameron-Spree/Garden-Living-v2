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

export async function POST(req: NextRequest) {
  const userId = getUserIdFromRequest(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { summitId, action } = await req.json();

    if (action === 'join') {
      let summit = await prisma.summit.findUnique({ where: { id: summitId } });
      if (!summit) {
         summit = await prisma.summit.create({
            data: { id: summitId, title: "Vertical Orchards: Urban Spaces Reimagined", description: "Masterclass", expertName: "Dr. Elena Vance", date: new Date() }
         });
      }

      await prisma.rSVP.upsert({
        where: { userId_summitId: { userId, summitId } },
        create: { userId, summitId },
        update: {} 
      });
      return NextResponse.json({ success: true, status: 'joined' });
    } else {
      await prisma.rSVP.delete({
        where: { userId_summitId: { userId, summitId } }
      }).catch(() => {});
      return NextResponse.json({ success: true, status: 'left' });
    }
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
