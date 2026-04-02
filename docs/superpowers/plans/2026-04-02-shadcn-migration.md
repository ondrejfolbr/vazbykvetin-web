# shadcn/ui Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate vazbykvetin from custom components to shadcn/ui primitives while preserving pixel-perfect visual output.

**Architecture:** Initialize shadcn with preset `b2VU3GJYB` (radix-maia, mauve, radius 0, remixicon). Install all needed shadcn components. Merge CSS systems — shadcn semantic tokens mapped to VK palette. Refactor components one by one from leaf to composite. Pages updated last.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, shadcn/ui v4, Radix UI, CVA, Remixicon

**Spec:** `docs/superpowers/specs/2026-04-02-shadcn-migration-design.md`

---

### Task 1: Initialize shadcn and install dependencies

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx` (auto-generated, will be customized in Task 3)
- Modify: `package.json` (new dependencies)
- Modify: `src/app/globals.css` (shadcn will modify, we'll restore + merge in Task 2)

- [ ] **Step 1: Back up current globals.css**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
cp src/app/globals.css src/app/globals.css.backup
```

- [ ] **Step 2: Run shadcn init**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
npx shadcn@latest init --preset b2VU3GJYB --template next --yes
```

Expected output: creates `components.json`, `src/lib/utils.ts`, `src/components/ui/button.tsx`, modifies `globals.css`, installs deps (`radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `shadcn`, `@remixicon/react`).

- [ ] **Step 3: Install all needed shadcn components**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
npx shadcn@latest add accordion badge card dialog dropdown-menu input label navigation-menu select separator sheet switch textarea --yes
```

- [ ] **Step 4: Verify installation**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
ls src/components/ui/
```

