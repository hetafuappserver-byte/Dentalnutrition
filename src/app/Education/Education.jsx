import Image from "next/image";
import Link from "next/link";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const BTN_SOLID =
  "inline-flex items-center justify-center border border-[#401e17] bg-[#401e17] px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-transparent hover:text-[#401e17]";

const BTN_OUTLINE =
  "inline-flex items-center justify-center border border-current px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase transition-[color,background] duration-200 hover:text-[#401e17]";

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
    <Link href={href} className="group block text-center">
      <div className="overflow-hidden [&_img]:w-full [&_img]:h-auto [&_img]:transition-transform [&_img]:duration-[350ms] group-hover:[&_img]:scale-[1.03]">
        <Image src={image} alt={label} width={630} height={630} />
      </div>
      <p className="mt-4 mb-0 [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase">
        {label}
      </p>
    </Link>
  );
}

export default function Education() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" aria-label="Education hero">
        <div className="min-[700px]:hidden">
          <Image
            src={HERO.mobile}
            alt=""
            width={1080}
            height={1620}
            priority
            className="h-auto min-h-[420px] w-full object-cover min-[700px]:min-h-[560px]"
          />
        </div>
        <div className="hidden min-[700px]:block">
          <Image
            src={HERO.desktop}
            alt=""
            width={2000}
            height={1200}
            priority
            className="h-auto min-h-[420px] w-full object-cover min-[700px]:min-h-[560px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h1 className="m-0 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.08em] uppercase">
          Experience IDA Academy Education
        </h1>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-2 gap-6 min-[700px]:grid-cols-3 min-[700px]:gap-8">
          {CATEGORY_CARDS.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <Link href="/pages/all-classes" className={BTN_SOLID}>
          Discover all classes
        </Link>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
        <h2 className="m-0 mb-8 text-center [font-family:var(--heading-font)] text-[clamp(1.25rem,3vw,1.75rem)] font-normal tracking-[0.08em] uppercase">
          Inspired by the latest trends
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-3 min-[700px]:gap-8">
          {COLLECTION_CARDS.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section
        className="relative min-h-[420px] overflow-hidden min-[700px]:min-h-[520px]"
        aria-label="Salon ambassador certification"
      >
        <Image
          src={`${CDN}/Class_Banner_Web.png?v=1771448768&width=2000`}
          alt=""
          width={2000}
          height={900}
          className="!h-full !min-h-[420px] !w-full object-cover min-[700px]:!min-h-[520px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center text-white">
          <p className="m-0 [font-family:var(--heading-font)] text-[clamp(1.5rem,4vw,2.25rem)] tracking-[0.08em] uppercase">
            Moroccanoil
          </p>
          <p className="m-0 mb-2 [font-family:var(--heading-font)] text-[clamp(1.25rem,3vw,1.75rem)] tracking-[0.06em] uppercase">
            Salon ambassador certification
          </p>
          <Link
            href="/pages/salon-ambassador-certification"
            className={`${BTN_OUTLINE} border-white text-white hover:bg-white hover:text-[#401e17]`}
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-10 min-[1000px]:grid-cols-[minmax(0,1fr)_375px] min-[1000px]:gap-12 md:px-8 md:py-14">
        <div className="relative min-h-[420px]">
          <Image
            src={`${CDN}/Artboard_1_5.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="relative z-[1] ml-auto mr-[10%] h-auto w-[min(100%,320px)] object-cover min-[700px]:w-[min(72%,420px)]"
          />
          <Image
            src={`${CDN}/Artboard_2_6.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="absolute bottom-0 left-0 z-[2] h-auto w-[min(55%,260px)] object-cover"
          />
        </div>
        <div className="max-w-[375px]">
          <p className="m-0 mb-2 [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase">
            About
          </p>
          <h2 className="m-0 mb-4 [font-family:var(--heading-font)] text-[1.75rem] font-normal tracking-[0.04em] capitalize">
            Moroccanoil academy
          </h2>
          <p className="m-0 mb-5 leading-[1.65]">
            Based in New York City, Moroccanoil is proud to present the Moroccanoil
            Academy, an advanced facility designed to provide on-site, customized
            education to stylists at any level of their career.
          </p>
          <div className="mb-6 flex items-start gap-2 [&_p]:m-0 [&_p]:leading-normal">
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
            className={BTN_OUTLINE}
          >
            Find Us
          </Link>
        </div>
      </section>
    </main>
  );
}
