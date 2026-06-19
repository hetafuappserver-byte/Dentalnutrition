import { notFound } from "next/navigation";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import Link from "next/link";
import { COLLECTION_PAGES } from "./productRoutes";

export async function generateMetadata() {
  return {
    title: "All Products | Hetafu",
    description: "Explore our complete range of dental nutrition products for optimal oral health.",
  };
}

export default async function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(COLLECTION_PAGES).map(([slug, collection]) => (
            <Link 
              key={slug} 
              href={`/Products/${slug}`}
              className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{collection.metadata.title.split(" | ")[0]}</h2>
              <p className="text-gray-600">{collection.metadata.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}