Expected: `accordion.tsx`, `badge.tsx`, `button.tsx`, `card.tsx`, `dialog.tsx`, `dropdown-menu.tsx`, `input.tsx`, `label.tsx`, `navigation-menu.tsx`, `select.tsx`, `separator.tsx`, `sheet.tsx`, `switch.tsx`, `textarea.tsx`

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: initialize shadcn/ui with preset b2VU3GJYB and install components"
```

---

### Task 2: Merge globals.css — restore VK tokens + integrate shadcn

**Files:**
- Modify: `src/app/globals.css`
- Delete: `src/app/globals.css.backup` (after merge)

The goal: keep ALL existing VK design tokens and overrides, but add shadcn imports and semantic token mappings with VK palette values.

- [ ] **Step 1: Write the merged globals.css**

The merged file must have this structure:
1. shadcn imports (`tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`)
2. `@custom-variant dark`
3. VK `@font-face` for LatinoGothic
4. VK `:root` custom properties + shadcn semantic vars mapped to VK values
5. `@theme inline` — merged shadcn layout tokens + ALL VK custom tokens
6. `.dark` block from shadcn (for future dark mode)
7. `@layer base` — shadcn base rules
8. VK typography utility classes
9. VK text color overrides
10. VK global `border-radius: 0 !important`
11. VK body styles + font weight mappings
12. Cookie animation

Write `src/app/globals.css` with this exact content:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

/* ===== Self-hosted LatinoGothic (fallback for Typekit) ===== */
@font-face {
  font-family: "latinogothic";
  src: url("/fonts/latinogothic-variable.otf") format("opentype");
  font-weight: 1 100;
  font-style: normal;
  font-display: swap;
}

/* ===== CSS Custom Properties (Design Tokens) ===== */
:root {
  /* VK Primary */
  --color-primary: #522953;
  --color-primary-90: #63396A;
  --color-primary-80: #754A81;
  --color-primary-70: #865B98;
  --color-primary-10: #F3EEF3;

  /* VK Accent */
  --color-accent: #9873B4;
  --color-accent-30: #C4AEDA;
  --color-accent-10: #EDE6F3;

  /* VK Neutral */
  --color-black: #090708;
  --color-gray-900: #1A1718;
  --color-gray-800: #2D2A2C;
  --color-gray-700: #4A4648;
  --color-gray-600: #6B6769;
  --color-gray-500: #8E8A8C;
  --color-gray-400: #B0ADAF;
  --color-gray-300: #D0CDCF;
  --color-gray-200: #E8E6E7;
  --color-gray-100: #F5F4F4;
  --color-gray-50: #FAFAFA;
  --color-white: #FFFFFF;

  /* Warm/Cool/Light */
  --color-warm-gray-50: #D8D4D7;
  --color-cool-gray-50: #D0D1DB;
  --color-light-blue-50: #C5DBF7;

  /* VK Semantic */
  --color-success: #2E7D32;
  --color-error: #C62828;
  --color-warning: #F9A825;
  --color-info: #1565C0;

  /* shadcn semantic tokens → mapped to VK palette */
  --background: #FFFFFF;
  --foreground: #522953;
  --card: #FFFFFF;
  --card-foreground: #090708;
  --popover: #FFFFFF;
  --popover-foreground: #090708;
  --primary: #522953;
  --primary-foreground: #FFFFFF;
  --secondary: #F5F4F4;
  --secondary-foreground: #1A1718;
  --muted: #F3EEF3;
  --muted-foreground: #6B6769;
  --accent: #EDE6F3;
  --accent-foreground: #522953;
  --destructive: #C62828;
  --border: #E8E6E7;
  --input: #E8E6E7;
  --ring: #C4AEDA;
  --chart-1: #C4AEDA;
  --chart-2: #9873B4;
  --chart-3: #865B98;
  --chart-4: #754A81;
  --chart-5: #522953;
  --radius: 0;
  --sidebar: #FAFAFA;
  --sidebar-foreground: #522953;
  --sidebar-primary: #522953;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #F3EEF3;
  --sidebar-accent-foreground: #522953;
  --sidebar-border: #E8E6E7;
  --sidebar-ring: #C4AEDA;
}

.dark {
  --background: #1A1718;
  --foreground: #FAFAFA;
  --card: #2D2A2C;
  --card-foreground: #FAFAFA;
  --popover: #2D2A2C;
  --popover-foreground: #FAFAFA;
  --primary: #9873B4;
  --primary-foreground: #FFFFFF;
  --secondary: #4A4648;
  --secondary-foreground: #FAFAFA;
  --muted: #4A4648;
  --muted-foreground: #B0ADAF;
  --accent: #4A4648;
  --accent-foreground: #FAFAFA;
  --destructive: #C62828;
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.15);
  --ring: #6B6769;
  --chart-1: #C4AEDA;
  --chart-2: #9873B4;
  --chart-3: #865B98;
  --chart-4: #754A81;
  --chart-5: #522953;
  --sidebar: #2D2A2C;
  --sidebar-foreground: #FAFAFA;
  --sidebar-primary: #9873B4;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #4A4648;
  --sidebar-accent-foreground: #FAFAFA;
  --sidebar-border: rgba(255, 255, 255, 0.1);
  --sidebar-ring: #6B6769;
}

/* ===== Tailwind v4 Theme ===== */
@theme inline {
  /* shadcn layout tokens */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: "latino-gothic-variable", "latinogothic", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --font-heading: "latino-gothic-variable", "latinogothic", Georgia, serif;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);

  /* VK Fonts (body maps to --font-sans) */
  --font-body: "latino-gothic-variable", "latinogothic", "Helvetica Neue", Arial, sans-serif;

  /* VK Colors — Primary */
  --color-deep-plum: #522953;
  --color-deep-plum-90: #63396A;
  --color-deep-plum-80: #754A81;
  --color-deep-plum-70: #865B98;
  --color-deep-plum-10: #F3EEF3;

  /* VK Colors — Accent */
  --color-plum-50: #9873B4;
  --color-plum-30: #C4AEDA;
  --color-plum-10: #EDE6F3;

  /* VK Colors — Neutral */
  --color-neutral-black: #090708;
  --color-neutral-900: #1A1718;
  --color-neutral-800: #2D2A2C;
  --color-neutral-700: #4A4648;
  --color-neutral-600: #6B6769;
  --color-neutral-500: #8E8A8C;
  --color-neutral-400: #B0ADAF;
  --color-neutral-300: #D0CDCF;
  --color-neutral-200: #E8E6E7;
  --color-neutral-100: #F5F4F4;
  --color-neutral-50: #FAFAFA;
  --color-neutral-white: #FFFFFF;

  /* VK Colors — Semantic */
  --color-success: #2E7D32;
  --color-error: #C62828;
  --color-warning: #F9A825;
  --color-info: #1565C0;

  /* VK Font Size */
  --font-size-display-xl: clamp(2rem, 4vw, 3.6rem);
  --font-size-display: clamp(1.8rem, 3.2vw, 2.8rem);
  --font-size-h1: clamp(1.4rem, 2.4vw, 2.2rem);
  --font-size-h2: clamp(1.2rem, 2vw, 1.8rem);
  --font-size-h3: clamp(1rem, 1.6vw, 1.4rem);
  --font-size-h4: 0.9rem;
  --font-size-body-lg: 1.0625rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.875rem;
  --font-size-caption: 0.75rem;
  --font-size-overline: 0.6875rem;

  /* VK Line Height */
  --line-height-tight: 1.1;
  --line-height-snug: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* VK Letter Spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
  --letter-spacing-wider: 0.1em;
  --letter-spacing-widest: 0.2em;

  /* VK Spacing */
  --spacing-section-y: clamp(4rem, 8vw, 8rem);
  --spacing-section-x: clamp(1rem, 5vw, 6rem);

  /* VK Layout */
  --width-max: 1440px;
  --width-content: 1200px;
  --width-narrow: 800px;

  /* VK Border Radius (all zero) */
  --radius-full: 0;

  /* VK Shadows */
  --shadow-sm: 0 1px 2px rgba(9,7,8,0.05);
  --shadow-md: 0 4px 12px rgba(9,7,8,0.08);
  --shadow-lg: 0 8px 24px rgba(9,7,8,0.12);
  --shadow-xl: 0 16px 48px rgba(9,7,8,0.16);

  /* VK Transitions */
  --transition-timing-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-timing-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-timing-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-timing-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* VK Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}

/* ===== VK Typography Utility Classes ===== */
.text-display-xl { font-size: clamp(2rem, 4vw, 3.6rem); }
.text-display { font-size: clamp(1.8rem, 3.2vw, 2.8rem); }
.text-h1 { font-size: clamp(1.4rem, 2.4vw, 2.2rem); }
.text-h2 { font-size: clamp(1.2rem, 2vw, 1.8rem); }
.text-h3 { font-size: clamp(1rem, 1.6vw, 1.4rem); }
.text-h4 { font-size: 0.9rem; }
.text-body-lg { font-size: 1.0625rem; }
.text-body { font-size: 1rem; }
.text-body-sm { font-size: 0.875rem; }
.text-caption { font-size: 0.75rem; }
.text-overline { font-size: 0.6875rem; }

.leading-tight { line-height: 1.1; }
.leading-snug { line-height: 1.25; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.75; }

.tracking-tight { letter-spacing: -0.02em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.05em; }
.tracking-wider { letter-spacing: 0.1em; }
.tracking-widest { letter-spacing: 0.2em; }

/* ===== VK Global: primary purple text color ===== */
.text-neutral-black,
.text-neutral-900,
.text-neutral-800,
.text-neutral-700 {
  color: var(--color-primary) !important;
}
.text-neutral-600,
.text-neutral-500 {
  color: var(--color-primary-70) !important;
}

/* ===== VK Global: no border-radius anywhere ===== */
* {
  border-radius: 0 !important;
}

/* ===== VK Base Styles ===== */
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
  font-weight: 25;
  line-height: 1.5;
  font-variation-settings: "slnt" 0, "wdth" 100;
}

/* LatinoGothic variable font uses wght axis 1-100 instead of standard 100-900. */
.font-light { font-weight: 15; }
.font-normal { font-weight: 25; }
.font-medium { font-weight: 40; }
.font-semibold { font-weight: 55; }
.font-bold { font-weight: 70; }

/* ===== Cookie banner slide-up animation ===== */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slide-up 0.4s ease-out;
}
```

