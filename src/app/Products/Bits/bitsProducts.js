const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const BITS_COLLECTION = {
  title: "Dental Wellness Bits",
  href: "/Products/bits",
  description:
    "Promote your pet's oral health with our delicious and effective dental wellness bits.",
};

export const BITS_PRODUCTS = [
  {
    slug: "denta-bits-daily-dental-wellness-bits",
    title: "Denta Bits",
    image: "/Products/DentaBits/Dentabits1.png",
  },
];

export const DEFAULT_KEY_INGREDIENTS = [
  {
    title: "Argan Oil",
    image: `${CDN}/Argan_Oil.svg?v=1766419011&width=300`,
    description:
      "The deep roots and small leaves of the argan tree allow it to resist arid winds and water loss, resulting in a nut with a uniquely rich oil concentration. Rich in essential fatty acids, antioxidants and Vitamin E, argan oil is an age-old beauty secret that has many uses, helping to hydrate and soften your hair, skin and nails.",
  },
  {
    title: "Lavender, Rosemary, Chamomile and Jojoba Extracts",
    image: `${CDN}/Lavender_Rosemary_Chamomile_and_Jojoba_Extracts.svg?v=1771423938&width=300`,
    description: "Natural plant extracts that provide nourishment to the hair.",
  },
  {
    title: "Keratin",
    image: `${CDN}/Keratin.svg?v=1771423937&width=300`,
    description: "A structural protein that rebuilds and strengthens the hair.",
  },
  {
    title: "Panthenol",
    image: `${CDN}/Squalane.svg?v=1762284144&width=300`,
    description:
      "a form of Vitamin B5 that hydrates and imparts a glossy finish.",
  },
];

const CLARIFYING_SHAMPOO_DETAIL = {
  banner: `${CDN}/Artboard_2_b269a1f8-6884-43de-b4f0-7e8bbcec3123.png?v=1767904478&width=1920`,
  gallery: [
    `${CDN}/Artboard_1_eaaab28c-55a5-4809-b5b7-f87c94dcac1c.png?v=1767904478&width=1200`,
    `${CDN}/Artboard_3_98c86b3a-d45c-42b8-9122-35676a40a1ed.png?v=1767904479&width=1200`,
  ],
  tagline: "For clients with hair burdened by buildup",
  description:
    "Moroccanoil Clarifying Shampoo cleanses and removes everyday buildup to reset the hair and scalp. It creates a clean canvas for styling and finishing products to be effective.",
  howToUse:
    "Massage shampoo through wet hair and scalp. Rinse thoroughly and towel-dry. Apply an appropriate Moroccanoil conditioner from mid-lengths through ends and allow to remain on hair 1–2 minutes. Rinse thoroughly.",
  benefits:
    "Rich in argan and avocado oils, keratin, lavender, chamomile and jojoba extracts, this clarifying shampoo nourishes your hair while gently cleansing impurities away.",
  ingredients: DEFAULT_KEY_INGREDIENTS,
  featureImage: `${CDN}/Artboard_4_16.png?v=1771341148&width=1400`,
  related: [
    {
      slug: "purifying-scrub",
      title: "Purifying Scrub",
      image: `${CDN}/Purifying-Scrub-1024x1024.png?v=1762287466&width=500`,
    },
    {
      slug: "revitalizing-scalp-tonic",
      title: "Revitalizing Scalp Tonic",
      image: `${CDN}/Scalp-Product-Image.png?v=1762287413&width=500`,
    },
    {
      slug: "scalp-balancing-shampoo-and-conditioner",
      title: "Scalp Balancing Shampoo and Conditioner",
      image: `${CDN}/Scalp-Shampoo-Conditioner-1024x1024.png?v=1762287599&width=500`,
    },
    {
      slug: "restorative-hair-mask",
      title: "Restorative Hair Mask",
      image: `${CDN}/Artboard_1_1d808cff-99b4-42e3-a2a9-4197c26972df.png?v=1767904845&width=500`,
    },
  ],
};

const DENTA_BITS_DETAIL = {
  banner: "/Products/DentaBits/Dentabits1.png",
  gallery: [
    "/Products/DentaBits/Dentabits1.png",
  ],
  tagline: "Daily probiotic dental care for fresher breath and healthier gums",
  description:
    "Denta Bits are swallow-safe dental wellness bits designed for adults, teens, diabetics, smokers, and anyone needing reliable all-day oral freshness and microbial balance. Unlike mints or chewing gum that only mask odour, Denta Bits support oral health at the microbial level. The probiotic and essential oil formulation helps reduce harmful bacteria, support saliva flow, lower plaque and gum swelling, refresh breath without chemicals, and improve dryness related to smoking or stress. Portable and dentist-approved, Denta Bits are ideal for daily oral wellness on the go.",
  howToUse:
    "Take one Denta Bit as needed for all-day oral freshness. Swallow-safe for daily use. Ideal for on-the-go oral wellness.",
  benefits:
    "Up to 99% reduction in harmful bacteria. Long-lasting fresh breath. Supports gum health and reduces inflammation. Balances oral microbiome naturally. Safe for diabetics and daily long-term use.",
  ingredients: DEFAULT_KEY_INGREDIENTS,
  featureImage: "/Products/DentaBits/Dentabits1.png",
  related: [
    // Add related products here if any
  ],
};

const PRODUCT_DETAILS = {
  "clarifying-shampoo": CLARIFYING_SHAMPOO_DETAIL,
  "denta-bits-daily-dental-wellness-bits": DENTA_BITS_DETAIL,
};

export function getBitsProduct(slug) {
  const base = BITS_PRODUCTS.find((product) => product.slug === slug);
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
    description: `${base.title} combines high-performing cleansing formulas with antioxidant-rich argan oil.`,
    howToUse:
      "Apply to wet hair and scalp. Massage and rinse thoroughly. Follow with your preferred conditioner if needed.",
    benefits:
      "Gentle, sulfate-free formula infused with argan oil to cleanse while nourishing the hair.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    featureImage: null,
    related: BITS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllBitsProductSlugs() {
  return BITS_PRODUCTS.map((product) => product.slug);
}
