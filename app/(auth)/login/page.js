"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Read callbackUrl from the query string (or default to "/")
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Please provide all credentials");
      return;
    }

    try {
      setPending(true);

      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
        callbackUrl,
      });

      if (res?.error) {
        setError("Invalid credentials");
        setPending(false);
        return;
      }

      // ✅ Redirect to the intended page instead of "/"
      if (res?.url) {
        router.replace(res.url);
      } else {
        router.replace(callbackUrl);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong");
      setPending(false);
    }
  }

  return (
    <div className="w-full p-5">
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6 px-5">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email and password to sign in.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={handleInput}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="p-1 m-2 text-center w-full">
            <span className="text-sm">
              Don’t have an account?{" "}
              <span className="font-bold underline text-blue-300">
                <Link href="/register">Register here</Link>
              </span>
            </span>
          </div>

          <div className="flex justify-end gap-2">
            <Link href="/">Cancel</Link>
            <Button disabled={pending} type="submit">
              {pending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
