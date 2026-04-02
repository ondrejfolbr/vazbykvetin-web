import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <img
          src="/images/brand-story.jpg"
          alt="Aranžérka při práci"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(transparent 20%, rgba(9,7,8,0.7))" }}
        />
        <div className="relative z-10 flex items-end min-h-[45vh]">
          <div className="w-full mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] pb-12">
            <h1 className="font-heading text-display leading-tight text-neutral-white font-bold max-w-2xl">
              O nás
            </h1>
          </div>
        </div>
      </section>

      {/* Příběh */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)]">
        <div className="mx-auto max-w-[var(--width-narrow)]">
          <SectionHeading
            overline="Náš příběh"
            heading="Květinářství, které rozumí chvílím, kdy na tom záleží."
            alignment="left"
          />
          <div className="mt-8 space-y-6 font-body text-body leading-relaxed text-neutral-700">
            <p>
              Vazby Květin vznikly z přesvědčení, že květiny dokážou říct to, co slova někdy nedokážou.
              Známe prostředí loučení — jsme součástí ekosystému pohřební služby PEGAS — a víme,
              jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom nejvíc záleží.
            </p>
            <p>
              Neprodáváme jen květiny. Nabízíme způsob, jak něco říct, když slova nestačí.
              Každá kytice je originál, ručně vázaný s péčí a citem pro detail. Pracujeme
              s čerstvými květinami od prověřených dodavatelů a dbáme na to, aby každá
              vazba odrážela příležitost, pro kterou je určena.
            </p>
            <p>
              Postupně rozšiřujeme naši nabídku — od smuteční floristiky přes svatební
              květiny až po dárkové kytice a firemní květinový servis. Věříme, že kvalitní
              floristika by měla být dostupná každému.
            </p>
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)] bg-neutral-50">
        <div className="mx-auto max-w-[var(--width-content)]">
          <SectionHeading
            overline="Naše hodnoty"
            heading="Na čem nám záleží"
            alignment="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Respekt a pochopení",
                text: "Každá situace je jiná. Přistupujeme k ní s empatií a profesionalitou, ať už jde o rozloučení, oslavu lásky, nebo radostné gesto.",
                icon: (
                  <svg className="h-8 w-8 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Řemeslná kvalita",
                text: "Každou kytici vážeme ručně z čerstvých květin. Nejsme výrobní linka — jsme řemeslníci, kteří milují svou práci.",
                icon: (
                  <svg className="h-8 w-8 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
              {
                title: "Spolehlivost",
                text: "Doručíme včas, kam potřebujete. Smuteční květiny expresně do 4 hodin v Praze, ostatní po celé ČR do 24 hodin.",
                icon: (
                  <svg className="h-8 w-8 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-heading text-h4 font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-body-sm leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEGAS connection */}
      <section className="py-[var(--spacing-section-y)] px-[var(--spacing-section-x)]">
        <div className="mx-auto max-w-[var(--width-content)] grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              overline="Součást ekosystému"
              heading="Pohřební služba PEGAS"
              body="Vazby Květin jsou součástí ekosystému pohřební služby PEGAS. Díky tomu dokážeme zajistit komplexní servis — od organizace obřadu až po květinovou výzdobu. Spolupracujeme úzce, abychom rodinám usnadnili náročné chvíle."
              alignment="left"
            />
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-200 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="font-heading text-h2 font-bold text-neutral-400">PEGAS</p>
              <p className="mt-2 font-body text-body-sm text-neutral-500">pohrebpegas.cz</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
