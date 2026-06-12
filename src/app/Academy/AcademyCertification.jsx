"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ClassTypesNav from "../ClassTypes/ClassTypesNav";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const HERO = `${CDN}/77d9af7ab1001b34862cfd6c2f995135b47df2d0.jpg?v=1777992000&width=2000`;

const INTRO_COPY =
  "The Moroccanoil Professionals Academy Certifications are strategic investments in your career, offering opportunities to increase your earning potential, professional recognition, and personal growth. Whether you're a seasoned stylist or new to Moroccanoil Education, these certifications will elevate your skills while you gain recognition as an Academy Certified hairdresser.\nBecome Moroccanoil Professionals Academy Certified by enrolling in any three eligible Academy classes to earn your Academy Cutting or Academy Color Certification. Take it a step further by completing both certifications to achieve the elite status of Moroccanoil Professionals Prestige Certified.";

const CERTIFICATION_TABS = [
  {
    id: "cutting",
    label: "Cutting certification",
    eyebrow: "Perfect your craft",
    title: "Cutting Certification",
    description:
      "Choose any 3 from the following: Academy Collection, Cutting Mastery, Trend Collection, Curl Culture.",
    image: `${CDN}/671618f4a4ddcb80eee57dd8c32a38c42cc3d417.png?v=1778010345&width=960`,
    href: "/pages/all-classes",
    cta: "Explore Classes",
  },
  {
    id: "color",
    label: "Color Certification",
    eyebrow: "perfect your craft",
    title: "Color Certification",
    description:
      "Choose any three of the following classes to complete your certification and earn exclusive benefits! Trend Collection, Color Mastery, Blonde Voyage Blonding, Blonde Voyage Balayage, Curl Culture, Dimensional Blonding with @jessicascotthair.",
    image: `${CDN}/e9b9127c89ea5848d696cb880fb86116aa58089f.jpg?v=1777992435&width=1448`,
  },
  {
    id: "prestige",
    label: "Prestige Certification",
    eyebrow: "perfect your craft",
    title: "Prestige Certification",
    description:
      "Take your education one step further and become Moroccanoil Professionals Academy Prestige Certified by completing both Cutting and Color Certifications",
    image: `${CDN}/5fa4735302180a4589c999578969ed40e01ccea4_a6b4fdd0-93c6-446e-a900-a9ed4e0c8308.jpg?v=1777992472&width=576`,
  },
];

const BENEFIT_COLUMNS = [
  {
    title: "color/cutting Certification",
    items: [
      "Custom mirror cling and dedicated social media assets — humble brag about your certification!",
      "20% off all Moroccanoil Academy classes",
      "2 complimentary bring-a-friend vouchers*",
      "Academy gift card worth $1,000 to use toward Moroccanoil swag",
      "Quarterly product send-outs",
      "Stylist feature on @MoroccanoilPro",
    ],
  },
  {
    title: "prestige certification",
    items: [
      "Loyalty package valued at $1,000!",
      "25% off all Moroccanoil Academy classes (instead of 20%)",
      "4 complimentary bring-a-friend vouchers*",
      "Academy gift card worth $1,500 to use toward Moroccanoil swag",
      "Quarterly product send-outs",
      "Photographer visit to your salon for a custom photoshoot and a feature on @MoroccanoilPro",
      "*Complimentary bring-a-friend vouchers expire 1 year from receiving certification.",
    ],
  },
];

const CLASS_CATALOG = [
  {
    title: "academy collection",
    href: "/pages/all-classes/academy-collection",
    image: `${CDN}/671618f4a4ddcb80eee57dd8c32a38c42cc3d417.png?v=1778010345&width=960`,
  },
  {
    title: "Cutting mastery",
    href: "/pages/all-classes/cutting-mastery",
    image: `${CDN}/ISA_1_96665-1-1024x683.jpg?v=1778010345&width=960`,
  },
  {
    title: "Moroccanoil trend collection",
    href: "/pages/all-classes/moroccanoil-trend-collection",
    image: `${CDN}/1e1178f48c5a6cc7e548153fcae385168c8707c7.png?v=1778010345&width=960`,
  },
];

function IconLocation() {
  return (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 640 640" fill="none">
      <path
        d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
        fill="currentColor"
      />
    </svg>
  );
}

