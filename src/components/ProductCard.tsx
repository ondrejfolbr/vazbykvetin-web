import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  badge?: string | null;
  slug: string;
  category: string;
}

export function ProductCard({
  image,
  title,
  price,
  badge,
  slug,
  category,
}: ProductCardProps) {
  const href = `/${category}/${slug}`;
  const formattedPrice = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-200">
        {/* Product image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 flex items-end justify-center bg-neutral-black/0 transition-all duration-300 ease-in-out group-hover:bg-neutral-black/40">
          <span className="translate-y-full opacity-0 mb-4 inline-flex items-center justify-center h-11 px-6 bg-neutral-white text-deep-plum text-body-sm font-medium rounded-sm transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            Do košíku
          </span>
        </div>

        {/* Badge */}
        {badge && (
          <Badge className="absolute top-3 left-3 bg-deep-plum text-neutral-white text-caption font-medium px-2 py-1">
            {badge}
          </Badge>
        )}
      </div>

      <div className="mt-3">
        <h4 className="font-heading text-h4 leading-snug text-neutral-900">
          {title}
        </h4>
        <p className="mt-1 font-mono text-body font-semibold text-neutral-800">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
