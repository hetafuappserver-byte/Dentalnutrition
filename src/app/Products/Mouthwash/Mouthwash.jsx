"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MOUTHWASH_COLLECTION, MOUTHWASH_PRODUCTS } from "./mouthwashProducts";
import { getProductHref, getProductHrefForSlug } from "../productRoutes";

const TAB_DEFINITIONS = [
  { id: "howToUse", label: "How To Use" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Key Ingredients" },
];

function IngredientCard({ item }) {
  return (
    <article className="text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt=""
        width={80}
        height={80}
        className="w-20 h-20 object-contain mx-auto mb-4"
      />
      <h3 className="text-base font-semibold m-0 mb-2">{item.title}</h3>
      <p className="text-[0.9375rem] leading-[1.6] m-0 opacity-85">{item.description}</p>
    </article>
  );
}

export function ProductDetail({ product, collection }) {
  const ingredients = product.ingredients ?? [];
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const banner = product.banner ?? gallery[0];
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("howToUse");
  const [openAccordion, setOpenAccordion] = useState("howToUse");

  const toggleAccordion = (id) => {
    setOpenAccordion((current) => (current === id ? null : id));
  };

  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="relative px-5 pb-10 md:px-8 md:pb-14">
        <div
          className="hidden absolute inset-x-0 top-0 h-[420px] bg-cover bg-center opacity-[0.18] min-[1000px]:block"
          style={{ backgroundImage: `url(${banner})` }}
          aria-hidden="true"
        />

        <div className="sticky top-40 z-10">
          <nav className="flex justify-start pl-14 font-bold mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap justify-start gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 text-xs tracking-[0.12em] uppercase opacity-65 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:opacity-50">
              <li>
                <Link href="/" className="no-underline text-inherit hover:opacity-80">Home</Link>
              </li>
              <li>
                <Link href={collection.href} className="no-underline text-inherit hover:opacity-80">
                  {collection.title}
                </Link>
              </li>
              <li aria-current="page">{product.title}</li>
            </ol>
          </nav>
        </div>

        <div className="relative z-[1] max-w-[1200px] mx-auto grid gap-8 pt-8 min-[1000px]:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] min-[1000px]:items-start min-[1000px]:gap-12 min-[1000px]:pt-12">
          <div>
            <div className="aspect-square bg-[#f3f3f3] overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
              <Image src={gallery[activeImage]} alt={product.title} width={1200} height={1200} priority />
            </div>
            {gallery.length > 1 && (
              <div className="flex gap-3 mt-4">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`w-[72px] h-[72px] p-0 border bg-white cursor-pointer overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain ${activeImage === index ? "border-[#401e17]" : "border-black/[0.12]"}`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={activeImage === index}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image src={image.replace("&width=1200", "&width=200")} alt="" width={112} height={112} />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.25rem)] font-normal tracking-[0.02em] capitalize m-0 mb-3">
              {product.title}
            </h1>
            {product.tagline && <p className="text-lg m-0 mb-4 opacity-85">{product.tagline}</p>}
            <p className="text-base leading-[1.65] m-0 max-w-[540px]">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-12 md:px-8 md:pb-16" aria-label="Product details">
        <div className="hidden min-[700px]:block">
          <div className="flex justify-center gap-8 border-b border-black/[0.08] mb-8" role="tablist">
            {TAB_DEFINITIONS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`bg-transparent border-0 border-b-2 cursor-pointer font-[Instrument_Sans,sans-serif] text-sm tracking-[0.12em] uppercase py-3 -mb-px text-inherit ${activeTab === tab.id ? "opacity-100 border-b-[#401e17]" : "opacity-55 border-transparent"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="max-w-[900px] mx-auto">
            {activeTab === "howToUse" && <p className="text-base leading-[1.65] m-0 text-center">{product.howToUse}</p>}
            {activeTab === "benefits" && <p className="text-base leading-[1.65] m-0 text-center">{product.benefits}</p>}
            {activeTab === "ingredients" && (
              <div className="grid grid-cols-3 gap-6 [&>:nth-child(4):last-child]:col-start-2">
                {ingredients.map((item) => <IngredientCard key={item.title} item={item} />)}
              </div>
            )}
          </div>
        </div>
        <div className="min-[700px]:hidden">
          {TAB_DEFINITIONS.map((tab) => (
            <div key={tab.id} className="border-t border-black/[0.08] last:border-b last:border-black/[0.08]">
              <button
                type="button"
                className="w-full flex justify-between items-center bg-transparent border-0 cursor-pointer font-[Instrument_Sans,sans-serif] text-sm tracking-[0.12em] uppercase py-5 text-inherit text-left"
                aria-expanded={openAccordion === tab.id}
                onClick={() => toggleAccordion(tab.id)}
              >
                {tab.label}
              </button>
              {openAccordion === tab.id && (
                <div className="pb-5">
                  {tab.id === "howToUse" && <p className="text-base leading-[1.65] m-0 text-center">{product.howToUse}</p>}
                  {tab.id === "benefits" && <p className="text-base leading-[1.65] m-0 text-center">{product.benefits}</p>}
                  {tab.id === "ingredients" && (
                    <div className="grid grid-cols-1 gap-6">
                      {ingredients.map((item) => <IngredientCard key={item.title} item={item} />)}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {product.featureImage && (
        <section className="w-full overflow-hidden mb-12" aria-label="Product feature">
          <Image src={product.featureImage} alt="" width={1400} height={788} className="w-full h-auto block object-cover" />
        </section>
      )}

      {product.related?.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-5 pb-16 text-center md:px-8 md:pb-20" aria-label="Related products">
          <h2 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-8">
            Related products
          </h2>
          <div className="grid grid-cols-2 gap-5 mt-8 max-w-[1200px] mx-auto md:grid-cols-4 md:gap-6">
            {product.related.map((item) => {
              const relatedHref = getProductHrefForSlug(item.slug);
              const card = (
                <>
                  <div className="aspect-square bg-[#f3f3f3] mb-3 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                    <Image src={item.image} alt={item.title} width={500} height={500} />
                  </div>
                  <p className="text-base capitalize tracking-[0.02em]">{item.title}</p>
                </>
              );
              if (!relatedHref) {
                return <div key={item.slug} className="text-center pointer-events-none">{card}</div>;
              }
              return <Link key={item.slug} href={relatedHref} className="text-center">{card}</Link>;
            })}
          </div>
        </section>
      )}
    </main>
  );
}

export default function Mouthwash() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <div className="sticky top-40">
        <nav className="flex justify-start pl-14 font-bold mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap justify-start gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 text-xs tracking-[0.12em] uppercase opacity-65 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:opacity-50">
            <li>
              <Link href="/" className="no-underline text-inherit hover:opacity-80">Home</Link>
            </li>
            <li aria-current="page">{MOUTHWASH_COLLECTION.title}</li>
          </ol>
        </nav>
      </div>

      <section className="max-w-[680px] mx-auto pt-10 px-5 pb-6 text-center md:pt-14 md:px-8 md:pb-8" aria-label="Collection">
        <h1 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-4">
          {MOUTHWASH_COLLECTION.title}
        </h1>
        <p className="text-lg max-w-[560px] mx-auto leading-[1.6] m-0">
          CUTE Mouthwash Edible Probiotic Mouthwash. Edible, pH-neutral mouthwash gentle enough for kids, effective for all.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-12 md:px-8 md:pb-16" aria-label="Products">
        <div className="flex justify-end py-3 pb-6 border-t border-black/[0.08]">
          <p className="m-0 text-sm tracking-[0.04em] opacity-65 lowercase">
            {MOUTHWASH_PRODUCTS.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto md:grid-cols-4 md:gap-6">
          {MOUTHWASH_PRODUCTS.map((product) => (
            <Link key={product.slug} href={getProductHref("mouthwash", product.slug)} className="text-center">
              <div className="aspect-square bg-[#f3f3f3] mb-3 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                <Image src={product.image} alt={product.title} width={600} height={600} />
              </div>
              <p className="text-base capitalize tracking-[0.02em]">{product.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
