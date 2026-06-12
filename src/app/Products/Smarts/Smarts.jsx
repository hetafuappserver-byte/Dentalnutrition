"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  SMARTS_COLLECTION,
  SMARTS_PRODUCTS,
  getSmartsProduct,
} from "./smartsProducts";
import { getProductHref, getProductHrefForSlug } from "../productRoutes";

const TAB_DEFINITIONS = [
  { id: "howToUse", label: "How To Use" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Key Ingredients" },
];

export default function Smarts() {
  return (
    <main id="main" className="mo-bits">
      <section className="mo-bits-banner" aria-label="Collection">
        <nav className="mo-bits-breadcrumb" aria-label="Breadcrumb">
          <ol className="mo-bits-breadcrumb__list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{SMARTS_COLLECTION.title}</li>
          </ol>
        </nav>

        <div className="mo-bits-banner__content">
          <h1 className="mo-bits-banner__title">{SMARTS_COLLECTION.title}</h1>
          <p className="mo-bits-banner__description">
            Our signature product, Moroccanoil Treatment, pioneered the
            oil-infused hair care category and is the perfect foundation for all
            hair care.
          </p>
        </div>
      </section>

      <section className="mo-bits-products" aria-label="Products">
        <div className="mo-bits-toolbar">
          <p className="mo-bits-toolbar__count">
            {SMARTS_PRODUCTS.length} products
          </p>
        </div>

        <div className="mo-product-grid mo-product-grid--collection">
          {SMARTS_PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={getProductHref("smarts", product.slug)}
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
    <article className="mo-product-detail__ingredient">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt="" width={80} height={80} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

export function SmartsProductDetail({ product, category = "smarts" }) {
  const ingredients = product.ingredients ?? [];
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("howToUse");
  const [openAccordion, setOpenAccordion] = useState("howToUse");

  const toggleAccordion = (id) => {
    setOpenAccordion((current) => (current === id ? null : id));
  };

  return (
    <main id="main" className="mo-product-detail">
      <section className="mo-product-detail__hero">
        <div
          className="mo-product-detail__banner"
          style={{ backgroundImage: `url(${product.banner})` }}
          aria-hidden="true"
        />

        <div className="mo-product-detail__layout">
          <div className="mo-product-detail__gallery">
            <div className="mo-product-detail__gallery-main">
              <Image
                src={product.gallery[activeImage]}
                alt={product.title}
                width={1200}
                height={1200}
                priority
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mo-product-detail__gallery-thumbs">
                {product.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`mo-product-detail__thumb${
                      activeImage === index ? " is-active" : ""
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={activeImage === index}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image.replace("&width=1200", "&width=200")}
                      alt=""
                      width={112}
                      height={112}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mo-product-detail__info">
            <nav className="mo-product-detail__breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href={SMARTS_COLLECTION.href}>{SMARTS_COLLECTION.title}</Link>
                </li>
                <li aria-current="page">{product.title}</li>
              </ol>
            </nav>

            <h1 className="mo-product-detail__title">{product.title}</h1>
            {product.tagline && (
              <p className="mo-product-detail__tagline">{product.tagline}</p>
            )}
            <p className="mo-product-detail__description">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="mo-product-detail__tabs" aria-label="Product details">
        <div className="mo-product-detail__tabs-desktop">
          <div className="mo-product-detail__tab-nav" role="tablist">
            {TAB_DEFINITIONS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? "is-active" : undefined}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mo-product-detail__tab-panel">
            {activeTab === "howToUse" && (
              <p className="mo-product-detail__tab-text">{product.howToUse}</p>
            )}
            {activeTab === "benefits" && (
              <p className="mo-product-detail__tab-text">{product.benefits}</p>
            )}
            {activeTab === "ingredients" && (
              <div className="mo-product-detail__ingredients">
                {ingredients.map((item) => (
                  <IngredientCard key={item.title} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mo-product-detail__accordion">
          {TAB_DEFINITIONS.map((tab) => (
            <div key={tab.id} className="mo-product-detail__accordion-item">
              <button
                type="button"
                className="mo-product-detail__accordion-trigger"
                aria-expanded={openAccordion === tab.id}
                onClick={() => toggleAccordion(tab.id)}
              >
                {tab.label}
              </button>
              {openAccordion === tab.id && (
                <div className="mo-product-detail__accordion-body">
                  {tab.id === "howToUse" && (
                    <p className="mo-product-detail__tab-text">{product.howToUse}</p>
                  )}
                  {tab.id === "benefits" && (
                    <p className="mo-product-detail__tab-text">{product.benefits}</p>
                  )}
                  {tab.id === "ingredients" && (
                    <div className="mo-product-detail__ingredients mo-product-detail__ingredients--stacked">
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

      {product.featureImage && (
        <section className="mo-product-detail__feature" aria-label="Product feature">
          <Image
            src={product.featureImage}
            alt=""
            width={1400}
            height={788}
            className="mo-product-detail__feature-image"
          />
        </section>
      )}

      {product.related?.length > 0 && (
        <section className="mo-product-detail__related" aria-label="Related products">
          <h2 className="mo-product-detail__related-title">Related products</h2>
          <div className="mo-product-grid">
            {product.related.map((item) => {
              const relatedProduct = getSmartsProduct(item.slug);
              const relatedHref = getProductHrefForSlug(item.slug);
              const card = (
                <>
                  <div className="mo-product-card__image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                    />
                  </div>
                  <p className="mo-product-card__title">{item.title}</p>
                </>
              );

              if (!relatedProduct || !relatedHref) {
                return (
                  <div
                    key={item.slug}
                    className="mo-product-card mo-product-card--static"
                  >
                    {card}
                  </div>
                );
              }

              return (
                <Link
                  key={item.slug}
                  href={relatedHref}
                  className="mo-product-card"
                >
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
