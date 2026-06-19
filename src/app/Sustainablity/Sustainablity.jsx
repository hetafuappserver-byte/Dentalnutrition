import Image from "next/image";
import Link from "next/link";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const HERO = `${CDN}/sustainability-banner.png?v=1772212430&width=2000`;

const CARDS = [
  {
    title: "Our Products",
    description:
      "From the ingredients inside our products to the packaging they come in, Moroccanoil is committed to conscious luxury.",
    href: "/pages/sustainability-products",
    image: `${CDN}/Artboard_3_2.png?v=1771859627&width=600`,
  },
  {
    title: "Our Operations",
    description:
      "Moroccanoil is on a mission to be mindful of how our company operations affect the environment, from manufacturing to shipping.",
    href: "/pages/sustainability-operations",
    image: `${CDN}/Artboard_4_2_9e6df67f-828c-4a0e-8afc-da35434f8494.png?v=1771859626&width=600`,
  },
  {
    title: "Our Community",
    description:
      "Giving back is a core value for Moroccanoil. Here's how we're helping people in need, animals, and the environment.",
    href: "/pages/sustainability-community",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
];

const INTRO = [
  "Dental Nutrition believes that we have a responsibility to make a positive impact in our community and beyond. That spirit is sparking the Dental Nutrition journey to sustainability and inspire a beautiful world where the environment and people thrive.",
  "We are always finding new ways to put our values into action, including our journey to become more sustainable. We are focusing on the vital areas where we can make a difference today, and constantly learning how we can do even better.",
];

const CARD_LINK =
  "mt-1 inline-flex items-center justify-center border border-[#401e17] px-5 py-[0.65rem] [font-family:var(--body-font)] text-sm font-bold tracking-[0.18em] uppercase no-underline transition-[color,background,border-color] duration-[250ms] hover:border-[#02c3c2] hover:bg-[#02c3c2] hover:text-white";

export default function Sustainablity() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="w-full overflow-hidden" aria-label="Sustainability hero">
        <Image
          src={HERO}
          alt=""
          width={2000}
          height={1000}
          priority
          className="h-auto min-h-[240px] w-full object-cover min-[700px]:min-h-[420px]"
        />
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          Inspiring a Beautiful World
        </h1>
        <div className="mx-auto max-w-[820px] [&_p]:m-0 [&_p]:mb-4 [&_p]:text-lg [&_p]:leading-[1.65] [&_p:last-child]:mb-0">
          {INTRO.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-[repeat(3,minmax(280px,1fr))] gap-8 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] max-[999px]:-mx-5 max-[999px]:grid-cols-[repeat(3,minmax(75vw,1fr))] max-[999px]:gap-5 max-[999px]:px-5">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex snap-center flex-col items-stretch gap-5 text-start"
            >
              <Link href={card.href} className="block w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-[350ms] hover:scale-[1.03]"
                />
              </Link>
              <div className="flex w-full flex-col items-start gap-4">
                <h2 className="m-0 mb-4 [font-family:var(--heading-font)] text-2xl font-normal tracking-[0.04em] capitalize">
                  {card.title}
                </h2>
                <p className="m-0 text-base leading-[1.65]">{card.description}</p>
                <Link href={card.href} className={CARD_LINK}>
                  LEARN MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h2 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          get involved
        </h2>
        <p className="mx-auto max-w-[720px] text-lg leading-[1.65] [&_a]:text-[#02c3c2] [&_a]:underline [&_a]:underline-offset-[0.15em]">
          What matters to you matters to us. If you want to know more about our
          sustainability efforts, send an email to{" "}
          <a href="mailto:info@dentalnutrition.com">info@dentalnutrition.com</a>.
        </p>
      </section>
    </main>
  );
}
