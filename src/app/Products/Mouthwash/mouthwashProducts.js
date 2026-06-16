import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const MOUTHWASH_COLLECTION = {
  title: "MOUTHWASH",
  href: "/Products/mouthwash",
};

export const MOUTHWASH_PRODUCTS = [
  {
    slug: "cute-mouthwash-liquid",
    title: "CUTE Mouthwash Edible Probiotic Mouthwash (Liquid)",
    image: `/Products/CuteMouthwash/Cute.png`,
  },
  {
    slug: "cute-mouthwash-powder",
    title: "CUTE Mouthwash Edible Probiotic Mouthwash (Powder)",
    image: `/Products/CuteMouthwash/Cute.png`,
  },
];

const PRODUCT_DETAILS = {
  "cute-mouthwash-liquid": {
    tagline: "Edible, pH-neutral probiotic mouthwash gentle enough for kids, effective for all",
    description:
      "CUTE Mouthwash is a clinically designed, edible probiotic mouthwash that protects enamel, supports oral microbiome balance, and freshens breath without burning or harsh chemicals. Traditional mouthwashes often rely on alcohol and acidic ingredients that irritate the mouth and disrupt good bacteria. CUTE Mouthwash uses a pH-neutral blend of probiotics, prebiotics, essential oils, and enamel-supporting minerals.",
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
      "CUTE Mouthwash is a clinically designed, edible probiotic mouthwash that protects enamel, supports oral microbiome balance, and freshens breath without burning or harsh chemicals. Traditional mouthwashes often rely on alcohol and acidic ingredients that irritate the mouth and disrupt good bacteria. CUTE Mouthwash uses a pH-neutral blend of probiotics, prebiotics, essential oils, and enamel-supporting minerals.",
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
    return { ...base, ...detail, gallery: [base.image], banner: base.image };
  }

  return {
    ...base,
    banner: base.image,
    gallery: [base.image],
    tagline: `For versatile styling with ${base.title}`,
    description: `${base.title} helps you create versatile looks with high-performing styling formulas infused with antioxidant-rich argan oil.`,
    howToUse:
      "Apply to damp or dry hair as desired. Work through sections and style to finish.",
    benefits:
      "Provides flexible hold, texture, and shine while nourishing hair with argan oil.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    featureImage: null,
    related: MOUTHWASH_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllMouthwashProductSlugs() {
  return MOUTHWASH_PRODUCTS.map((product) => product.slug);
}
