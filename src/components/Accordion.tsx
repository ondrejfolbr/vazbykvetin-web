"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-h4 leading-snug text-neutral-900 font-medium">
                {item.title}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-plum-50 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
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
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
            >
              <p className="text-body leading-normal text-neutral-600 font-body">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