- [ ] **Step 2: Delete backup**

```bash
rm src/app/globals.css.backup
```

- [ ] **Step 3: Update layout.tsx — add font-sans variable class**

Modify `src/app/layout.tsx` — keep the Typekit link, but remove Geist fonts if shadcn added them. The layout should be:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
  description:
    "Smuteční, svatební a dárkové květiny. Součást ekosystému pohřební služby PEGAS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tkt6gli.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build compiles**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
npx next build 2>&1 | tail -20
```

Expected: Build succeeds (warnings OK, no errors).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: merge globals.css — VK design tokens + shadcn semantic tokens"
```

---

### Task 3: Migrate Button component

**Files:**
- Delete: `src/components/Button.tsx`
- Modify: `src/components/ui/button.tsx` (extend with VK variants)
- Modify: all files that import `Button` from `@/components/Button` → update import path

The shadcn Button already exists in `src/components/ui/button.tsx`. We need to customize its variants to match VK's visual design exactly, then update all imports.

- [ ] **Step 1: Customize shadcn Button with VK variants**

Overwrite `src/components/ui/button.tsx` with:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-medium transition-colors duration-300 ease-in-out cursor-pointer select-none whitespace-nowrap outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-deep-plum text-neutral-white hover:bg-deep-plum-90 border border-transparent",
        outline:
          "bg-transparent text-deep-plum border border-deep-plum hover:bg-deep-plum-10",
        ghost:
          "bg-transparent text-deep-plum underline underline-offset-4 hover:bg-neutral-50 border border-transparent",
        accent:
          "bg-plum-50 text-neutral-white hover:bg-deep-plum-70 border border-transparent",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-deep-plum underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-body",
        sm: "h-9 px-4 text-body-sm",
        md: "h-11 px-6 text-body",
        lg: "h-13 px-8 text-body-lg",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

