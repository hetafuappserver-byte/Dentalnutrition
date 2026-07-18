import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Summits from "@/app/sections/summits/Summits";
import { SUMMITS_COLLECTION } from "@/app/sections/summits/summitsProducts";

export const metadata = {
  title: `${SUMMITS_COLLECTION.title} | Hetafu`,
  description: SUMMITS_COLLECTION.description,
};

export default function SummitsPage() {
  return (
    <>
      <Navbar />
      <Summits />
      <Footer />
    </>
  );
}
