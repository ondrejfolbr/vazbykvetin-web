"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Typ produktu
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-11 font-body text-body-sm text-neutral-900">
                      <SelectValue placeholder="Vyberte typ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kytice">Pohřební kytice</SelectItem>
                      <SelectItem value="venec">Smuteční věnec</SelectItem>
                      <SelectItem value="rakev">Kytice na rakev</SelectItem>
                      <SelectItem value="urna">Kytice na urnu</SelectItem>
                      <SelectItem value="dekorace">Pietní dekorace</SelectItem>
                      <SelectItem value="kos">Květinový koš</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Cenový rozsah
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-11 font-body text-body-sm text-neutral-900">
                      <SelectValue placeholder="Vyberte rozsah" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">do 1 000 Kč</SelectItem>
                      <SelectItem value="2000">1 000 – 2 000 Kč</SelectItem>
                      <SelectItem value="3000">2 000 – 3 000 Kč</SelectItem>
                      <SelectItem value="5000">3 000 – 5 000 Kč</SelectItem>
                      <SelectItem value="5001">nad 5 000 Kč</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Preferované barvy / poznámka ke květinám
                  </Label>
                  <Textarea
                    rows={3}
                    className="font-body text-body-sm text-neutral-900 placeholder:text-neutral-400 resize-none"
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
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Text na kartu (volitelné)
                  </Label>
                  <Textarea
                    rows={3}
                    maxLength={200}
                    className="font-body text-body-sm text-neutral-900 placeholder:text-neutral-400 resize-none"
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
                    <Label className="font-body text-body-sm font-medium text-neutral-800">
                      Datum doručení
                    </Label>
                    <Input
                      type="date"
                      className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-body-sm font-medium text-neutral-800">
                      Čas doručení
                    </Label>
                    <Input
                      type="time"
                      className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Místo doručení
                  </Label>
                  <Input
                    type="text"
                    className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                    placeholder="Název obřadní síně, adresa hřbitova..."
                  />
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Adresa
                  </Label>
                  <Input
                    type="text"
                    className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
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
                    <Label className="font-body text-body-sm font-medium text-neutral-800">
                      Jméno
                    </Label>
                    <Input
                      type="text"
                      className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-body-sm font-medium text-neutral-800">
                      Příjmení
                    </Label>
                    <Input
                      type="text"
                      className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                      placeholder="Novák"
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    Telefon
                  </Label>
                  <Input
                    type="tel"
                    className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                    placeholder="+420 XXX XXX XXX"
                  />
                </div>
                <div>
                  <Label className="font-body text-body-sm font-medium text-neutral-800">
                    E-mail
                  </Label>
                  <Input
                    type="email"
                    className="h-11 font-body text-body-sm text-neutral-900 placeholder:text-neutral-400"
                    placeholder="jan@email.cz"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-neutral-200">
              <Button size="lg" className="w-full">
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
