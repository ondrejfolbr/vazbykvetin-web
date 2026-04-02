# Vazby Květin — shadcn/ui Migration Spec

## Goal

Migrate the existing vazbykvetin Next.js project to use shadcn/ui as the component foundation. Initialize with preset `b2VU3GJYB` (radix-maia style, mauve base, radius 0, remixicon). Replace custom components with shadcn primitives where applicable. **Zero visual changes** — the site must look identical before and after.

---

## 1. shadcn Initialization

Run in `vazbykvetin/`:
```bash
npx shadcn@latest init --preset b2VU3GJYB --template next
```

This adds:
- `components.json` config
- `src/components/ui/button.tsx` (starter)
- `src/lib/utils.ts` (`cn()` utility)
- Dependencies: `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `shadcn`, `@remixicon/react`
- Modifies `globals.css` with shadcn theme tokens

**Post-init**: merge the generated `globals.css` with the existing one — keep ALL existing VK tokens and overrides, layer shadcn's semantic tokens underneath.

---

## 2. Color Mapping

Map shadcn semantic tokens to existing VK palette values. Convert hex to oklch for consistency with shadcn's system.

| shadcn token | VK value | oklch approximation |
|---|---|---|
| `--primary` | deep-plum #522953 | `oklch(0.298 0.09 320)` |
| `--primary-foreground` | white #FFFFFF | `oklch(1 0 0)` |
| `--secondary` | gray-100 #F5F4F4 | `oklch(0.965 0.002 325)` |
| `--secondary-foreground` | gray-900 #1A1718 | `oklch(0.15 0.008 326)` |
| `--muted` | deep-plum-10 #F3EEF3 | `oklch(0.955 0.01 325)` |
| `--muted-foreground` | gray-600 #6B6769 | `oklch(0.5 0.01 325)` |
| `--accent` | plum-10 #EDE6F3 | `oklch(0.935 0.025 300)` |
| `--accent-foreground` | deep-plum #522953 | `oklch(0.298 0.09 320)` |
| `--destructive` | error #C62828 | `oklch(0.5 0.2 27)` |
| `--background` | white #FFFFFF | `oklch(1 0 0)` |
| `--foreground` | black #090708 | `oklch(0.1 0.005 326)` |
| `--card` | white #FFFFFF | `oklch(1 0 0)` |
| `--card-foreground` | black #090708 | `oklch(0.1 0.005 326)` |
| `--popover` | white #FFFFFF | `oklch(1 0 0)` |
| `--popover-foreground` | black #090708 | `oklch(0.1 0.005 326)` |
| `--border` | gray-200 #E8E6E7 | `oklch(0.925 0.005 325)` |
| `--input` | gray-200 #E8E6E7 | `oklch(0.925 0.005 325)` |
| `--ring` | plum-30 #C4AEDA | `oklch(0.76 0.07 300)` |
| `--chart-1` through `--chart-5` | plum gradient from plum-30 to deep-plum | derived from palette |

Keep all existing VK custom properties (`--color-primary-*`, `--color-accent-*`, `--color-neutral-*`, etc.) alongside shadcn tokens for backward compatibility during migration.

---

## 3. Component Migration Map

### 3.1 Full replacement with shadcn

| Current component | shadcn component(s) | Notes |
|---|---|---|
| `Button.tsx` | `shadcn/button` | Remap variants: primary→default, secondary→outline, ghost→ghost, accent→secondary. Add `asChild` for link usage. Keep sm/md/lg sizing via custom CVA extension. |
| `Accordion.tsx` | `shadcn/accordion` | Direct replacement. Style trigger/content to match current look. |
| `FilterBar.tsx` dropdowns | `shadcn/dropdown-menu` or `shadcn/select` | Replace custom dropdown state management with Radix primitives. |
| `QuantitySelector.tsx` | `shadcn/button` + `shadcn/input` | Compose from shadcn Button (icon variant) + number input. |
| `CookieConsent.tsx` | `shadcn/dialog` + `shadcn/switch` + `shadcn/accordion` | Use Dialog for modal behavior, Switch for toggle controls, Accordion for category details. |
| `CondolenceCard.tsx` | `shadcn/textarea` + `shadcn/card` | Textarea for input, Card for preview wrapper. |

### 3.2 Partial integration (use shadcn primitives inside)

| Current component | shadcn primitives used | Notes |
|---|---|---|
| `NavBar.tsx` | `shadcn/sheet` (mobile), `shadcn/navigation-menu` (desktop) | Mobile hamburger menu → Sheet. Desktop mega menu → NavigationMenu with custom content. |
| `MegaMenu.tsx` | `shadcn/navigation-menu` | Absorb into NavBar's NavigationMenu content. MegaMenu.tsx can be deleted. |
| `ProductCard.tsx` | `shadcn/card` + `shadcn/badge` | Card wrapper, Badge for product badges. |
| `ProductGallery.tsx` | `shadcn/button` | Thumbnail buttons use shadcn Button (ghost/outline). |
| Contact/Order forms | `shadcn/input` + `shadcn/textarea` + `shadcn/select` + `shadcn/label` | Replace raw `<input>`, `<textarea>`, `<select>` with shadcn form components. |
| Cart page | `shadcn/button` + `shadcn/separator` + `shadcn/input` | Use shadcn primitives for cart controls. |

### 3.3 Remain custom (no shadcn equivalent)

| Component | Reason |
|---|---|
| `Hero.tsx` | Full-bleed hero with parallax — no shadcn match. Use `cn()`. |
| `CategoryCard.tsx` | Custom 3:4 aspect card with overlay — no shadcn match. Use `cn()`. |
| `SectionHeading.tsx` | Simple heading pattern — not worth shadcn overhead. Use `cn()`. |
| `Footer.tsx` | Layout component — no shadcn match. Use `cn()`. |
| `ProductGrid.tsx` | Grid with load-more logic — stays custom. Use `cn()`. |

---

## 4. shadcn Components to Install

```bash
npx shadcn@latest add accordion badge button card dialog dropdown-menu input label navigation-menu select separator sheet switch textarea
```

---

## 5. globals.css Strategy

The merged `globals.css` structure:

```
1. @import "tailwindcss"
2. @import "tw-animate-css"
3. @import "shadcn/tailwind.css"
4. @custom-variant dark (&:is(.dark *))
5. @font-face for LatinoGothic Variable
6. @theme inline { ... }          ← merged: shadcn layout tokens + VK custom tokens
7. :root { ... }                  ← shadcn semantic vars with VK color values
8. .dark { ... }                  ← dark mode (keep from preset, adjust later if needed)
9. @layer base { ... }            ← shadcn base + VK typography/spacing utilities
10. VK custom utility classes     ← .text-display-xl, .text-h1, etc.
11. VK overrides                  ← border-radius: 0 !important, font weight mappings, etc.
```

Key decisions:
- **Keep** all VK `@theme inline` tokens (custom colors, spacing, typography)
- **Add** shadcn's semantic token mappings (`--color-background: var(--background)`, etc.)
- **Replace** shadcn's default oklch values in `:root` with VK palette equivalents
- **Keep** `--radius: 0` (already matches VK's sharp corner design)
- **Keep** LatinoGothic font-face and weight mappings
- **Keep** all VK utility classes (`.text-display-xl`, etc.)

---

## 6. Font Integration

Current: LatinoGothic (Adobe Typekit + self-hosted otf), DM Sans not actually loaded.
shadcn default: Geist + Geist Mono.

Decision:
- **Replace** Geist with LatinoGothic for `--font-sans` / `--font-heading`
- **Keep** Geist Mono or replace with JetBrains Mono for `--font-mono` (prices, codes)
- Keep Adobe Typekit `<link>` in layout.tsx
- Keep self-hosted `@font-face` in globals.css

---

## 7. File Structure After Migration

```
src/
├── app/
│   ├── globals.css          ← merged shadcn + VK tokens
│   ├── layout.tsx           ← updated with fonts
│   ├── page.tsx             ← homepage (updated imports)
│   ├── [category]/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── kontakt/page.tsx     ← shadcn form components
│   ├── kosik/page.tsx       ← shadcn primitives
│   ├── objednavka/page.tsx  ← shadcn form components
│   └── o-nas/page.tsx
├── components/
│   ├── ui/                  ← shadcn components (auto-generated)
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── switch.tsx
│   │   └── textarea.tsx
│   ├── CategoryCard.tsx     ← custom, uses cn()
│   ├── CookieConsent.tsx    ← refactored with shadcn Dialog/Switch/Accordion
│   ├── CondolenceCard.tsx   ← refactored with shadcn Textarea/Card
│   ├── FilterBar.tsx        ← refactored with shadcn Select/DropdownMenu
│   ├── Footer.tsx           ← custom, uses cn()
│   ├── Hero.tsx             ← custom, uses cn()
│   ├── NavBar.tsx           ← refactored with shadcn Sheet/NavigationMenu
│   ├── ProductCard.tsx      ← refactored with shadcn Card/Badge
│   ├── ProductGallery.tsx   ← uses shadcn Button for thumbnails
│   ├── ProductGrid.tsx      ← custom, uses cn()
│   ├── QuantitySelector.tsx ← refactored with shadcn Button/Input
│   ├── SectionHeading.tsx   ← custom, uses cn()
│   └── index.ts             ← barrel export (updated)
└── lib/
    ├── products.ts          ← unchanged
    └── utils.ts             ← shadcn cn() utility
```

**Deleted**: `MegaMenu.tsx` (absorbed into NavBar's NavigationMenu)

---

## 8. Migration Rules

1. **No visual changes** — pixel-perfect match with current site
2. **One component at a time** — migrate, verify, move on
3. **Keep existing class names working** — don't break VK utility classes
4. **All shadcn components go in `src/components/ui/`**
5. **Custom components stay in `src/components/`** — use `cn()` for class merging
6. **Remove the old `Button.tsx`** custom component — replace with shadcn Button + VK variant extensions
7. **Remove `MegaMenu.tsx`** — functionality moves into NavBar with NavigationMenu
8. **Existing `src/lib/products.ts`** — untouched
9. **Preserve all page routes and SSG** — `generateStaticParams()` stays
10. **Keep Adobe Typekit link** in layout.tsx head
