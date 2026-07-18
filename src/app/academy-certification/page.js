import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const BTN_OUTLINE =
  "inline-flex items-center justify-center border border-current px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase transition-[color,background] duration-200 hover:text-[#401e17]";

const HERO = `${CDN}/77d9af7ab1001b34862cfd6c2f995135b47df2d0.jpg?v=1777992000&width=2000`;

const INTRO_COPY =
  "The Moroccanoil Professionals Academy Certifications are strategic investments in your career, offering opportunities to increase your earning potential, professional recognition, and personal growth. Whether you're a seasoned stylist or new to Moroccanoil Education, these certifications will elevate your skills while you gain recognition as an Academy Certified hairdresser.\nBecome Moroccanoil Professionals Academy Certified by enrolling in any three eligible Academy classes to earn your Academy Cutting or Academy Color Certification. Take it a step further by completing both certifications to achieve the elite status of Moroccanoil Professionals Prestige Certified.";

const CERTIFICATION_TABS = [
  {
    id: "cutting",
    label: "Cutting certification",
    eyebrow: "Perfect your craft",
    title: "Cutting Certification",
    description:
      "Choose any 3 from the following: Academy Collection, Cutting Mastery, Trend Collection, Curl Culture.",
    image: `${CDN}/671618f4a4ddcb80eee57dd8c32a38c42cc3d417.png?v=1778010345&width=960`,
    href: "/pages/all-classes",
    cta: "Explore Classes",
  },
  {
    id: "color",
    label: "Color Certification",
    eyebrow: "perfect your craft",
    title: "Color Certification",
    description:
      "Choose any three of the following classes to complete your certification and earn exclusive benefits! Trend Collection, Color Mastery, Blonde Voyage Blonding, Blonde Voyage Balayage, Curl Culture, Dimensional Blonding with @jessicascotthair.",
    image: `${CDN}/e9b9127c89ea5848d696cb880fb86116aa58089f.jpg?v=1777992435&width=1448`,
  },
  {
    id: "prestige",
    label: "Prestige Certification",
    eyebrow: "perfect your craft",
    title: "Prestige Certification",
    description:
      "Take your education one step further and become Moroccanoil Professionals Academy Prestige Certified by completing both Cutting and Color Certifications",
    image: `${CDN}/5fa4735302180a4589c999578969ed40e01ccea4_a6b4fdd0-93c6-446e-a900-a9ed4e0c8308.jpg?v=1777992472&width=576`,
  },
];

const BENEFIT_COLUMNS = [
  {
    title: "color/cutting Certification",
    items: [
      "Custom mirror cling and dedicated social media assets — humble brag about your certification!",
      "20% off all Moroccanoil Academy classes",
      "2 complimentary bring-a-friend vouchers*",
      "Academy gift card worth $1,000 to use toward Moroccanoil swag",
      "Quarterly product send-outs",
      "Stylist feature on @MoroccanoilPro",
    ],
  },
  {
    title: "prestige certification",
    items: [
      "Loyalty package valued at $1,000!",
      "25% off all Moroccanoil Academy classes (instead of 20%)",
      "4 complimentary bring-a-friend vouchers*",
      "Academy gift card worth $1,500 to use toward Moroccanoil swag",
      "Quarterly product send-outs",
      "Photographer visit to your salon for a custom photoshoot and a feature on @MoroccanoilPro",
      "*Complimentary bring-a-friend vouchers expire 1 year from receiving certification.",
    ],
  },
];

const CLASS_CATALOG = [
  {
    title: "academy collection",
    href: "/pages/all-classes/academy-collection",
    image: `${CDN}/671618f4a4ddcb80eee57dd8c32a38c42cc3d417.png?v=1778010345&width=960`,
  },
  {
    title: "Cutting mastery",
    href: "/pages/all-classes/cutting-mastery",
    image: `${CDN}/ISA_1_96665-1-1024x683.jpg?v=1778010345&width=960`,
  },
  {
    title: "Moroccanoil trend collection",
    href: "/pages/all-classes/moroccanoil-trend-collection",
    image: `${CDN}/1e1178f48c5a6cc7e548153fcae385168c8707c7.png?v=1778010345&width=960`,
  },
];

