"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function CartPage() {
  return (
    <>
      <NavBar />
      <div className="h-20" />

      <main className="px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--width-content)]">
          <SectionHeading heading="Košík" alignment="left" />

          {/* Empty cart state */}
          <div className="mt-16 text-center py-16">
            <svg className="h-16 w-16 mx-auto text-neutral-300 mb-6" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h2 className="font-heading text-h3 font-semibold text-neutral-900 mb-2">
              Váš košík je prázdný
            </h2>
            <p className="font-body text-body text-neutral-600 mb-8 max-w-md mx-auto">
              Vyberte si z naší nabídky květin a přidejte je do košíku.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" size="md" as="a" href="/smutecni/">
                Smuteční květiny
              </Button>
              <Button variant="secondary" size="md" as="a" href="/kytice/">
                Kytice & Dárky
              </Button>
            </div>
          </div>

          {/* Cart layout (hidden when empty, shown when items exist) */}
          <div className="hidden mt-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Cart items */}
              <div className="lg:col-span-8">
                <div className="border-b border-neutral-200 pb-6 mb-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-sm bg-neutral-200 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-heading text-h4 font-semibold text-neutral-900">
                        Název produktu
                      </h3>
                      <p className="font-body text-body-sm text-neutral-600 mt-1">
                        Velikost: M
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-mono text-body font-semibold text-neutral-800">
                          1 490 Kč
                        </p>
                        <button type="button" className="font-body text-body-sm text-neutral-500 hover:text-error transition-colors duration-150 cursor-pointer">
                          Odebrat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-4">
                <div className="bg-neutral-50 rounded-sm p-6">
                  <h3 className="font-heading text-h4 font-semibold text-neutral-900 mb-4">
                    Souhrn objednávky
                  </h3>
                  <div className="space-y-3 font-body text-body-sm">
                    <div className="flex justify-between text-neutral-600">
                      <span>Mezisoučet</span>
                      <span>0 Kč</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Doručení</span>
                      <span>Zdarma</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-3 flex justify-between font-medium text-neutral-900">
                      <span>Celkem</span>
                      <span className="font-mono text-body font-semibold">0 Kč</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="primary" size="lg" className="w-full">
                      Pokračovat k objednávce
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
