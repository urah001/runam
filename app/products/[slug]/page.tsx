"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

// Mock data for products - in a real app, this would come from a database
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "electronics",
    featured: true,
    new: true,
    slug: "wireless-headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life. Perfect for music lovers and professionals alike.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Foldable design",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "electronics",
    featured: true,
    new: true,
    slug: "smart-watch",
    description:
      "A versatile smartwatch that tracks your fitness, displays notifications, and more. Stay connected and healthy with this stylish wearable.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "Customizable watch faces",
      "7-day battery life",
    ],
  },
  // More products would be here in a real app
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const product = allProducts.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, the product youre looking for doesnt exist.</p>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
    })
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-lg overflow-hidden border">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>

            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={increaseQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="secondary" className="flex-1">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

