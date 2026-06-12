import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Sustainablity from "../../Sustainablity/Sustainablity";

export const metadata = {
  title: "Sustainability | Moroccanoil Professionals",
  description:
    "Moroccanoil is on a journey to green our business and inspire a beautiful world. Learn about our products, operations, and community efforts.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <Sustainablity />
      <Footer />
    </>
  );
}
