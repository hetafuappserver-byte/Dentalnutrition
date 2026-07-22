import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import App from "@/app/Common/App/App";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const BTN_OUTLINE =
  "inline-flex items-center justify-center border border-white px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-white hover:text-[#401e17]";

const HERO = {
  desktop: `${CDN}/Artboard_1_3.png?v=1771859930&width=2000`,
  mobile: `${CDN}/Artboard_4_3_d8dd918f-9f3e-4463-aaf7-b4ad73fed0df.png?v=1771859930&width=1000`,
};

const COLLECTION_CARDS = [
  {
    label: "haircare",
    href: "/collections/haircare",
    image: `${CDN}/Artboard_2_3.png?v=1771859923&width=1000`,
  },
  {
    label: "Haircolor",
    href: "/collections/haircolor",
    image: `${CDN}/Artboard_3_3.png?v=1771859922&width=1000`,
  },
];

const BANNER = `${CDN}/Artboard_5_3.png?v=1771859923&width=2000`;

export const metadata = {
  title: "Product Knowledge | Hetafu",
  description:
    "Explore Hetafu's dental nutrition product lineup and learn how each formula supports oral health.",
};

export default function ProductKnowledgePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <section className="relative w-full overflow-hidden" aria-label="Product Knowledge hero">
          <div className="min-[700px]:hidden">
            <Image src={HERO.mobile} alt="" width={1000} height={1000} priority className="h-auto min-h-[420px] w-full object-cover min-[700px]:min-h-[560px]" />
          </div>
          <div className="hidden min-[700px]:block">
            <Image src={HERO.desktop} alt="" width={2000} height={1200} priority className="h-auto min-h-[420px] w-full object-cover min-[700px]:min-h-[560px]" />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
          <h1 className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] lowercase">
            discover our collections
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

        <section className="w-full overflow-hidden" aria-label="Product Knowledge banner">
          <Image src={BANNER} alt="" width={2000} height={900} className="block h-auto w-full object-cover" />
        </section>

        <App />
      </main>
      <Footer />
    </>
  );
}
