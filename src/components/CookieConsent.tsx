"use client";

import { useState, useEffect } from "react";

interface CookieCategory {
  id: string;
  label: string;
  description: string;
  locked?: boolean;
  defaultEnabled?: boolean;
}

const cookieCategories: CookieCategory[] = [
  {
    id: "functional",
    label: "Funkční cookies",
    description:
      "Nutné cookies a služby jsou zásadní pro správné fungování a zobrazení webové stránky, umožňují základní navigaci či vyplňování formulářů nebo přihlašování do zabezpečených sekcí.",
    locked: true,
    defaultEnabled: true,
  },
  {
    id: "analytics",
    label: "Analytické",
    description:
      "Analytické soubory cookie a související služby jsou užitečné při sledování počtu návštěvníků a zjišťování zdrojů provozu, což nám umožňuje neustále zlepšovat výkon našeho webu.",
  },
  {
    id: "marketing",
    label: "Marketingové",
    description:
      "Někteří z našich reklamních partnerů mohou nastavovat soubory cookie na našich webových stránkách. Udělením souhlasu můžeme cookies nebo další osobní informace (telefonní číslo, e-mail nebo adresa) využít k vytváření profilů založených na vašich zájmech a následnému zobrazování relevantní reklamy i na jiných webových stránkách prostřednictvím reklamních systémů jako je Meta Ads, Google Ads a Sklik.",
  },
];

function Toggle({
  checked,
  locked,
  onChange,
}: {
  checked: boolean;
  locked?: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={locked}
      onClick={() => !locked && onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200 ${
        locked
          ? "bg-deep-plum cursor-default"
          : checked
            ? "bg-deep-plum cursor-pointer"
            : "bg-neutral-300 cursor-pointer"
      }`}
    >
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {checked && (
          <svg className="h-3 w-3 text-deep-plum" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        )}
        {!checked && (
          <svg className="h-3 w-3 text-neutral-500" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </span>
    </button>
  );
}

function CategoryAccordion({
  category,
  enabled,
  expanded,
  onToggle,
  onExpand,
}: {
  category: CookieCategory;
  enabled: boolean;
  expanded: boolean;
  onToggle: (val: boolean) => void;
  onExpand: () => void;
}) {
  return (
    <div className="border border-neutral-300 rounded-sm">
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={onExpand}
          className="shrink-0 cursor-pointer"
          aria-label={expanded ? "Sbalit" : "Rozbalit"}
        >
          <svg
            className={`h-4 w-4 text-neutral-600 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <button
          type="button"
          onClick={onExpand}
          className="flex-1 text-left font-body text-body font-medium text-neutral-900 cursor-pointer"
        >
          {category.label}
        </button>
        <div className="flex items-center gap-2">
          {category.locked && (
            <span className="font-body text-caption font-medium text-deep-plum bg-deep-plum/10 px-2 py-0.5 rounded-full">
              Vždy aktivní
            </span>
          )}
          <Toggle checked={enabled} locked={category.locked} onChange={onToggle} />
        </div>
      </div>
      {expanded && (
        <div className="px-4 pb-4 pt-1">
          <p className="font-body text-body-sm text-neutral-600 leading-relaxed">
            {category.description}
          </p>
        </div>
      )}
    </div>
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    const all = { functional: true, analytics: true, marketing: true };
    localStorage.setItem("cookie-consent", JSON.stringify(all));
    setVisible(false);
  }

  function handleReject() {
    const minimal = { functional: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(minimal));
    setVisible(false);
  }

  function handleSavePreferences() {
    localStorage.setItem("cookie-consent", JSON.stringify({ ...preferences, functional: true }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-end p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 pointer-events-auto"
        onClick={() => {}}
      />

      {/* Cookie banner */}
      <div className="relative pointer-events-auto w-full max-w-lg bg-neutral-100 rounded-sm shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto">
        {/* Main content */}
        <div className="p-6 sm:p-8">
          {!showPreferences ? (
            <>
              <h2 className="font-heading text-h3 font-medium text-neutral-900 leading-tight">
                Cookies a zpracování osobních údajů
              </h2>
              <div className="mt-4 space-y-3">
                <p className="font-body text-body-sm text-neutral-700 leading-relaxed">
                  Pro personalizaci obsahu, reklamy a pro analytické účely využíváme soubory cookie a další služby.
                </p>
                <p className="font-body text-body-sm text-neutral-700 leading-relaxed">
                  Informace o vašem používání webu sdílíme s partnery, kteří je mohou kombinovat s dalšími údaji vlivem využívání jejich služeb.
                </p>
                <p className="font-body text-body-sm text-neutral-700 leading-relaxed">
                  Kliknutím na „Souhlasím" nám udělujete povolení ke zpracování osobních údajů a cookies za účelem personalizovaného obsahu, reklamy a analytiky.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-h4 font-medium text-neutral-900">
                  Nastavení preferencí cookies
                </h2>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                  aria-label="Zpět"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
              </div>

              <h3 className="font-body text-body font-medium text-neutral-900 mb-2">
                Proč používáme Cookies
              </h3>
              <p className="font-body text-body-sm text-neutral-700 leading-relaxed mb-6">
                Pro personalizaci obsahu, reklamy a pro analytické účely využíváme soubory cookie a další služby. Informace o vašem používání webu sdílíme s partnery, kteří je mohou kombinovat s dalšími údaji vlivem využívání jejich služeb. Kliknutím na „Souhlasím" nám udělujete povolení ke zpracování osobních údajů a cookies za účelem personalizovaného obsahu, reklamy a analytiky.
              </p>

              <div className="space-y-3">
                {cookieCategories.map((cat) => (
                  <CategoryAccordion
                    key={cat.id}
                    category={cat}
                    enabled={preferences[cat.id] ?? false}
                    expanded={expandedCategory === cat.id}
                    onToggle={(val) =>
                      setPreferences((prev) => ({ ...prev, [cat.id]: val }))
                    }
                    onExpand={() =>
                      setExpandedCategory(expandedCategory === cat.id ? null : cat.id)
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 px-6 sm:px-8 py-4 border-t border-neutral-200">
          <button
            type="button"
            onClick={() => {
              if (showPreferences) {
                handleSavePreferences();
              } else {
                setShowPreferences(true);
              }
            }}
            className="font-body text-body-sm font-medium text-neutral-900 hover:text-deep-plum transition-colors cursor-pointer"
          >
            {showPreferences ? "Uložit preference" : "Upravit preference"}
          </button>
          <div className="flex-1" />
          <button
            type="button"
            onClick={handleReject}
            className="font-body text-body-sm font-medium text-neutral-900 hover:text-deep-plum transition-colors cursor-pointer"
          >
            Odmítám
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="font-body text-body-sm font-medium text-neutral-white bg-deep-plum hover:bg-deep-plum-90 px-6 py-2.5 rounded-sm transition-colors cursor-pointer"
          >
            Souhlasím
          </button>
        </div>

        {/* Footer links */}
        {!showPreferences && (
          <div className="flex items-center gap-6 px-6 sm:px-8 py-3 border-t border-neutral-200 bg-neutral-200/50">
            <a
              href="/informace-o-vyuziti-cookies"
              className="font-body text-caption font-medium text-neutral-900 hover:text-deep-plum transition-colors"
            >
              Informace o využití cookies
            </a>
            <a
              href="/zpracovani-osobnich-udaju"
              className="font-body text-caption font-medium text-neutral-900 hover:text-deep-plum transition-colors"
            >
              Zpracování osobních údajů
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
