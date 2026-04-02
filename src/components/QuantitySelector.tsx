"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center border border-neutral-300 rounded-sm w-fit">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="h-11 w-11 no-underline text-neutral-700 hover:bg-neutral-100 border-0"
        aria-label="Snížit počet"
      >
        −
      </Button>
      <span className="h-11 w-12 flex items-center justify-center font-mono text-body font-semibold text-neutral-900 border-x border-neutral-300">
        {qty}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setQty(qty + 1)}
        className="h-11 w-11 no-underline text-neutral-700 hover:bg-neutral-100 border-0"
        aria-label="Zvýšit počet"
      >
        +
      </Button>
    </div>
  );
}
