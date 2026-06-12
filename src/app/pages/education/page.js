import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Education from "../../Education/Education";

export const metadata = {
  title: "Education | Moroccanoil Professionals",
  description:
    "Experience Moroccanoil Education — in-person and digital classes for haircolor, cutting, styling, and more.",
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <Education />
      <Footer />
    </>
  );
}
