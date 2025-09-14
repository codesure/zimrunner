import connectDB from "@/lib/mongo";
import Attendees from "@/models/attendees";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Processing POST request");
    const { name, registration, brand, color , statusi} = await request.json();

    if (!name || !registration || !brand || !color) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDB();
    const attendee = await Attendees.create({ name, registration, brand, color, statusi });
    return NextResponse.json({ message: "Attendee Created", attendee }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create attendee" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const attendees = await Attendees.find();
    return NextResponse.json({ attendees }, { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to retrieve attendees" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectDB();
    const result = await Attendees.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json({ error: "Attendee not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Attendee Deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete attendee" }, { status: 500 });
  }
}
