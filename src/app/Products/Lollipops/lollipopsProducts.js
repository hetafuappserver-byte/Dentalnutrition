import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const LOLLIPOPS_COLLECTION = {
  title: "Lollipops",
  href: "/products/lollipops",
};

export const LOLLIPOPS_PRODUCTS = [
  {
    slug: "dollipops-probiotic-dentist-approved-lollipops-green-apple",
    title: "Dollipops",
    image: '/Products/Dollipops/DollipopGA.png',
    banner: '/Products/Dollipops/DollipopGABg.png',
  },
  {
    slug: "dollipops-probiotic-dentist-approved-lollipops-mixed-berry",
    title: "Dollipops",
    image: '/Products/Dollipops/DollipopMB.png',
    banner: '/Products/Dollipops/DollipopMBBg.png',
  },
];

const PRODUCT_DETAILS = {
  "dollipops-probiotic-dentist-approved-lollipops-green-apple": {
    tagline: "Sugar-free probiotic lollipops that support oral hygiene",
    description:
      "Dollipops are dentist approved, sugar free probiotic lollipops designed to support oral hygiene while satisfying sweet cravings.",
    benefits:
      "Helps reduce harmful oral bacteria, supports gum healing after dental procedures, sugar-free and diabetic-friendly, probiotic formulation for microbiome balance, safe alternative to sugary treats.",
    howToUse:
      "Enjoy one lollipop daily as part of your oral health routine. Suitable for children and adults seeking a dentist-approved, sugar-free treat.",
    usedFor:
      "Children with frequent cavities, post-treatment recovery (scaling, extractions, ulcers), kids who resist brushing or mouthwash, diabetic children needing safe treats, adults with dry mouth or smoking habits.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
  "dollipops-probiotic-dentist-approved-lollipops-mixed-berry": {
    tagline: "Sugar-free probiotic lollipops that support oral hygiene",
    description:
      "Dollipops are dentist approved, sugar free probiotic lollipops designed to support oral hygiene while satisfying sweet cravings.",
    benefits:
      "Helps reduce harmful oral bacteria, supports gum healing after dental procedures, sugar-free and diabetic-friendly, probiotic formulation for microbiome balance, safe alternative to sugary treats.",
    howToUse:
      "Enjoy one lollipop daily as part of your oral health routine. Suitable for children and adults seeking a dentist-approved, sugar-free treat.",
    usedFor:
      "Children with frequent cavities, post-treatment recovery (scaling, extractions, ulcers), kids who resist brushing or mouthwash, diabetic children needing safe treats, adults with dry mouth or smoking habits.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
};

export function getLollipopsProduct(slug) {
  const base = LOLLIPOPS_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const detail = PRODUCT_DETAILS[slug];
  if (detail) {
    return {
      ...base,
      ...detail,
      related: LOLLIPOPS_PRODUCTS.filter((product) => product.slug !== slug).slice(0, 4),
    };
  }

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description:
      `${base.title} is a dentist-approved, sugar-free probiotic lollipop designed to support oral hygiene.`,
    howToUse:
      "Enjoy one lollipop daily as part of your oral health routine.",
    benefits:
      "Supports oral health with probiotics and essential oils for reduced harmful bacteria and fresher breath.",
    usedFor: "",
    contactEmail: "reachthebest@hetafu.com",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    related: LOLLIPOPS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllLollipopsProductSlugs() {
  return LOLLIPOPS_PRODUCTS.map((product) => product.slug);
}