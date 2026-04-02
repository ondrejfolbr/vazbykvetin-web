import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Smuteční", href: "/smutecni/" },
  { label: "Svatební", href: "/svatebni/" },
  { label: "Kytice & Dárky", href: "/kytice/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export function Footer() {
  return (
    <footer className="text-neutral-white" style={{ backgroundColor: "#522953" }}>
      {/* Main footer grid */}
      <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo + claim + social */}
          <div>
            <Link href="/" className="block">
              <img
                src="/images/logo-white.png"
                alt="Vazby Květin"
                className="w-40 h-auto"
              />
            </Link>
            <p className="mt-3 font-body text-body-sm leading-relaxed text-neutral-white/60">
              Vazby mezi lidmi, které nekončí.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {[
                { label: "IG", icon: (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )},
                { label: "FB", icon: (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
              ].map((item) => (
                <span
                  key={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-white/15 text-neutral-white/80 hover:bg-neutral-white/25 transition-colors duration-150 cursor-pointer"
                >
                  {item.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-overline uppercase tracking-widest text-neutral-white/50 font-medium font-body mb-4">
              Navigace
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm text-neutral-white/70 hover:text-neutral-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-overline uppercase tracking-widest text-neutral-white/50 font-medium font-body mb-4">
              Kontakt
            </p>
            <ul className="space-y-2 font-body text-body-sm text-neutral-white/70">
              <li>
                VAZBY KVĚTIN s.r.o.<br />
                Mirošovická 704<br />
                251 64 Mnichovice
              </li>
              <li>
                <a
                  href="tel:+420604585271"
                  className="hover:text-neutral-white transition-colors duration-150"
                >
                  604 585 271
                </a>
                {" / "}
                <a
                  href="tel:+420608348111"
                  className="hover:text-neutral-white transition-colors duration-150"
                >
                  608 348 111
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vazbykvetin.cz"
                  className="hover:text-neutral-white transition-colors duration-150"
                >
                  info@vazbykvetin.cz
                </a>
              </li>
              <li className="pt-2 text-neutral-white/50">
                Po – Pá: 07:00 – 15:30
                <br />
                So: Zavřeno
                <br />
                Ne: 07:00 – 12:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-white/15">
        <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-4 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="font-body text-caption text-neutral-white/40">
            Součást ekosystému pohřební služby PEGAS —{" "}
            <a
              href="https://pohrebpegas.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-white/60 transition-colors duration-150"
            >
              pohrebpegas.cz
            </a>
          </p>
          <p className="font-body text-caption text-neutral-white/40">
            &copy; {new Date().getFullYear()} Vazby Květin. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
