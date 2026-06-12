import { notFound } from "next/navigation";
import Navbar from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import { ProductDetail } from "../../../Products/Bits/Bits";
import { getAllBitsProductSlugs } from "../../../Products/Bits/bitsProducts";
import { LollipopsProductDetail } from "../../../Products/Lollipops/Lollipops";
import { getAllLollipopsProductSlugs } from "../../../Products/Lollipops/lollipopsProducts";
import { MouthwashProductDetail } from "../../../Products/Mouthwash/Mouthwash";
import { getAllMouthwashProductSlugs } from "../../../Products/Mouthwash/mouthwashProducts";
import { SmartsProductDetail } from "../../../Products/Smarts/Smarts";
import { getAllSmartsProductSlugs } from "../../../Products/Smarts/smartsProducts";
import {
  COLLECTION_PAGES,
  getProductForCategory,
} from "../../../Products/productRoutes";

const PRODUCT_DETAIL_COMPONENTS = {
  bits: ProductDetail,
  lollipops: LollipopsProductDetail,
  mouthwash: MouthwashProductDetail,
  smarts: SmartsProductDetail,
};

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
  const ProductDetailComponent = PRODUCT_DETAIL_COMPONENTS[category];

  if (!product || !ProductDetailComponent) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProductDetailComponent product={product} category={category} />
      <Footer />
    </>
  );
}
