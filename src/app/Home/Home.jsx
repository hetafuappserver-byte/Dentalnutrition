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

const HETAFU_PRODUCTS = [
  {
    title: "Denta Bits",
    href: "/Products/bits",
    image: "/Products/DentaBits/Dentabits1.png",
  },
  {
    title: "Cute Mouthwash",
    href: "/Products/mouthwash",
    image: "/Products/CuteMouthwash/Cute.png",
  },
  {
    title: "Denta Smarts",
    href: "/Products/smarts",
    image: "/Products/DentaSmarts/smarts.png",
  },
  {
    title: "Dollipops",
    href: "/Products/lollipops",
    image: "/Products/Dollipops/Dollipops.png",
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
    href: "/pages/dental-nutrition",
    image: `${CDN}/Artboard_2_1.png?v=1771448589&width=720`,
  },
];

const SLIDESHOW_ARROW =
  "absolute top-1/2 z-[2] inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/75 bg-white/15 text-white transition-[background,border-color] duration-200 hover:border-white hover:!bg-white/30 md:h-12 md:w-12";

const SLIDESHOW_CONTENT =
  "pointer-events-none absolute inset-0 z-[1] flex max-w-[min(100%,34rem)] flex-col items-start justify-center p-8 text-left text-[var(--mo-brown)] md:max-w-[min(50%,36rem)] md:px-16 md:py-12";

const COLLECTION_BUTTON =
  "inline-flex items-center justify-center border border-white px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-colors duration-200 hover:!bg-white hover:!text-[var(--mo-brown)]";

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
    <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
      {products.map((product) => (
        <a key={product.title} href={product.href} className="text-center">
          <div className="mb-3 aspect-square overflow-hidden rounded-full bg-[#f3f3f3] [&_img]:!h-full [&_img]:!w-full [&_img]:object-cover">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
          <p className="text-base capitalize tracking-[0.02em]">{product.title}</p>
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

  const products = HETAFU_PRODUCTS;

  return (
    <main id="main" style={{backgroundColor: "#F2F2F2"}}>
      <section className="relative h-[80vh] overflow-hidden bg-black" aria-label="Featured banners">
        <button
          type="button"
          className={`${SLIDESHOW_ARROW} left-4 md:left-6`}
          aria-label="Previous slide"
          onClick={goToPrevSlide}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          className={`${SLIDESHOW_ARROW} right-4 md:right-6`}
          aria-label="Next slide"
          onClick={goToNextSlide}
        >
          <IconChevronRight />
        </button>
        <div
          className="flex h-full transition-transform duration-[600ms] ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <a
              key={slide.image}
              href={slide.href}
              className="relative h-[80vh] flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={index === 0}
                className="!h-full !w-full object-cover"
              />
              <div
                className={`${SLIDESHOW_CONTENT}${
                  slide.textAlign === "right"
                    ? " left-auto right-0 items-end text-right max-w-[min(50%,36rem)]"
                    : ""
                }`}
              >
                <p className="m-0 mb-3 [font-family:var(--heading-font)] text-sm font-semibold tracking-[0.12em] uppercase text-[var(--mo-teal)]">
                  {slide.eyebrow}
                </p>
                <h2 className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,3rem)] font-normal leading-[1.15] tracking-[0.03em]">
                  {slide.title}
                </h2>
                <p
                  className={`m-0 max-w-md text-[clamp(0.9375rem,2vw,1.125rem)] leading-relaxed text-[rgba(64,30,23,0.85)]${
                    slide.textAlign === "right" ? " ml-auto" : ""
                  }`}
                >
                  {slide.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={`h-[3px] w-10 cursor-pointer border-0 transition-colors ${
                index === activeSlide ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="px-5 py-10 text-center md:px-8 md:py-16" >
        <p className="[font-family:var(--heading-font)] text-[30px] font-normal tracking-[0.1em] uppercase">
          DISCOVER OUR PRODUCTS
        </p>
        <ProductGrid products={products.slice(0, 8)} />
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2">
          {COLLECTION_CARDS.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group relative block min-h-[320px] overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.label}
                width={720}
                height={720}
                className="!h-full !min-h-[320px] !w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className={COLLECTION_BUTTON}>{card.label}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <App />
    </main>
  );
}
