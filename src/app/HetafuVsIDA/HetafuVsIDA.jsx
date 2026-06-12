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
    text: "Oceana is rebuilding abundant and biodiverse oceans by winning science-based policies in countries that control one-third of the world’s wild fish catch. Oceana campaign victories have stopped overfishing, habitat destruction, pollution and the killing of threatened species like turtles and sharks.",
  },
  {
    title: "Why Oceans Matter",
    text: "Protecting the oceans protects us all. Taking adequate steps to restore and conserve the world’s oceans could help us reduce world hunger, restore marine habitats, clean up the planet, and safeguard our coastal economy, according to Oceana studies and reporting.",
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
    <section className="mo-oceana-video" aria-label="Oceana partnership video">
      <div className="mo-oceana-video__frame">
        <video
          ref={videoRef}
          className="mo-oceana-video__player"
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
            className="mo-oceana-video__play"
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
    <main id="main" className="mo-oceana">
      <section className="mo-oceana-hero" aria-label="Hetafu and IDA hero">
        <div className="mo-oceana-hero__frame mo-oceana-hero__frame--mobile">
          <Image
            src={HERO.mobile}
            alt="Hetafu and IDA"
            width={1000}
            height={1920}
            priority
            className="mo-oceana-hero__image"
          />
        </div>
        <div className="mo-oceana-hero__frame mo-oceana-hero__frame--desktop">
          <Image
            src={HERO.desktop}
            alt="Hetafu and IDA"
            width={2000}
            height={1200}
            priority
            className="mo-oceana-hero__image"
          />
        </div>
      </section>

      <section className="mo-oceana-section mo-oceana-section--center">
        <h1 className="mo-oceana-title">Protecting What Connects Us All</h1>
        <p className="mo-oceana-intro">
          Moroccanoil is proud to partner with Oceana, the largest international
          advocacy organization focused solely on ocean conservation. In addition
          to ongoing donations, we will work with Oceana to raise awareness and
          support their mission to protect and restore the world’s oceans.
        </p>
      </section>

      <OceanaVideo />

      <section className="mo-oceana-section mo-oceana-section--inset">
        <div className="mo-oceana-info">
          {INFO_COLUMNS.map((column) => (
            <article key={column.title} className="mo-oceana-info__item">
              <h2 className="mo-oceana-info__title">{column.title}</h2>
              <p className="mo-oceana-info__text">{column.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mo-oceana-section mo-oceana-section--inset">
        <h2 className="mo-oceana-stats-heading">By the numbers</h2>
        <div className="mo-oceana-stats">
          {STATS.map((stat) => (
            <article key={stat.value} className="mo-oceana-stat">
              <p className="mo-oceana-stat__value">{stat.value}</p>
              <p className="mo-oceana-stat__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mo-oceana-testimonial" aria-label="Testimonial">
        <div className="mo-oceana-testimonial__inner">
          <blockquote className="mo-oceana-testimonial__quote">
            <p>“{TESTIMONIAL.quote}”</p>
          </blockquote>
          <div className="mo-oceana-testimonial__author">
            <Image
              src={TESTIMONIAL.image}
              alt=""
              width={280}
              height={280}
              className="mo-oceana-testimonial__photo"
            />
            <p className="mo-oceana-testimonial__name">{TESTIMONIAL.author}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
