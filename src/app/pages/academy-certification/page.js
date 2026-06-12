import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import AcademyCertification from "../../Academy/AcademyCertification";

export const metadata = {
  title: "Academy Certification | Hetafu",
  description:
    "Moroccanoil Professionals Academy Certifications are strategic investments in your career, offering professional recognition and personal growth.",
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
