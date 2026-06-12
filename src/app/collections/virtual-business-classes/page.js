import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import VirtualBussinessClasses from "../../VirtualBussinessClasses/VirtualBussinessClasses";
import { VIRTUAL_BUSINESS_COLLECTION } from "../../VirtualBussinessClasses/virtualBusinessProducts";

export const metadata = {
  title: `${VIRTUAL_BUSINESS_COLLECTION.title} | Hetafu`,
  description: VIRTUAL_BUSINESS_COLLECTION.description,
};

export default function VirtualBusinessClassesPage() {
  return (
    <>
      <Navbar />
      <VirtualBussinessClasses />
      <Footer />
    </>
  );
}
