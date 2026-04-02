import Link from "next/link";

interface CategoryCardProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

export function CategoryCard({
  image,
  title,
  subtitle,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-sm" style={{ aspectRatio: "3/4" }}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(transparent 40%, rgba(9,7,8,0.7))",
        }}
      />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
        <h3 className="font-heading text-h3 leading-snug text-neutral-white font-medium">
          {title}
        </h3>
        <p className="mt-1 text-body-sm text-neutral-200 font-body">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
