import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import Team from "@/app/sections/meet-the-team/Team";

export const metadata = {
  title: "Meet the Team | Hetafu",
  description:
    "Meet the Hetafu team behind dental nutrition education and product innovation.",
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