- [ ] **Step 2: Delete old Button.tsx**

```bash
rm src/components/Button.tsx
```

- [ ] **Step 3: Update all imports and usages**

Every file that imports `Button` from `@/components/Button` or `@/components` needs updating. The import changes to `@/components/ui/button`. Also, the old `as="a"` prop pattern changes to `asChild` with a child `<a>`.

Files to update:
- `src/app/page.tsx`
- `src/app/kontakt/page.tsx`
- `src/app/kosik/page.tsx`
- `src/app/objednavka/page.tsx`
- `src/app/o-nas/page.tsx`
- `src/app/[category]/page.tsx` (if it uses Button)
- `src/app/[category]/[slug]/page.tsx` (if it uses Button)
- `src/components/index.ts`

Import change: `import { Button } from "@/components/Button"` → `import { Button } from "@/components/ui/button"`

Usage changes:
- `<Button variant="primary" ...>` → `<Button variant="default" ...>` (or just `<Button ...>`)
- `<Button variant="secondary" ...>` → `<Button variant="outline" ...>`
- `<Button variant="ghost" ...>` stays `<Button variant="ghost" ...>`
- `<Button variant="accent" ...>` stays `<Button variant="accent" ...>`
- `<Button as="a" href="/path/">Text</Button>` → `<Button asChild><a href="/path/">Text</a></Button>`

- [ ] **Step 4: Update barrel export**

In `src/components/index.ts`, remove the `Button` export line since it now lives in `ui/`.

