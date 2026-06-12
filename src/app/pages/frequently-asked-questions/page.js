import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Faqs from "../../Common/Faqs/Faqs";

export const metadata = {
  title: "Frequently Asked Questions | Moroccanoil Professionals",
  description:
    "General knowledge questions and answers about Moroccanoil products and Moroccanoil Academy courses.",
};

export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <Navbar />
      <Faqs />
      <Footer />
    </>
  );
}
