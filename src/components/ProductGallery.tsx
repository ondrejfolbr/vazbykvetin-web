"use client";

import { useState } from "react";

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
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`shrink-0 w-20 h-20 rounded-sm overflow-hidden bg-neutral-200 cursor-pointer transition-all duration-150 ${
              activeIndex === i
                ? "ring-2 ring-deep-plum ring-offset-2"
                : "hover:ring-1 hover:ring-neutral-400"
            }`}
          >
            <img
              src={productImage}
              alt={`${productName} — náhled ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
