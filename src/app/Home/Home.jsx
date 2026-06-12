"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import App from "../Common/App/App";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const SLIDES = [
  {
    href: "/",
    image: "/Slides/slide1.png",
    alt: "Healthy smile with dental mirror",
    width: 600,
    height: 170,
    eyebrow: "Dental Nutrition",
    title: "Nourish Your Smile",
    subtitle:
      "Support stronger teeth and healthier gums with nutrition made for your oral wellness.",
  },
  {
    href: "/",
    image: "/Slides/slide2.jpg",
    alt: "Dental professional holding tooth model and mirror",
    width: 1000,
    height: 360,
    eyebrow: "Dental Nutrition",
    title: "Science-Backed Oral Care",
    subtitle:
      "Expert-formulated nutrition that helps protect enamel and promote lasting dental health.",
  },
  {
    href: "/",
    image: "/Slides/slide3.jpg",
    alt: "Dental hygiene with tooth models and dental tools",
    width: 881,
    height: 360,
    eyebrow: "Dental Nutrition",
    title: "Eat Well, Smile Better",
    subtitle:
      "Daily nutrition choices that complement professional care for a confident, radiant smile.",
    textAlign: "right",
  },
];

const HAIRCARE_PRODUCTS = [
  {
    title: "Moroccanoil Treatment",
    href: "/Products/smarts/moroccanoil-treatment",
    image: `${CDN}/Artboard_1_9a751184-b3b0-4b26-9e95-08bde5cc9a94.png?v=1767902505&width=500`,
  },
  {
    title: "Moroccanoil Treatment Light",
    href: "/Products/smarts/moroccanoil-treatment-light",
    image: `${CDN}/Artboard_1_9a751184-b3b0-4b26-9e95-08bde5cc9a94.png?v=1767902505&width=500`,
  },
  {
    title: "Moroccanoil Treatment Purple",
    href: "/Products/smarts/moroccanoil-treatment-purple",
    image: `${CDN}/Artboard_1_9a751184-b3b0-4b26-9e95-08bde5cc9a94.png?v=1767902505&width=500`,
  },
  {
    title: "Moroccanoil Treatment Mist",
    href: "/Products/smarts/moroccanoil-treatment-mist",
    image: `${CDN}/Artboard_1_9a751184-b3b0-4b26-9e95-08bde5cc9a94.png?v=1767902505&width=500`,
  },

  
];

const COLLECTION_CARDS = [
  {
    label: "Education",
    href: "/pages/education",
    image: `${CDN}/Artboard_1_1.png?v=1771448590&width=720`,
  },
  {
    label: "Dental Nutrition",
    href: "/pages/hair-color-home",
    image: `${CDN}/Artboard_2_1.png?v=1771448589&width=720`,
  },
];

function IconChevronLeft() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 8l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="mo-product-grid">
      {products.map((product) => (
        <a key={product.title} href={product.href} className="mo-product-card">
          <div className="mo-product-card__image">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
          <p className="mo-product-card__title">{product.title}</p>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % SLIDES.length);
  };

  const products = HAIRCARE_PRODUCTS;

  return (
    <main id="main">
      <section className="mo-slideshow" aria-label="Featured banners">
        <button
          type="button"
          className="mo-slideshow__arrow mo-slideshow__arrow--prev"
          aria-label="Previous slide"
          onClick={goToPrevSlide}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          className="mo-slideshow__arrow mo-slideshow__arrow--next"
          aria-label="Next slide"
          onClick={goToNextSlide}
        >
          <IconChevronRight />
        </button>
        <div
          className="mo-slideshow__slides"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <a
              key={slide.image}
              href={slide.href}
              className="mo-slideshow__slide"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={index === 0}
              />
              <div
                className={`mo-slideshow__content${slide.textAlign === "right" ? " mo-slideshow__content--right" : ""}`}
              >
                <p className="mo-slideshow__eyebrow">{slide.eyebrow}</p>
                <h2 className="mo-slideshow__title">{slide.title}</h2>
                <p className="mo-slideshow__subtitle">{slide.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mo-slideshow__dots">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={`mo-slideshow__dot${index === activeSlide ? " is-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="mo-section mo-section--center">
        <p className="mo-h6">DISCOVER OUR PRODUCTS</p>
        <div className="mo-tab-nav" role="tablist">
        </div>
        <ProductGrid products={products.slice(0, 8)} />
      </section>

      <section className="mo-section">
        <div className="mo-collection-grid">
          {COLLECTION_CARDS.map((card) => (
            <a key={card.label} href={card.href} className="mo-collection-card">
              <Image
                src={card.image}
                alt={card.label}
                width={720}
                height={720}
              />
              <div className="mo-collection-card__overlay">
                <span className="mo-button mo-button--outline">{card.label}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <App />
    </main>
  );
}