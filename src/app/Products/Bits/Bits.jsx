"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BITS_COLLECTION, BITS_PRODUCTS } from "./bitsProducts";
import { getProductHref } from "../productRoutes";

const TAB_DEFINITIONS = [
  { id: "howToUse", label: "How To Use" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Key Ingredients" },
];

export default function Bits() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <div className="sticky top-40">
        <nav
          className="flex justify-start pl-14 font-bold mb-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap justify-start gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 text-xs tracking-[0.12em] uppercase opacity-65 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:opacity-50">
            <li>
              <Link href="/" className="no-underline text-inherit hover:opacity-80">
                Home
              </Link>
            </li>
            <li aria-current="page">{BITS_COLLECTION.title}</li>
          </ol>
        </nav>
      </div>

      <section
        className="max-w-[680px] mx-auto pt-10 px-5 pb-6 text-center md:pt-14 md:px-8 md:pb-8"
        aria-label="Collection"
      >
        <h1 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-4">
          {BITS_COLLECTION.title}
        </h1>
        <p className="text-lg max-w-[560px] mx-auto leading-[1.6] m-0">
          Denta Bits Daily Dental Wellness Bits Daily probiotic dental care for fresher
          breath and healthier gums
        </p>
      </section>

      <section
        className="max-w-[1200px] mx-auto px-5 pb-12 md:px-8 md:pb-16"
        aria-label="Products"
      >
        <div className="flex justify-end py-3 pb-6 border-t border-black/[0.08]">
          <p className="m-0 text-sm tracking-[0.04em] opacity-65 lowercase">
            {BITS_PRODUCTS.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto md:grid-cols-4 md:gap-6">
          {BITS_PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={getProductHref("bits", product.slug)}
              className="text-center"
            >
              <div className="aspect-square bg-[#f3f3f3] mb-3 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                />
              </div>
              <p className="text-base capitalize tracking-[0.02em]">{product.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function IngredientCard({ item }) {
  return (
    <article className="flex flex-col items-center text-center">
      <img src={item.image} alt={item.title} className="w-20 h-20 mb-4 object-contain" />
      <h3 className="font-semibold text-base mb-2" style={{ color: "#1a1a1a" }}>
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
        {item.description}
      </p>
    </article>
  );
}

export function ProductDetail({ product }) {
  const ingredients = product.ingredients ?? [];
  const [activeTab, setActiveTab] = useState("howToUse");

  return (
    <main id="main" className="w-full">
      <section className="w-full px-8 py-20" aria-label="Product information">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex gap-16 border-b mb-16 justify-center"
            style={{ borderColor: "#ddd" }}
          >
            {TAB_DEFINITIONS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="pb-4 text-sm font-medium transition-colors relative"
                style={{
                  color: activeTab === tab.id ? "#333" : "#999",
                  borderBottom: activeTab === tab.id ? "2px solid #333" : "none",
                  marginBottom: activeTab === tab.id ? "-2px" : "0",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {activeTab === "howToUse" && (
              <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#555" }}>
                {product.howToUse}
              </p>
            )}
            {activeTab === "benefits" && (
              <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#555" }}>
                {product.benefits}
              </p>
            )}
            {activeTab === "ingredients" && (
              <div className="grid grid-cols-3 gap-12 md:grid-cols-4">
                {ingredients.map((item) => (
                  <IngredientCard key={item.title} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
