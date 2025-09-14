import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Featured() {
  const featuredProjects = [
    {
      id: 1,
      name: "Harare Business Center",
      type: "Commercial Building",
      image: "/placeholder.svg?height=200&width=300&text=Harare+Business+Center",
    },
    {
      id: 2,
      name: "Victoria Falls Resort",
      type: "Hospitality",
      image: "/placeholder.svg?height=200&width=300&text=Victoria+Falls+Resort",
    },
    {
      id: 3,
      name: "Bulawayo Solar Farm",
      type: "Renewable Energy",
      image: "/placeholder.svg?height=200&width=300&text=Bulawayo+Solar+Farm",
    },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto mt-10 px-6">
        <h1 className="text-3xl font-bold text-black mb-6">Featured Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="border-2 border-black">
              <CardHeader className="bg-yellow-400">
                <CardTitle className="text-black">{project.name}</CardTitle>
                <CardDescription className="text-black">{project.type}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

