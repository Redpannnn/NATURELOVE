import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, attending, guests, wishes } = body;

    if (!name || !attending) {
      return NextResponse.json(
        { error: "Nama dan konfirmasi kehadiran wajib diisi" },
        { status: 400 }
      );
    }

    const entry = await db.rsvpEntry.create({
      data: {
        name: String(name).trim(),
        attending: String(attending),
        guests: Number(guests) || 1,
        wishes: wishes ? String(wishes).trim() : null,
      },
    });

    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim RSVP" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await db.rsvpEntry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ data: entries });
  } catch (error) {
    console.error("RSVP fetch error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data RSVP" },
      { status: 500 }
    );
  }
}