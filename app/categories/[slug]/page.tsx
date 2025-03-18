"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "electronics",
    slug: "wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    features: ["Active Noise Cancellation", "40-hour battery life"],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "electronics",
    slug: "smart-watch",
    description: "A smartwatch that tracks your fitness & notifications.",
    features: ["Heart rate monitoring", "GPS tracking"],
  },
];

export default function CategorySlug() {
  const { slug } = useParams(); // ✅ Get the category slug from URL

  // Filter products based on category slug
  const categoryProducts = allProducts.filter((p) => p.category === slug);

  if (categoryProducts.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">Sorry, no products found in this category.</p>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products">
            <ChevronLeft className="h-4 w-4" />
            Back to All Products
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-6 capitalize">{slug} Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} className="block border rounded-lg overflow-hidden">
              <div className="relative w-full h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}