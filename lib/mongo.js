
// import mongoose from "mongoose";

// const connectDB = async () => {
//     try{

//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB")

//     }catch(error){
//         console.log('Error connecting to MongoDB:', error)
//     }
// };

// export default connectDB;


import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "zimrunner",
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
