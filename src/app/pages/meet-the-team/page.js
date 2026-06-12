import Navbar from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import Team from "../../Team/Team";

export const metadata = {
  title: "Meet the Team | Moroccanoil Professionals",
  description:
    "Our Moroccanoil Global Educators and Stylists provide hands-on education for stylists at any level. Meet our team and register today.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
}
