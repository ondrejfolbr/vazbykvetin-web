import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  backgroundImage?: string;
  heading: string;
  subheading?: string;
  ctaText: string;
  ctaHref: string;
  fullHeight?: boolean;
}

export function Hero({
  backgroundImage,
  heading,
  subheading,
  ctaText,
  ctaHref,
  fullHeight = true,
}: HeroProps) {
  return (
    <section
      className={cn("relative flex items-end overflow-hidden", fullHeight ? "min-h-screen" : "min-h-[60vh]")}
    >
      {/* Background image */}
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500 text-body-sm font-body">
          Hero foto
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(transparent 30%, rgba(9,7,8,0.6))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[var(--width-max)] px-[var(--spacing-section-x)] pb-16 md:pb-24">
        <h1 className="font-heading text-display-xl leading-tight text-neutral-white font-medium max-w-3xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-4 font-body text-body-lg leading-relaxed text-neutral-200 max-w-xl">
            {subheading}
          </p>
        )}
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
