"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const SLIDES = [
  {
    href: "/",
    imageMobile: "/Slides/slide1.png",
    imageDesktop: "/Slides/slide1.png",
    alt: "Healthy smile with dental mirror",
    eyebrow: "Dental Nutrition",
    title: "Nourish Your Smile",
    subtitle:
      "Support stronger teeth and healthier gums with nutrition made for your oral wellness.",
  },
  {
    href: "/",
    imageMobile: "/Slides/slide2.jpg",
    imageDesktop: "/Slides/slide2.jpg",
    alt: "Dental professional holding tooth model and mirror",
    eyebrow: "Dental Nutrition",
    title: "Science-Backed Oral Care",
    subtitle:
      "Expert-formulated nutrition that helps protect enamel and promote lasting dental health.",
  },
  {
    href: "/",
    imageMobile: "/Slides/slide3.jpg",
    imageDesktop: "/Slides/slide3.jpg",
    alt: "Dental hygiene with tooth models and dental tools",
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
    href: "/products/bits/denta-bits-daily-dental-wellness-bits",
    image: "/products/DentaBits/Dentabits1.png",
  },
  {
    title: "Cute Mouthwash",
    href: "/products/mouthwash",
    image: "/products/CuteMouthwash/Cute.png",
  },
  {
    title: "Denta Smarts",
    href: "/products/smarts",
    image: "/products/DentaSmarts/smarts.png",
  },
  {
    title: "Dollipops",
    href: "/products/lollipops",
    image: "/products/Dollipops/Dollipops.png",
  },
];

const COLLECTION_CARDS = [
  {
    label: "Education",
    href: "/education",
    image: `${CDN}/Artboard_1_1.png?v=1771448590&width=720`,
  },
  {
    label: "Dental Nutrition",
    href: "/dental-nutrition",
    image: `${CDN}/Artboard_2_1.png?v=1771448589&width=720`,
  },
];

const SLIDESHOW_ARROW =
  "absolute top-1/2 z-[2] inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/75 bg-white/15 text-white transition-[background,border-color] duration-200 hover:border-white hover:!bg-white/30 md:h-12 md:w-12";

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
    <div className="mx-auto mt-8 flex max-w-[1200px] gap-5 md:gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-4">
      {products.map((product) => (
        <a key={product.title} href={product.href} className="text-center flex-shrink-0 w-[calc(100%/4)] md:w-auto">
          <div className="mb-4 aspect-square overflow-hidden rounded-full bg-[#f3f3f3] [&_img]:!h-full [&_img]:!w-full [&_img]:object-cover">
            <Image src={product.image} alt={product.title} width={500} height={500} />
          </div>
          <p className="text-base capitalize tracking-[0.02em]">{product.title}</p>
        </a>
      ))}
    </div>
  );
}

export default function Page() {
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

  return (
    <>
      <Navbar />
      <main id="main" style={{ backgroundColor: "#F2F2F2" }}>
        <section className="relative w-full overflow-hidden" aria-label="Featured banners">
          <button
            type="button"
            className={`${SLIDESHOW_ARROW} left-2 sm:left-4 md:left-6`}
            aria-label="Previous slide"
            onClick={goToPrevSlide}
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            className={`${SLIDESHOW_ARROW} right-2 sm:right-4 md:right-6`}
            aria-label="Next slide"
            onClick={goToNextSlide}
          >
            <IconChevronRight />
          </button>

          <div
            className="flex w-full transition-transform duration-[600ms] ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <a
                key={slide.imageDesktop}
                href={slide.href}
                className="relative w-full flex-[0_0_100%] h-[50vh] sm:h-[60vh] md:h-[80vh]"
              >
                <div className="min-[700px]:hidden w-full h-full">
                  <Image
                    src={slide.imageMobile}
                    alt={slide.alt}
                    width={1000}
                    height={600}
                    priority={index === 0}
                    className="!h-full !w-full object-cover"
                  />
                </div>
                <div className="hidden min-[700px]:block w-full h-full">
                  <Image
                    src={slide.imageDesktop}
                    alt={slide.alt}
                    width={2000}
                    height={900}
                    priority={index === 0}
                    className="!h-full !w-full object-cover"
                  />
                </div>
                <div
                  className={`absolute inset-0 z-[1] flex flex-col justify-center px-2 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-8 md:py-12 ${
                    slide.textAlign === "right"
                      ? "items-end text-right"
                      : "items-start text-left"
                  }`}
                >
                  <div className="w-full max-w-[min(100%,16rem)] sm:max-w-[min(100%,32rem)] md:max-w-[min(50%,36rem)]">
                    <p className="m-0 mb-1 sm:mb-3 [font-family:var(--heading-font)] text-[8px] sm:text-sm font-semibold tracking-[0.12em] uppercase text-[var(--mo-teal)]">
                      {slide.eyebrow}
                    </p>
                    <h2 className="m-0 mb-1 sm:mb-3 md:mb-4 [font-family:var(--heading-font)] text-[clamp(0.75rem,2vw,3rem)] font-normal leading-[1.1] sm:leading-[1.15] tracking-[0.03em] text-[var(--mo-brown)]">
                      {slide.title}
                    </h2>
                    <p className="m-0 text-[clamp(0.55rem,1vw,1rem)] leading-[1.3] sm:leading-relaxed text-justify text-[rgba(64,30,23,0.85)]">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5 sm:gap-2 z-[2]">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.imageDesktop}
                type="button"
                className={`h-[2px] sm:h-[3px] w-6 sm:w-8 md:w-10 cursor-pointer border-0 transition-colors ${
                  index === activeSlide ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </section>

        <section className="px-5 py-10 text-center md:px-8 md:py-16">
          <p className="[font-family:var(--heading-font)] text-[clamp(1.25rem,4vw,2rem)] font-normal tracking-[0.1em] uppercase whitespace-nowrap">
            DISCOVER OUR PRODUCTS
          </p>
          <ProductGrid products={HETAFU_PRODUCTS.slice(0, 8)} />
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

        <section className="px-5 py-10 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/App/app.png"
                alt="Dental Nutrition Education app"
                width={1000}
                height={750}
              />
            </div>
            <div className="text-center [&_h3]:m-0 [&_h3]:mb-4 [&_h3]:[font-family:var(--heading-font)] [&_h3]:text-[1.875rem] [&_h3]:tracking-[0.05em] [&_p]:m-0 [&_p]:mb-6 [&_p]:text-justify [&_p]:text-lg">
              <h3>
                <strong>Education anytime, anywhere</strong>
              </h3>
              <p>
                Access inspirational and educational videos, plus self-guided
                learning on nutrition, dental health, product application, and more.
                Ask our Dental Nutrition Experts about all things dental nutrition!
                Available for iOS and Android mobile and tablet devices.
              </p>
              <div className="flex flex-wrap justify-center gap-4 [&_img]:h-11 [&_img]:w-auto">
                <a href="https://apps.apple.com/us/app/dental-nutrition/id123456789">
                  <Image
                    src={`${CDN}/Download_on_the_App_Store_Badge_US-UK_blk_092917_f35fc401-e659-497d-8a28-743b47d549d0.png?v=1771450952&width=1200`}
                    alt="Download on the App Store"
                    width={160}
                    height={44}
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.dentalnutrition">
                  <Image
                    src={`${CDN}/GetItOnGooglePlay_Badge_Web_color_English.png?v=1771450230&width=1200`}
                    alt="Get it on Google Play"
                    width={160}
                    height={44}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
