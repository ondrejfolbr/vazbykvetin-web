"use client";

import { useState } from "react";

export function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center border border-neutral-300 rounded-sm w-fit">
      <button
        type="button"
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="h-11 w-11 flex items-center justify-center font-body text-body text-neutral-700 hover:bg-neutral-100 transition-colors duration-150 cursor-pointer"
        aria-label="Snížit počet"
      >
        −
      </button>
      <span className="h-11 w-12 flex items-center justify-center font-mono text-body font-semibold text-neutral-900 border-x border-neutral-300">
        {qty}
      </span>
      <button
        type="button"
        onClick={() => setQty(qty + 1)}
        className="h-11 w-11 flex items-center justify-center font-body text-body text-neutral-700 hover:bg-neutral-100 transition-colors duration-150 cursor-pointer"
        aria-label="Zvýšit počet"
      >
        +
      </button>
    </div>
  );
}
