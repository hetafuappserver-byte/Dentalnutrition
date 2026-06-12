import Image from "next/image";
import Link from "next/link";
import ClassTypesNav from "./ClassTypesNav";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const COURSE_TYPE_SECTIONS = [
  {
    title: "haircolor",
    description:
      "Moroccanoil color classes showcase our lightening and haircolor methodologies, including techniques that are designed to improve efficiency behind the chair, advance your skill set, and complement each client\u2019s distinct beauty.",
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
      "Moroccanoil\u2019s specialized workshops feature some of the beauty industry\u2019s leading artists and influencers. Each workshop encompasses cutting, coloring, and styling, featuring tips and tricks that will enable you to create modern designs while elevating your craft.",
    image: `${CDN}/Half_Width_Thumbnail_Workshops.png?v=1771421668&width=1000`,
    href: "/pages/all-classes",
    cta: "Explore workshop classes",
    reverse: true,
  },
];

function CourseTypeSection({ section }) {
  return (
    <section
      className={`mo-class-types-section${
        section.reverse ? " mo-class-types-section--reverse" : ""
      }`}
    >
      <div className="mo-class-types-section__media">
        <Image
          src={section.image}
          alt=""
          width={1000}
          height={1000}
          className="mo-class-types-section__image"
        />
      </div>
      <div className="mo-class-types-section__content">
        <h2 className="mo-class-types-section__title">{section.title}</h2>
        <p className="mo-class-types-section__description">{section.description}</p>
        <Link href={section.href} className="mo-button mo-button--solid">
          {section.cta}
        </Link>
      </div>
    </section>
  );
}

export default function ClassTypes() {
  return (
    <main id="main" className="mo-class-types">
      <ClassTypesNav activeLabel="Class Types" />

      <div className="mo-class-types__sections">
        {COURSE_TYPE_SECTIONS.map((section) => (
          <CourseTypeSection key={section.title} section={section} />
        ))}
      </div>
    </main>
  );
}
