import connectDB from "@/lib/mongo";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcrypt"


export async function POST(req){
    try {
        await connectDB();
        const {username, email, password} = await req.json();
       // console.log({username, email, password});
        const exists = await User.findOne({$or: [{email},{username}]});
        if(exists){
            return (
                NextResponse.json({message: "Username or email already exists"},
            {status:500})
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, email, password:hashedPassword});
        return  NextResponse.json({message: "User Registered"},
        {status:201})
    } catch (error) {
        console.log("Error while registering user", error);
        return  NextResponse.json({message: "Error Occured While Registering"},
            {status:500})
    }
}