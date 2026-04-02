"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "./Button";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  badge: string | null;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  initialCount?: number;
  step?: number;
}

export function ProductGrid({ products, initialCount = 3, step = 3 }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            badge={product.badge}
            slug={product.slug}
            category={product.category}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setVisibleCount((prev) => prev + step)}
          >
            Načíst další
          </Button>
        </div>
      )}
    </>
  );
}
