import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import DentalNutition from "../../DentalNutrition/DentalNutition";

export const metadata = {
  title: "Dental Nutrition | Hetafu",
  description:
    "Dental nutrition is oral care in edible form. Learn how Hetafu provides day-long protection for your oral and overall health.",
};

export default function DentalNutritionPage() {
  return (
    <>
      <Navbar />
      <DentalNutition />
      <Footer />
    </>
  );
}
