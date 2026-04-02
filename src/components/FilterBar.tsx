"use client";

import { useState, useRef, useEffect } from "react";

interface FilterOption {
  label: string;
  value: string;
}

const filterConfig: Record<string, FilterOption[]> = {
  "Typ vazby": [
    { label: "Vše", value: "" },
    { label: "Kytice", value: "kytice" },
    { label: "Věnec", value: "venec" },
    { label: "Dekorace", value: "dekorace" },
    { label: "Koš", value: "kos" },
  ],
  "Cenový rozsah": [
    { label: "Vše", value: "" },
    { label: "Do 1 000 Kč", value: "0-1000" },
    { label: "1 000 – 2 000 Kč", value: "1000-2000" },
    { label: "2 000 – 3 000 Kč", value: "2000-3000" },
    { label: "Nad 3 000 Kč", value: "3000+" },
  ],
  Barva: [
    { label: "Vše", value: "" },
    { label: "Bílá", value: "bila" },
    { label: "Červená", value: "cervena" },
    { label: "Růžová", value: "ruzova" },
    { label: "Žlutá", value: "zluta" },
    { label: "Fialová", value: "fialova" },
  ],
};

const sortOptions: FilterOption[] = [
  { label: "Doporučené", value: "" },
  { label: "Cena: od nejnižší", value: "price-asc" },
  { label: "Cena: od nejvyšší", value: "price-desc" },
  { label: "Nejnovější", value: "newest" },
];

function Dropdown({
  label,
  options,
  icon,
}: {
  label: string;
  options: FilterOption[];
  icon: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectedLabel = options.find((o) => o.value === selected)?.label;
  const displayLabel =
    selected && selectedLabel ? `${label}: ${selectedLabel}` : label;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1 h-9 px-4 rounded-sm border font-body text-body-sm transition-colors duration-150 cursor-pointer ${
          open || selected
            ? "border-deep-plum text-deep-plum"
            : "border-neutral-300 text-neutral-700 hover:border-deep-plum"
        }`}
      >
        {displayLabel}
        {icon}
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-neutral-white border border-neutral-200 rounded-sm shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSelected(option.value);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 font-body text-body-sm transition-colors duration-100 cursor-pointer ${
                selected === option.value
                  ? "text-deep-plum bg-neutral-100"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-deep-plum"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const chevronDown = (
  <svg
    className="h-4 w-4 text-neutral-400"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const sortIcon = (
  <svg
    className="h-4 w-4 text-neutral-400"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    />
  </svg>
);

export function FilterBar({ count }: { count: number }) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-b border-neutral-200">
      {Object.entries(filterConfig).map(([label, options]) => (
        <Dropdown
          key={label}
          label={label}
          options={options}
          icon={chevronDown}
        />
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Count + Sort */}
      <span className="font-body text-body-sm text-neutral-500">
        {count} {count === 1 ? "produkt" : count < 5 ? "produkty" : "produktů"}
      </span>
      <Dropdown label="Řazení" options={sortOptions} icon={sortIcon} />
    </div>
  );
}
