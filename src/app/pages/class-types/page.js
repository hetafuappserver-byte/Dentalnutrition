import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import ClassTypes from "../../ClassTypes/ClassTypes";

export const metadata = {
  title: "Class Types | Hetafu",
  description: "Explore Hetafu Academy course types including haircolor, cutting, business, guest artists, and workshops.",
};

export default function ClassTypesPage() {
  return (
    <>
      <Navbar />
      <ClassTypes />
      <Footer />
    </>
  );
}
