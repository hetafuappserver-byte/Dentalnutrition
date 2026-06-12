import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Summits from "../../Summits/Summits";
import { SUMMITS_COLLECTION } from "../../Summits/summitsProducts";

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
