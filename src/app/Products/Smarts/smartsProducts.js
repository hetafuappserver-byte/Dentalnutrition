import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const SMARTS_COLLECTION = {
  title: "Moroccanoil Treatment",
  href: "/Products/smarts",
};

export const SMARTS_PRODUCTS = [
  {
    slug: "moroccanoil-treatment",
    title: "Moroccanoil Treatment",
    image: `${CDN}/Artboard_1_862b9a9a-615d-4304-9103-028b20b37388.png?v=1767901142&width=600`,
  },
  {
    slug: "moroccanoil-treatment-light",
    title: "Moroccanoil Treatment Light",
    image: `${CDN}/Artboard_1_39520b80-778b-4d6a-962d-61715d2c24fe.png?v=1767901223&width=600`,
  },
  {
    slug: "moroccanoil-treatment-purple",
    title: "Moroccanoil Treatment Purple",
    image: `${CDN}/Artboard_1_95c7a14b-1815-42e3-a187-d5725dd5c813.png?v=1767901383&width=600`,
  },
  {
    slug: "moroccanoil-treatment-mist",
    title: "Moroccanoil Treatment Mist",
    image: `${CDN}/Artboard_1.png?v=1767900992&width=600`,
  },
];

const MOROCCANOIL_TREATMENT_DETAIL = {
  banner: `${CDN}/Artboard_3_cdd001f2-4689-4b19-b36a-40fa24dd2317.png?v=1767901154&width=1920`,
  gallery: [
    `${CDN}/Artboard_1_862b9a9a-615d-4304-9103-028b20b37388.png?v=1767901142&width=1200`,
    `${CDN}/Artboard_3_cdd001f2-4689-4b19-b36a-40fa24dd2317.png?v=1767901154&width=1200`,
  ],
  tagline: "For clients with all hair types",
  description:
    "Smooth frizz, boost shine, nourish hair, and more with our best-selling Moroccanoil Treatment, rated the #1 haircare oil in the US. Infused with argan oil and shine-boosting vitamins, this completely transformative, fast-absorbing hair treatment works on damp or dry hair and can be used as a conditioning, styling, and finishing tool.",
  howToUse:
    "Dispense and massage a small amount between the palms. On damp or dry hair, apply globally from mid-lengths through ends.",
  benefits:
    "Infused with antioxidant-rich argan oil and shine-boosting vitamins, this completely transformative hair treatment detangles, speeds up drying time and boosts shine—leaving you with nourished, manageable, and smooth hair with each use.",
  ingredients: DEFAULT_KEY_INGREDIENTS,
  featureImage: null,
  related: SMARTS_PRODUCTS.filter(
    (product) => product.slug !== "moroccanoil-treatment",
  ).slice(0, 4),
};

const PRODUCT_DETAILS = {
  "moroccanoil-treatment": MOROCCANOIL_TREATMENT_DETAIL,
};

export function getSmartsProduct(slug) {
  const base = SMARTS_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const detail = PRODUCT_DETAILS[slug];
  if (detail) {
    return { ...base, ...detail };
  }

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description: `${base.title} is part of our signature oil-infused hair care collection—the perfect foundation for all hair care.`,
    howToUse:
      "Dispense and massage a small amount between the palms. On damp or dry hair, apply globally from mid-lengths through ends.",
    benefits:
      "Infused with antioxidant-rich argan oil to nourish, detangle, and boost shine for healthier-looking hair.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    featureImage: null,
    related: SMARTS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllSmartsProductSlugs() {
  return SMARTS_PRODUCTS.map((product) => product.slug);
}