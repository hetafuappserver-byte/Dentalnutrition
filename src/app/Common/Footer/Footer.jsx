"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FOOTER_LINKS = {
  professionals: [
    { label: "Education", href: "/pages/education" },
    { label: "Haircolor", href: "/pages/hair-color-home" },
    {
      label: "Color Formulation Tool",
      href: "/pages/color-formulation-quiz",
    },
    {
      label: "IDA Learning Platform",
      href: "https://ida.docebosaas.com/learn",
    },
    { label: "MO Pro Rewards Shop", href: "/collections/rewards-shop" },
  ],
  about: [
    { label: "Meet the Team", href: "/pages/meet-the-team" },
    { label: "Sustainability", href: "/pages/sustainability" },
    { label: "Hetafu x IDA", href: "/pages/hetafu-vs-ida" },
    { label: "Distribution", href: "/pages/distribution" },
  ],
  support: [
    { label: "FAQ", href: "/pages/frequently-asked-questions" },
    { label: "Contact us", href: "/pages/contact" },
  ],
};

const LEGAL_LINKS = [
  { label: "Giveaway rules", href: "/pages/giveaway-rules" },
  { label: "Safety Data Sheet", href: "/pages/safety-data-sheets" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms and conditions", href: "/policies/terms-of-service" },
];

const SPOTLIGHT_VIDEOS = [
  { src: "/Videos/testvideo1.mp4", link: "https://youtu.be/nr7O2GgXgv8", id: "test-video-1", poster: null, alt: "Dental nutrition spotlight video 1" },
  { src: "/Videos/testvideo2.mp4", link: "https://youtu.be/bHVM8nab0vA", id: "test-video-2", poster: null, alt: "Dental nutrition spotlight video 2" },
  { src: "/Videos/testvideo3.mp4", link: "https://youtu.be/ATTSLUSrzZA", id: "test-video-3", poster: null, alt: "Dental nutrition spotlight video 3" },
  { src: "/Videos/testvideo4.mp4", link: "https://youtu.be/4blKdslev8E", id: "test-video-4", poster: null, alt: "Dental nutrition spotlight video 4" },
  { src: "/Videos/testvideo5.mp4", link: "https://youtu.be/-rxI_fMOuiE", id: "test-video-5", poster: null, alt: "Dental nutrition spotlight video 5" },
  { src: "/Videos/testvideo6.mp4", link: "https://youtu.be/PDAuFbgs3TI", id: "test-video-6", poster: null, alt: "Dental nutrition spotlight video 6" },
  { src: "/Videos/testvideo7.mp4", link: "https://youtu.be/nEeyl90yVpQ", id: "test-video-7", poster: null, alt: "Dental nutrition spotlight video 7" },
  { src: "/Videos/testvideo8.mp4", link: "https://youtu.be/IkdsdP5bHhc", id: "test-video-8", poster: null, alt: "Dental nutrition spotlight video 8" },
  { src: "/Videos/testvideo9.mp4", link: "https://youtu.be/C_xtshHuB2Q", id: "test-video-9", poster: null, alt: "Dental nutrition spotlight video 9" },
  { src: "/Videos/testvideo10.mp4", link: "https://youtu.be/x6BbYEoCu_w", id: "test-video-10", poster: null, alt: "Dental nutrition spotlight video 10" },
  { src: "/Videos/testvideo11.mp4", link: "https://youtu.be/unHTSaa2MR0", id: "test-video-11", poster: null, alt: "Dental nutrition spotlight video 11" },
  { src: "/Videos/testvideo12.mp4", link: "https://youtu.be/SYWPJqAcxsU", id: "test-video-12", poster: null, alt: "Dental nutrition spotlight video 12" },
  { src: "/Videos/testvideo13.mp4", link: "https://youtu.be/Us5mcXQJrXM", id: "test-video-13", poster: null, alt: "Dental nutrition spotlight video 13" },
  { src: "/Videos/testvideo14.mp4", link: "https://youtu.be/hlVhub4rjOQ", id: "test-video-14", poster: null, alt: "Dental nutrition spotlight video 14" },
  { src: "/Videos/testvideo15.mp4", link: "https://youtu.be/DkhktdigK2E", id: "test-video-15", poster: null, alt: "Dental nutrition spotlight video 15" },
  { src: "/Videos/testvideo16.mp4", link: "https://youtu.be/Cqu_VZ-_484", id: "test-video-16", poster: null, alt: "Dental nutrition spotlight video 16" },
  { src: "/Videos/testvideo17.mp4", link: "https://youtu.be/4MD9xY3GwTA", id: "test-video-17", poster: null, alt: "Dental nutrition spotlight video 17" },
  { src: "/Videos/testvideo18.mp4", link: "https://youtu.be/mWKDeikft0w", id: "test-video-18", poster: null, alt: "Dental nutrition spotlight video 18" },
  { src: "/Videos/testvideo19.mp4", link: "https://youtu.be/STqSMY4Xyd0", id: "test-video-19", poster: null, alt: "Dental nutrition spotlight video 19" },
  { src: "/Videos/testvideo20.mp4", link: "https://youtu.be/OZb5Wt_60Cc", id: "test-video-20", poster: null, alt: "Dental nutrition spotlight video 20" },
  { src: "/Videos/testvideo21.mp4", link: "https://youtu.be/vN7xGBL0CmU", id: "test-video-21", poster: null, alt: "Dental nutrition spotlight video 21" },
  { src: "/Videos/testvideo22.mp4", link: "https://youtu.be/hO563XKeEKc", id: "test-video-22", poster: null, alt: "Dental nutrition spotlight video 22" },
  { src: "/Videos/testvideo23.mp4", link: "https://youtu.be/Bu1gmxGL7y4", id: "test-video-23", poster: null, alt: "Dental nutrition spotlight video 23" },
  { src: "/Videos/testvideo24.mp4", link: "https://youtu.be/IUJ5akQEAeY", id: "test-video-24", poster: null, alt: "Dental nutrition spotlight video 24" },
  { src: "/Videos/testvideo25.mp4", link: "https://youtu.be/2kxvMdOttS8", id: "test-video-25", poster: null, alt: "Dental nutrition spotlight video 25" },
  { src: "/Videos/testvideo26.mp4", link: "https://youtu.be/jaoYQtdYam0", id: "test-video-26", poster: null, alt: "Dental nutrition spotlight video 26" },
  { src: "/Videos/testvideo27.mp4", link: "https://youtu.be/DY-o-4L1dFI", id: "test-video-27", poster: null, alt: "Dental nutrition spotlight video 27" },
  { src: "/Videos/testvideo28.mp4", link: "https://youtu.be/9sbf-sW9fRw", id: "test-video-28", poster: null, alt: "Dental nutrition spotlight video 28" },
  { src: "/Videos/testvideo29.mp4", link: "https://youtu.be/y8ykVSGikEI", id: "test-video-29", poster: null, alt: "Dental nutrition spotlight video 29" },
  { src: "/Videos/testvideo30.mp4", link: "https://youtu.be/y6bz8Yc89vQ", id: "test-video-30", poster: null, alt: "Dental nutrition spotlight video 30" },
  { src: "/Videos/testvideo31.mp4", link: "https://youtu.be/nll62jSDUuI", id: "test-video-31", poster: null, alt: "Dental nutrition spotlight video 31" },
  { src: "/Videos/testvideo32.mp4", link: "https://youtu.be/QuRsR6xRd9A", id: "test-video-32", poster: null, alt: "Dental nutrition spotlight video 32" },
  { src: "/Videos/testvideo33.mp4", link: "https://youtu.be/wje6CGzBDHI", id: "test-video-33", poster: null, alt: "Dental nutrition spotlight video 33" },
  { src: "/Videos/testvideo34.mp4", link: "https://youtu.be/Uetb10oCE8s", id: "test-video-34", poster: null, alt: "Dental nutrition spotlight video 34" },
  { src: "/Videos/testvideo35.mp4", link: "https://youtu.be/2tnja1cJZRk", id: "test-video-35", poster: null, alt: "Dental nutrition spotlight video 35" },
  { src: "/Videos/testvideo36.mp4", link: "https://youtu.be/2ABGHBSjyJs", id: "test-video-36", poster: null, alt: "Dental nutrition spotlight video 36" },
  { src: "/Videos/testvideo37.mp4", link: "https://youtu.be/qGltivXib18", id: "test-video-37", poster: null, alt: "Dental nutrition spotlight video 37" },
  { src: "/Videos/testvideo38.mp4", link: "https://youtu.be/ygw472Dn97E", id: "test-video-38", poster: null, alt: "Dental nutrition spotlight video 38" },
  { src: "/Videos/testvideo39.mp4", link: "https://youtu.be/CIZZiV-HTfY", id: "test-video-39", poster: null, alt: "Dental nutrition spotlight video 39" },
  { src: "/Videos/testvideo40.mp4", link: "https://youtu.be/rVr8bUpJlrc", id: "test-video-40", poster: null, alt: "Dental nutrition spotlight video 40" },
  { src: "/Videos/testvideo41.mp4", link: "https://youtu.be/adXpMD9xMzA", id: "test-video-41", poster: null, alt: "Dental nutrition spotlight video 41" },
  { src: "/Videos/testvideo42.mp4", link: "https://youtu.be/FfzBOAROSG8", id: "test-video-42", poster: null, alt: "Dental nutrition spotlight video 42" },
  { src: "/Videos/testvideo43.mp4", link: "https://youtu.be/QKo1sowoBfc", id: "test-video-43", poster: null, alt: "Dental nutrition spotlight video 43" },
  { src: "/Videos/testvideo44.mp4", link: "https://youtu.be/IZQXPb0kWCs", id: "test-video-44", poster: null, alt: "Dental nutrition spotlight video 44" },
  { src: "/Videos/testvideo45.mp4", link: "https://youtu.be/RZD3EYbGqMA", id: "test-video-45", poster: null, alt: "Dental nutrition spotlight video 45" },
  { src: "/Videos/testvideo46.mp4", link: "https://youtu.be/QKYXSrlj5Kg", id: "test-video-46", poster: null, alt: "Dental nutrition spotlight video 46" },
  { src: "/Videos/testvideo47.mp4", link: "https://youtu.be/FZtk_qh65vY", id: "test-video-47", poster: null, alt: "Dental nutrition spotlight video 47" },
  { src: "/Videos/testvideo48.mp4", link: "https://youtu.be/R92h8A_abT0", id: "test-video-48", poster: null, alt: "Dental nutrition spotlight video 48" },
  { src: "/Videos/testvideo49.mp4", link: "https://youtu.be/FkTCqH_CgUQ", id: "test-video-49", poster: null, alt: "Dental nutrition spotlight video 49" },
  { src: "/Videos/testvideo50.mp4", link: "https://youtu.be/m0yQfpwB6pg", id: "test-video-50", poster: null, alt: "Dental nutrition spotlight video 50" },
  { src: "/Videos/testvideo51.mp4", link: "https://youtu.be/XhdWsYw2H24", id: "test-video-51", poster: null, alt: "Dental nutrition spotlight video 51" },
  { src: "/Videos/testvideo52.mp4", link: "https://youtu.be/PGYQCYn6sR0", id: "test-video-52", poster: null, alt: "Dental nutrition spotlight video 52" },
];

function IconArrowSubmit() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 640 640" fill="none">
      <path
        d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const FOOTER_HEADING =
  "m-0 mb-4 [font-family:var(--heading-font)] text-sm font-semibold tracking-[0.08em] uppercase";

const FOOTER_LINK =
  "text-[0.9375rem] no-underline transition-opacity hover:!underline";

const FOOTER_LEGAL_LINK =
  "text-[var(--mo-teal)] no-underline transition-opacity hover:!underline";

const FOOTER_SOCIAL_LINK =
  "inline-flex items-center gap-[0.65rem] text-[0.9375rem] opacity-65 no-underline transition-opacity duration-200 hover:opacity-100";

function FooterLinkColumn({ title, links, children }) {
  return (
    <div className="md:max-w-[17rem] md:flex-[0_1_17rem]">
      <p className={FOOTER_HEADING}>{title}</p>
      <ul className="m-0 flex list-none flex-col gap-[0.65rem] p-0">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={FOOTER_LINK}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={FOOTER_LINK}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

function SpotlightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to only run animations when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play video when slide becomes active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [activeIndex]);

  // Auto-scroll functionality - only runs when section is visible and not paused
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isVisible, isPaused]);

  // Memoize visible videos with extra items for smooth transitions
  const carouselItems = useMemo(() => {
    // For desktop: 5 visible + 2 side items = 7 items
    // For mobile: 1 visible + 2 side items = 3 items
    // We'll take 9 total to be safe (4 on each side of center)
    const range = 4;
    return Array.from({ length: range * 2 + 1 }).map((_, i) => {
      const offset = i - range;
      const index = (activeIndex + offset + SPOTLIGHT_VIDEOS.length) % SPOTLIGHT_VIDEOS.length;
      return { ...SPOTLIGHT_VIDEOS[index], offset, originalIndex: index };
    });
  }, [activeIndex]);

  const selectSlide = (index) => {
    const video = SPOTLIGHT_VIDEOS[index];
    if (video?.link) {
      window.open(video.link, "_blank", "noopener noreferrer");
    }
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + SPOTLIGHT_VIDEOS.length) % SPOTLIGHT_VIDEOS.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % SPOTLIGHT_VIDEOS.length);
  };

  return (
    <div ref={containerRef} className="mt-4 w-full" role="region" aria-label="Spotlight carousel">
      <div className="relative w-full overflow-hidden">
        <div className="relative flex items-center justify-center h-[500px] sm:h-[600px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px]">
          {/* Left Navigation Button */}
          <button
            onClick={goToPrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Previous video"
            className="absolute left-2 sm:left-4 lg:left-8 xl:left-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-700 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl hover:bg-teal-800 transition-all duration-300 group/nav active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Next video"
            className="absolute right-2 sm:right-4 lg:right-8 xl:right-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-700 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl hover:bg-teal-800 transition-all duration-300 group/nav active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover/nav:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Carousel */}
          <div className="flex sm:hidden w-full h-full relative items-center justify-center overflow-hidden">
            {carouselItems.filter(item => Math.abs(item.offset) <= 4).map((item) => ( // Show all 9 items on mobile
              <div
                key={item.id}
                className="absolute w-full max-w-[320px] aspect-[9/16] transition-all duration-500 ease-in-out px-4"
                style={{
                  transform: `translateX(${item.offset * 100}%) scale(${item.offset === 0 ? 1 : 0.85})`,
                  opacity: item.offset === 0 ? 1 : 0,
                  zIndex: item.offset === 0 ? 20 : 10,
                }}
              >
                <div 
                  className="w-full h-full rounded-2xl overflow-hidden group relative shadow-2xl cursor-pointer"
                  onClick={() => selectSlide(item.originalIndex)}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label="Watch dentist testimonial on YouTube">
                    <div className="relative w-full h-full">
                      {isVisible && item.offset === 0 && (
                        <video
                          ref={videoRef}
                          src={item.src}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          preload="auto"
                          autoPlay
                        />
                      )}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Carousel */}
          <div
            className="hidden sm:block relative w-full h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative flex items-center justify-center h-full">
              {carouselItems.map((item) => {
                const distance = Math.abs(item.offset);
                const isCenter = item.offset === 0;

                // Only render items that are within visible or slightly beyond for transition
                if (distance > 4) return null; // Show all 9 items instead of only 7

                const translateX = item.offset * 300;
                const scale = isCenter ? 1.1 : 1 - (distance * 0.05);
                // Increased opacity for better visibility: center 1, neighbors 0.9, edge 0.7, still visible
                const opacity = distance === 0 ? 1 : distance === 1 ? 0.9 : distance === 2 ? 0.7 : 0.5;
                const zIndex = 10 - distance;
                const shadow = isCenter ? 'shadow-2xl' : distance === 1 ? 'shadow-lg' : 'shadow-md';

                return (
                  <div
                    key={item.id}
                    className={`absolute transition-all duration-700 ease-in-out ${shadow}`}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      willChange: 'transform, opacity',
                      pointerEvents: distance > 2 ? 'none' : 'auto'
                    }}
                  >
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Watch dentist testimonial on YouTube"
                      onClick={(e) => {
                        e.preventDefault();
                        selectSlide(item.originalIndex);
                      }}
                    >
                      <div className="w-80 h-[32rem] lg:w-96 lg:h-[36rem] xl:w-[24rem] xl:h-[36rem] 2xl:w-[26rem] 2xl:h-[40rem] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group cursor-pointer">
                        <div className="relative w-full h-full">
                          {isVisible && (
                            <video
                              ref={isCenter ? videoRef : null}
                              src={item.src}
                              className="w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                            />
                          )}
                          <div className={`absolute inset-0 transition-all duration-300 ${isCenter
                            ? 'bg-black/0'
                            : 'bg-black/10'
                            }`}></div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#c9f5f5] text-[var(--mo-brown)]">
      <div className="mx-auto grid max-w-[1425px] gap-10 px-5 pt-10 pb-0 md:gap-12 md:px-8 md:pt-12 lg:px-12">
        <div className="text-center">
          <p className={`${FOOTER_HEADING} mb-2`}>Find your community</p>
          <p className="m-0 text-2xl leading-tight">
            <a
              href="https://www.instagram.com/IDAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-opacity duration-200 hover:!opacity-75"
            >
              @IDA Academy
            </a>
          </p>
        </div>

        <div className="grid items-start gap-10 md:flex md:flex-wrap md:justify-between md:gap-12 min-[1150px]:gap-x-20">
          <div className="md:mx-auto md:w-full md:max-w-full md:flex-[0_0_100%]">
            <SpotlightCarousel />
          </div>

          <div className="md:max-w-80 md:flex-[1_1_14rem]">
            <p className={FOOTER_HEADING}>Stay in the know</p>
            <p className="m-0 mb-5 text-[0.9375rem] leading-relaxed">
              Stay in the loop about exclusive offers and the latest product
              information with our newsletter.
            </p>
            <form
              className="flex max-w-full items-stretch"
              action="/contact#newsletter-form"
              method="post"
            >
              <input type="hidden" name="form_type" value="customer" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="contact[tags]" value="newsletter" />
              <div className="relative flex-1">
                <input
                  id="footer-email"
                  type="email"
                  name="contact[email]"
                  placeholder="E-mail"
                  autoComplete="email"
                  required
                  className="h-10 w-full border border-[var(--mo-teal)] border-r-0 bg-white px-3 [font-family:var(--body-font)] text-[0.9375rem] text-[var(--mo-brown)] placeholder:text-[rgba(64,30,23,0.65)]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 w-10 min-w-10 cursor-pointer items-center justify-center border border-[var(--mo-teal)] bg-[var(--mo-teal)] text-white transition-colors duration-200 hover:!bg-[#02aba9]"
                aria-label="Subscribe"
              >
                <IconArrowSubmit />
              </button>
            </form>
          </div>

          <FooterLinkColumn title="About Us" links={FOOTER_LINKS.about}>
            <div className="mt-4" />
          </FooterLinkColumn>

          <FooterLinkColumn title="Support" links={FOOTER_LINKS.support}>
            <div className="mt-4">
              <p className={FOOTER_HEADING}>NYC Academy</p>
              <div className="mt-3 flex items-start gap-3 text-[0.9375rem] leading-normal">
                <IconLocation />
                <div>
                  Plot No. 14D/1, 3rd Floor, Dwaraka Signature Building,
                  <br />
                  Jaihind Gandhi Road, Madhapur,
                  <br />
                  Hyderabad, Telangana-500081
                </div>
              </div>
            </div>
          </FooterLinkColumn>
        </div>

        <div className="mb-10 flex w-full justify-start">
          <ul
            className="m-0 flex list-none flex-wrap items-center gap-3 gap-x-8 p-0"
            role="list"
          >
            <li>
              <a
                className={FOOTER_SOCIAL_LINK}
                href="https://www.instagram.com/IDAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <span className="h-4 w-4 [&_svg]:h-4 [&_svg]:w-4">
                  <IconInstagram />
                </span>
                Follow us on instagram!
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly gap-4 bg-white px-5 py-4 pb-8 text-center text-xs tracking-[0.05em] text-[var(--mo-brown)] md:flex-row md:justify-between md:p-12">
        <p className="m-0 whitespace-nowrap">© 2026 - Dental Nutrition. All Rights Reserved.</p>
        <ul className="m-0 grid list-none grid-cols-2 gap-y-2 p-0 whitespace-nowrap md:flex md:flex-wrap md:justify-end md:gap-0">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label} className="px-[2px] text-xs uppercase md:px-4">
              {link.href.startsWith("http") ? (
                <a href={link.href} className={FOOTER_LEGAL_LINK}>
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={FOOTER_LEGAL_LINK}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}