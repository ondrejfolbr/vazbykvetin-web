interface SectionHeadingProps {
  overline?: string;
  heading: string;
  body?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({
  overline,
  heading,
  body,
  alignment = "left",
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} max-w-[var(--width-narrow)] ${alignment === "center" ? "mx-auto" : ""}`}>
      {overline && (
        <p className="text-overline uppercase tracking-widest text-plum-50 mb-3 font-body font-medium">
          {overline}
        </p>
      )}
      <h2 className="font-heading text-h2 leading-tight text-neutral-900 font-medium">
        {heading}
      </h2>
      {body && (
        <p className="mt-4 text-body-lg leading-relaxed text-neutral-600 font-body">
          {body}
        </p>
      )}
    </div>
  );
}
