import Image from "next/image"

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-10 px-6">
        <h1 className="text-3xl font-bold text-black mb-6">About ZimRunner</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-black mb-4">
              ZimRunner is a pioneering platform that bridges the gap between Zimbabweans in the diaspora and their
              homeland investments. We understand the challenges of managing projects from afar, and we're here to make
              that process seamless and transparent.
            </p>
            <p className="text-black mb-4">
              Our mission is to facilitate economic growth in Zimbabwe by enabling efficient management of
              diaspora-funded projects. Whether it's constructing a family home, acquiring assets, or supporting local
              businesses, ZimRunner provides the tools and oversight needed for success.
            </p>
            <p className="text-black">
              With a team of dedicated professionals on the ground in Zimbabwe, we ensure that your projects are
              executed to the highest standards, providing you with regular updates, financial transparency, and peace
              of mind.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=500&text=ZimRunner+Team"
              alt="ZimRunner Team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-black mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-black">
            <li>Transparency in all our operations</li>
            <li>Commitment to excellence in project execution</li>
            <li>Fostering economic growth in Zimbabwe</li>
            <li>Bridging the gap between diaspora and homeland</li>
            <li>Leveraging technology for efficient project management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

