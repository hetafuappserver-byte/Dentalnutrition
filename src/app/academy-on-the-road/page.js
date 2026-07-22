import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const BTN_SOLID =
  "inline-flex items-center justify-center border border-[#401e17] bg-[#401e17] px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-transparent hover:text-[#401e17]";

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
    <section className="grid items-center gap-8 px-5 py-12 min-[900px]:grid-cols-2 min-[900px]:gap-12 min-[900px]:px-8 min-[900px]:py-16">
      <div className={section.reverse ? "min-[900px]:order-2" : undefined}>
        <Image src={section.image} alt="" width={1000} height={1000} className="block h-auto w-full" />
      </div>
      <div className={`mx-auto flex max-w-[430px] flex-col items-center gap-5 text-center min-[900px]:mx-0 min-[900px]:items-start min-[900px]:text-left${section.reverse ? " min-[900px]:order-1" : ""}`}>
        <h2 className="m-0 [font-family:var(--heading-font)] text-[clamp(1.5rem,3vw,2rem)] font-bold capitalize">{section.title}</h2>
        <p className="m-0 leading-[1.65]">{section.description}</p>
        <Link href={section.href} className={BTN_SOLID}>{section.cta}</Link>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Academy on the Road | Hetafu",
  description:
    "Hetafu Academy classes are now easily accessible in locations beyond our main academy.",
};

export default function AcademyOnTheRoadPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <nav className="border-b border-[rgba(64,30,23,0.12)] bg-white" aria-label="Academy on the road navigation">
          <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] md:px-8">
            <Link href="/" className="text-inherit no-underline">Home</Link>
            <span>/</span>
            <span>Academy on the Road</span>
          </div>
        </nav>
        <section className="relative w-full overflow-hidden" aria-label="Academy on the Road">
          <div className="min-[700px]:hidden">
            <Image src={HERO.mobile} alt="" width={1024} height={1024} priority className="block h-auto w-full object-cover" />
          </div>
          <div className="hidden min-[700px]:block">
            <Image src={HERO.desktop} alt="" width={2000} height={1200} priority className="block h-auto w-full object-cover" />
          </div>
        </section>

        <section className="mx-auto max-w-[720px] border-b border-[rgba(64,30,23,0.15)] px-5 py-12 text-center md:px-8 md:py-16">
          <p className="m-0 mb-3 text-[0.9375rem] tracking-[0.04em]">Can&apos;t make it to the NYC Academy?</p>
          <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold capitalize">Academy on the road</h1>
          <p className="m-0 mb-5 leading-[1.65]">
            Don&apos;t worry—we&apos;ve got you covered! The Moroccanoil Academy is hitting the road in 2026, bringing our coveted education and expert facilitators to you. Experience Moroccanoil haircolor and cutting classes in cities around the world. Dates and cities will be announced shortly and updated below. We hope to see you there!
          </p>
          <a href="https://www.instagram.com/Moroccanoilpro/" target="_blank" rel="noopener noreferrer" className="text-inherit underline underline-offset-[0.15em] hover:opacity-75">
            Follow us on @MOROCCANOILPRO for all the updates!
          </a>
        </section>

        <div className="flex flex-col gap-0">
          {CLASS_SECTIONS.map((section) => (
            <ClassSection key={section.title} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
