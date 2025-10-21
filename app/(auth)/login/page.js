"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    console.log("We are getting here, submitting credentials");
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Please provide all credentials");
    }

    try {
      setPending(true);
      console.log(
        "We are getting here, about to  call SignIn function to invoke backend with details ",
        info
      );
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });
     

      console.log("Response- ", res);
      if (res.error) {
        setError("Invalid Credentials");
        setPending(false);
        return;
      }
      console.log(
        "We are getting here, SignIn function after submitting credentials"
      );
      router.replace("/");
    } catch (error) {
      setPending(false);
      setError("Something went wrong", error);
    }
  }

  return (
    <div className="w-full p-5">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6 px-5"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email and password to sign in.
          </p>
        </div>
        <div className="space-y-4">
          <div className=" space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => handleInput(e)}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => handleInput(e)}
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full"
            />
          </div>
          <div className="p-1 m-2 text-center w-full">
            <span className="text-sm ">
              Dont have an account? Register{" "}
              <span className="font-bold underline text-blue-300">
                <Link href="/register">here</Link>
              </span>
            </span>
          </div>
          <div className="flex justify-end gap-2">
            {/* <Link href="/"><Button  variant="outline">Cancel</Button></Link> */}
            <Link href="/" variant="outline">
              Cancel
            </Link>
            <Button disabled={pending ? true : false} type="submit">
              {pending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
