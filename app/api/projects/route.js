import connectDB from "@/lib/mongo";
import Projects from "../../../models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  // {
  //   "prj_code": "csn001",
  //     "prj_name": "Cowdray Park House Construction",
  //     "prj_type": "Construction",
  //     "prj_class": "CSN",
  //     "prj_progress": 35,
  //     "prj_image": "image2.jpg"
  // }

  try {
    console.log("Processing projects POST request");
    const {  prj_code, prj_name, prj_class, prj_type, prj_progress , prj_image} = await request.json();

    if (!prj_code || !prj_name || !prj_class || !prj_type || !prj_progress || !prj_image) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDB();
    const projects = await Projects.create({ prj_code, prj_name, prj_class, prj_type, prj_progress , prj_image });
    return NextResponse.json({ message: "Projects Created", projects }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create projects" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const projects = await Projects.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to retrieve projects" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectDB();
    const result = await Projects.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json({ error: "projects not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Projects Deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete projects" }, { status: 500 });
  }
}
