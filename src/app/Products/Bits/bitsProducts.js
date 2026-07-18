export const DEFAULT_KEY_INGREDIENTS = [
  {
    title: "Probiotics",
    description: "Support oral microbiome balance and reduce harmful bacteria.",
    image: "/Products/Ingredients/virus.png",
  },
  {
    title: "Essential Oils",
    description: "Provide natural antimicrobial and anti-inflammatory benefits.",
    image: "/Products/Ingredients/natural-oil.png",
  },
  {
    title: "Xylitol",
    description: "Sugar-free sweetener that prevents cavity formation.",
    image: "/Products/Ingredients/xylitol.png",
  },
];

export const BITS_COLLECTION = {
  title: "Dental Wellness Bits",
  href: "/products/bits",
};

export const BITS_PRODUCTS = [
  {
    slug: "denta-bits-daily-dental-wellness-bits",
    title: "Denta Bits",
    image: "/Products/DentaBits/Dentabits1.png",
    banner: "/Products/DentaBits/Dentabitbg.png",
  },
];

const PRODUCT_DETAILS = {
  "denta-bits-daily-dental-wellness-bits": {
    
    tagline: "Daily probiotic dental care for fresher breath and healthier gums",
    description:
      "Denta Bits are swallow-safe dental wellness bits designed for adults, teens, diabetics, smokers, and anyone needing reliable all-day oral freshness and microbial balance.",
    benefits:
      "Up to 99% reduction in harmful bacteria. Long-lasting fresh breath. Supports gum health and reduces inflammation. Balances oral microbiome naturally. Safe for diabetics and daily long-term use.",
    howToUse:
      "Take one Denta Bit as needed for all-day oral freshness. Swallow-safe for daily use. Ideal for on-the-go oral wellness.",
    usedFor:
      "Adults, teens, diabetics, smokers, or anyone needing all-day oral freshness and microbial balance.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
};

export function getBitsProduct(slug) {
  const base = BITS_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const detail = PRODUCT_DETAILS[slug];
  if (detail) {
    return {
      ...base,
      ...detail,
      related: BITS_PRODUCTS.filter((product) => product.slug !== slug).slice(0, 4),
    };
  }

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description:
      `${base.title} is a dental wellness bit designed to support oral hygiene.`,
    howToUse:
      "Take one Denta Bit as needed for all-day oral freshness.",
    benefits:
      "Supports oral health with probiotics and essential oils for reduced harmful bacteria and fresher breath.",
    usedFor: "",
    contactEmail: "reachthebest@hetafu.com",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    related: BITS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllBitsProductSlugs() {
  return BITS_PRODUCTS.map((product) => product.slug);
}
