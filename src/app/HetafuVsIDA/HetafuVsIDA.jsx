"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";
const VIDEO_CDN = "https://moroccanoilprofessionals.com/cdn/shop/videos";

const HERO = {
  desktop: `${CDN}/Artboard_1_2.png?v=1771859622&width=2000`,
  mobile: `${CDN}/Artboard_2_2.png?v=1771859622&width=1000`,
};

const VIDEO = {
  poster: `${CDN}/preview_images/cdd10c21d8e94165af5d7afac953e7b8.thumbnail.0000000000.jpg?v=1773406251&width=1800`,
  src: `${VIDEO_CDN}/c/vp/cdd10c21d8e94165af5d7afac953e7b8/cdd10c21d8e94165af5d7afac953e7b8.HD-1080p-7.2Mbps-77815119.mp4?v=0`,
};

const INFO_COLUMNS = [
  {
    title: "About IDA Academy",
    text: "Oceana is rebuilding abundant and biodiverse oceans by winning science-based policies in countries that control one-third of the world's wild fish catch. Oceana campaign victories have stopped overfishing, habitat destruction, pollution and the killing of threatened species like turtles and sharks.",
  },
  {
    title: "Why Oceans Matter",
    text: "Protecting the oceans protects us all. Taking adequate steps to restore and conserve the world's oceans could help us reduce world hunger, restore marine habitats, clean up the planet, and safeguard our coastal economy, according to Oceana studies and reporting.",
  },
];

const STATS = [
  {
    value: "225",
    label: "number of science-based policy victories won by Oceana",
  },
  {
    value: "1 billion",
    label:
      "number of people who could eat a healthy seafood meal each day if we adequately restore the ocean",
  },
  {
    value: "19 billion",
    label:
      "tons of greenhouse gas emissions could be prevented by permanently protecting all federal waters from offshore drilling.",
  },
];

const TESTIMONIAL = {
  quote:
    "Having been raised along the Pacific coast, I was inspired to educate myself about ways that I could have a positive impact both personally and professionally. We are committed as a brand to doing our part to contribute to this global movement to save our planet.",
  author: "Carmen Tal—Moroccanoil co-founder",
  image: `${CDN}/d1a6e01bf3c562c5ef89fc1aa6d9e24760299746.jpg?v=1764791954&width=280`,
};

function OceanaVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section
      className="mx-auto w-full max-w-[1200px] px-5 pb-10 md:px-8 md:pb-14"
      aria-label="Oceana partnership video"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="block h-full w-full object-cover"
          poster={VIDEO.poster}
          controls={isPlaying}
          playsInline
          preload="metadata"
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={VIDEO.src} type="video/mp4" />
        </video>
        {!isPlaying && (
          <button
            type="button"
            className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-black/25 text-4xl text-white transition-[background] duration-[250ms] hover:bg-black/40"
            aria-label="Play video"
            onClick={handlePlay}
          >
            <span aria-hidden="true">▶</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default function HetafuVsIDA() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="w-full overflow-hidden" aria-label="Hetafu and IDA hero">
        <div className="min-[700px]:hidden">
          <Image
            src={HERO.mobile}
            alt="Hetafu and IDA"
            width={1000}
            height={1920}
            priority
            className="h-auto min-h-[280px] w-full object-cover min-[700px]:min-h-[420px]"
          />
        </div>
        <div className="hidden min-[700px]:block">
          <Image
            src={HERO.desktop}
            alt="Hetafu and IDA"
            width={2000}
            height={1200}
            priority
            className="h-auto min-h-[280px] w-full object-cover min-[700px]:min-h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 text-center md:px-8 md:py-14">
        <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          Protecting What Connects Us All
        </h1>
        <p className="mx-auto max-w-[820px] text-lg leading-[1.65]">
          Moroccanoil is proud to partner with Oceana, the largest international
          advocacy organization focused solely on ocean conservation. In addition
          to ongoing donations, we will work with Oceana to raise awareness and
          support their mission to protect and restore the world&apos;s oceans.
        </p>
      </section>

      <OceanaVideo />

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

      <section className="mx-auto max-w-[1200px] px-5 py-10 min-[1024px]:mx-[150px] min-[1024px]:max-w-none md:px-8 md:py-14">
        <h2 className="m-0 mb-8 text-center [font-family:var(--heading-font)] text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[0.04em] capitalize">
          By the numbers
        </h2>
        <div className="grid grid-cols-[repeat(3,minmax(220px,1fr))] gap-8 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] max-[999px]:-mx-5 max-[999px]:grid-cols-[repeat(3,minmax(75vw,1fr))] max-[999px]:gap-5 max-[999px]:px-5">
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

      <section
        className="bg-[#401e17] px-5 py-14 text-white md:px-8 md:py-16"
        aria-label="Testimonial"
      >
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
          <blockquote className="m-0 text-[clamp(1rem,2.2vw,1.25rem)] italic leading-[1.7] [&_p]:m-0">
            <p>&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={TESTIMONIAL.image}
              alt=""
              width={280}
              height={280}
              className="h-[140px] w-[140px] rounded-full object-cover"
            />
            <p className="m-0 [font-family:var(--heading-font)] text-base tracking-[0.06em]">
              {TESTIMONIAL.author}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
