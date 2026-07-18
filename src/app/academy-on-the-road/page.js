import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import AcademyOnTheRoad from "@/app/sections/academy/AcademyOnTheRoad";

export const metadata = {
  title: "Academy on the Road | Hetafu",
  description:
    "Hetafu Academy classes are now easily accessible in locations beyond our main academy.",
};

export default function AcademyOnTheRoadPage() {
  return (
    <>
      <Navbar />
      <AcademyOnTheRoad />
      <Footer />
    </>
  );
}
