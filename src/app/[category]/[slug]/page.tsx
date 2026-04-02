import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { QuantitySelector } from "@/components/QuantitySelector";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";
import { CondolenceCard } from "@/components/CondolenceCard";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  getSubcategory,
  getSubcategoryProducts,
  getAllSubcategoryParams,
  categoryMeta,
} from "@/lib/products";

export function generateStaticParams() {
  const productParams = products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
  const subcategoryParams = getAllSubcategoryParams();
  return [...productParams, ...subcategoryParams];
}

const categoryLabel: Record<string, string> = {
  smutecni: "Smuteční",
  svatebni: "Svatební",
  kytice: "Kytice & Dárky",
};

export default async function ProductOrSubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  // Check if this is a subcategory page
  const subcategory = getSubcategory(category, slug);
  if (subcategory) {
    const subProducts = getSubcategoryProducts(subcategory);
    return (
      <>
        <NavBar />
        <div className="h-20" />
        <main className="px-[var(--spacing-section-x)] py-12">
          <div className="mx-auto max-w-[var(--width-content)]">
            {/* Breadcrumb */}
            <nav className="mb-8 font-body text-body-sm text-neutral-500">
              <a href="/" className="hover:text-neutral-900 transition-colors duration-150">Domů</a>
              <span className="mx-2">/</span>
              <a href={`/${category}/`} className="hover:text-neutral-900 transition-colors duration-150">
                {categoryLabel[category] || category}
              </a>
              <span className="mx-2">/</span>
              <span className="text-neutral-800">{subcategory.title}</span>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <h1 className="font-heading text-h1 leading-tight text-neutral-900 font-medium">
                {subcategory.title}
              </h1>
              <p className="mt-2 font-body text-body-lg text-neutral-600 max-w-2xl">
                {subcategory.description}
              </p>
            </div>

            <FilterBar count={subProducts.length} />

            {/* Product grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subProducts.map((product) => (
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

            {/* Back to category */}
            <div className="mt-12 text-center">
              <Button variant="ghost" as="a" href={`/${category}/`}>
                Zobrazit vše v {categoryLabel[category] || category}
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Otherwise, it's a product detail page
  const product = getProductBySlug(category, slug);

  if (!product) {
    notFound();
  }

  const isSmutecni = product.category === "smutecni";
  const related = getRelatedProducts(product, 4);

  const formattedPrice = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(product.price);

  const accordionItems = [
    {
      title: "Popis",
      content: product.description,
    },
    {
      title: "Složení kytice",
      content:
        "Růže, lilie, eucalyptus, gypsophila a sezónní zeleň. Přesné složení se může lišit podle dostupnosti květin.",
    },
    {
      title: "Dodání",
      content: isSmutecni
        ? "Expresní doručení do 4 hodin v Praze a okolí. Doručení po celé ČR do 24 hodin. Doručíme přímo na místo obřadu."
        : "Doručení po celé ČR do 24 hodin. Osobní odběr na prodejně v Praze.",
    },
    {
      title: "Péče o květiny",
      content:
        "Květiny udržujte v čerstvé vodě při pokojové teplotě. Denně měňte vodu a zkracujte stonky. Vydrží 5–7 dní.",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <main className="px-[var(--spacing-section-x)] py-12">
        <div className="mx-auto max-w-[var(--width-content)]">
          {/* Breadcrumb */}
          <nav className="mb-8 font-body text-body-sm text-neutral-500">
            <a href="/" className="hover:text-neutral-900 transition-colors duration-150">
              Domů
            </a>
            <span className="mx-2">/</span>
            <a
              href={`/${category}/`}
              className="hover:text-neutral-900 transition-colors duration-150"
            >
              {categoryLabel[category] || category}
            </a>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">{product.name}</span>
          </nav>

          {/* Main product layout — 2 columns */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Gallery — 7 columns */}
            <div className="lg:col-span-7">
              <ProductGallery productName={product.name} productImage={product.image} />
            </div>

            {/* Info — 5 columns, sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                {/* Badge */}
                {product.badge && (
                  <span className="inline-block bg-deep-plum text-neutral-white text-caption font-medium px-2 py-1 rounded-sm mb-3">
                    {product.badge}
                  </span>
                )}

                {/* Name */}
                <h1 className="font-heading text-h1 leading-tight text-neutral-900 font-medium">
                  {product.name}
                </h1>

                {/* Price */}
                <p className="mt-3 font-mono text-h3 font-semibold text-neutral-800">
                  {formattedPrice}
                </p>

                {/* Short description */}
                <p className="mt-4 font-body text-body leading-normal text-neutral-600">
                  {product.description}
                </p>

                {/* Urgent delivery for smuteční */}
                {isSmutecni && (
                  <div className="mt-4 flex items-center gap-2 p-3 rounded-sm bg-plum-10 border border-plum-30">
                    <svg className="h-5 w-5 shrink-0 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body text-body-sm font-medium text-deep-plum">
                      Doručíme do 4 hodin v Praze
                    </span>
                  </div>
                )}

                {/* Variant selector placeholder */}
                <div className="mt-6">
                  <p className="font-body text-body-sm font-medium text-neutral-800 mb-2">
                    Velikost
                  </p>
                  <div className="flex gap-2">
                    {["S", "M", "L"].map((size, i) => (
                      <button
                        key={size}
                        type="button"
                        className={`h-11 px-5 rounded-sm border font-body text-body-sm font-medium transition-colors duration-150 cursor-pointer ${
                          i === 1
                            ? "border-deep-plum bg-deep-plum text-neutral-white"
                            : "border-neutral-300 text-neutral-700 hover:border-deep-plum"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-6">
                  <p className="font-body text-body-sm font-medium text-neutral-800 mb-2">
                    Počet kusů
                  </p>
                  <QuantitySelector />
                </div>

                {/* CTA buttons */}
                <div className="mt-8 space-y-3">
                  <Button variant="primary" size="lg" className="w-full">
                    Přidat do košíku
                  </Button>

                  {isSmutecni && (
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      as="a"
                      href="/objednavka/"
                    >
                      Rychlá objednávka
                    </Button>
                  )}
                </div>

                {/* Condolence card for smuteční */}
                {isSmutecni && (
                  <div className="mt-8">
                    <CondolenceCard />
                  </div>
                )}

                {/* Accordion */}
                <div className="mt-8">
                  <Accordion items={accordionItems} />
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          <section className="mt-[var(--spacing-section-y)]">
            <SectionHeading heading="Mohlo by se vám líbit" alignment="center" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  image={p.image}
                  title={p.name}
                  price={p.price}
                  badge={p.badge}
                  slug={p.slug}
                  category={p.category}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
