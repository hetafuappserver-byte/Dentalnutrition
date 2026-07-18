import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Contact from "@/app/Common/Contact/Contact";

export const metadata = {
  title: "Contact | Hetafu",
  description: "Get in touch with Hetafu.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
