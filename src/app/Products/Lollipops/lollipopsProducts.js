import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const LOLLIPOPS_COLLECTION = {
  title: "Masks",
  href: "/Products/lollipops",
};

export const LOLLIPOPS_PRODUCTS = [
  {
    slug: "weightless-hydrating-mask",
    title: "Weightless Hydrating Mask",
    image: `${CDN}/Artboard_1_2d0de360-8a8b-4a9d-984c-6fff8a6cd6f7.png?v=1767904911&width=600`,
  },
  {
    slug: "restorative-hair-mask",
    title: "Restorative Hair Mask",
    image: `${CDN}/Artboard_1_1d808cff-99b4-42e3-a2a9-4197c26972df.png?v=1767904845&width=600`,
  },
  {
    slug: "intense-hydrating-mask",
    title: "Intense Hydrating Mask",
    image: `${CDN}/Artboard1.png?v=1767904769&width=600`,
  },
  {
    slug: "color-depositing-mask",
    title: "Color Depositing Mask",
    image: `${CDN}/Artboard_1_b4f3a182-096e-400c-a66d-f3d3b864b86f.png?v=1767905050&width=600`,
  },
  {
    slug: "high-shine-gloss-mask",
    title: "High Shine Gloss Mask",
    image: `${CDN}/Artboard_1_cc6074a4-d94c-4e01-b8ed-1e6cb77011bc.png?v=1767905128&width=600`,
  },
];

export function getLollipopsProduct(slug) {
  const base = LOLLIPOPS_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    description: `${base.title} restores dry or damaged hair with a rich, creamy formula featuring argan oil and other high-performing ingredients.`,
    howToUse:
      "Apply a generous amount to clean, towel-dried hair. Comb through evenly. Leave on 5–7 minutes. Rinse thoroughly.",
    benefits:
      "Rich and creamy formula infused with argan oil to deeply nourish, restore, and improve manageability.",
    ingredients: DEFAULT_KEY_INGREDIENTS,
    featureImage: null,
    related: LOLLIPOPS_PRODUCTS.filter((product) => product.slug !== slug).slice(
      0,
      4,
    ),
  };
}

export function getAllLollipopsProductSlugs() {
  return LOLLIPOPS_PRODUCTS.map((product) => product.slug);
}