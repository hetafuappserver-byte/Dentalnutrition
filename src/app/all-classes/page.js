import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Classes from "@/app/sections/all-classes/Classes";
import { ALL_CLASSES_COLLECTION } from "@/app/sections/all-classes/classesProducts";

export const metadata = {
  title: `${ALL_CLASSES_COLLECTION.title} | Hetafu`,
  description: ALL_CLASSES_COLLECTION.description,
};

export default function AllClassesPage() {
  return (
    <>
      <Navbar />
      <Classes />
      <Footer />
    </>
  );
}
