import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const BTN_SOLID =
  "inline-flex items-center justify-center border border-[#401e17] bg-[#401e17] px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-transparent hover:text-[#401e17]";

const COURSE_TYPE_SECTIONS = [
  {
    title: "haircolor",
    description:
      "Moroccanoil color classes showcase our lightening and haircolor methodologies, including techniques that are designed to improve efficiency behind the chair, advance your skill set, and complement each client's distinct beauty.",
    image: `${CDN}/Half_Width_Thumbnail_Color.png?v=1771421669&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore color classes",
    reverse: true,
  },
  {
    title: "Cutting & Styling",
    description:
      "Moroccanoil cutting methodology embraces unconventional techniques designed to increase efficiency behind the chair. Learn systematic, essential techniques that will transform the quality of your designs.",
    image: `${CDN}/Hall_Width_Thumbnail_Cutting.png?v=1771421669&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore cutting & styling classes",
    reverse: false,
  },
  {
    title: "Business",
    description:
      "Unique to the industry, our business programs take a 360-degree approach to delivering comprehensive business strategies to salon owners, managers, and stylists.",
    image: `${CDN}/Half_Width_Thumbnail_Business.png?v=1771421669&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore business classes",
    reverse: true,
  },
  {
    title: "Guest Artists",
    description:
      "Each one of our Influencer Partners and Global Color Ambassadors brings a unique education experience, leveraging their expertise in cutting, coloring, and styling.",
    image: `${CDN}/Half_Width_Thumbnail_GuestArtist.png?v=1771421669&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore Guest Classes",
    reverse: false,
  },
  {
    title: "Workshops",
    description:
      "Moroccanoil's specialized workshops feature some of the beauty industry’s leading artists and influencers. Each workshop encompasses cutting, coloring, and styling, featuring tips and tricks that will enable you to create modern designs while elevating your craft.",
    image: `${CDN}/Half_Width_Thumbnail_Workshops.png?v=1771421668&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore workshop classes",
    reverse: true,
  },
];

function CourseTypeSection({ section }) {
  return (
    <section className="grid items-center gap-8 px-5 py-12 min-[900px]:grid-cols-2 min-[900px]:gap-12 min-[900px]:px-8 min-[900px]:py-16">
      <div className={section.reverse ? "min-[900px]:order-2" : undefined}>
        <Image src={section.image} alt="" width={1000} height={1000} className="block h-auto w-full" />
      </div>
      <div
        className={`mx-auto flex max-w-[430px] flex-col items-center gap-5 text-center min-[900px]:mx-0 min-[900px]:items-start min-[900px]:text-left${
          section.reverse ? " min-[900px]:order-1" : ""
        }`}
      >
        <h2 className="m-0 [font-family:var(--heading-font)] text-[clamp(1.5rem,3vw,2rem)] font-bold capitalize">
          {section.title}
        </h2>
        <p className="m-0 leading-[1.65]">{section.description}</p>
        <Link href={section.href} className={BTN_SOLID}>
          {section.cta}
        </Link>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Class Types | Hetafu",
  description:
    "Explore Hetafu Academy course types including haircolor, cutting, business, guest artists, and workshops.",
};

export default function ClassTypesPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <nav className="border-b border-[rgba(64,30,23,0.12)] bg-white" aria-label="Class types navigation">
          <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] md:px-8">
            <Link href="/" className="text-inherit no-underline">Home</Link>
            <span>/</span>
            <span>Class Types</span>
          </div>
        </nav>
        <div className="flex flex-col gap-0">
          {COURSE_TYPE_SECTIONS.map((section) => (
            <CourseTypeSection key={section.title} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
