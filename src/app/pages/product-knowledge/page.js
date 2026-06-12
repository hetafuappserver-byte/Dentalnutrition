import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import ProductKnowledge from "../../ProductKnowledge/ProductKnowledge";

export const metadata = {
  title: "Product Knowledge | Moroccanoil Professionals",
  description:
    "Explore Moroccanoil's professional haircare product lineup. From shampoos to styling tools, find what you need to elevate your salon services!",
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
