import Image from "next/image";

const HERO = {
  desktop: `/HetafuxIda/Hetafu-Carousel.png`,
  mobile: `/HetafuxIda/Hetafu-Carousel.png`,
};

const INFO_COLUMNS = [
  {
    title: "About the Indian Dental Association (IDA)",
    text: "The Indian Dental Association is the country's leading professional body for dentists, setting trusted benchmarks for oral healthcare. Through rigorous evaluation of safety, quality, and claimed benefits, IDA acceptance helps dental professionals and families choose reliable oral-care products with confidence.",
  },
  {
    title: "Why IDA Acceptance Matters",
    text: "For Hetafu, IDA acceptance validates our dental nutrition approach—edible oral care that nourishes teeth, gums, and the oral microbiome. It confirms that our clinically tested, sugar-free formulations meet the standards dentists expect when recommending products to patients of all ages.",
  },
];

const STATS = [
  {
    value: "18+",
    label: "clinical studies validating Hetafu dental nutrition formulations",
  },
  {
    value: "IDA-Accepted",
    label:
      "products evaluated and accepted by the Indian Dental Association for safety, quality, and benefits",
  },
  {
    value: "1st",
    label:
      "dental nutrition brand in the world—oral care in edible form for day-long protection",
  },
];

const TESTIMONIAL = {
  image: `/HetafuxIda/Hetafu-Static-Page.png`,
};

export default function HetafuVsIDA() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="w-full overflow-hidden" aria-label="Hetafu and IDA hero">
        <div className="min-[700px]:hidden">
          <Image
            src={HERO.mobile}
            alt="Hetafu and IDA"
            width={1000}
            height={600}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="hidden min-[700px]:block">
          <Image
            src={HERO.desktop}
            alt="Hetafu and IDA"
            width={2000}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          Trusted by Dentists. Accepted by IDA.
        </h1>
        <p className="mx-auto max-w-[820px] text-lg leading-[1.65]">
          Hetafu is proud to be IDA-Accepted. Our dental nutrition products have
          been evaluated and accepted by the Indian Dental Association (IDA),
          meeting rigorous standards for safety, quality, and claimed benefits—so
          dentists and families can choose oral care backed by professional trust
          and clinical science.
        </p>
      </section>

      <section
        className="mx-auto w-full max-w-[1200px] px-5 pb-10 md:px-8 md:pb-14"
        aria-label="Hetafu and IDA video"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DQyRohZZsyM?si=2fh61yk-CLKP4384"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 min-[1024px]:mx-[150px] min-[1024px]:max-w-none md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-8 min-[700px]:grid-cols-2 min-[700px]:gap-12">
          {INFO_COLUMNS.map((column) => (
            <article key={column.title}>
              <h2 className="m-0 mb-4 [font-family:var(--heading-font)] text-2xl font-normal tracking-[0.04em] capitalize">
                {column.title}
              </h2>
              <p className="m-0 text-base leading-[1.65]">{column.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 min-[1024px]:mx-[150px] min-[1024px]:max-w-none md:px-8 md:py-14"><div className="grid grid-cols-[repeat(3,minmax(220px,1fr))] gap-8 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] max-[999px]:-mx-5 max-[999px]:grid-cols-[repeat(3,minmax(75vw,1fr))] max-[999px]:gap-5 max-[999px]:px-5">
          {STATS.map((stat) => (
            <article key={stat.value} className="snap-center text-center">
              <p className="m-0 mb-3 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.25rem)] font-semibold">
                {stat.value}
              </p>
              <p className="m-0 text-base leading-[1.6]">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full overflow-hidden" aria-label="Testimonial">
        <Image
          src={TESTIMONIAL.image}
          alt=""
          width={2000}
          height={900}
          className="block h-auto w-full object-cover"
        />
      </section>
    </main>
  );
}
