import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Classes from "../../Classes/Classes";
import { ALL_CLASSES_COLLECTION } from "../../Classes/classesProducts";

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
