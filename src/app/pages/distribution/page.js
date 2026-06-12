import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Distribution from "../../Distribution/Distribution";

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
