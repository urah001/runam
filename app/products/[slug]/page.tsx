"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/ui/cart-provider";
import Image from "next/image";
import { allProducts } from "@/app/data/product"; // ✅ Import products

export default function ProductSlug() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">
          Sorry, the product youre looking for doesnt exist.
        </p>
        <Button asChild>
          <Link href={`/products/${product}`}>Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/categories/Home">
            <ChevronLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">
            ₦{product.price.toFixed(2)}
            </p>
            <p>{product.description}</p>
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
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => addItem({ ...product, quantity })}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
