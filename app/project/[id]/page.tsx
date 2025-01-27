import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectDetails({ params }: { params: { id: string } }) {
  // This would typically fetch data from an API based on the project ID
  const project = {
    id: params.id,
    name: "House Construction",
    type: "Building",
    progress: 60,
    timeline: [
      { date: "2023-01-15", event: "Project Started" },
      { date: "2023-02-28", event: "Foundation Completed" },
      { date: "2023-04-10", event: "Walls Erected" },
      { date: "2023-05-20", event: "Roofing Completed" },
    ],
    expenses: [
      { date: "2023-01-10", description: "Initial Materials", amount: 5000 },
      { date: "2023-02-15", description: "Labor Costs", amount: 3000 },
      { date: "2023-03-20", description: "Additional Materials", amount: 4000 },
      { date: "2023-04-25", description: "Electrical Work", amount: 2000 },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black shadow-md">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-400">Project Details: {project.name}</h1>
        </div>
      </header>
      <main className="container mx-auto mt-10 px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-black">
            <CardHeader className="bg-yellow-400">
              <CardTitle className="text-black">Project Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mt-4">
                {project.timeline.map((event, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-red-600 rounded-full h-2 w-2 mr-2"></div>
                    <span className="text-sm text-gray-500 w-24">{event.date}</span>
                    <span className="text-black">{event.event}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-black">
            <CardHeader className="bg-yellow-400">
              <CardTitle className="text-black">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mt-4">
                {project.expenses.map((expense, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-black">{expense.description}</p>
                      <p className="text-sm text-gray-500">{expense.date}</p>
                    </div>
                    <span className="font-medium text-black">${expense.amount}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6 border-2 border-black">
          <CardHeader className="bg-yellow-400">
            <CardTitle className="text-black">Project Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Project photo ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

