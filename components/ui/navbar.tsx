"use client"
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link'
import { Button } from './button'

function Navbar() {
    const { data: session } = useSession();
    
  return (
    <div>
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-yellow-400">
                ZimRunner
              </Link>
              <div className="space-x-4">
                <Link href="/">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    Home
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    Projects
                  </Button>
                </Link>
                <Link href="/featured">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    Featured
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    About Us
                  </Button>
                </Link>
                {session ? (
          <div className="flex items-center gap-3">
            {/* Face icon with initials */}
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
              {/* {getInitials(session.user.username!)} */}
            </div>

            {/* Display username */}
            <span className="text-white">{session.user?.email}</span>

            {/* Logout */}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-yellow-400">
              Login
            </Button>
          </Link>
        )}
              </div>
            </nav>
    </div>
  )
}

export default Navbar
