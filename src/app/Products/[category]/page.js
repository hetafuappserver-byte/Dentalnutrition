import { notFound, redirect } from "next/navigation";
import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Bits from "../../Products/Bits/Bits";
import Lollipops from "../../Products/Lollipops/Lollipops";
import Mouthwash from "../../Products/Mouthwash/Mouthwash";
import Smarts from "../../Products/Smarts/Smarts";
import { SummitDetail } from "../../Summits/SummitDetail";
import { SUMMITS, getSummitBySlug } from "../../Summits/summitsProducts";
import { VirtualBusinessDetail } from "../../VirtualBussinessClasses/VirtualBusinessDetail";
import {
  VIRTUAL_BUSINESS_CLASSES,
  getVirtualBusinessBySlug,
} from "../../VirtualBussinessClasses/virtualBusinessProducts";
import { COLLECTION_PAGES, getCategoryForSlug } from "../../Products/productRoutes";

const COLLECTION_COMPONENTS = {
  bits: Bits,
  lollipops: Lollipops,
  mouthwash: Mouthwash,
  smarts: Smarts,
};

export async function generateStaticParams() {
  return [
    ...Object.keys(COLLECTION_PAGES).map((category) => ({ category })),
    ...SUMMITS.map((summit) => ({ category: summit.slug })),
    ...VIRTUAL_BUSINESS_CLASSES.map((item) => ({ category: item.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const collection = COLLECTION_PAGES[category];

  if (collection) {
    return collection.metadata;
  }

  const summit = getSummitBySlug(category);

  if (summit) {
    return {
      title: `${summit.title} | Hetafu`,
      description: summit.description,
    };
  }

  const virtualBusiness = getVirtualBusinessBySlug(category);

  if (virtualBusiness) {
    return {
      title: `${virtualBusiness.title} | Hetafu`,
      description: virtualBusiness.description,
    };
  }

  return { title: "Not Found | Hetafu" };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const CollectionPage = COLLECTION_COMPONENTS[category];

  if (CollectionPage) {
    return (
      <>
        <Navbar />
        <CollectionPage />
        <Footer />
      </>
    );
  }

  const summit = getSummitBySlug(category);

  if (summit) {
    return (
      <>
        <Navbar />
        <SummitDetail summit={summit} />
        <Footer />
      </>
    );
  }

  const virtualBusiness = getVirtualBusinessBySlug(category);

  if (virtualBusiness) {
    return (
      <>
        <Navbar />
        <VirtualBusinessDetail item={virtualBusiness} />
        <Footer />
      </>
    );
  }

  const legacyCategory = getCategoryForSlug(category);

  if (legacyCategory) {
    redirect(`/Products/${legacyCategory}/${category}`);
  }

  notFound();
}