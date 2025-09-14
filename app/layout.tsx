import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"],
  display: "swap",
 })

export const metadata = {
  title: "ZimRunner - Manage Your Zimbabwe Projects",
  description: "Track and manage your projects in Zimbabwe from anywhere in the world.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-black text-white shadow-md">
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
                <Link href="/login">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Register</Button>
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-black text-white py-10 mt-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 ZimRunner. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

