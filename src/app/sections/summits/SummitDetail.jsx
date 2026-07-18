"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SUMMITS_COLLECTION } from "./summitsProducts";

const BTN =
  "inline-flex min-w-[200px] items-center justify-center self-start border border-current bg-transparent px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase transition-[color,background] duration-200 hover:text-[#401e17]";

function InfoBlock({ title, children }) {
  return (
    <div className="grid gap-4 min-[768px]:grid-cols-[minmax(120px,1fr)_minmax(0,3fr)] min-[768px]:items-start min-[768px]:gap-8">
      <h2 className="m-0 [font-family:var(--heading-font)] text-2xl">{title}</h2>
      <div className="leading-[1.65] [&_li+li]:mt-2 [&_p]:m-0 [&_p]:mb-3 [&_ul]:m-0 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

function SummitFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <div className="grid gap-4 min-[768px]:grid-cols-[minmax(120px,1fr)_minmax(0,3fr)] min-[768px]:items-start">
      <h2 className="m-0 [font-family:var(--heading-font)] text-2xl">Features</h2>
      <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-3 p-0">
        {features.map((feature) => (
          <li
            key={feature.text}
            className="border border-black/10 px-3 py-2 text-[0.9375rem]"
          >
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VariantSwatches({ variants, selectedId, onSelect }) {
  if (!variants?.length) return null;

  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-3 text-sm opacity-70">Options:</legend>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const variantId = variant.id ?? variant.label;
          const isSelected = selectedId === variantId;

          return (
            <label
              key={variantId}
              className={`inline-flex cursor-pointer border px-4 py-[0.65rem] text-[0.9375rem] ${
                variant.soldOut ? "cursor-not-allowed opacity-55" : ""
              }${isSelected ? " border-[#401e17]" : " border-black/15"}`}
            >
              <input
                type="radio"
                name="summit-variant"
                value={variantId}
                checked={isSelected}
                disabled={variant.soldOut}
                className="pointer-events-none absolute opacity-0"
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
    <div>
      <h4 className="m-0 mb-3 [font-family:var(--heading-font)]">Attendee Information</h4>
      <p className="m-0 mb-5 text-[0.9375rem] leading-[1.6]">
        Please provide attendee details for each seat purchased. You cannot checkout
        before completing this step.
      </p>
      {Array.from({ length: quantity }, (_, index) => (
        <div
          key={index}
          className={index > 0 ? "mt-6 border-t border-black/[0.08] pt-6" : undefined}
        >
          <h5 className="m-0 mb-3 [font-family:var(--heading-font)]">Attendee {index + 1}</h5>
          <div className="grid gap-4 min-[600px]:grid-cols-2">
            <label className="grid gap-[0.35rem] text-sm">
              <span>First Name *</span>
              <input
                type="text"
                name={`attendee_${index + 1}_first_name`}
                required
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Last Name *</span>
              <input
                type="text"
                name={`attendee_${index + 1}_last_name`}
                required
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Email *</span>
              <input
                type="email"
                name={`attendee_${index + 1}_email`}
                required
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Phone Number *</span>
              <input
                type="tel"
                name={`attendee_${index + 1}_phone`}
                required
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
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
    <main id="main">
      {(summit.heroImage || summit.title) && (
        <section
          className="relative flex min-h-[280px] items-center overflow-hidden min-[990px]:min-h-[420px]"
          aria-label={summit.title}
        >
          {summit.heroImage && (
            <Image
              src={summit.heroImage}
              alt=""
              fill
              priority
              className="z-0 object-cover"
            />
          )}
          <div className="absolute inset-0 z-[1] bg-black/20" aria-hidden />
          <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-5 py-8 text-white min-[990px]:pl-[100px]">
            <h1 className="m-0 mb-2 [font-family:var(--heading-font)] text-[clamp(2rem,4vw,3rem)]">
              {summit.title}
            </h1>
          </div>
        </section>
      )}

      <section
        className="mx-auto max-w-[1200px] px-5 py-8 pb-12 min-[1000px]:px-8 min-[1000px]:py-10 min-[1000px]:pb-16"
        aria-label="Summit details"
      >
        <div className="grid gap-8 min-[1000px]:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] min-[1000px]:items-start min-[1000px]:gap-12">
          <div>
            <div className="[&_img]:block [&_img]:h-auto [&_img]:w-full">
              <Image
                src={gallery[activeImage]}
                alt={summit.title}
                width={1024}
                height={1024}
                priority={!summit.heroImage}
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 flex gap-3">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`cursor-pointer border bg-transparent p-0 ${
                      activeImage === index ? "border-[#401e17]" : "border-black/12"
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

          <div className="grid gap-7">
            <nav
              className="[&_a]:text-inherit [&_a]:no-underline [&_li:not(:last-child)]:after:ml-2 [&_li:not(:last-child)]:after:opacity-50 [&_li:not(:last-child)]:after:content-['/'] [&_ol]:m-0 [&_ol]:mb-5 [&_ol]:flex [&_ol]:flex-wrap [&_ol]:gap-x-2 [&_ol]:gap-y-1 [&_ol]:p-0 [&_ol]:text-xs [&_ol]:uppercase [&_ol]:tracking-[0.12em] [&_ol]:opacity-65"
              aria-label="Breadcrumb"
            >
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
              <p className="m-0 [font-family:var(--heading-font)] text-xl">{summit.price}</p>
            )}

            <div className="inline-flex items-center border border-black/15">
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                className="h-10 w-10 cursor-pointer border-0 bg-transparent text-lg disabled:cursor-not-allowed disabled:opacity-35"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                aria-label="Quantity"
                className="w-12 border-0 border-x border-black/15 text-center [font:inherit] [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) =>
                  setQuantity(Math.max(1, Number(event.target.value) || 1))
                }
              />
              <button
                type="button"
                aria-label="Increase quantity"
                className="h-10 w-10 cursor-pointer border-0 bg-transparent text-lg"
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>

            <AttendeeForm quantity={quantity} />

            <button type="button" className={BTN}>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
