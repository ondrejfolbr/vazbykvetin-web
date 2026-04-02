import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";

const featuredProducts = [
  { id: 5, name: "Svatební kytice Harmonie", price: 2490, category: "svatebni", badge: "Oblíbené", slug: "svatebni-kytice-harmonie", image: "/images/prod-svatebni-harmonie.jpg" },
  { id: 8, name: "Kytice Sluneční den", price: 890, category: "kytice", badge: "Novinka", slug: "kytice-slunecni-den", image: "/images/prod-slunecni-den.jpg" },
  { id: 1, name: "Smuteční kytice Klid", price: 1490, category: "smutecni", badge: null, slug: "smutecni-kytice-klid", image: "/images/prod-smutecni-klid.jpg" },
  { id: 10, name: "VK BOX — měsíční předplatné", price: 1290, category: "kytice", badge: "Předplatné", slug: "vk-box-mesicni-predplatne", image: "/images/prod-vk-box.jpg" },
];

export default function Home() {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Sekce 1: Hero */}
      <Hero
        backgroundImage="/images/hero.jpg"
        heading="Vazby pro život. Vazby pro loučení."
        subheading="Navrhujeme květiny pro chvíle, na kterých záleží."
        ctaText="Prohlédnout nabídku"
        ctaHref="/smutecni/"
        fullHeight
      />

      {/* Sekce 2: Vstupní rozcestník */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)]">
        <div className="mx-auto max-w-[var(--width-content)] grid grid-cols-1 gap-6 md:grid-cols-3">
          <CategoryCard
            image="/images/cat-smutecni.jpg"
            title="Smuteční květiny"
            subtitle="S respektem a pochopením"
            href="/smutecni/"
          />
          <CategoryCard
            image="/images/cat-svatebni.jpg"
            title="Svatební květiny"
            subtitle="Pro váš den"
            href="/svatebni/"
          />
          <CategoryCard
            image="/images/cat-darky.jpg"
            title="Kytice & Dárky"
            subtitle="Když slova nestačí"
            href="/kytice/"
          />
        </div>
      </section>

      {/* Sekce 3: Vybrané produkty */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)]">
        <div className="mx-auto max-w-[var(--width-content)]">
          <SectionHeading
            heading="Vybrané pro vás"
            alignment="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
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
          <div className="mt-10 text-center">
            <Button variant="ghost" as="a" href="/kytice/">
              Zobrazit vše
            </Button>
          </div>
        </div>
      </section>

      {/* Sekce 4: Brand story */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)]">
        <div className="mx-auto max-w-[var(--width-content)] grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              overline="O nás"
              heading="Květinářství, které rozumí chvílím, kdy na tom záleží."
              body="Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom záleží. Budujeme květinářství, které těmto situacím rozumí. Neprodáváme jen květiny — nabízíme způsob, jak něco říct, když slova nestačí."
              alignment="left"
            />
            <div className="mt-8">
              <Button variant="secondary" as="a" href="/o-nas/">
                Více o nás
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/images/brand-story.jpg"
                alt="Aranžérka při práci"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekce 6: Sezónní highlight */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <img
          src="/images/seasonal.jpg"
          alt="Sezónní nabídka"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(transparent 40%, rgba(9,7,8,0.65))",
          }}
        />
        <div className="relative z-10 flex items-end min-h-[50vh]">
          <div className="w-full mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] pb-12">
            <p className="text-overline uppercase tracking-widest text-plum-30 font-medium font-body mb-2">
              Sezónní nabídka
            </p>
            <h2 className="font-heading text-h2 leading-tight text-neutral-white font-semibold max-w-lg">
              Dušičky — vzpomínkové kytice a dekorace
            </h2>
            <div className="mt-6">
              <Button variant="primary" size="md" as="a" href="/kytice/sezonni/">
                Zobrazit kolekci
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sekce 7: Footer */}
      <Footer />
    </>
  );
}
