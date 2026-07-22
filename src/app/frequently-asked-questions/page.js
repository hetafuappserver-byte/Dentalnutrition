import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Faqs from "@/app/Common/Faqs/Faqs";

export const metadata = {
  title: "Frequently Asked Questions | Hetafu",
  description:
    "General knowledge questions and answers about Hetafu products and Academy courses.",
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
