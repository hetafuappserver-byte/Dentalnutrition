import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import HetafuVsIDA from "../../HetafuVsIDA/HetafuVsIDA";

export const metadata = {
  title: "Hetafu VS IDA | Moroccanoil Professionals",
  description:
    "Moroccanoil partners with Oceana to protect and restore the world’s oceans through donations, awareness, and conservation efforts.",
};

export default function HetafuVsIDAPage() {
  return (
    <>
      <Navbar />
      <HetafuVsIDA />
      <Footer />
    </>
  );
}
