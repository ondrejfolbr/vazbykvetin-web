import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { FilterBar } from "@/components/FilterBar";
import { getProductsByCategory, categoryMeta } from "@/lib/products";

const validCategories = ["smutecni", "svatebni", "kytice"];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const meta = categoryMeta[category];
  const categoryProducts = getProductsByCategory(category);

  return (
    <>
      <NavBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <main className="px-[var(--spacing-section-x)] py-12">
        <div className="mx-auto max-w-[var(--width-content)]">
          {/* Category header */}
          <div className="mb-8">
            <h1 className="font-heading text-h1 leading-tight text-neutral-900 font-medium">
              {meta.title}
            </h1>
            <p className="mt-2 font-body text-body-lg text-neutral-600 max-w-2xl">
              {meta.description}
            </p>
          </div>

          {/* Filter bar */}
          <FilterBar count={categoryProducts.length} />

          {/* Product grid with load more */}
          <ProductGrid products={categoryProducts} initialCount={3} step={3} />
        </div>
      </main>

      <Footer />
    </>
  );
}
