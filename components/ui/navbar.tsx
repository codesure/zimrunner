
import Link from 'next/link'
import { Button } from './button'

function Navbar() {
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
    </div>
  )
}

export default Navbar
