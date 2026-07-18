import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Distribution from "@/app/sections/distribution/Distribution";

export const metadata = {
  title: "Distribution | Hetafu",
  description:
    "Find Hetafu distribution support and our Hyderabad office location.",
};

export default function DistributionPage() {
  return (
    <>
      <Navbar />
      <Distribution />
      <Footer />
    </>
  );
}
