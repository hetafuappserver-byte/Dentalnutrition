import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Education from "@/app/sections/education/Education";

export const metadata = {
  title: "Education | Hetafu",
  description:
    "Experience Hetafu Academy Education — in-person and digital classes for dental professionals.",
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
