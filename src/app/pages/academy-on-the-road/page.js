import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import AcademyOnTheRoad from "../../Academy/AcademyOnTheRoad";

export const metadata = {
  title: "Academy on the Road | Hetafu",
  description:
    "Moroccanoil Academy classes - previously available only in our state-of-the-art New York City Academy - are now easily accessible in other locations.",
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
