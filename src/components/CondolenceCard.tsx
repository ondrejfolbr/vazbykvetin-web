"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function CondolenceCard() {
  const [text, setText] = useState("");
  const maxLength = 200;

  return (
    <Card className="border-neutral-200">
      <CardContent className="p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-body text-body-sm font-medium text-neutral-800">
          Kondolenční kartička
        </p>
        <span className="font-mono text-caption text-neutral-500">
          {text.length}/{maxLength}
        </span>
      </div>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        placeholder="Napište text kondolence…"
        rows={3}
        className="w-full resize-none rounded-sm border border-neutral-300 px-3 py-2 font-body text-body-sm text-neutral-800 placeholder:text-neutral-400 focus:border-deep-plum focus:outline-none transition-colors duration-150"
      />

      {/* Preview */}
      {text && (
        <div className="mt-3 p-3 bg-neutral-50 rounded-sm border border-dashed border-neutral-300">
          <p className="text-overline uppercase tracking-widest text-plum-50 font-body mb-1">
            Náhled kartičky
          </p>
          <p className="font-heading text-body-sm leading-relaxed text-neutral-700 italic">
            &ldquo;{text}&rdquo;
          </p>
        </div>
      )}
      </CardContent>
    </Card>
  );
}
