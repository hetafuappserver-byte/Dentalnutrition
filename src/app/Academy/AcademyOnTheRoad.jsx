import Image from "next/image";
import Link from "next/link";
import ClassTypesNav from "../ClassTypes/ClassTypesNav";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const HERO = {
  desktop: `${CDN}/Artboard_4_1_09083b06-1c7d-4550-96c1-0a01beb9ab7f.png?v=1771859504&width=2000`,
  mobile: `${CDN}/Artboard_5_1.png?v=1771859504&width=1000`,
};

const CLASS_SECTIONS = [
  {
    title: "Blonde Voyage Balayage",
    description:
      "Step into the world of refined blonding with a modern, minimalist approach to balayage.",
    image: `${CDN}/blonde-voyage-balayage.png?v=1772212264&width=1000`,
    href: "/pages/all-classes/blonde-voyage-balayage-ft-justin-toves-vincilione-academy-on-the-road",
    cta: "Learn more",
    reverse: true,
  },
  {
    title: "Blonde Voyage Blonding",
    description:
      "Master the art of blonding in this hands-on program designed to elevate your technical skills and product expertise.",
    image: `${CDN}/blonde-voyage-blonding.png?v=1772212294&width=1000`,
    href: "/pages/all-classes/blonde-voyage-blonding-3",
    cta: "Learn more",
    reverse: false,
  },
  {
    title: "Cutting Mastery",
    description:
      "Take your cutting skills to the next level with this advanced, hands-on program designed to expand upon the Moroccanoil cutting methodology.",
    image: `${CDN}/cutting-mastery.png?v=1772212308&width=1000`,
    href: "/pages/all-classes/cutting-mastery",
    cta: "Learn more",
    reverse: true,
  },
];

function ClassSection({ section }) {
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

export default function AcademyOnTheRoad() {
  return (
    <main id="main" className="mo-aotr">
      <ClassTypesNav activeLabel="Academy on the Road" />

      <section className="mo-aotr-hero" aria-label="Academy on the Road">
        <div className="mo-aotr-hero__frame mo-aotr-hero__frame--mobile">
          <Image
            src={HERO.mobile}
            alt=""
            width={1024}
            height={1024}
            priority
            className="mo-aotr-hero__image"
          />
        </div>
        <div className="mo-aotr-hero__frame mo-aotr-hero__frame--desktop">
          <Image
            src={HERO.desktop}
            alt=""
            width={2000}
            height={1200}
            priority
            className="mo-aotr-hero__image"
          />
        </div>
      </section>

      <section className="mo-aotr-intro">
        <p className="mo-aotr-intro__eyebrow">Can&apos;t make it to the NYC Academy?</p>
        <h1 className="mo-aotr-intro__title">Academy on the road</h1>
        <p className="mo-aotr-intro__text">
          Don&apos;t worry—we&apos;ve got you covered! The Moroccanoil Academy is hitting the
          road in 2026, bringing our coveted education and expert facilitators to you.
          Experience Moroccanoil haircolor and cutting classes in cities around the world.
          Dates and cities will be announced shortly and updated below. We hope to see you
          there!
        </p>
        <a
          href="https://www.instagram.com/Moroccanoilpro/"
          target="_blank"
          rel="noopener noreferrer"
          className="mo-aotr-intro__link"
        >
          Follow us on @MOROCCANOILPRO for all the updates!
        </a>
      </section>

      <div className="mo-class-types__sections">
        {CLASS_SECTIONS.map((section) => (
          <ClassSection key={section.title} section={section} />
        ))}
      </div>
    </main>
  );
}
