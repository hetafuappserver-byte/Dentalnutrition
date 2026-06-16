"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BITS_COLLECTION, BITS_PRODUCTS } from "./bitsProducts";
import { getProductHref, getProductHrefForSlug } from "../productRoutes";

const TAB_DEFINITIONS = [
  { id: "howToUse", label: "How To Use" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Key Ingredients" },
];

export default function Bits() {
  return (
    <main id="main" className="mo-bits">
      <div className="mo-bits-breadcrumb-container sticky  top-40  ">
        <nav className="mo-bits-breadcrumb flex justify-start pl-14 font-bold" aria-label="Breadcrumb">
          <ol className="mo-bits-breadcrumb__list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{BITS_COLLECTION.title}</li>
          </ol>
        </nav>
      </div>
      <section className="mo-bits-banner" aria-label="Collection">
        <div className="mo-bits-banner__content">
          <h1 className="mo-bits-banner__title">{BITS_COLLECTION.title}</h1>
          <p className="mo-bits-banner__description">
            Denta Bits Daily Dental Wellness Bits Daily probiotic dental care for fresher breath and healthier gums
          </p>
        </div>
      </section>

      <section className="mo-bits-products" aria-label="Products">
        <div className="mo-bits-toolbar">
          <p className="mo-bits-toolbar__count">{BITS_PRODUCTS.length} products</p>
        </div>

        <div className="mo-product-grid mo-product-grid--collection">
          {BITS_PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={getProductHref("bits", product.slug)}
              className="mo-product-card"
            >
              <div className="mo-product-card__image">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                />
              </div>
              <p className="mo-product-card__title">{product.title}</p>
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

export function ProductDetail({ product, collection }) {
  const ingredients = product.ingredients ?? [];
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("howToUse");

  return (
    <main id="main" className="w-full">
      {/* Hero Section */}
      <section className="w-full" style={{ backgroundColor: "#e8e4de", paddingTop: "60px", paddingBottom: "60px" }} aria-label="Product hero">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Left Gallery */}
            <div>
              <div className="mb-8 flex items-center justify-center" style={{ position: "relative", height: "400px" }}>
                {/* Decorative circle background */}
                <div style={{
                  position: "absolute",
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.3)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} />
                
                <div className="relative z-10" style={{ width: "280px", height: "280px" }}>
                  <Image
                    src={gallery[activeImage]}
                    alt={product.title}
                    width={280}
                    height={280}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-4 justify-center">
                  {gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className="p-1 rounded-full border-2 transition-colors flex-shrink-0"
                      style={{
                        borderColor: activeImage === index ? "#333" : "#999",
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: activeImage === index ? "#fff" : "transparent",
                      }}
                      aria-label={`View image ${index + 1}`}
                      aria-current={activeImage === index}
                    >
                      <Image
                        src={image.replace("&width=1200", "&width=200")}
                        alt=""
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Info */}
            <div className="flex flex-col justify-center pt-12">
              <h1 className="text-5xl font-light mb-4 tracking-tight" style={{ color: "#1a1a1a", lineHeight: "1.2" }}>
                {product.title}
              </h1>
              {product.tagline && (
                <p className="text-lg mb-8" style={{ color: "#0082b4", fontWeight: "500" }}>
                  {product.tagline}
                </p>
              )}
              <p className="text-base leading-relaxed" style={{ color: "#333" }}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full px-8 py-20" aria-label="Product information">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-16 border-b mb-16" style={{ borderColor: "#ddd", justifyContent: "center" }}>
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

          {/* Tab Content */}
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

      {product.featureImage && (
        <section className="w-full px-8 py-16" aria-label="Product feature">
          <div className="max-w-7xl mx-auto">
            <Image
              src={product.featureImage}
              alt=""
              width={1400}
              height={788}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>
      )}

      {product.related?.length > 0 && (
        <section className="w-full px-8 py-20" style={{ backgroundColor: "#f9f7f4" }} aria-label="Related products">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center" style={{ color: "#1a1a1a" }}>Related products</h2>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {product.related.map((item) => {
                const relatedHref = getProductHrefForSlug(item.slug);
                const card = (
                  <>
                    <div className="mb-6 bg-white p-8 rounded-lg overflow-hidden flex items-center justify-center" style={{ minHeight: "300px" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-center text-sm" style={{ color: "#1a1a1a" }}>{item.title}</p>
                  </>
                );

                if (!relatedHref) {
                  return (
                    <div key={item.slug}>
                      {card}
                    </div>
                  );
                }

                return (
                  <Link key={item.slug} href={relatedHref}>
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
