import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import HetafuVsIDA from "@/app/sections/hetafu-vs-ida/HetafuVsIDA";

export const metadata = {
  title: "Hetafu VS IDA | Hetafu",
  description:
    "Learn how Hetafu dental nutrition products earn IDA acceptance from the Indian Dental Association.",
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
