import Link from "next/link";

const navLinks = [
  { label: "Smuteční", href: "/smutecni/" },
  { label: "Svatební", href: "/svatebni/" },
  { label: "Kytice & Dárky", href: "/kytice/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main footer grid */}
      <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo + claim + social */}
          <div>
            <Link
              href="/"
              className="font-heading text-h3 font-bold text-neutral-white"
            >
              Vazby Květin
            </Link>
            <p className="mt-3 font-body text-body-sm leading-relaxed text-neutral-400">
              Vazby mezi lidmi, které nekončí.
            </p>
            {/* Social icons placeholders */}
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "LI"].map((label) => (
                <span
                  key={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-deep-plum text-caption text-plum-30 font-body"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-overline uppercase tracking-widest text-plum-30 font-medium font-body mb-4">
              Navigace
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm text-neutral-400 hover:text-neutral-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-overline uppercase tracking-widest text-plum-30 font-medium font-body mb-4">
              Kontakt
            </p>
            <ul className="space-y-2 font-body text-body-sm text-neutral-400">
              <li>Ulice 123, 110 00 Praha</li>
              <li>
                <a
                  href="tel:+420000000000"
                  className="hover:text-neutral-white transition-colors duration-150"
                >
                  +420 XXX XXX XXX
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
              <li className="pt-2 text-neutral-500">
                Po–Pá 8:00–17:00
                <br />
                So 9:00–12:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-4 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="font-body text-caption text-neutral-500">
            Součást ekosystému pohřební služby PEGAS —{" "}
            <a
              href="https://pohrebpegas.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-400 transition-colors duration-150"
            >
              pohrebpegas.cz
            </a>
          </p>
          <p className="font-body text-caption text-neutral-500">
            &copy; {new Date().getFullYear()} Vazby Květin. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
