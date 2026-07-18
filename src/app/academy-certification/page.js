import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import AcademyCertification from "@/app/sections/academy/AcademyCertification";

export const metadata = {
  title: "Academy Certification | Hetafu",
  description:
    "Hetafu Academy Certifications are strategic investments in your career, offering professional recognition and personal growth.",
};

export default function AcademyCertificationPage() {
  return (
    <>
      <Navbar />
      <AcademyCertification />
      <Footer />
    </>
  );
}
