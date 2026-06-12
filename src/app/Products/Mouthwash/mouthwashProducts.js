import { DEFAULT_KEY_INGREDIENTS } from "../Bits/bitsProducts";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const MOUTHWASH_COLLECTION = {
  title: "Style",
  href: "/Products/mouthwash",
};

export const MOUTHWASH_PRODUCTS = [
  {
    slug: "texture-clay-copy",
    title: "Sculpting Pomade",
    image: `${CDN}/SculptingPomade.png?v=1777479830&width=600`,
  },
  {
    slug: "styling-gel-strong",
    title: "Styling Gel Strong",
    image: `${CDN}/StylingGel.png?v=1777480462&width=600`,
  },
  {
    slug: "texture-and-volume-powder",
    title: "Texture and Volume Powder",
    image: `${CDN}/TextureandVolumePowder.png?v=1777480430&width=600`,
  },
  {
    slug: "luminous-hairspray",
    title: "Luminous Hairspray",
    image: `${CDN}/Luminous-Hairspray.png?v=1767908910&width=600`,
  },
  {
    slug: "texture-clay",
    title: "Texture Clay",
    image: `${CDN}/TextureClay.png?v=1777480410&width=600`,
  },
  {
    slug: "molding-cream",
    title: "Molding Cream",
    image: `${CDN}/MoldingCream.png?v=1777480490&width=600`,
  },
  {
    slug: "dry-texture-spray",
    title: "Dry Texture Spray",
    image: `${CDN}/DryTextureSpray.png?v=1777480524&width=600`,
  },
];

export function getMouthwashProduct(slug) {
  const base = MOUTHWASH_PRODUCTS.find((product) => product.slug === slug);
  if (!base) return null;

  const galleryImage = base.image.replace("&width=600", "&width=1200");

  return {
    ...base,
    banner: galleryImage,
    gallery: [galleryImage],
    tagline: "",
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