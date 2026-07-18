import { notFound } from "next/navigation";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import { ProductDetail } from "@/app/products/ProductDetail";
import { getAllBitsProductSlugs } from "@/app/products/Bits/bitsProducts";
import { getAllLollipopsProductSlugs } from "@/app/products/Lollipops/lollipopsProducts";
import { getAllMouthwashProductSlugs } from "@/app/products/Mouthwash/mouthwashProducts";
import { getAllSmartsProductSlugs } from "@/app/products/Smarts/smartsProducts";
import {
  COLLECTION_BY_CATEGORY,
  COLLECTION_PAGES,
  getProductForCategory,
} from "@/app/products/productRoutes";

export async function generateStaticParams() {
  return [
    ...getAllBitsProductSlugs().map((slug) => ({ category: "bits", slug })),
    ...getAllLollipopsProductSlugs().map((slug) => ({
      category: "lollipops",
      slug,
    })),
    ...getAllMouthwashProductSlugs().map((slug) => ({
      category: "mouthwash",
      slug,
    })),
    ...getAllSmartsProductSlugs().map((slug) => ({
      category: "smarts",
      slug,
    })),
  ];
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const product = getProductForCategory(category, slug);

  if (!product) {
    return { title: "Product Not Found | Hetafu" };
  }

  return {
    title: `${product.title} | Hetafu`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;

  if (!COLLECTION_PAGES[category]) {
    notFound();
  }

  const product = getProductForCategory(category, slug);
  const collection = COLLECTION_BY_CATEGORY[category];

  if (!product || !collection) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProductDetail product={product} collection={collection} />
      <Footer />
    </>
  );
}