- [ ] **Step 5: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: migrate Button to shadcn/ui with VK variants"
```

---

### Task 4: Migrate Accordion component

**Files:**
- Delete: `src/components/Accordion.tsx`
- Modify: `src/components/ui/accordion.tsx` (style to match VK)
- Modify: `src/app/[category]/[slug]/page.tsx` (update import + usage)
- Modify: `src/components/index.ts` (remove export)

- [ ] **Step 1: Read the generated shadcn accordion**

Read `src/components/ui/accordion.tsx` to understand its API and structure.

- [ ] **Step 2: Style shadcn Accordion to match VK**

The shadcn Accordion uses `AccordionItem`, `AccordionTrigger`, `AccordionContent`. Update the styling in the generated file to match VK:
- Trigger: `font-heading text-h4 leading-snug text-neutral-900 font-medium`
- Chevron: `text-plum-50`
- Content: `text-body leading-normal text-neutral-600 font-body`
- Dividers: `divide-y divide-neutral-200 border-t border-b border-neutral-200`

- [ ] **Step 3: Update product detail page usage**

In `src/app/[category]/[slug]/page.tsx`, change:
```tsx
import { Accordion } from "@/components/Accordion"
```
to:
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
```

And update the usage from:
```tsx
<Accordion items={[{title: "...", content: "..."}]} />
```
to:
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="popis">
    <AccordionTrigger>Popis</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
  ...
</Accordion>
```

- [ ] **Step 4: Delete old Accordion.tsx and update barrel export**

```bash
rm src/components/Accordion.tsx
```

Remove `export { Accordion } from "./Accordion"` from `src/components/index.ts`.

- [ ] **Step 5: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: migrate Accordion to shadcn/ui"
```

---

### Task 5: Migrate NavBar — Sheet for mobile, keep desktop inline mega menu

**Files:**
- Modify: `src/components/NavBar.tsx`
- Delete: `src/components/MegaMenu.tsx`
- Modify: `src/components/index.ts`

- [ ] **Step 1: Refactor NavBar to use shadcn Sheet for mobile overlay**

Replace the mobile fullscreen overlay div with shadcn Sheet:

```tsx
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
```

The mobile section changes from a conditional `{mobileOpen && <div className="fixed inset-0...">}` to:

```tsx
<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon-sm" className="lg:hidden" aria-label="Otevřít menu">
      {/* hamburger SVG */}
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-full sm:w-96 bg-neutral-white p-0">
    {/* existing mobile nav content */}
  </SheetContent>
</Sheet>
```

Keep the desktop mega menu as-is (inline rendered, hover-driven). The desktop mega menu works well with custom hover logic and doesn't benefit from NavigationMenu's complexity.

- [ ] **Step 2: Remove MegaMenuColumn type import**

The `NavBar.tsx` currently imports `type { MegaMenuColumn }` from `./MegaMenu`. Move that type definition inline into NavBar.tsx:

```tsx
interface MegaMenuColumn {
  heading?: string;
  links: { label: string; href: string }[];
}
```

- [ ] **Step 3: Delete MegaMenu.tsx and update barrel export**

```bash
rm src/components/MegaMenu.tsx
```

Remove `export { MegaMenu } from "./MegaMenu"` from `src/components/index.ts`.

- [ ] **Step 4: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: migrate NavBar mobile menu to shadcn Sheet, remove MegaMenu"
```

---

### Task 6: Migrate FilterBar — shadcn DropdownMenu

**Files:**
- Modify: `src/components/FilterBar.tsx`

- [ ] **Step 1: Refactor FilterBar dropdowns to use shadcn DropdownMenu**

Replace the custom `Dropdown` component with shadcn DropdownMenu:

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
```

