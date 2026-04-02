"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function OrderPage() {
  return (
    <>
      <NavBar />
      <div className="h-20" />

      <main className="px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--width-narrow)]">
          {/* Header */}
          <SectionHeading
            overline="Rychlá objednávka"
            heading="Smuteční květiny — expresní objednávka"
            body="Vyplňte formulář a my se postaráme o zbytek. Doručíme do 4 hodin v Praze a okolí."
            alignment="left"
          />

          {/* Urgent info */}
          <div className="mt-8 flex items-center gap-3 p-4 rounded-sm bg-plum-10 border border-plum-30">
            <svg className="h-6 w-6 shrink-0 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-body text-body-sm font-medium text-deep-plum">
                Expresní doručení do 4 hodin
              </p>
              <p className="font-body text-caption text-deep-plum-80">
                Pro objednávky v Praze a okolí. Ostatní lokality do 24 hodin.
              </p>
            </div>
          </div>

          {/* Order form */}
          <form className="mt-10 space-y-8">
            {/* Step 1: Product selection */}
            <div>
              <h3 className="font-heading text-h4 font-medium text-neutral-900 mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-plum text-neutral-white text-caption font-medium">1</span>
                Výběr květin
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Typ produktu
                  </label>
                  <select className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150 bg-neutral-white">
                    <option value="">Vyberte typ</option>
                    <option value="kytice">Pohřební kytice</option>
                    <option value="venec">Smuteční věnec</option>
                    <option value="rakev">Kytice na rakev</option>
                    <option value="urna">Kytice na urnu</option>
                    <option value="dekorace">Pietní dekorace</option>
                    <option value="kos">Květinový koš</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Cenový rozsah
                  </label>
                  <select className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150 bg-neutral-white">
                    <option value="">Vyberte rozsah</option>
                    <option value="1000">do 1 000 Kč</option>
                    <option value="2000">1 000 – 2 000 Kč</option>
                    <option value="3000">2 000 – 3 000 Kč</option>
                    <option value="5000">3 000 – 5 000 Kč</option>
                    <option value="5001">nad 5 000 Kč</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Preferované barvy / poznámka ke květinám
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150 resize-none"
                    placeholder="Bílé a krémové tóny, lilie, bez trnitých květin..."
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Condolence card */}
            <div>
              <h3 className="font-heading text-h4 font-medium text-neutral-900 mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-plum text-neutral-white text-caption font-medium">2</span>
                Kondolenční karta
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Text na kartu (volitelné)
                  </label>
                  <textarea
                    rows={3}
                    maxLength={200}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150 resize-none"
                    placeholder="S upřímnou soustrástí..."
                  />
                  <p className="mt-1 font-body text-caption text-neutral-500">Max 200 znaků</p>
                </div>
              </div>
            </div>

            {/* Step 3: Delivery */}
            <div>
              <h3 className="font-heading text-h4 font-medium text-neutral-900 mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-plum text-neutral-white text-caption font-medium">3</span>
                Doručení
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                      Datum doručení
                    </label>
                    <input
                      type="date"
                      className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                      Čas doručení
                    </label>
                    <input
                      type="time"
                      className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Místo doručení
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="Název obřadní síně, adresa hřbitova..."
                  />
                </div>
                <div>
                  <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                    Adresa
                  </label>
                  <input
                    type="text"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="Ulice, město, PSČ"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Contact info */}
            <div>
              <h3 className="font-heading text-h4 font-medium text-neutral-900 mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-plum text-neutral-white text-caption font-medium">4</span>
                Vaše údaje
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                      Jméno
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
                      Příjmení
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                      placeholder="Novák"
                    />
                  </div>
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
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full h-11 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-900 focus:outline-none focus:border-deep-plum focus:ring-1 focus:ring-deep-plum transition-colors duration-150"
                    placeholder="jan@email.cz"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-neutral-200">
              <Button variant="primary" size="lg" className="w-full">
                Odeslat objednávku
              </Button>
              <p className="mt-3 text-center font-body text-caption text-neutral-500">
                Po odeslání vás budeme kontaktovat pro potvrzení a platbu.
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
