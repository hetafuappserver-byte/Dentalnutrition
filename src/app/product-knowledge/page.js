import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import ProductKnowledge from "@/app/sections/product-knowledge/ProductKnowledge";

export const metadata = {
  title: "Product Knowledge | Hetafu",
  description:
    "Explore Hetafu's dental nutrition product lineup and learn how each formula supports oral health.",
};

export default function ProductKnowledgePage() {
  return (
    <>
      <Navbar />
      <ProductKnowledge />
      <Footer />
    </>
  );
}
