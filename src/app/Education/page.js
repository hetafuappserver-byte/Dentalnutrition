import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

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
    href: "/academy-on-the-road",
    image: `${CDN}/AOTR.png?v=1771448768&width=630`,
  },
];

const COLLECTION_CARDS = [
  {
    label: "Academy Collection",
    href: "/products/academy-collection",
    image: `${CDN}/Class_Button_Academy_Collection.png?v=1771448768&width=630`,
  },
  {
    label: "Cutting Mastery",
    href: "/products/cutting-mastery",
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
    <Link href={href} className="flex flex-col items-center justify-center relative group cursor-pointer">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <Image src={image} alt={label} width={630} height={630} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 px-2 text-sm md:text-base font-semibold">{label}</p>
    </Link>
  );
}

export const metadata = {
  title: "Education | Hetafu",
  description:
    "Experience Hetafu Academy Education — in-person and digital classes for dental professionals.",
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="mo-education">
        <section aria-label="Education hero" className="w-full">
          <div className="block md:hidden w-full">
            <Image src={HERO.mobile} alt="" width={1080} height={1620} priority className="w-full h-auto" />
          </div>
          <div className="hidden md:block w-full">
            <Image src={HERO.desktop} alt="" width={2000} height={1200} priority className="w-full h-auto" />
          </div>
        </section>

        <section className="w-full px-4 py-12 md:py-20 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Experience IDA Academy Education</h1>
        </section>

        <section className="w-full px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {CATEGORY_CARDS.map((card) => (
              <CategoryCard key={card.label} {...card} />
            ))}
          </div>
        </section>

        <section className="w-full px-4 py-12 md:py-20 flex justify-center">
          <Link href="/all-classes" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold">
            Discover all classes
          </Link>
        </section>

        <section className="w-full px-4 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-7xl mx-auto">Inspired by the latest trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {COLLECTION_CARDS.map((card) => (
              <CategoryCard key={card.label} {...card} />
            ))}
          </div>
        </section>

        <section aria-label="Salon ambassador certification" className="relative w-full px-4 py-12 md:py-20 overflow-hidden">
          <Image src={`${CDN}/Class_Banner_Web.png?v=1771448768&width=2000`} alt="" width={2000} height={900} className="absolute inset-0 w-full h-full object-cover -z-10" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-white py-12 md:py-24">
            <p className="text-sm md:text-base font-semibold tracking-wide mb-4">Moroccanoil</p>
            <p className="text-3xl md:text-5xl font-bold mb-8">Salon ambassador certification</p>
            <Link href="/pages/salon-ambassador-certification" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-semibold">
              Learn More
            </Link>
          </div>
        </section>

        <section className="w-full px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <Image src={`${CDN}/Artboard_1_5.png?v=1771863134&width=500`} alt="" width={500} height={650} className="w-full h-auto rounded-lg" />
              <Image src={`${CDN}/Artboard_2_6.png?v=1771863134&width=500`} alt="" width={500} height={650} className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold tracking-wide text-gray-600">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Moroccanoil academy</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Based in New York City, Moroccanoil is proud to present the Moroccanoil Academy, an advanced facility designed to provide on-site, customized education to stylists at any level of their career.
              </p>
              <div className="flex gap-4 items-start">
                <div className="text-gray-900 flex-shrink-0 mt-1">
                  <IconLocation />
                </div>
                <p className="text-base text-gray-700">
                  1185 Avenue of the Americas
                  <br />
                  36th Floor
                </p>
              </div>
              <Link href="https://maps.app.goo.gl/Pjj7rwg11qUbNUXr7" target="_blank" rel="noopener noreferrer" className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-semibold w-fit">
                Find Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
