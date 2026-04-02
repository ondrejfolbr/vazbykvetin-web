export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  badge: string | null;
  description: string;
  image: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const rawProducts = [
  { id: 1, name: "Smuteční kytice Klid", price: 1490, category: "smutecni", badge: null, image: "/images/prod-smutecni-klid.jpg" },
  { id: 2, name: "Věnec Vzpomínka", price: 2890, category: "smutecni", badge: null, image: "/images/prod-venec-vzpominka.jpg" },
  { id: 3, name: "Kytice na rakev Ticho", price: 3490, category: "smutecni", badge: null, image: "/images/prod-rakev-ticho.jpg" },
  { id: 4, name: "Kytice na urnu Světlo", price: 1290, category: "smutecni", badge: null, image: "/images/prod-urna-svetlo.jpg" },
  { id: 5, name: "Svatební kytice Harmonie", price: 2490, category: "svatebni", badge: "Oblíbené", image: "/images/prod-svatebni-harmonie.jpg" },
  { id: 6, name: "Svatební kytice Ranní rosa", price: 1990, category: "svatebni", badge: null, image: "/images/prod-svatebni-rosa.jpg" },
  { id: 7, name: "Dekorace obřadu Elegance", price: 4990, category: "svatebni", badge: null, image: "/images/prod-dekorace-elegance.jpg" },
  { id: 8, name: "Kytice Sluneční den", price: 890, category: "kytice", badge: "Novinka", image: "/images/prod-slunecni-den.jpg" },
  { id: 9, name: "Kytice Polní sen", price: 790, category: "kytice", badge: null, image: "/images/prod-polni-sen.jpg" },
  { id: 10, name: "VK BOX — měsíční předplatné", price: 1290, category: "kytice", badge: "Předplatné", image: "/images/prod-vk-box.jpg" },
  { id: 11, name: "Firemní kytice Profesionál", price: 1590, category: "kytice", badge: null, image: "/images/prod-firemni.jpg" },
  { id: 12, name: "Sezónní — Dušičky", price: 990, category: "kytice", badge: "Sezónní", image: "/images/prod-dusicky.jpg" },
];

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: toSlug(p.name),
  description:
    "Ručně vázaná kompozice z čerstvých květin. Každá kytice je originál připravený s péčí a citem pro detail.",
  image: p.image,
}));

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .slice(0, limit);
}

export const categoryMeta: Record<string, { title: string; description: string }> = {
  smutecni: {
    title: "Smuteční květiny",
    description: "S respektem a pochopením. Smuteční kytice, věnce a dekorace pro důstojné rozloučení.",
  },
  svatebni: {
    title: "Svatební květiny",
    description: "Pro váš den. Svatební kytice, dekorace obřadu a doplňky pro nezapomenutelný okamžik.",
  },
  kytice: {
    title: "Kytice & Dárky",
    description: "Když slova nestačí. Dárkové kytice, sezónní nabídky a květinové předplatné.",
  },
};

export interface Subcategory {
  slug: string;
  category: string;
  title: string;
  description: string;
  productIds: number[];
}

export const subcategories: Subcategory[] = [
  // Smuteční
  { slug: "kytice", category: "smutecni", title: "Pohřební kytice", description: "Ručně vázané pohřební kytice z čerstvých květin. Doručíme expresně do 4 hodin v Praze.", productIds: [1] },
  { slug: "vence", category: "smutecni", title: "Smuteční věnce", description: "Tradiční i moderní smuteční věnce. Každý věnec je originál připravený s úctou a péčí.", productIds: [2] },
  { slug: "rakev", category: "smutecni", title: "Kytice na rakev", description: "Květinové kompozice na rakev v různých velikostech a barevných variantách.", productIds: [3] },
  { slug: "urna", category: "smutecni", title: "Kytice na urnu", description: "Delikátní květinové aranžmá na urnu. Menší formáty s důrazem na detail.", productIds: [4] },
  { slug: "dekorace", category: "smutecni", title: "Pietní dekorace", description: "Květinové dekorace pro pietní místa, obřadní síně a domácí vzpomínkové prostory.", productIds: [1, 3] },
  { slug: "kose", category: "smutecni", title: "Květinové koše", description: "Smuteční květinové koše — elegantní forma posledního pozdravu.", productIds: [2, 4] },
  // Svatební
  { slug: "kytice", category: "svatebni", title: "Svatební kytice", description: "Svatební kytice pro nevěstu i družičky. Od klasických po moderní styly.", productIds: [5, 6] },
  { slug: "dekorace", category: "svatebni", title: "Dekorace obřadu", description: "Květinová výzdoba obřadu, slavobrány, výzdoba lavic a oltáře.", productIds: [7] },
  { slug: "doplnky", category: "svatebni", title: "Svatební doplňky", description: "Korsáže, květinové náramky, věnečky do vlasů a další svatební doplňky.", productIds: [5, 6, 7] },
  // Kytice & Dárky
  { slug: "narozeniny", category: "kytice", title: "Narozeninové kytice", description: "Kytice k narozeninám plné barev a radosti. Překvapte své blízké.", productIds: [8, 9] },
  { slug: "sezonni", category: "kytice", title: "Sezónní květiny", description: "Aktuální sezónní nabídka — květiny, které právě kvetou a jsou nejkrásnější.", productIds: [12, 8] },
  { slug: "firemni", category: "kytice", title: "Firemní květiny", description: "Pravidelné dodávky čerstvých květin do kanceláří, hotelů a restaurací.", productIds: [11] },
  { slug: "predplatne", category: "kytice", title: "VK BOX — Předplatné", description: "Měsíční předplatné čerstvých květin. Každý měsíc nová sezónní kytice až k vám domů.", productIds: [10] },
];

export function getSubcategory(category: string, slug: string): Subcategory | undefined {
  return subcategories.find((s) => s.category === category && s.slug === slug);
}

export function getSubcategoryProducts(sub: Subcategory): Product[] {
  return sub.productIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean);
}

export function getAllSubcategoryParams(): { category: string; slug: string }[] {
  return subcategories.map((s) => ({ category: s.category, slug: s.slug }));
}
