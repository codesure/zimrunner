import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
//  import { register } from "module"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-10 px-4">
        <div className="relative w-full h-[300px] mb-10">
          <Image
            src="/zimrunnerhome.png?height=300&width=1200&text=Zimbabwe+Landscape"
            alt="Zimbabwe Landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">Manage Your Zimbabwe Projects from Anywhere</h1>
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
            <h2 className="text-xl font-semibold text-black mb-4">Building Projects</h2>
            <p className="text-black">
              Monitor construction progress, view photos, and track expenses for your building projects in Zimbabwe.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">Asset Acquisition</h2>
            <p className="text-white">
              Keep track of asset purchases, from property to vehicles, with detailed documentation and expense reports.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Bill Payments & Purchases</h2>
            <p className="text-white">
              Easily manage bill payments and purchases for your Zimbabwe-based needs, with full transparency and
              receipt tracking.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

