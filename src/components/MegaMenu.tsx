"use client";

import Link from "next/link";

export interface MegaMenuColumn {
  heading?: string;
  links: { label: string; href: string }[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  featuredImage?: string;
  featuredLabel?: string;
  cta?: { label: string; href: string };
}

export function MegaMenu({
  columns,
  featuredImage,
  featuredLabel,
  cta,
}: MegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 top-full z-50 border-b border-neutral-200 bg-neutral-white shadow-md opacity-0 translate-y-[-8px] pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-150 ease-in-out">
      <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Link columns */}
          <div className={`${featuredImage ? "col-span-8" : "col-span-12"} grid grid-cols-${columns.length} gap-6`}>
            {columns.map((col, i) => (
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
                {cta && i === 0 && (
                  <Link
                    href={cta.href}
                    className="mt-4 inline-block text-body-sm font-medium text-deep-plum underline underline-offset-4 hover:text-deep-plum-90"
                  >
                    {cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Featured image placeholder */}
          {featuredImage && (
            <div className="col-span-4">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src={featuredImage}
                  alt={featuredLabel || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
