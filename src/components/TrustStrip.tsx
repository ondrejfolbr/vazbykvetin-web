interface TrustStripProps {
  logo?: string;
  text: string;
  linkText: string;
  linkHref: string;
}

export function TrustStrip({
  logo,
  text,
  linkText,
  linkHref,
}: TrustStripProps) {
  return (
    <section className="bg-neutral-100 py-6">
      <div className="mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] flex items-center justify-center gap-4 text-center">
        {/* Logo placeholder */}
        {logo && (
          <div className="h-6 w-16 bg-neutral-300 rounded-sm flex items-center justify-center text-[10px] text-neutral-500 font-body shrink-0">
            {logo}
          </div>
        )}
        <p className="font-body text-body-sm text-neutral-600">
          {text}{" "}
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-deep-plum underline underline-offset-2 hover:text-deep-plum-90 transition-colors duration-150"
          >
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
}
