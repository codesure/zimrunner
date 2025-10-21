"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Register() {
  const [info, setInfo] = useState({ username: "", email: "", password: "" ,});
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.username || !info.email || !info.password) {
      setError("Please provide all credentials");
    }
    try {
      setPending(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (res.ok) {
        setPending(false);
        // const form = e.target;
        e.target.reset();
        router.replace("/login");
        console.log("User Registered");
      } else {
        const errorData = await res.json();
        setError(errorData?.message || "Registration failed");
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong" + error);
    }
  }
  console.log({ info });
  return (
    <div className="w-full p-5">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6 px-5"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-muted-foreground">
            Create your account to get started.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              onChange={(e) => handleInput(e)}
              name="username"
              placeholder="Enter your username"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
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
              Already have an account? Login{" "}
              <span className="font-bold underline text-blue-300">
                <Link href="/login">here</Link>
              </span>
            </span>
          </div>
          {error && <span className="message">{error}</span>}
          <div className="flex justify-end gap-2">
          <Button variant="outline" asChild>
        <Link href="/">Cancel</Link>
            </Button>
            <Button disabled={pending ? true : false} type="submit">
              {pending ? "Registering..." : "Register"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
