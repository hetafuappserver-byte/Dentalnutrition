import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import App from "@/app/Common/App/App";

const BTN_OUTLINE =
  "inline-flex items-center justify-center border border-white px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-white hover:text-[#401e17]";

const HERO = {
  desktop: `https://t4.ftcdn.net/jpg/06/88/62/37/360_F_688623756_xbY1xgAzQVLNYvjPHvKdrECpmIJYXXz5.jpg`,
  mobile: `https://t4.ftcdn.net/jpg/06/88/62/37/360_F_688623756_xbY1xgAzQVLNYvjPHvKdrECpmIJYXXz5.jpg`,
};

const COLLECTION_CARDS = [
  {
    label: "Bits",
    href: "/products/bits/denta-bits-daily-dental-wellness-bits",
    image: `/Products/DentaBits/Dentabits2.png`,
  },
  {
    label: "Lollipops",
    href: "/products/lollipops",
    image: `/Products/Dollipops/Dollipops.png`,
  },
  {
    label: "Mouthwashes",
    href: "/products/mouthwash",
    image: `/Products/CuteMouthwash/Cute.png`,
  },
  {
    label: "Smarts",
    href: "/products/smarts",
    image: `/Products/DentaSmarts/Juniorsmarts.webp`,
  },
];


export const metadata = {
  title: "Product Knowledge | Hetafu",
  description:
    "Explore Hetafu's dental nutrition product lineup and learn how each formula supports oral health.",
};

export default function ProductKnowledgePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#f2f2f2] text-[#401e17]">
        <section className="relative w-full overflow-hidden" aria-label="Product Knowledge hero">
          <Image 
            src={HERO.desktop} 
            alt="" 
            width={2000} 
            height={1000} 
            priority 
            className="h-auto min-h-[400px] w-full object-cover object-center"
          />
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
          <h1 className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em]">
            Discover our collections
          </h1>
          <p className="mx-auto max-w-[720px] text-lg leading-[1.6]">
            All Moroccanoil products are argan oil-infused, offering a unique approach to hair care and styling for every hair type and need.
          </p>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 min-[700px]:grid-cols-2">
            {COLLECTION_CARDS.map((card) => (
              <Link key={card.label} href={card.href} className="group relative block min-h-[320px] overflow-hidden">
                <Image src={card.image} alt={card.label} width={1000} height={1000} className="!h-full !min-h-[320px] !w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/[0.12]">
                  <span className={BTN_OUTLINE}>{card.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <App />
      </main>
      <Footer />
    </>
  );
}