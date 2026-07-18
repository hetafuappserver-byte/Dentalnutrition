import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import VirtualBusinessClasses from "@/app/sections/virtual-business-classes/VirtualBusinessClasses";
import { VIRTUAL_BUSINESS_COLLECTION } from "@/app/sections/virtual-business-classes/virtualBusinessProducts";

export const metadata = {
  title: `${VIRTUAL_BUSINESS_COLLECTION.title} | Hetafu`,
  description: VIRTUAL_BUSINESS_COLLECTION.description,
};

export default function VirtualBusinessClassesPage() {
  return (
    <>
      <Navbar />
      <VirtualBusinessClasses />
      <Footer />
    </>
  );
}
