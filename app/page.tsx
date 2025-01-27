import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-5 bg-black text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">ZimRunner</h1>
          <div>
            <Link href="/login">
              <Button variant="ghost" className="mr-2 text-white hover:text-yellow-400">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Register</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-10 px-4">
        <div className="relative w-full h-[300px] mb-10">
          <Image
            src="/placeholder.svg?height=300&width=1200&text=Zimbabwe+Landscape"
            alt="Zimbabwe Landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">Manage Your Zimbabwe Projects from Anywhere</h2>
          </div>
        </div>
        <section className="text-center">
          <p className="text-xl text-black mb-8">
            Track progress, monitor expenses, and stay connected with your investments in Zimbabwe.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get Started
            </Button>
          </Link>
        </section>
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">Building Projects</h3>
            <p className="text-black">
              Monitor construction progress, view photos, and track expenses for your building projects in Zimbabwe.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Asset Acquisition</h3>
            <p className="text-white">
              Keep track of asset purchases, from property to vehicles, with detailed documentation and expense reports.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Bill Payments & Purchases</h3>
            <p className="text-white">
              Easily manage bill payments and purchases for your Zimbabwe-based needs, with full transparency and
              receipt tracking.
            </p>
          </div>
        </section>
      </main>
      <footer className="mt-20 bg-black text-white py-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 ZimRunner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

