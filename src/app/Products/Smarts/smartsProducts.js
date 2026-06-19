import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const SMARTS_COLLECTION = {
  title: "Denta Smarts",
  href: "/Products/smarts",
};

export const SMARTS_PRODUCTS = [
  {
    slug: "junior-smarts-dental-nutrition-kids",
    title: "Junior Smarts Dental Nutrition for Kids",
    image: `/Products/DentaSmarts/Juniorsmarts.webp`,
    banner: "/Products/DentaSmarts/dentasmartsbg.png",
  },
  {
    slug: "pink-smarts-dental-nutrition-women",
    title: "Pink Smarts Dental Nutrition for Women",
    image: `/Products/DentaSmarts/Pinksmarts.webp`,
    banner: "/Products/DentaSmarts/dentasmartsbg.png",
  },
  {
    slug: "prime-smarts-dental-nutrition-adults",
    title: "Prime Smarts Dental Nutrition for Adults",
    image: `/Products/DentaSmarts/Primesmarts.webp`,
    banner: "/Products/DentaSmarts/dentasmartsbg.png",
  },
  {
    slug: "dia-smarts-dental-nutrition-diabetics",
    title: "Dia Smarts Dental Nutrition for Diabetics",
    image: `/Products/DentaSmarts/Diasmarts.webp`,
    banner: "/Products/DentaSmarts/dentasmartsbg.png",
  },
];

const PRODUCT_DETAILS = {
  "junior-smarts-dental-nutrition-kids": {
    tagline: "Smart dental nutrition for growing smiles",
    description:
      "Junior Smarts are clinically tested, dentist-recommended dental nutrition gummies for children, designed to support faster healing, cavity prevention, and stronger tooth development while maintaining a healthy oral microbiome. ",
    benefits:
      "Clinically tested & IDA accepted. Strengthens enamel and gums naturally. Sugar-free, safe, and kid-friendly. Supports up to 50% faster healing after dental procedures. Helps balance oral bacteria to reduce cavities and plaque. Clinical studies show improved oral hygiene, faster recovery, and stronger teeth within weeks of regular use.",
    howToUse:
      "Take one gummy daily as part of your child's daily routine. Safe for children aged 3 years and above.",
    usedFor:
      "Children seeking cavity prevention, faster healing after dental procedures, and stronger tooth development. Safe, sugar-free, and dentist-approved.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
  "pink-smarts-dental-nutrition-women": {
    tagline: "Targeted dental nutrition for women, powered by science",
    description:
      "Pink Smarts are dental nutrition gummies formulated specifically for women experiencing hormonal changes related to puberty, pregnancy, breastfeeding, and menopause. ",
    benefits:
      "Hormone-supportive formula for healthier gums. Strengthens enamel and reduces sensitivity. Helps balance oral bacteria during hormonal changes. Safe for pregnancy and breastfeeding. Supports gum health and reduces inflammation. Sugar-free, gentle, and clinically proven.",
    howToUse:
      "Take one gummy daily for optimal oral health support during hormonal changes.",
    usedFor:
      "Women during puberty, pregnancy, breastfeeding, menopause, or any hormonal fluctuations.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
  "prime-smarts-dental-nutrition-adults": {
    tagline: "Advanced dental nutrition for stronger, healthier adult smiles",
    description:
      "Prime Smarts deliver high-strength, clinically tested dental nutrition for adults dealing with sensitivity, enamel wear, gum inflammation, stress-related oral issues, and daily bacterial buildup. ",
    benefits:
      "Advanced oral microbiome support. Strengthens enamel and reduces sensitivity. Supports healthier gums and lowers inflammation. Aids faster recovery after dental procedures. Targets harmful bacteria while protecting beneficial bacteria. Clinically tested and dentist-approved.",
    howToUse:
      "Take one gummy daily for maximum oral health benefits and dental protection.",
    usedFor:
      "Adults experiencing sensitivity, enamel wear, gum inflammation, or seeking advanced oral microbiome support.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
  "dia-smarts-dental-nutrition-diabetics": {
    tagline: "Specialized dental nutrition designed for diabetic oral health",
    description:
      "Dia Smarts are dental nutrition gummies formulated exclusively for people with diabetes, who face higher risks of gum disease, infections, delayed healing, and dry mouth..",
    benefits:
      "Zero sugar and low glycemic impact. Supports healing and reduces inflammation. Helps balance harmful oral bacteria. Reduces dry mouth, gum infections, and thrush risk. Clinically tested for diabetic oral challenges. Safe for long-term daily use.",
    howToUse:
      "Take one gummy daily for targeted diabetic-friendly dental nutrition and oral health support.",
    usedFor:
      "People with diabetes seeking specialized oral health support, gum disease prevention, infection risk reduction, and diabetic-friendly dental nutrition.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
  },
};

export function getSmartsProduct(slug) {
  const base = SMARTS_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const detail = PRODUCT_DETAILS[slug];
  if (detail) {
    return {
      ...base,
      ...detail,
      related: SMARTS_PRODUCTS.filter((product) => product.slug !== slug).slice(0, 4),
    };
  }

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description:
      `${base.title} is a clinically tested dental nutrition gummy designed to support oral health.`,
    howToUse:
      "Take one gummy daily as part of your daily routine.",
    benefits:
      "Supports oral health with probiotics and essential oils for reduced harmful bacteria and fresher breath.",
    usedFor: "",
    contactEmail: "reachthebest@hetafu.com",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    related: SMARTS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllSmartsProductSlugs() {
  return SMARTS_PRODUCTS.map((product) => product.slug);
}