Each filter dropdown becomes:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm" className="gap-1 border-neutral-300 text-neutral-700 hover:border-deep-plum data-[state=open]:border-deep-plum data-[state=open]:text-deep-plum">
      {displayLabel}
      {/* chevron icon */}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="min-w-[180px]">
    {options.map((option) => (
      <DropdownMenuItem
        key={option.value}
        onClick={() => setSelected(option.value)}
        className={cn(
          "cursor-pointer font-body text-body-sm",
          selected === option.value && "text-deep-plum bg-neutral-100"
        )}
      >
        {option.label}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
```

This removes all custom click-outside handling and open/close state — Radix handles it.

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate FilterBar to shadcn DropdownMenu"
```

---

### Task 7: Migrate QuantitySelector — shadcn Button + Input

**Files:**
- Modify: `src/components/QuantitySelector.tsx`

- [ ] **Step 1: Refactor using shadcn Button and Input**

```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center border border-neutral-300 w-fit">
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
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate QuantitySelector to use shadcn Button"
```

---

### Task 8: Migrate CondolenceCard — shadcn Textarea + Card

**Files:**
- Modify: `src/components/CondolenceCard.tsx`

- [ ] **Step 1: Refactor using shadcn Textarea and Card**

```tsx
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
          className="resize-none font-body text-body-sm text-neutral-800 placeholder:text-neutral-400 focus:border-deep-plum"
        />

        {text && (
          <div className="mt-3 p-3 bg-neutral-50 border border-dashed border-neutral-300">
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
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate CondolenceCard to shadcn Textarea + Card"
```

---

### Task 9: Migrate ProductCard — shadcn Badge

**Files:**
- Modify: `src/components/ProductCard.tsx`

- [ ] **Step 1: Refactor ProductCard to use shadcn Badge**

The card itself stays custom (no shadcn Card needed — it's a link-card with image overlay). But the badge switches to shadcn Badge:

```tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ... keep same interface and logic ...

// Replace badge span:
{badge && (
  <Badge className="absolute top-3 left-3 bg-deep-plum text-neutral-white text-caption font-medium px-2 py-1">
    {badge}
  </Badge>
)}
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate ProductCard badge to shadcn Badge"
```

---

### Task 10: Migrate CookieConsent — shadcn Dialog + Switch

**Files:**
- Modify: `src/components/CookieConsent.tsx`

- [ ] **Step 1: Refactor CookieConsent**

Replace the custom modal/overlay with shadcn Dialog, and the custom Toggle with shadcn Switch:

```tsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
```

Key changes:
- Outer wrapper: `<Dialog open={visible} onOpenChange={() => {}}>` with `<DialogContent>` replacing the manual positioning div
- Custom `Toggle` component → `<Switch checked={...} onCheckedChange={...} disabled={locked} />`
- The `CategoryAccordion` → shadcn `Accordion` with `AccordionItem`, keeping the Switch in the trigger area
- Keep all existing text, styling classes, and behavior
- Style the Dialog to match: bottom-right positioning, max-w-lg, bg-neutral-100
- Add `DialogTitle` for accessibility (can be visually hidden or use the existing h2)

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate CookieConsent to shadcn Dialog + Switch"
```

---

### Task 11: Migrate form pages — shadcn Input, Textarea, Select, Label

**Files:**
- Modify: `src/app/kontakt/page.tsx`
- Modify: `src/app/objednavka/page.tsx`

- [ ] **Step 1: Refactor kontakt/page.tsx**

Replace raw `<input>`, `<textarea>` with shadcn components:

```tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
```

Each form field changes from:
```tsx
<label className="block font-body text-body-sm font-medium text-neutral-800 mb-1">
  Jméno a příjmení
</label>
<input type="text" className="w-full h-11 px-4 ..." placeholder="Jan Novák" />
```
to:
```tsx
<Label className="font-body text-body-sm font-medium text-neutral-800">
  Jméno a příjmení
</Label>
<Input type="text" placeholder="Jan Novák" className="h-11 font-body text-body-sm text-neutral-900" />
```

Similarly for `<textarea>` → `<Textarea>`.

- [ ] **Step 2: Refactor objednavka/page.tsx**

Same pattern. Also replace `<select>` with shadcn Select:

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
```

```tsx
<Select>
  <SelectTrigger className="w-full h-11 font-body text-body-sm">
    <SelectValue placeholder="Vyberte typ" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="kytice">Pohřební kytice</SelectItem>
    <SelectItem value="venec">Smuteční věnec</SelectItem>
    ...
  </SelectContent>
</Select>
```

- [ ] **Step 3: Update Button imports in both files**

Change `import { Button } from "@/components/Button"` → `import { Button } from "@/components/ui/button"` and update variant names + `as="a"` → `asChild`.

- [ ] **Step 4: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: migrate form pages to shadcn Input, Textarea, Select, Label"
```

---

### Task 12: Migrate kosik/page.tsx — shadcn Separator + updated imports

**Files:**
- Modify: `src/app/kosik/page.tsx`

- [ ] **Step 1: Update imports and usage**

```tsx
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
```

Replace `<div className="border-b border-neutral-200 pb-6 mb-6">` dividers with `<Separator>`. Update Button imports and variant/asChild usage.

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: migrate cart page to shadcn Button + Separator"
```

---

### Task 13: Update custom components to use cn() utility

**Files:**
- Modify: `src/components/CategoryCard.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/SectionHeading.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/ProductGrid.tsx`
- Modify: `src/components/ProductGallery.tsx`

- [ ] **Step 1: Add cn() import and use it for class merging**

In each custom component, replace manual string concatenation with `cn()`:

```tsx
import { cn } from "@/lib/utils"
```

Example in Hero.tsx — change:
```tsx
className={`block transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
```
to:
```tsx
className={cn("block transition-all duration-300", scrolled ? "py-3" : "py-5")}
```

Apply this pattern across all conditional class combinations in these files.

- [ ] **Step 2: Update ProductGallery.tsx to use shadcn Button for thumbnails**

Replace thumbnail buttons with shadcn Button (ghost variant):

```tsx
import { Button } from "@/components/ui/button"
```

- [ ] **Step 3: Verify build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: update custom components to use cn() utility"
```

---

### Task 14: Update remaining page imports + clean up barrel export

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/o-nas/page.tsx`
- Modify: `src/app/[category]/page.tsx`
- Modify: `src/app/[category]/[slug]/page.tsx`
- Modify: `src/components/index.ts`

- [ ] **Step 1: Update all remaining Button imports in pages**

Any page still importing from `@/components/Button` → `@/components/ui/button`. Update variant names and `as="a"` → `asChild` pattern.

- [ ] **Step 2: Update [slug]/page.tsx imports**

This page uses Accordion, Button, CondolenceCard, QuantitySelector, ProductCard, ProductGallery, and Badge. Ensure all are imported from their new locations.

- [ ] **Step 3: Clean up barrel export**

Update `src/components/index.ts` to only export custom components (remove Button, Accordion, MegaMenu):

```ts
export { SectionHeading } from "./SectionHeading";
export { ProductCard } from "./ProductCard";
export { CategoryCard } from "./CategoryCard";
export { NavBar } from "./NavBar";
export { Hero } from "./Hero";
export { Footer } from "./Footer";
export { FilterBar } from "./FilterBar";
export { ProductGrid } from "./ProductGrid";
export { ProductGallery } from "./ProductGallery";
export { QuantitySelector } from "./QuantitySelector";
export { CondolenceCard } from "./CondolenceCard";
```

- [ ] **Step 4: Verify full build**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: update all page imports and clean up barrel exports"
```

---

### Task 15: Final visual verification

**Files:** None (read-only verification)

- [ ] **Step 1: Start dev server and verify homepage**

```bash
cd /Users/ondrejfolbr/Desktop/Vazby/vazbykvetin
npx next dev
```

Open `http://localhost:3000` and verify:
- Hero section renders with correct plum colors
- Category cards show with hover effects
- Product cards display correctly
- Footer renders with plum background
- NavBar shrinks on scroll
- Mobile hamburger opens Sheet sidebar

- [ ] **Step 2: Verify category and product pages**

Navigate to `/smutecni/`, `/svatebni/`, `/kytice/`. Check:
- FilterBar dropdowns open and close correctly
- Product grid loads and "Načíst další" works
- Product detail page: gallery, quantity selector, accordion all work

- [ ] **Step 3: Verify form pages**

Check `/kontakt/` and `/objednavka/`:
- Input fields styled correctly
- Select dropdowns work
- Button styling matches

- [ ] **Step 4: Verify cookie consent**

Clear localStorage `cookie-consent` key, reload, wait 5 seconds:
- Dialog appears
- Switches toggle
- Accept/Reject/Preferences all work

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: shadcn/ui migration complete — visual verification passed"
```
