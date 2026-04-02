"use client";

export function FilterBar({ count }: { count: number }) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-b border-neutral-200">
      {/* Filter buttons — wireframe placeholders */}
      {["Typ vazby", "Cenový rozsah", "Barva"].map((label) => (
        <button
          key={label}
          type="button"
          className="inline-flex items-center gap-1 h-9 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-700 hover:border-deep-plum transition-colors duration-150 cursor-pointer"
        >
          {label}
          <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Count + Sort */}
      <span className="font-body text-body-sm text-neutral-500">
        {count} {count === 1 ? "produkt" : count < 5 ? "produkty" : "produktů"}
      </span>
      <button
        type="button"
        className="inline-flex items-center gap-1 h-9 px-4 rounded-sm border border-neutral-300 font-body text-body-sm text-neutral-700 hover:border-deep-plum transition-colors duration-150 cursor-pointer"
      >
        Řazení
        <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
      </button>
    </div>
  );
}
