import Image from "next/image";
import Link from "next/link";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const HERO = {
  desktop: `${CDN}/Main_Hero_Section_Web.png?v=1771362089&width=2000`,
  mobile: `${CDN}/Main_Hero_Section_Mobile.png?v=1771363430&width=1000`,
};

const CATEGORY_CARDS = [
  {
    label: "Haircolor",
    href: "/collections/haircolor-classes",
    image: `${CDN}/Class_Category_Button_Color_Student_1.png?v=1771448768&width=630`,
  },
  {
    label: "Cutting & Styling",
    href: "/collections/cutting-and-styling",
    image: `${CDN}/Class_Category_Button_Cutting_Student.png?v=1771448768&width=630`,
  },
  {
    label: "Business",
    href: "/collections/business-classes",
    image: `${CDN}/Class_Category_Button_Business_Teacher_1.png?v=1771448768&width=630`,
  },
  {
    label: "Workshops",
    href: "/collections/workshop-collection",
    image: `${CDN}/Class_Category_Button_Workshop_Student.png?v=1771448768&width=630`,
  },
  {
    label: "Guest Artists",
    href: "/collections/guest-artists",
    image: `${CDN}/Artboard_3_4.png?v=1771448768&width=630`,
  },
  {
    label: "Academy on the Road",
    href: "/pages/academy-on-the-road",
    image: `${CDN}/AOTR.png?v=1771448768&width=630`,
  },
];

const COLLECTION_CARDS = [
  {
    label: "Academy Collection",
    href: "/Products/academy-collection",
    image: `${CDN}/Class_Button_Academy_Collection.png?v=1771448768&width=630`,
  },
  {
    label: "Cutting Mastery",
    href: "/Products/cutting-mastery",
    image: `${CDN}/Class_Button_Cutting_Mastery.png?v=1771448768&width=630`,
  },
  {
    label: "Trend collection",
    href: "/collections/guest-artists",
    image: `${CDN}/Class_Button_TrendCollection.png?v=1771448768&width=630`,
  },
];

function IconLocation() {
  return (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 640 640" fill="none">
      <path
        d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
        fill="currentColor"
      />
    </svg>
  );
}

function CategoryCard({ label, href, image }) {
  return (
    <Link href={href} className="mo-edu-card">
      <div className="mo-edu-card__image">
        <Image src={image} alt={label} width={630} height={630} />
      </div>
      <p className="mo-edu-card__title">{label}</p>
    </Link>
  );
}

export default function Education() {
  return (
    <main id="main" className="mo-education">
      <section className="mo-edu-hero" aria-label="Education hero">
        <div className="mo-edu-hero__frame mo-edu-hero__frame--mobile">
          <Image
            src={HERO.mobile}
            alt=""
            width={1080}
            height={1620}
            priority
            className="mo-edu-hero__image"
          />
        </div>
        <div className="mo-edu-hero__frame mo-edu-hero__frame--desktop">
          <Image
            src={HERO.desktop}
            alt=""
            width={2000}
            height={1200}
            priority
            className="mo-edu-hero__image"
          />
        </div>
      </section>

      <section className="mo-edu-section mo-edu-section--center">
        <h1 className="mo-edu-title">Experience IDA Academy Education</h1>
      </section>

      <section className="mo-edu-section">
        <div className="mo-edu-grid mo-edu-grid--categories">
          {CATEGORY_CARDS.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mo-edu-section mo-edu-section--center">
        <Link href="/pages/all-classes" className="mo-button mo-button--solid">
          Discover all classes
        </Link>
      </section>

      <section className="mo-edu-section">
        <h2 className="mo-edu-heading">Inspired by the latest trends</h2>
        <div className="mo-edu-grid mo-edu-grid--collections">
          {COLLECTION_CARDS.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mo-edu-banner" aria-label="Salon ambassador certification">
        <Image
          src={`${CDN}/Class_Banner_Web.png?v=1771448768&width=2000`}
          alt=""
          width={2000}
          height={900}
          className="mo-edu-banner__image"
        />
        <div className="mo-edu-banner__content">
          <p className="mo-edu-banner__eyebrow">Moroccanoil</p>
          <p className="mo-edu-banner__headline">Salon ambassador certification</p>
          <Link
            href="/pages/salon-ambassador-certification"
            className="mo-button mo-button--outline mo-edu-banner__button"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="mo-edu-section mo-edu-about">
        <div className="mo-edu-about__media">
          <Image
            src={`${CDN}/Artboard_1_5.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="mo-edu-about__photo mo-edu-about__photo--primary"
          />
          <Image
            src={`${CDN}/Artboard_2_6.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="mo-edu-about__photo mo-edu-about__photo--secondary"
          />
        </div>
        <div className="mo-edu-about__content">
          <p className="mo-edu-about__eyebrow">About</p>
          <h2 className="mo-edu-about__title">Moroccanoil academy</h2>
          <p className="mo-edu-about__text">
            Based in New York City, Moroccanoil is proud to present the Moroccanoil
            Academy, an advanced facility designed to provide on-site, customized
            education to stylists at any level of their career.
          </p>
          <div className="mo-edu-about__address">
            <IconLocation />
            <p>
              1185 Avenue of the Americas
              <br />
              36th Floor
            </p>
          </div>
          <Link
            href="https://maps.app.goo.gl/Pjj7rwg11qUbNUXr7"
            target="_blank"
            rel="noopener noreferrer"
            className="mo-button mo-button--outline"
          >
            Find Us
          </Link>
        </div>
      </section>
    </main>
  );
}