function IconLocation() {
  return (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 640 640" fill="none">
      <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" fill="currentColor" />
    </svg>
  );
}

function CertificationTimeline() {
  return (
    <section className="bg-[#fcfcfc] py-10 pb-12 min-[700px]:py-16" aria-label="Certification paths">
      <div className="mx-auto max-w-[980px] px-5 min-[700px]:px-8">
        <div className="grid gap-8 min-[900px]:gap-10">
          {CERTIFICATION_TABS.map((tab) => (
            <article key={tab.id} className="grid items-center gap-8 min-[900px]:grid-cols-2 min-[900px]:gap-12">
              <div>
                <Image src={tab.image} alt="" width={960} height={540} className="block h-auto w-full object-cover object-center" />
              </div>
              <div className="mx-auto max-w-[430px] text-center min-[900px]:mx-0 min-[900px]:text-left">
                <p className="m-0 mb-2 text-sm tracking-[0.08em] uppercase">{tab.eyebrow}</p>
                <h2 className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.5rem,3vw,2rem)] font-bold capitalize">{tab.title}</h2>
                <p className="m-0 mb-5 leading-[1.65]">{tab.description}</p>
                {tab.href && tab.cta && <Link href={tab.href} className={BTN_OUTLINE}>{tab.cta}</Link>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Academy Certification | Hetafu",
  description:
    "Hetafu Academy Certifications are strategic investments in your career, offering professional recognition and personal growth.",
};

export default function AcademyCertificationPage() {
  const introParagraphs = INTRO_COPY.split("\n");

  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <nav className="border-b border-[rgba(64,30,23,0.12)] bg-white" aria-label="Academy certification navigation">
          <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] md:px-8">
            <Link href="/" className="text-inherit no-underline">Home</Link>
            <span>/</span>
            <span>Academy Certification Program</span>
          </div>
        </nav>
        <section className="w-full overflow-hidden" aria-label="Academy Certification">
          <Image src={HERO} alt="" width={2000} height={1200} priority className="block h-auto w-full object-cover" />
        </section>

        <section className="border-y border-[rgba(64,30,23,0.12)] px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-[720px] text-center">
            <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold capitalize">Moroccanoil Academy Certification</h1>
            <div className="[&_p]:m-0 [&_p]:leading-[1.65] [&_p+p]:mt-4">
              {introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <CertificationTimeline />

        <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16" aria-label="Exclusive benefits">
          <h2 className="m-0 mb-8 text-center [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold capitalize">Exclusive benefits</h2>
          <div className="grid gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-12">
            {BENEFIT_COLUMNS.map((column) => (
              <article key={column.title}>
                <h3 className="m-0 mb-4 [font-family:var(--heading-font)] text-lg font-bold capitalize">{column.title}</h3>
                <ul className="m-0 pl-5 leading-[1.65] [&_li+li]:mt-2">
                  {column.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-12 md:px-8 md:pb-16" aria-label="Class catalog">
          <h2 className="m-0 mb-8 text-center [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold capitalize">Class catalog</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] min-[999px]:grid min-[999px]:grid-cols-3 min-[999px]:overflow-visible">
            {CLASS_CATALOG.map((item) => (
              <Link key={item.title} href={item.href} className="shrink-0 snap-center text-inherit no-underline [flex-basis:min(53vw,320px)] min-[700px]:[flex-basis:38vw] min-[999px]:flex-none">
                <div className="aspect-square overflow-hidden [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 hover:[&_img]:scale-[1.03]">
                  <Image src={item.image} alt="" width={960} height={960} />
                </div>
                <p className="mt-3 mb-0 text-center [font-family:var(--heading-font)] text-base font-bold capitalize">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
