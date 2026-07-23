import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";
const CLINICAL_HEAD = "/Sustainability/clinicalhead.webp";

const CARDS = [
  {
    no: 1,
    title: "Dia Smart Advantage: A Clinical Trial on Gummies/Candies for Diabetic Oral Wellbeing",
    href: "https://www.easpublisher.com/article/articleID=4875",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 2,
    title: "Impact of Prime Smart Gummies / Candies on Oral Wellness: Results from a Double-Arm Trial",
    href: "https://kspublisher.com/articles/596/",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    no: 3,
    title: "Innovative Oral Health Management in Children Using JUNIOR SMART Gummies / Candies: A Cluster-Specific Interventional Approach",
    href: "https://www.gajrc.com/articles/862/",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 4,
    title: "Effectiveness of Functional Pink Smart Gummies / Candy in Managing Female Oral Health Conditions: A Multi-Cluster Approach",
    href: "https://sarpublication.com/articles/2230/",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 5,
    title: "Sweet Shield: Enhancing Oral Health with Bioactive HETAFU Candies in Adults - A Dose-Dependent Study",
    href: "https://pubmed.ncbi.nlm.nih.gov/40511069/",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    no: 6,
    title: "Sip to Strengthen: The Role of Hetafu cut G Drink in Digestive Wellness",
    href: "https://journals.lww.com/jpbs/fulltext/2025/05001/sweet_shield__enhancing_oral_health_with_bioactive.39.aspx",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 7,
    title: "From Sugars to Surfactants: The Role of HETAFU Candy Components in Shaping Oral Microbiology",
    href: "https://actascientific.com/ASDS/pdf/ASDS-08-1939.pdf",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 8,
    title: "Candy That Cares: Investigating HETAFU's Impact on Oral Healthy Microbiota",
    href: "https://actascientific.com/ASMI/pdf/ASMI-07-1457.pdf",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    no: 9,
    title: "Boosting Young Minds: The Efficacy of HETAFU Candy in Enhancing Children's Cognitive Development",
    href: "https://jccpractice.com/article/boosting-young-minds-the-efficacy-of-hetafu-candy-in-enhancing-children-s-cognitive-development-269/",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 10,
    title: "Impact Of Daily Probiotic-Enriched HETAFU Nutrismart Candy on Gut Health: A 3-Month Interventional Study",
    href: "https://healthcare-bulletin.co.uk/article/sip-to-strengthen-the-role-of-hetafu-cut-g-drink-in-digestive-wellness-3235/",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    no: 11,
    title: "HETAFU Cut G: The World's First Soft Drink Redefining Oral Hygiene by Revolutionizing the Oral Microbiome",
    href: "https://actascientific.com/ASMI/pdf/ASMI-08-1477.pdf",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    no: 12,
    title: "Decoding the Missing Synergy: DHA Vegan, Phosphatidylserine, and Probiotic Bacillus Coagulans",
    href: "https://jccpractice.com/article/boosting-young-minds-the-efficacy-of-hetafu-candy-in-enhancing-children-s-cognitive-development-269/#:~:text=Conclusion:%20HETAFU%20candy%20demonstrated%20promising,cognitive%20development",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
  {
    no: 13,
    title: "Boosting Brainpower: The Impact of HETAFU Candy on Cognitive Function in Adolescents",
    href: "https://jccpractice.com/article/boosting-young-minds-the-efficacy-of-hetafu-candy-in-enhancing-children-s-cognitive-development-269/#:~:text=Conclusion:%20HETAFU%20candy%20demonstrated%20promising,cognitive%20development",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
];

const INTRO = [
  "Dental Nutrition believes that we have a responsibility to make a positive impact in our community and beyond. That spirit is sparking the Dental Nutrition journey to sustainability and inspire a beautiful world where the environment and people thrive.",
  "We are always finding new ways to put our values into action, including our journey to become more sustainable. We are focusing on the vital areas where we can make a difference today, and constantly learning how we can do even better.",
];

const CARD_LINK =
  "mt-1 inline-flex items-center justify-center border border-[#401e17] px-5 py-[0.65rem] [font-family:var(--body-font)] text-sm font-bold tracking-[0.18em] uppercase no-underline transition-[color,background,border-color] duration-[250ms] hover:border-[#02c3c2] hover:bg-[#02c3c2] hover:text-white";

export const metadata = {
  title: "Sustainability | Hetafu",
  description:
    "Hetafu is on a journey to make a positive impact through sustainable products, operations, and community efforts.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <section className="w-full overflow-hidden bg-[#fcfcfc]" aria-label="Sustainability hero">
          <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="m-0 mb-6 [font-family:var(--heading-font)] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[0.02em] leading-tight">
                  Why Trust Us?
                  <br />
                  Backed by
                  <br />
                  Science,
                  <span className="text-[#02c3c2]"> Built for You.</span>
                </h1>
                <p className="mb-6 text-base leading-[1.65] text-gray-700">
                  Hetafu delivers clinical proof. Our commitment runs deeper than marketing claims, it's validated by over 18 rigorous clinical trials that demonstrate real results for real people.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3"><span className="text-[#02c3c2] font-bold mt-1">✓</span><span className="text-sm">Clinically Proven Ingredients</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#02c3c2] font-bold mt-1">✓</span><span className="text-sm">Expert-Backed Formulation</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#02c3c2] font-bold mt-1">✓</span><span className="text-sm">Transparency at Every Step</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#02c3c2] font-bold mt-1">✓</span><span className="text-sm">No Artificial Additives or Preservatives</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#02c3c2] font-bold mt-1">✓</span><span className="text-sm">Trusted by Parents & Recommended by Experts</span></li>
                  <li className="text-sm italic text-[#02c3c2] font-semibold gap-3">Because when it comes to your dental health, evidence isn't optional. It's essential.</li>
                </ul>
              </div>
              <div className="relative flex justify-center">
                <Image src={CLINICAL_HEAD} alt="Clinical Head Scientist" width={500} height={600} priority className="w-full max-w-[450px] h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 sm:px-5 py-8 sm:py-10 md:px-8 md:py-14">
          <h1 className="m-0 mb-4 sm:mb-5 [font-family:var(--heading-font)] text-[clamp(1.5rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize text-center">
            Explore our clinical trials and verified studies - your assurance of Hetafu's proven benefits.
          </h1>
          <div className="mx-auto max-w-[1200px] [&_p]:m-0 [&_p]:mb-3 sm:[&_p]:mb-4 [&_p]:text-base sm:[&_p]:text-lg [&_p]:leading-[1.6] sm:[&_p]:leading-[1.65] [&_p]:text-justify [&_p:last-child]:mb-0">
            {INTRO.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 sm:px-5 py-8 sm:py-10 md:px-8 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {CARDS.map((card) => (
              <article key={card.no} className="flex flex-col items-stretch gap-4 sm:gap-5 text-start">
                <Link href={card.href} className="block w-full overflow-hidden">
                  <Image src={card.image} alt="" width={600} height={600} className="h-auto w-full object-cover transition-transform duration-[350ms] hover:scale-[1.03]" />
                </Link>
                <div className="flex w-full flex-col items-start gap-3 sm:gap-4">
                  <span className="inline-block bg-[#02c3c2] text-white px-3 py-1 text-xs sm:text-sm font-bold rounded">No. {card.no}</span>
                  <h2 className="m-0 [font-family:var(--heading-font)] text-base sm:text-lg font-normal tracking-[0.04em]">{card.title}</h2>
                  <Link href={card.href} className={CARD_LINK}>READ STUDY</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 sm:px-5 py-8 sm:py-10 md:px-8 md:py-14">
          <h2 className="m-0 mb-4 sm:mb-5 [font-family:var(--heading-font)] text-[clamp(1.5rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize text-center">
            get involved
          </h2>
          <p className="mx-auto max-w-[1200px] text-base sm:text-lg leading-[1.6] sm:leading-[1.65] text-justify [&_a]:text-[#02c3c2] [&_a]:underline [&_a]:underline-offset-[0.15em]">
            What matters to you matters to us. If you want to know more about our sustainability efforts, send an email to <a href="mailto:reachthebest@hetafu.com">reachthebest@hetafu.com</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
