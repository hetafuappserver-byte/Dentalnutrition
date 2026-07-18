"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProductHrefForSlug } from "./productRoutes";

const TAB_DEFINITIONS = [
  { id: "howToUse", label: "How To Use" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Key Ingredients" },
];

function Breadcrumb({ product, collection }) {
  return (
    <nav className="font-bold" aria-label="Breadcrumb">
      <ol className="flex flex-wrap justify-start gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 text-xs tracking-[0.12em] uppercase opacity-65 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:opacity-50">
        <li>
          <Link href="/" className="no-underline text-inherit hover:opacity-80">
            Home
          </Link>
        </li>
        <li>
          <Link href={collection.href} className="no-underline text-inherit hover:opacity-80">
            {collection.title}
          </Link>
        </li>
        <li aria-current="page">{product.title}</li>
      </ol>
    </nav>
  );
}

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
      <section className="relative pb-10 lg:pb-0">
        <div className="lg:hidden px-5 pt-6 pb-2">
          <Breadcrumb product={product} collection={collection} />
        </div>
        <div className="hidden lg:block w-full overflow-hidden relative" aria-label="Product banner">
          <Image
            src={banner}
            alt={product.title}
            width={2000}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
          <div className="absolute top-14 left-8 z-10">
            <div className="flex justify-start pl-14 font-bold mb-6">
              <Breadcrumb product={product} collection={collection} />
            </div>
          </div>
        </div>

        <div className="relative z-[1] lg:absolute lg:left-50 lg:top-[43%] px-5 lg:px-8">
          <div className="mx-auto w-full max-w-none lg:max-w-[450px]">
            <div className="lg:aspect-square lg:rounded-full aspect-square rounded-lg bg-[#f3f3f3] overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover flex items-center justify-center lg:border-8 border-4 border-[#fcfcfc] shadow-lg">
              <Image src={gallery[activeImage]} alt={product.title} width={900} height={900} priority />
            </div>
            {gallery.length > 1 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`w-14 h-14 sm:w-[72px] sm:h-[72px] p-0 border cursor-pointer overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain`}
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
        </div>
        <div className="max-w-[1200px] mx-auto pt-8 lg:pt-10">
          <div className="max-lg:text-center max-lg:mx-auto lg:text-left lg:ml-[550px]">
            <h1 className="font-['Ivy_Mode_Regular',sans-serif] text-[32px] font-normal tracking-[0.02rem] m-0 mb-2 text-justify">
              {product.title}
            </h1>
            {product.tagline && <p className="text-sm lg:text-base m-0 mb-4 text-[#0891b2] font-medium text-justify">{product.tagline}</p>}
            <p className="text-sm lg:text-base leading-[1.65] m-0 text-gray-700 text-justify">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-12 md:px-8 md:pb-16" aria-label="Product details">
        <div className="hidden min-[700px]:block">
          <div className="flex flex-wrap justify-center gap-8 border-b border-black/[0.08] mb-8 mt-12" role="tablist">
            {TAB_DEFINITIONS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`bg-transparent border-0 border-b-2 cursor-pointer font-['Futura_BT_Book',sans-serif] tracking-[0.12em] uppercase py-4 text-base sm:text-lg mx-2 -mb-px text-[#401e17] ${activeTab === tab.id ? "opacity-100 border-b-[#401e17]" : "opacity-55 border-transparent"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="max-w-[900px] mx-auto">
            {activeTab === "howToUse" && <p className="text-base leading-[1.65] m-0 text-justify">{product.howToUse}</p>}
            {activeTab === "benefits" && <p className="text-base leading-[1.65] m-0 text-justify">{product.benefits}</p>}
            {activeTab === "ingredients" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>:nth-child(4):last-child]:lg:col-start-2">
                {ingredients.map((item) => (
                  <IngredientCard key={item.title} item={item} />
                ))}
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
                  {tab.id === "howToUse" && <p className="text-base leading-[1.65] m-0 text-justify">{product.howToUse}</p>}
                  {tab.id === "benefits" && <p className="text-base leading-[1.65] m-0 text-justify">{product.benefits}</p>}
                  {tab.id === "ingredients" && (
                    <div className="grid grid-cols-1 gap-6">
                      {ingredients.map((item) => (
                        <IngredientCard key={item.title} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {product.related?.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-5 pb-16 text-center md:px-8 md:pb-20" aria-label="Related products">
          <h2 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-8">
            Related products
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8 max-w-[1200px] mx-auto sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {product.related.map((item) => {
              const relatedHref = getProductHrefForSlug(item.slug);
              const card = (
                <>
                  <div className="aspect-square bg-[#f3f3f3] mb-3 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                    <Image src={item.image} alt={item.title} width={500} height={500} />
                  </div>
                  <p className="text-sm sm:text-base capitalize tracking-[0.02em]">{item.title}</p>
                </>
              );
              if (!relatedHref) {
                return (
                  <div key={item.slug} className="text-center pointer-events-none">
                    {card}
                  </div>
                );
              }
              return (
                <Link key={item.slug} href={relatedHref} className="text-center">
                  {card}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}