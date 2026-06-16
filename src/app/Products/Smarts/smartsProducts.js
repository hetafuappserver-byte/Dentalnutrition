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
  },
  {
    slug: "pink-smarts-dental-nutrition-women",
    title: "Pink Smarts Dental Nutrition for Women",
    image: `/Products/DentaSmarts/Pinksmarts.webp`,
  },
  {
    slug: "prime-smarts-dental-nutrition-adults",
    title: "Prime Smarts Dental Nutrition for Adults",
    image: `/Products/DentaSmarts/Primesmarts.webp`,
  },
  {
    slug: "dia-smarts-dental-nutrition-diabetics",
    title: "Dia Smarts Dental Nutrition for Diabetics",
    image: `/Products/DentaSmarts/Diasmarts.webp`,
  },
];

const PRODUCT_DETAILS = {
  "junior-smarts-dental-nutrition-kids": {
    tagline: "Smart dental nutrition for growing smiles",
    description:
      "Junior Smarts are clinically tested, dentist-recommended dental nutrition gummies for children, designed to support faster healing, cavity prevention, and stronger tooth development while maintaining a healthy oral microbiome. Even when children brush regularly, many still experience toothaches, cavities, and frequent dental visits. This happens because brushing alone does not support the mouth's natural healing and bacterial balance. Junior Smarts provide nutritional support for oral health using probiotics, prebiotics, and essential oils. These edible gummies help strengthen enamel, support natural healing, and protect against cavity-causing bacteria.",
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
      "Pink Smarts are dental nutrition gummies formulated specifically for women experiencing hormonal changes related to puberty, pregnancy, breastfeeding, and menopause. Clinically tested and dentist-approved, Pink Smarts support gum stability, enamel strength, and oral microbiome balance during hormonal fluctuations. Hormonal changes can increase the risk of gum bleeding, sensitivity, dryness, inflammation, and cavities. These changes directly affect saliva flow and oral bacterial balance. Pink Smarts are formulated with probiotics, prebiotics, essential oils, and enamel-supporting nutrients to support gum health during hormonal shifts, reduce inflammation and sensitivity, maintain oral pH balance, strengthen enamel and reduce acid damage, and promote a healthier oral microbiome.",
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
      "Prime Smarts deliver high-strength, clinically tested dental nutrition for adults dealing with sensitivity, enamel wear, gum inflammation, stress-related oral issues, and daily bacterial buildup. Prime Smarts are formulated with advanced probiotics, prebiotics, essential oils, and enamel-supporting nutrients to help adults maintain optimal oral health and address common dental challenges.",
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
      "Dia Smarts are dental nutrition gummies formulated exclusively for people with diabetes, who face higher risks of gum disease, infections, delayed healing, and dry mouth. Dia Smarts provide specialized nutritional support using probiotics, prebiotics, and essential oils to help support healing, balance harmful oral bacteria, and reduce dry mouth and infection risks.",
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
    return { ...base, ...detail, gallery: [base.image], banner: base.image };
  }

  const galleryImage = base.image;

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description: `${base.title} is a clinically tested dental nutrition gummy designed to support oral health.`,
    howToUse: "Take one gummy daily as part of your daily routine.",
    benefits: "Supports oral health with probiotics and essential oils.",
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
