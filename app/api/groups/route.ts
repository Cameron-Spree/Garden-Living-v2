import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const groups = await prisma.group.findMany();
    // Default seed if empty
    if (groups.length === 0) {
      await prisma.group.createMany({
        data: [
          { name: "Urban Balcony Farmers", description: "Tips and tricks for high-rise harvests.", thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?w=500&auto=format&fit=crop" },
          { name: "Orchid Aficionados", description: "All things Phalaenopsis, Dendrobium, and more.", thumbnail: "https://images.unsplash.com/photo-1566804564817-4fd71ef99464?w=500&auto=format&fit=crop" },
          { name: "Bonsai Beginners", description: "The art of miniature trees for starters.", thumbnail: "https://images.unsplash.com/photo-1613143542284-75ebca1fe6f1?w=500&auto=format&fit=crop" },
          { name: "Desert Scapes", description: "Cacti, succulents, and xeriscaping.", thumbnail: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&auto=format&fit=crop" },
        ]
      });
      return NextResponse.json(await prisma.group.findMany());
    }
    return NextResponse.json(groups);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
