"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SUMMITS_COLLECTION } from "./summitsProducts";

function InfoBlock({ title, children }) {
  return (
    <div className="mo-class-detail__info-block">
      <h2 className="mo-class-detail__info-heading">{title}</h2>
      <div className="mo-class-detail__info-body">{children}</div>
    </div>
  );
}

function SummitFeatures({ features }) {
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
                name="summit-variant"
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

function AttendeeForm({ quantity }) {
  return (
    <div className="mo-class-detail__attendee">
      <h4>Attendee Information</h4>
      <p className="mo-class-detail__attendee-note">
        Please provide attendee details for each seat purchased. You cannot checkout
        before completing this step.
      </p>
      {Array.from({ length: quantity }, (_, index) => (
        <div key={index} className="mo-class-detail__attendee-item">
          <h5>Attendee {index + 1}</h5>
          <div className="mo-class-detail__attendee-fields">
            <label className="mo-class-detail__field">
              <span>First Name *</span>
              <input type="text" name={`attendee_${index + 1}_first_name`} required />
            </label>
            <label className="mo-class-detail__field">
              <span>Last Name *</span>
              <input type="text" name={`attendee_${index + 1}_last_name`} required />
            </label>
            <label className="mo-class-detail__field">
              <span>Email *</span>
              <input type="email" name={`attendee_${index + 1}_email`} required />
            </label>
            <label className="mo-class-detail__field">
              <span>Phone Number *</span>
              <input type="tel" name={`attendee_${index + 1}_phone`} required />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SummitDetail({ summit }) {
  const gallery =
    summit.gallery ??
    [summit.image.replace("&width=360", "&width=1080").replace("&width=600", "&width=1080")];
  const variants = summit.variants ?? [];
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
      {(summit.heroImage || summit.title) && (
        <section className="mo-class-detail__overlay" aria-label={summit.title}>
          {summit.heroImage && (
            <Image
              src={summit.heroImage}
              alt=""
              fill
              priority
              className="mo-class-detail__overlay-image"
            />
          )}
          <div className="mo-class-detail__overlay-content">
            <h1 className="mo-class-detail__overlay-title">{summit.title}</h1>
          </div>
        </section>
      )}

      <section className="mo-class-detail__product" aria-label="Summit details">
        <div className="mo-class-detail__product-layout">
          <div className="mo-class-detail__gallery">
            <div className="mo-class-detail__gallery-main">
              <Image
                src={gallery[activeImage]}
                alt={summit.title}
                width={1024}
                height={1024}
                priority={!summit.heroImage}
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
                  <Link href={SUMMITS_COLLECTION.href}>{SUMMITS_COLLECTION.title}</Link>
                </li>
                <li aria-current="page">{summit.title}</li>
              </ol>
            </nav>

            <SummitFeatures features={summit.features} />

            {summit.description && (
              <InfoBlock title="Description">
                <p>{summit.description}</p>
              </InfoBlock>
            )}

            <VariantSwatches
              variants={variants}
              selectedId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />

            {summit.price && (
              <p className="mo-class-detail__price">{summit.price}</p>
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

            <AttendeeForm quantity={quantity} />

            <button type="button" className="mo-button mo-class-detail__add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
