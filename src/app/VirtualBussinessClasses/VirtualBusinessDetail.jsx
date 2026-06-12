"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VIRTUAL_BUSINESS_COLLECTION } from "./virtualBusinessProducts";

function InfoBlock({ title, children }) {
  return (
    <div className="mo-class-detail__info-block">
      <h2 className="mo-class-detail__info-heading">{title}</h2>
      <div className="mo-class-detail__info-body">{children}</div>
    </div>
  );
}

function ProductFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <div className="mo-class-detail__features">
      <h2 className="mo-class-detail__info-heading">Features</h2>
      <ul className="mo-class-detail__feature-list">
        {features.map((feature) => (
          <li key={feature.text}>{feature.text}</li>
        ))}
      </ul>
    </div>
  );
}

function VariantSwatches({ variants, selectedId, onSelect }) {
  if (!variants?.length) return null;

  return (
    <fieldset className="mo-class-detail__variants">
      <legend className="mo-class-detail__variants-label">Options:</legend>
      <div className="mo-class-detail__variant-list">
        {variants.map((variant) => {
          const variantId = variant.id ?? variant.label;
          const isSelected = selectedId === variantId;

          return (
            <label
              key={variantId}
              className={`mo-class-detail__variant${
                variant.soldOut ? " mo-class-detail__variant--sold-out" : ""
              }${isSelected ? " is-selected" : ""}`}
            >
              <input
                type="radio"
                name="virtual-business-variant"
                value={variantId}
                checked={isSelected}
                disabled={variant.soldOut}
                onChange={() => onSelect(variantId)}
              />
              <span>
                {variant.soldOut ? `SOLD OUT - ${variant.label}` : variant.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function VirtualBusinessDetail({ item }) {
  const gallery =
    item.gallery ??
    [item.image.replace("&width=360", "&width=1080").replace("&width=600", "&width=1080")];
  const variants = item.variants ?? [];
  const defaultVariantId =
    variants.find((variant) => !variant.soldOut)?.id ??
    variants.find((variant) => !variant.soldOut)?.label ??
    variants[0]?.id ??
    variants[0]?.label ??
    "";

  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(defaultVariantId);
  const [quantity, setQuantity] = useState(1);

  return (
    <main id="main" className="mo-class-detail">
      {(item.heroImage || item.title) && (
        <section className="mo-class-detail__overlay" aria-label={item.title}>
          {item.heroImage && (
            <Image
              src={item.heroImage}
              alt=""
              fill
              priority
              className="mo-class-detail__overlay-image"
            />
          )}
          <div className="mo-class-detail__overlay-content">
            <h1 className="mo-class-detail__overlay-title">{item.title}</h1>
          </div>
        </section>
      )}

      <section className="mo-class-detail__product" aria-label="Class details">
        <div className="mo-class-detail__product-layout">
          <div className="mo-class-detail__gallery">
            <div className="mo-class-detail__gallery-main">
              <Image
                src={gallery[activeImage]}
                alt={item.title}
                width={1024}
                height={1024}
                priority={!item.heroImage}
              />
            </div>
            {gallery.length > 1 && (
              <div className="mo-class-detail__gallery-thumbs">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`mo-class-detail__thumb${
                      activeImage === index ? " is-active" : ""
                    }`}
                    aria-label={`View image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image.replace("&width=1080", "&width=200")}
                      alt=""
                      width={112}
                      height={112}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mo-class-detail__info">
            <nav className="mo-product-detail__breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages/education">Education</Link>
                </li>
                <li>
                  <Link href={VIRTUAL_BUSINESS_COLLECTION.href}>
                    {VIRTUAL_BUSINESS_COLLECTION.title}
                  </Link>
                </li>
                <li aria-current="page">{item.title}</li>
              </ol>
            </nav>

            <ProductFeatures features={item.features} />

            {item.description && (
              <InfoBlock title="Description">
                <p>{item.description}</p>
                {item.descriptionNote && (
                  <p>
                    <strong>{item.descriptionNote}</strong>
                  </p>
                )}
              </InfoBlock>
            )}

            <VariantSwatches
              variants={variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />

            {item.price && (
              <p
                className={`mo-class-detail__price${
                  item.priceIsFree ? " mo-summits__price--free" : ""
                }`}
              >
                {item.price}
              </p>
            )}

            <div className="mo-class-detail__quantity">
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                aria-label="Quantity"
                onChange={(event) =>
                  setQuantity(Math.max(1, Number(event.target.value) || 1))
                }
              />
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>

            <button type="button" className="mo-button mo-class-detail__add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
