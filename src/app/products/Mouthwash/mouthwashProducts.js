import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const MOUTHWASH_COLLECTION = {
  title: "MOUTHWASH",
  href: "/products/mouthwash",
};

export const MOUTHWASH_PRODUCTS = [
  {
    slug: "cute-mouthwash-liquid",
    title: "CUTE Mouthwash (Liquid)",
    image: `/Products/CuteMouthwash/Cute.png`,
    banner: "/Products/CuteMouthwash/MouthwashBg.png",
  },
  {
    slug: "cute-mouthwash-powder",
    title: "CUTE Mouthwash (Powder)",
    image: `/Products/CuteMouthwash/cutetablets.png`,
    banner: "/Products/CuteMouthwash/mouthwashBGpowder.png",
  },
];

const PRODUCT_DETAILS = {
  "cute-mouthwash-liquid": {
    tagline: "Edible, pH-neutral probiotic mouthwash gentle enough for kids, effective for all",
    description:
      "CUTE Mouthwash is a clinically designed, edible probiotic mouthwash that protects enamel, supports oral microbiome balance, and freshens breath without burning or harsh chemicals.",
    benefits:
      "Freshen breath, Reduce harmful bacteria, Protect enamel from acid damage, Support gum comfort and moisture, Maintain oral microbiome balance. Kid-friendly taste with dentist-approved formulation. Alcohol-free and chemical-free with neutral pH 7.62 to protect enamel.",
    howToUse:
      "Rinse mouth daily with CUTE Mouthwash for 30-60 seconds. Safe to swallow. Ideal for braces, aligners, and sensitive mouths.",
    usedFor:
      "Children and adults seeking a dentist-approved, pH-neutral mouthwash. Preserves beneficial oral bacteria. Safe to swallow.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
  "cute-mouthwash-powder": {
    tagline: "Edible, pH-neutral probiotic mouthwash gentle enough for kids, effective for all",
    description:
      "CUTE Mouthwash is a clinically designed, edible probiotic mouthwash that protects enamel, supports oral microbiome balance, and freshens breath without burning or harsh chemicals.",
    benefits:
      "Freshen breath, Reduce harmful bacteria, Protect enamel from acid damage, Support gum comfort and moisture, Maintain oral microbiome balance. Kid-friendly taste with dentist-approved formulation. Alcohol-free and chemical-free with neutral pH 7.62 to protect enamel.",
    howToUse:
      "Mix powder with water to desired consistency and rinse mouth daily for 30-60 seconds. Safe to swallow. Ideal for braces, aligners, and sensitive mouths.",
    usedFor:
      "Children and adults seeking a dentist-approved, pH-neutral mouthwash. Preserves beneficial oral bacteria. Safe to swallow.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
};

export function getMouthwashProduct(slug) {
  const base = MOUTHWASH_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const detail = PRODUCT_DETAILS[slug];
  if (detail) {
    return {
      ...base,
      ...detail,
      related: MOUTHWASH_PRODUCTS.filter((product) => product.slug !== slug).slice(0, 4),
    };
  }

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description:
      `${base.title} is a dentist-approved, edible probiotic mouthwash designed to support oral hygiene.`,
    howToUse:
      "Rinse mouth daily with CUTE Mouthwash for 30-60 seconds. Safe to swallow.",
    benefits:
      "Supports oral health with probiotics and essential oils for reduced harmful bacteria and fresher breath.",
    usedFor: "",
    contactEmail: "reachthebest@hetafu.com",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    related: MOUTHWASH_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllMouthwashProductSlugs() {
  return MOUTHWASH_PRODUCTS.map((product) => product.slug);
}