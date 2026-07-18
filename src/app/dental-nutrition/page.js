import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import DentalNutrition from "@/app/sections/dental-nutrition/DentalNutrition";

export const metadata = {
  title: "Dental Nutrition | Hetafu",
  description:
    "Dental nutrition is oral care in edible form. Learn how Hetafu provides day-long protection for your oral and overall health.",
};

export default function DentalNutritionPage() {
  return (
    <>
      <Navbar />
      <DentalNutrition />
      <Footer />
    </>
  );
}
