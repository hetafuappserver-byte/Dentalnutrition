import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Contact from "../../Common/Contact/Contact";

export const metadata = {
  title: "Contact | Moroccanoil Professionals",
  description: "Get in touch with Moroccanoil Professionals.",
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
