import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Sustainability from "@/app/sections/sustainability/Sustainability";

export const metadata = {
  title: "Sustainability | Hetafu",
  description:
    "Hetafu is on a journey to make a positive impact through sustainable products, operations, and community efforts.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <Sustainability />
      <Footer />
    </>
  );
}
