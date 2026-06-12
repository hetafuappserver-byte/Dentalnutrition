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
      "Giving back is a core value for Moroccanoil. Here’s how we’re helping people in need, animals, and the environment.",
    href: "/pages/sustainability-community",
    image: `${CDN}/Artboard_5_2.png?v=1771859627&width=600`,
  },
];

const INTRO = [
  "Dental Nutrition believes that we have a responsibility to make a positive impact in our community and beyond. That spirit is sparking the Dental Nutrition journey to sustainability and inspire a beautiful world where the environment and people thrive.",
  "We are always finding new ways to put our values into action, including our journey to become more sustainable. We are focusing on the vital areas where we can make a difference today, and constantly learning how we can do even better.",
];

export default function Sustainablity() {
  return (
    <main id="main" className="mo-sustainability">
      <section className="mo-sus-hero" aria-label="Sustainability hero">
        <Image
          src={HERO}
          alt=""
          width={2000}
          height={1000}
          priority
          className="mo-sus-hero__image"
        />
      </section>

      <section className="mo-sus-section mo-sus-section--center">
        <h1 className="mo-sus-title">Inspiring a Beautiful World</h1>
        <div className="mo-sus-intro">
          {INTRO.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mo-sus-section">
        <div className="mo-sus-grid">
          {CARDS.map((card) => (
            <article key={card.title} className="mo-sus-card">
              <Link href={card.href} className="mo-sus-card__image-link">
                <Image
                  src={card.image}
                  alt=""
                  width={600}
                  height={600}
                  className="mo-sus-card__image"
                />
              </Link>
              <article className="mo-oceana-info__item mo-sus-card__content">
                <h2 className="mo-oceana-info__title">{card.title}</h2>
                <p className="mo-oceana-info__text">{card.description}</p>
                <Link href={card.href} className="mo-sus-card__link">
                  LEARN MORE
                </Link>
              </article>
            </article>
          ))}
        </div>
      </section>

      <section className="mo-sus-section mo-sus-section--center">
        <h2 className="mo-sus-title">get involved</h2>
        <p className="mo-sus-cta">
          What matters to you matters to us. If you want to know more about our
          sustainability efforts, send an email to{" "}
          <a href="mailto:info@dentalnutrition.com">info@dentalnutrition.com</a>.
        </p>
      </section>
    </main>
  );
}
