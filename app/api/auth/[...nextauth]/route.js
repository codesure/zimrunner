import connectDB from "@/lib/mongo";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import bcrypt from 'bcrypt'

async function login(credentials){
  try {
    console.log("We are getting here, Auth Route Api")
    connectDB();
    console.log("We are getting here, After database connection")
    const user = await User.findOne({email: credentials.email});
    console.log("We are getting here, getting user infor from  MogoDB -", user)
    if (!user) throw new Error("Wrong Credentials");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Wrong credentials");
    return user;

  } catch (error) {
    console.log("Error while logging in, " , error);
    throw new Error("Something went wrong");
    
  }
}

export const authOptions = {
  pages:{
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials:{},
      async authorize(credentials){

        try { 
          // await connectDB();
          const user = await login(credentials);
          console.log({credentials})
          console.log("This is the user ", user)
          return user;

        } catch (error) {
         throw new Error("Failed to login")
          }
        }
        })
    
      ],
      callbacks:{
        async jwt({token, user}){
          if (user){
            token.username = user.username
            token.email = user.email;
            token.id = user.id
          }
          console.log("This is the token - ", token )
          return token;
        },
        async session({session, token}){
          if (token) {
            session.user.username = token.username
            session.user.email = token.email
            session.user.id = token.id
          }
          console.log("This is the seesion - ", session )
          return session;
        }
      }
    }

    const handler = NextAuth(authOptions);

    export {handler as GET, handler as POST}
