"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { type MegaMenuColumn } from "./MegaMenu";

interface NavItem {
  label: string;
  href: string;
  megaMenu?: {
    columns: MegaMenuColumn[];
    featuredImage?: string;
    featuredLabel?: string;
    cta?: { label: string; href: string };
  };
}

const navItems: NavItem[] = [
  {
    label: "Smuteční",
    href: "/smutecni/",
    megaMenu: {
      columns: [
        {
          heading: "Kategorie",
          links: [
            { label: "Pohřební kytice", href: "/smutecni/kytice/" },
            { label: "Smuteční věnce", href: "/smutecni/vence/" },
            { label: "Kytice na rakev", href: "/smutecni/rakev/" },
            { label: "Kytice na urnu", href: "/smutecni/urna/" },
            { label: "Pietní dekorace", href: "/smutecni/dekorace/" },
            { label: "Květinové koše", href: "/smutecni/kose/" },
          ],
        },
      ],
      featuredImage: "/images/mega-smutecni.jpg",
      featuredLabel: "Smuteční květiny",
      cta: { label: "Rychlá objednávka", href: "/smutecni/" },
    },
  },
  {
    label: "Svatební",
    href: "/svatebni/",
    megaMenu: {
      columns: [
        {
          heading: "Kategorie",
          links: [
            { label: "Svatební kytice", href: "/svatebni/kytice/" },
            { label: "Dekorace obřadu", href: "/svatebni/dekorace/" },
            { label: "Doplňky", href: "/svatebni/doplnky/" },
          ],
        },
      ],
      featuredImage: "/images/mega-svatebni.jpg",
      featuredLabel: "Inspirace",
    },
  },
  {
    label: "Kytice & Dárky",
    href: "/kytice/",
    megaMenu: {
      columns: [
        {
          heading: "Kategorie",
          links: [
            { label: "Narozeninové", href: "/kytice/narozeniny/" },
            { label: "Sezónní", href: "/kytice/sezonni/" },
            { label: "Firemní květiny", href: "/kytice/firemni/" },
            { label: "VK BOX — Předplatné", href: "/kytice/predplatne/" },
          ],
        },
      ],
      featuredImage: "/images/mega-kytice.jpg",
      featuredLabel: "Sezónní nabídka",
    },
  },
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeItem = navItems.find((item) => item.href === activeMenu);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="mx-auto flex max-w-[var(--width-max)] items-center justify-between px-[var(--spacing-section-x)]">
        {/* Logo */}
        <Link
          href="/"
          className={`block transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        >
          <img
            src="/images/logo-purple.png"
            alt="Vazby Květin"
            className={`h-auto transition-all duration-300 ${scrolled ? "w-32" : "w-40"}`}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.href}
              onMouseEnter={() =>
                item.megaMenu ? setActiveMenu(item.href) : setActiveMenu(null)
              }
            >
              <Link
                href={item.href}
                className={`font-body text-body-sm font-medium transition-colors duration-150 inline-block ${scrolled ? "py-3" : "py-5"} ${
                  activeMenu === item.href
                    ? "text-deep-plum"
                    : "text-neutral-700 hover:text-deep-plum"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Utility nav */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+420000000000"
            className="font-body text-body-sm text-neutral-600 hover:text-deep-plum transition-colors duration-150"
          >
            +420 XXX XXX XXX
          </a>
          <Link
            href="/kosik/"
            className="relative font-body text-body-sm font-medium text-neutral-700 hover:text-deep-plum transition-colors duration-150"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-deep-plum text-[10px] font-medium text-neutral-white">
              0
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-neutral-700 cursor-pointer"
          aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mega menu — rendered at header level, full width */}
      <div
        className={`hidden lg:block overflow-hidden border-b border-neutral-200 bg-neutral-white shadow-md transition-all duration-150 ease-in-out ${
          activeItem?.megaMenu
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 border-b-transparent"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {activeItem?.megaMenu && (
          <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-8">
            <div className="grid grid-cols-12 gap-6">
              <div
                className={`${activeItem.megaMenu.featuredImage ? "col-span-8" : "col-span-12"} grid gap-6`}
                style={{
                  gridTemplateColumns: `repeat(${activeItem.megaMenu.columns.length}, 1fr)`,
                }}
              >
                {activeItem.megaMenu.columns.map((col, i) => (
                  <div key={i}>
                    {col.heading && (
                      <p className="text-overline uppercase tracking-widest text-plum-50 font-medium font-body mb-3">
                        {col.heading}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {col.links.map((link, j) => (
                        <li key={j}>
                          <Link
                            href={link.href}
                            className="text-body-sm text-neutral-700 hover:text-deep-plum font-body transition-colors duration-150"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {activeItem.megaMenu!.cta && i === 0 && (
                      <Link
                        href={activeItem.megaMenu!.cta!.href}
                        className="mt-4 inline-block text-body-sm font-medium text-deep-plum underline underline-offset-4 hover:text-deep-plum-90"
                      >
                        {activeItem.megaMenu!.cta!.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {activeItem.megaMenu.featuredImage && (
                <div className="col-span-4">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden">
                    <img
                      src={activeItem.megaMenu.featuredImage}
                      alt={activeItem.megaMenu.featuredLabel || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-neutral-white lg:hidden">
          <div className="flex items-center justify-between px-[var(--spacing-section-x)] py-5 border-b border-neutral-200">
            <Link
              href="/"
              className="block"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/images/logo-purple.png"
                alt="Vazby Květin"
                className="w-40 h-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-neutral-700 cursor-pointer"
              aria-label="Zavřít menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-[var(--spacing-section-x)] py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-h2 leading-tight text-neutral-900 font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {item.megaMenu.columns.flatMap((col) =>
                        col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="font-body text-body text-neutral-600 hover:text-neutral-900"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-neutral-200 space-y-4">
              <a
                href="tel:+420000000000"
                className="block font-body text-body text-neutral-600"
              >
                +420 XXX XXX XXX
              </a>
              <Link
                href="/kosik/"
                className="block font-body text-body font-medium text-neutral-900"
                onClick={() => setMobileOpen(false)}
              >
                Košík (0)
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
