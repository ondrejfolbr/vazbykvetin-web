"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  productName: string;
  productImage: string;
  thumbnailCount?: number;
}

export function ProductGallery({
  productName,
  productImage,
  thumbnailCount = 4,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnails = Array.from({ length: thumbnailCount }, (_, i) => i);

  return (
    <div>
      {/* Main image */}
      <div className="aspect-square rounded-sm overflow-hidden bg-neutral-200">
        <img
          src={productImage}
          alt={`${productName} — foto ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-3 overflow-x-auto">
        {thumbnails.map((i) => (
          <Button
            key={i}
            variant="ghost"
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "shrink-0 w-20 h-20 rounded-sm overflow-hidden bg-neutral-200 cursor-pointer transition-all duration-150 p-0",
              activeIndex === i
                ? "ring-2 ring-deep-plum ring-offset-2"
                : "hover:ring-1 hover:ring-neutral-400"
            )}
          >
            <img
              src={productImage}
              alt={`${productName} — náhled ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
