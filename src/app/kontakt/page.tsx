import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="h-20" />

      <main className="px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--width-content)]">
          <SectionHeading
            overline="Kontakt"
            heading="Ozvěte se nám"
            body="Rádi vám pomůžeme s výběrem květin, poradíme s objednávkou nebo zodpovíme jakýkoli dotaz."
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <h3 className="font-heading text-h3 font-semibold text-neutral-900 mb-6">
                Napište nám
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="jan@email.cz"
                  />
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="+420 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Zpráva
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150 resize-none"
                    placeholder="Jak vám můžeme pomoci?"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Odeslat zprávu
                </Button>
              </form>
            </div>

            {/* Contact info + map */}
            <div>
              <h3 className="font-heading text-h3 font-semibold text-neutral-900 mb-6">
                Kontaktní údaje
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 shrink-0 text-deep-plum mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                  <div>
                    <p className="font-body text-body font-medium text-neutral-900">Adresa</p>
                    <p className="font-body text-body-sm text-neutral-600">Ulice 123, 110 00 Praha</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 shrink-0 text-deep-plum mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-body text-body font-medium text-neutral-900">Telefon</p>
                    <a href="tel:+420000000000" className="font-body text-body-sm text-neutral-600 hover:text-deep-plum transition-colors duration-150">
                      +420 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 shrink-0 text-deep-plum mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-body text-body font-medium text-neutral-900">E-mail</p>
                    <a href="mailto:info@vazbykvetin.cz" className="font-body text-body-sm text-neutral-600 hover:text-deep-plum transition-colors duration-150">
                      info@vazbykvetin.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 shrink-0 text-deep-plum mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-body text-body font-medium text-neutral-900">Otevírací doba</p>
                    <p className="font-body text-body-sm text-neutral-600">
                      Po–Pá 8:00–17:00<br />
                      So 9:00–12:00<br />
                      Ne zavřeno
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-[4/3] rounded-sm bg-neutral-200 flex items-center justify-center text-neutral-500 text-body-sm font-body">
                Mapa — Google Maps embed
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
