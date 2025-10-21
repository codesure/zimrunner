// import connectDB from "@/lib/mongo";
// import { NextResponse } from "next/server";
// import User from "@/models/userModel";
// import bcrypt from "bcrypt";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { username, email, password } = await req.json();
//     console.log({ username, email, password });
//     const exists = await User.findOne({ $or: [{ email }, { username }] });
//     if (exists) {
//       return NextResponse.json(
//         { message: "Username or email already exists" },
//         { status: 500 }
//       );
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ username, email, password: hashedPassword });
//     return NextResponse.json({ message: "User Registered" }, { status: 201 });
//   } catch (error) {
//     console.log("Error while registering user", error);
//     return NextResponse.json(
//       { message: "Error Occured While Registering" },
//       { status: 500 }
//     );
//   }
// }


import connectDB from "@/lib/mongo";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    console.log("✅ Post request succesfull call");
    // Ensure DB is connected
    await connectDB();

    // Parse incoming JSON
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const exists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (exists) {
      return NextResponse.json(
        { message: "Username or email already exists" },
        { status: 409 } // conflict instead of 500
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    console.log("✅ Busy creating user ...");
    await User.create({
      username,
      email,
      password: hashedPassword,
    });
    
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while registering user:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
