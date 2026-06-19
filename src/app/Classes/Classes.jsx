"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ClassTypesNav from "../ClassTypes/ClassTypesNav";
import {
  ALL_CLASSES,
  ALL_CLASSES_COLLECTION,
  formatClassPriceDetailed,
  getClassBySlug,
  getClassCardPrice,
} from "./classesProducts";

const BTN =
  "inline-flex min-w-[200px] items-center justify-center self-start border border-current bg-transparent px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase transition-[color,background] duration-200 hover:text-[#401e17]";

const TAB_BTN =
  "mb-[-1px] cursor-pointer border-0 border-b-2 border-transparent bg-transparent px-0 py-3 [font-family:var(--heading-font)] text-sm tracking-[0.12em] uppercase text-inherit opacity-55";

const TAB_BTN_ACTIVE = `${TAB_BTN} border-b-[#401e17] opacity-100`;

function ClassCard({ classItem }) {
  const href = `/pages/all-classes/${classItem.slug}`;
  const cardPrice = getClassCardPrice(classItem);

  return (
    <article className="flex flex-col gap-6 min-[768px]:flex-row min-[768px]:items-start min-[768px]:gap-8">
      <Link href={href} className="block shrink-0 min-[768px]:basis-[360px]">
        <Image
          src={classItem.image}
          alt={classItem.title}
          width={360}
          height={360}
          className="block h-[360px] w-[360px] max-w-full rounded-full object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
        <Link
          href={href}
          className="[font-family:var(--heading-font)] text-[clamp(1.375rem,2.2vw,1.75rem)] font-bold leading-[1.2] text-inherit no-underline hover:opacity-75"
        >
          {classItem.title}
        </Link>

        {classItem.locationLine && (
          <p className="m-0 text-base text-[#555]">{classItem.locationLine}</p>
        )}

        {cardPrice && (
          <p className="m-0 [font-family:var(--heading-font)] text-base opacity-85">
            {cardPrice}
          </p>
        )}

        <p className="m-0 max-w-[90%] self-center text-center leading-[1.65] min-[768px]:max-w-xl min-[768px]:self-start min-[768px]:text-left">
          {classItem.description}
        </p>

        <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-6 gap-x-12 min-[768px]:justify-start">
          {classItem.quickBuySoldOut && (
            <button
              type="button"
              disabled
              className="cursor-not-allowed border-2 border-[#401e17] bg-white px-10 py-[0.65rem] [font-family:var(--heading-font)] text-xs tracking-[0.12em] uppercase text-[#401e17]"
            >
              Sold Out
            </button>
          )}
          <Link
            href={href}
            className="[font-family:var(--heading-font)] text-xs tracking-[0.12em] uppercase text-[#401e17] underline hover:opacity-75"
          >
            View More Details
          </Link>
        </div>
      </div>
    </article>
  );
}

function ClassFiltersDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Filters">
      <button
        type="button"
        className="fixed inset-0 z-[90] border-0 bg-black/45"
        aria-label="Close filters"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 left-0 z-[91] w-[min(100%,360px)] overflow-y-auto bg-white p-5">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="m-0 [font-family:var(--heading-font)] text-lg">Filters</h2>
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent text-[1.75rem] leading-none"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div>
          <details className="border-t border-black/[0.08] py-4 [&_summary]:cursor-pointer [&_summary]:[font-family:var(--heading-font)] [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
            <summary>Availability</summary>
            <label className="mt-3 flex items-center gap-2 text-[0.9375rem]">
              <input type="checkbox" name="availability" />
              In stock only
            </label>
          </details>
          <details className="border-t border-black/[0.08] py-4 [&_summary]:cursor-pointer [&_summary]:[font-family:var(--heading-font)] [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
            <summary>Price</summary>
            <div className="mt-3 flex items-center gap-3">
              <label className="inline-flex items-center gap-[0.35rem] border border-black/12 px-2 py-[0.35rem]">
                <span>$</span>
                <input
                  type="number"
                  min={0}
                  max={1330}
                  placeholder="0"
                  className="w-[4.5rem] border-0 [font:inherit]"
                />
              </label>
              <span>to</span>
              <label className="inline-flex items-center gap-[0.35rem] border border-black/12 px-2 py-[0.35rem]">
                <span>$</span>
                <input
                  type="number"
                  min={0}
                  max={1330}
                  placeholder="1330"
                  className="w-[4.5rem] border-0 [font:inherit]"
                />
              </label>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

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

