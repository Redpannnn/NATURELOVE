import { NextRequest, NextResponse } from "next/server";

interface RsvpEntry {
  id: string;
  name: string;
  attending: string;
  guests: number;
  wishes: string | null;
  createdAt: string;
}

const rsvpStore = new Map<string, RsvpEntry>();

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

    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    const entry: RsvpEntry = {
      id,
      name: String(name).trim(),
      attending: String(attending),
      guests: Number(guests) || 1,
      wishes: wishes ? String(wishes).trim() : null,
      createdAt: new Date().toISOString(),
    };

    rsvpStore.set(id, entry);

    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengirim RSVP" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = Array.from(rsvpStore.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json({ data: entries });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data RSVP" },
      { status: 500 }
    );
  }
}