function CertificationTimeline() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mo-academy-cert-timeline" aria-label="Certification paths">
      <div className="mo-academy-cert-timeline__inner">
        <article className="mo-academy-cert-timeline__slide">
          <div className="mo-academy-cert-timeline__image-wrap">
            {CERTIFICATION_TABS.map((tab, index) => (
              <Image
                key={tab.id}
                src={tab.image}
                alt=""
                width={960}
                height={540}
                className={`mo-academy-cert-timeline__image${
                  index === activeTab ? " is-active" : ""
                }`}
              />
            ))}
          </div>

          <div className="mo-academy-cert-timeline__content">
            {CERTIFICATION_TABS.map((tab, index) => (
              <div
                key={tab.id}
                className={`mo-academy-cert-timeline__panel${
                  index === activeTab ? " is-active" : ""
                }`}
                role="tabpanel"
                aria-hidden={index !== activeTab}
              >
                <p className="mo-academy-cert-timeline__eyebrow">{tab.eyebrow}</p>
                <h2 className="mo-academy-cert-timeline__title">{tab.title}</h2>
                <p className="mo-academy-cert-timeline__description">{tab.description}</p>
                {tab.href && tab.cta && (
                  <Link href={tab.href} className="mo-button mo-button--outline">
                    {tab.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </article>

        <div className="mo-academy-cert-timeline__nav" role="tablist">
          {CERTIFICATION_TABS.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`mo-academy-cert-timeline__tab${
                activeTab === index ? " is-active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AcademyCertification() {
  const introParagraphs = INTRO_COPY.split("\n");

  return (
    <main id="main" className="mo-academy-cert">
      <ClassTypesNav activeLabel="Academy Certification Program" />

      <section className="mo-academy-cert-hero" aria-label="Academy Certification">
        <Image
          src={HERO}
          alt=""
          width={2000}
          height={1200}
          priority
          className="mo-academy-cert-hero__image"
        />
      </section>

      <section className="mo-academy-cert-intro">
        <div className="mo-academy-cert-intro__prose">
          <h1 className="mo-academy-cert-intro__title">Moroccanoil Academy Certification</h1>
          <div className="mo-academy-cert-intro__richtext">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CertificationTimeline />

      <section className="mo-academy-cert-benefits" aria-label="Exclusive benefits">
        <h2 className="mo-academy-cert-benefits__heading">Exclusive benefits</h2>
        <div className="mo-academy-cert-benefits__grid">
          {BENEFIT_COLUMNS.map((column) => (
            <article key={column.title} className="mo-academy-cert-benefits__column">
              <h3 className="mo-academy-cert-benefits__title">{column.title}</h3>
              <ul className="mo-academy-cert-benefits__list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mo-academy-cert-catalog" aria-label="Class catalog">
        <h2 className="mo-academy-cert-catalog__heading">Class catalog</h2>
        <div className="mo-academy-cert-catalog__scroll">
          {CLASS_CATALOG.map((item) => (
            <Link key={item.title} href={item.href} className="mo-academy-cert-catalog__card">
              <div className="mo-academy-cert-catalog__media">
                <Image src={item.image} alt="" width={960} height={960} />
              </div>
              <p className="mo-academy-cert-catalog__title">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mo-edu-section mo-edu-about mo-academy-cert-about">
        <div className="mo-edu-about__media">
          <Image
            src={`${CDN}/Artboard_1_5.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="mo-edu-about__photo mo-edu-about__photo--primary"
          />
          <Image
            src={`${CDN}/Artboard_2_6.png?v=1771863134&width=500`}
            alt=""
            width={500}
            height={650}
            className="mo-edu-about__photo mo-edu-about__photo--secondary"
          />
        </div>
        <div className="mo-edu-about__content">
          <p className="mo-edu-about__eyebrow">About</p>
          <h2 className="mo-academy-cert-about__title">Moroccanoil Academy</h2>
          <p className="mo-edu-about__text">
            Based in New York City, Moroccanoil is proud to present the Moroccanoil Academy,
            an advanced facility designed to provide on-site, customized education to stylists
            at any level of their career.
          </p>
          <div className="mo-edu-about__address">
            <IconLocation />
            <p>
              135 East 57th Street, 12th floor
              <br />
              New York, NY 10022
            </p>
          </div>
          <Link
            href="https://maps.app.goo.gl/Pjj7rwg11qUbNUXr7"
            target="_blank"
            rel="noopener noreferrer"
            className="mo-button mo-button--outline mo-academy-cert-about__cta"
          >
            find us
          </Link>
        </div>
      </section>
    </main>
  );
}