function ClassFeatures({ features }) {
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

function SessionSwatches({ sessions, selectedId, onSelect }) {
  if (!sessions.length) return null;

  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-3 text-sm opacity-70">Options:</legend>
      <div className="flex flex-wrap gap-3">
        {sessions.map((session) => {
          const sessionId = session.id ?? session.label;
          const isSelected = selectedId === sessionId;

          return (
            <label
              key={sessionId}
              className={`inline-flex cursor-pointer border px-4 py-[0.65rem] text-[0.9375rem] ${
                session.soldOut ? "cursor-not-allowed opacity-55" : ""
              }${isSelected ? " border-[#401e17]" : " border-black/15"}`}
            >
              <input
                type="radio"
                name="class-session"
                value={sessionId}
                checked={isSelected}
                disabled={session.soldOut}
                className="pointer-events-none absolute opacity-0"
                onChange={() => onSelect(sessionId)}
              />
              <span>
                {session.soldOut ? `SOLD OUT - ${session.label}` : session.label}
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
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Last Name *</span>
              <input
                type="text"
                name={`attendee_${index + 1}_last_name`}
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Email *</span>
              <input
                type="email"
                name={`attendee_${index + 1}_email`}
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
            <label className="grid gap-[0.35rem] text-sm">
              <span>Phone Number *</span>
              <input
                type="tel"
                name={`attendee_${index + 1}_phone`}
                className="w-full border border-black/15 px-3 py-[0.65rem] [font:inherit]"
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

function FacilitatorPanel({ facilitator }) {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="mb-6 grid gap-6 min-[600px]:grid-cols-[250px_minmax(0,1fr)] min-[600px]:items-start">
        <Image
          src={facilitator.image}
          alt={facilitator.name}
          width={250}
          height={250}
          className="h-[250px] w-[250px] rounded-full object-cover"
        />
        <div>
          <p className="m-0 mb-3 text-sm tracking-[0.08em] uppercase opacity-75">
            {facilitator.role}
          </p>
          {facilitator.quote && (
            <blockquote className="m-0 text-lg leading-normal text-[#02c3c2]">
              {facilitator.quote}
            </blockquote>
          )}
        </div>
      </div>
      <p className="m-0 mb-4 leading-[1.65]">{facilitator.bio}</p>
      {facilitator.instagram && (
        <p className="m-0 [&_a]:underline">
          <a
            href={facilitator.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {facilitator.instagram.handle}
          </a>
        </p>
      )}
    </div>
  );
}

export function ClassDetail({ classItem }) {
  const gallery =
    classItem.gallery ??
    [classItem.image.replace("&width=360", "&width=1024").replace("&width=600", "&width=1024")];
  const facilitators = classItem.facilitators ?? [];
  const sessions = classItem.sessions ?? [];
  const availableSessions = sessions.filter((session) => !session.soldOut);
  const defaultSessionId =
    availableSessions[0]?.id ?? availableSessions[0]?.label ?? sessions[0]?.id ?? sessions[0]?.label ?? "";

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSessionId, setSelectedSessionId] = useState(defaultSessionId);
  const [quantity, setQuantity] = useState(1);
  const [activeFacilitator, setActiveFacilitator] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(facilitators[0]?.name ?? null);
  const [activeRelatedClass, setActiveRelatedClass] = useState(0);

  const selectedSession =
    sessions.find(
      (session) => (session.id ?? session.label) === selectedSessionId,
    ) ?? sessions[0];

  const toggleAccordion = (name) => {
    setOpenAccordion((current) => (current === name ? null : name));
  };

  const activeFacilitatorData = facilitators[activeFacilitator];
  const activeRelatedClassData = classItem.related?.[activeRelatedClass];

  return (
    <main id="main">
      {(classItem.heroImage || classItem.tagline) && (
        <section
          className="relative flex min-h-[280px] items-center overflow-hidden min-[990px]:min-h-[420px]"
          aria-label={classItem.title}
        >
          {classItem.heroImage && (
            <Image
              src={classItem.heroImage}
              alt=""
              fill
              priority
              className="z-0 object-cover"
            />
          )}
          <div className="absolute inset-0 z-[1] bg-black/20" aria-hidden />
          <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-5 py-8 text-white min-[990px]:pl-[100px]">
            <h1 className="m-0 mb-2 [font-family:var(--heading-font)] text-[clamp(2rem,4vw,3rem)]">
              {classItem.title}
            </h1>
            {classItem.tagline && (
              <p className="m-0 text-lg opacity-95 [&_a]:text-inherit [&_a]:no-underline">
                {classItem.taglineHref ? (
                  <Link href={classItem.taglineHref}>{classItem.tagline}</Link>
                ) : (
                  classItem.tagline
                )}
              </p>
            )}
          </div>
        </section>
      )}

      <section
        className="mx-auto max-w-[1200px] px-5 py-8 pb-12 min-[1000px]:px-8 min-[1000px]:py-10 min-[1000px]:pb-16"
        aria-label="Class details"
      >
        <div className="grid gap-8 min-[1000px]:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] min-[1000px]:items-start min-[1000px]:gap-12">
          <div>
            <div className="[&_img]:block [&_img]:h-auto [&_img]:w-full">
              <Image
                src={gallery[activeImage]}
                alt={classItem.title}
                width={1024}
                height={1024}
                priority={!classItem.heroImage}
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
                      src={image.replace("&width=1024", "&width=200")}
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
                  <Link href={ALL_CLASSES_COLLECTION.href}>
                    {ALL_CLASSES_COLLECTION.title}
                  </Link>
                </li>
                <li aria-current="page">{classItem.title}</li>
              </ol>
            </nav>

            <ClassFeatures features={classItem.features} />

            {classItem.description && (
              <InfoBlock title="Description">
                <p>{classItem.description}</p>
              </InfoBlock>
            )}

            {classItem.courseFocus?.length > 0 && (
              <InfoBlock title="Course Focus">
                <ul>
                  {classItem.courseFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoBlock>
            )}

            {classItem.location?.length > 0 && (
              <InfoBlock title="Location">
                {classItem.location.map((line, index) =>
                  line ? (
                    <p key={`${line}-${index}`}>{line}</p>
                  ) : (
                    <br key={`spacer-${index}`} />
                  ),
                )}
              </InfoBlock>
            )}

            <SessionSwatches
              sessions={sessions}
              selectedId={selectedSessionId}
              onSelect={setSelectedSessionId}
            />

            {selectedSession && formatClassPriceDetailed(selectedSession.price) && (
              <p className="m-0 [font-family:var(--heading-font)] text-xl">
                {formatClassPriceDetailed(selectedSession.price)}
              </p>
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

      {facilitators.length > 0 && (
        <section
          className="mx-auto max-w-[1200px] px-5 pb-12 min-[700px]:px-8 min-[700px]:pb-16"
          aria-label="Facilitators"
        >
          <h2 className="m-0 mb-8 text-center [font-family:var(--heading-font)] text-[clamp(1.5rem,3vw,2rem)] tracking-[0.12em] uppercase">
            Facilitators
          </h2>

          <div className="hidden min-[700px]:block">
            <div
              className="mb-8 flex justify-center gap-8 border-b border-black/[0.08]"
              role="tablist"
            >
              {facilitators.map((facilitator, index) => (
                <button
                  key={facilitator.name}
                  type="button"
                  role="tab"
                  aria-selected={activeFacilitator === index}
                  className={activeFacilitator === index ? TAB_BTN_ACTIVE : TAB_BTN}
                  onClick={() => setActiveFacilitator(index)}
                >
                  {facilitator.name}
                </button>
              ))}
            </div>

            {activeFacilitatorData && (
              <div role="tabpanel">
                <FacilitatorPanel facilitator={activeFacilitatorData} />
              </div>
            )}
          </div>

          <div className="min-[700px]:hidden">
            {facilitators.map((facilitator) => (
              <div key={facilitator.name} className="border-t border-black/[0.08] last:border-b">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-0 py-5 text-left [font-family:var(--heading-font)] text-sm tracking-[0.12em] uppercase text-inherit"
                  aria-expanded={openAccordion === facilitator.name}
                  onClick={() => toggleAccordion(facilitator.name)}
                >
                  {facilitator.name}
                </button>
                {openAccordion === facilitator.name && (
                  <div className="pb-5">
                    <FacilitatorPanel facilitator={facilitator} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {classItem.related?.length > 0 && (
        <section
          className="mx-auto max-w-[1200px] px-5 pb-16 text-center min-[700px]:px-8 min-[700px]:pb-20"
          aria-label="Related classes"
        >
          <h2 className="m-0 mb-8 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
            Related classes
          </h2>
          <div className="hidden min-[700px]:block">
            <div
              className="mb-8 flex justify-center gap-8 border-b border-black/[0.08]"
              role="tablist"
            >
              {classItem.related.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeRelatedClass === index}
                  className={activeRelatedClass === index ? TAB_BTN_ACTIVE : TAB_BTN}
                  onClick={() => setActiveRelatedClass(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {activeRelatedClassData && (
              <div role="tabpanel">
                <Link
                  key={activeRelatedClassData.slug}
                  href={`/pages/all-classes/${activeRelatedClassData.slug}`}
                  className="text-inherit no-underline"
                >
                  <div className="block shrink-0">
                    <Image
                      src={activeRelatedClassData.image}
                      alt={activeRelatedClassData.title}
                      width={320}
                      height={240}
                    />
                  </div>
                  <p className="[font-family:var(--heading-font)] text-[clamp(1.375rem,2.2vw,1.75rem)] font-bold leading-[1.2]">
                    {activeRelatedClassData.title}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default function Classes() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <ClassTypesNav activeLabel="All" />

      <section
        className="mx-auto max-w-[1200px] px-5 py-6 pb-16 min-[700px]:px-8 min-[700px]:py-8 min-[700px]:pb-20"
        aria-label="Classes"
      >
        <div className="mb-8 flex min-h-12 items-center justify-between gap-4 border-b border-black/[0.08] pb-3">
          <button
            type="button"
            className="inline-flex min-w-[120px] cursor-pointer items-center justify-center border border-black/15 bg-transparent px-4 py-[0.65rem] [font-family:var(--heading-font)] text-[0.6875rem] tracking-[0.12em] uppercase min-[768px]:hidden"
            aria-expanded={filtersOpen}
            aria-controls="classes-filters"
            onClick={() => setFiltersOpen(true)}
          >
            Filter
          </button>
          <p className="m-0 ml-auto text-sm opacity-70">
            {ALL_CLASSES.length} products
          </p>
        </div>

        <ClassFiltersDrawer open={filtersOpen} onClose={() => setFiltersOpen(false)} />

        <div className="flex flex-col gap-12">
          {ALL_CLASSES.map((classItem) => (
            <ClassCard key={classItem.slug} classItem={classItem} />
          ))}
        </div>
      </section>
    </main>
  );
}
