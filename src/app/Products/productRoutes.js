import { getBitsProduct } from "./Bits/bitsProducts";
import { getLollipopsProduct } from "./Lollipops/lollipopsProducts";
import { getMouthwashProduct } from "./Mouthwash/mouthwashProducts";
import { getSmartsProduct } from "./Smarts/smartsProducts";

export const COLLECTION_PAGES = {
  bits: {
    metadata: {
      title: "DentaBits | Hetafu",
      description:
        "Promote your pet's oral health with our delicious and effective dental wellness bits.",
    },
  },
  lollipops: {
    metadata: {
      title: "Dollipops | Hetafu",
      description:
        "Our signature product, Moroccanoil Treatment, pioneered the oil-infused hair care category and is the perfect foundation for all hair care.",
    },
  },
  mouthwash: {
    metadata: {
      title: "CUTE Mouthwash | Hetafu",
      description:
        "Restore dry or damaged hair with rich and creamy formulas featuring argan oil and other high-performing ingredients.",
    },
  },
  smarts: {
    metadata: {
      title: "DentaSmarts | Hetafu",
      description:
        "Create versatile looks with high-performing styling products infused with antioxidant-rich argan oil.",
    },
  },
};

export function getProductHref(category, slug) {
  return `/Products/${category}/${slug}`;
}

export function getProductHrefForSlug(slug) {
  if (getBitsProduct(slug)) return getProductHref("bits", slug);
  if (getLollipopsProduct(slug)) return getProductHref("lollipops", slug);
  if (getMouthwashProduct(slug)) return getProductHref("mouthwash", slug);
  if (getSmartsProduct(slug)) return getProductHref("smarts", slug);
  return null;
}

export function getProductForCategory(category, slug) {
  if (category === "bits") return getBitsProduct(slug);
  if (category === "lollipops") return getLollipopsProduct(slug);
  if (category === "mouthwash") return getMouthwashProduct(slug);
  if (category === "smarts") return getSmartsProduct(slug);
  return null;
}

export function getCategoryForSlug(slug) {
  if (getBitsProduct(slug)) return "bits";
  if (getLollipopsProduct(slug)) return "lollipops";
  if (getMouthwashProduct(slug)) return "mouthwash";
  if (getSmartsProduct(slug)) return "smarts";
  return null;
}