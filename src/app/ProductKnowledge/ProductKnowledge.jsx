import Image from "next/image";
import Link from "next/link";
import App from "../Common/App/App";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

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

export default function ProductKnowledge() {
  return (
    <main id="main" className="mo-product-knowledge">
      <section className="mo-pk-hero" aria-label="Product Knowledge hero">
        <div className="mo-pk-hero__frame mo-pk-hero__frame--mobile">
          <Image
            src={HERO.mobile}
            alt=""
            width={1000}
            height={1000}
            priority
            className="mo-pk-hero__image"
          />
        </div>
        <div className="mo-pk-hero__frame mo-pk-hero__frame--desktop">
          <Image
            src={HERO.desktop}
            alt=""
            width={2000}
            height={1200}
            priority
            className="mo-pk-hero__image"
          />
        </div>
      </section>

      <section className="mo-pk-section mo-pk-section--center">
        <h1 className="mo-pk-title">discover our collections</h1>
        <p className="mo-pk-intro">
          All Moroccanoil products are argan oil-infused, offering a unique
          approach to hair care and styling for every hair type and need.
        </p>
      </section>

      <section className="mo-pk-section">
        <div className="mo-collection-grid">
          {COLLECTION_CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="mo-collection-card"
            >
              <Image
                src={card.image}
                alt={card.label}
                width={1000}
                height={1000}
              />
              <div className="mo-collection-card__overlay">
                <span className="mo-button mo-button--outline">{card.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mo-pk-banner" aria-label="Product Knowledge banner">
        <Image
          src={BANNER}
          alt=""
          width={2000}
          height={900}
          className="mo-pk-banner__image"
        />
      </section>

      <App />
    </main>
  );
}
