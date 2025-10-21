import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"

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
            <Navbar />
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

