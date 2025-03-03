import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for categories
const categories = [
  { id: 1, name: "Electronics", image: "/placeholder.svg?height=200&width=200", slug: "electronics" },
  { id: 2, name: "Clothing", image: "/placeholder.svg?height=200&width=200", slug: "clothing" },
  { id: 3, name: "Home & Kitchen", image: "/placeholder.svg?height=200&width=200", slug: "home-kitchen" },
  { id: 4, name: "Beauty", image: "/placeholder.svg?height=200&width=200", slug: "beauty" },
]

export function CategoryList() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h3 className="text-white font-medium text-lg">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

