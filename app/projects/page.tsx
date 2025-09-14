import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    { id: 1, name: "House Construction", type: "Building", progress: 60 },
    { id: 2, name: "Car Purchase", type: "Asset Acquisition", progress: 100 },
    { id: 3, name: "School Fees Payment", type: "Bill Payment", progress: 100 },
    { id: 4, name: "Farm Equipment", type: "Asset Acquisition", progress: 75 },
    { id: 5, name: "Solar Panel Installation", type: "Building", progress: 40 },
    { id: 6, name: "Business Startup Funding", type: "Investment", progress: 20 },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto mt-10 px-6">
        <h1 className="text-3xl font-bold text-black mb-6">Your Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="border-2 border-black">
              <CardHeader className="bg-yellow-400">
                <CardTitle className="text-black">{project.name}</CardTitle>
                <CardDescription className="text-black">{project.type}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4">
                  <div className="text-sm font-medium text-black mb-1">Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <Link href={`/project/${project.id}`}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

