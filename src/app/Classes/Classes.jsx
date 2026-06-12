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

function ClassCard({ classItem }) {
  const href = `/pages/all-classes/${classItem.slug}`;
  const cardPrice = getClassCardPrice(classItem);

  return (
    <article className="mo-class-card mo-class-card--horizontal">
      <Link href={href} className="mo-class-card__media">
        <Image
          src={classItem.image}
          alt={classItem.title}
          width={360}
          height={360}
          className="mo-class-card__image"
        />
      </Link>

      <div className="mo-class-card__info">
        <Link href={href} className="mo-class-card__title">
          {classItem.title}
        </Link>

        {classItem.locationLine && (
          <p className="mo-class-card__location">{classItem.locationLine}</p>
        )}

        {cardPrice && <p className="mo-class-card__price">{cardPrice}</p>}

        <p className="mo-class-card__description">{classItem.description}</p>

        <div className="mo-class-card__buttons">
          {classItem.quickBuySoldOut && (
            <button type="button" disabled className="mo-class-card__sold-out">
              Sold Out
            </button>
          )}
          <Link href={href} className="mo-class-card__view-more">
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
    <div className="mo-classes-filters" role="dialog" aria-modal="true" aria-label="Filters">
      <button
        type="button"
        className="mo-classes-filters__backdrop"
        aria-label="Close filters"
        onClick={onClose}
      />
      <div className="mo-classes-filters__panel">
        <div className="mo-classes-filters__header">
          <h2>Filters</h2>
          <button type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="mo-classes-filters__body">
          <details className="mo-classes-filters__group">
            <summary>Availability</summary>
            <label className="mo-classes-filters__option">
              <input type="checkbox" name="availability" />
              In stock only
            </label>
          </details>
          <details className="mo-classes-filters__group">
            <summary>Price</summary>
            <div className="mo-classes-filters__price-range">
              <label>
                <span>$</span>
                <input type="number" min={0} max={1330} placeholder="0" />
              </label>
              <span>to</span>
              <label>
                <span>$</span>
                <input type="number" min={0} max={1330} placeholder="1330" />
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
    <div className="mo-class-detail__info-block">
      <h2 className="mo-class-detail__info-heading">{title}</h2>
      <div className="mo-class-detail__info-body">{children}</div>
    </div>
  );
}

function ClassFeatures({ features }) {
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

function SessionSwatches({ sessions, selectedId, onSelect }) {
  if (!sessions.length) return null;

  return (
    <fieldset className="mo-class-detail__variants">
      <legend className="mo-class-detail__variants-label">Options:</legend>
      <div className="mo-class-detail__variant-list">
        {sessions.map((session) => {
          const sessionId = session.id ?? session.label;
          const isSelected = selectedId === sessionId;

          return (
            <label
              key={sessionId}
              className={`mo-class-detail__variant${
                session.soldOut ? " mo-class-detail__variant--sold-out" : ""
              }${isSelected ? " is-selected" : ""}`}
            >
              <input
                type="radio"
                name="class-session"
                value={sessionId}
                checked={isSelected}
                disabled={session.soldOut}
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
              <input type="text" name={`attendee_${index + 1}_first_name`} />
            </label>
            <label className="mo-class-detail__field">
              <span>Last Name *</span>
              <input type="text" name={`attendee_${index + 1}_last_name`} />
            </label>
            <label className="mo-class-detail__field">
              <span>Email *</span>
              <input type="email" name={`attendee_${index + 1}_email`} />
            </label>
            <label className="mo-class-detail__field">
              <span>Phone Number *</span>
              <input type="tel" name={`attendee_${index + 1}_phone`} />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

function FacilitatorPanel({ facilitator }) {
  return (
    <div className="mo-class-detail__facilitator-panel">
      <div className="mo-class-detail__facilitator-media">
        <Image
          src={facilitator.image}
          alt={facilitator.name}
          width={250}
          height={250}
          className="mo-class-detail__facilitator-photo"
        />
        <div>
          <p className="mo-class-detail__facilitator-role">{facilitator.role}</p>
          {facilitator.quote && (
            <blockquote className="mo-class-detail__facilitator-quote">
              {facilitator.quote}
            </blockquote>
          )}
        </div>
      </div>
      <p className="mo-class-detail__facilitator-bio">{facilitator.bio}</p>
      {facilitator.instagram && (
        <p className="mo-class-detail__facilitator-instagram">
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
    <main id="main" className="mo-class-detail">
      {(classItem.heroImage || classItem.tagline) && (
        <section className="mo-class-detail__overlay" aria-label={classItem.title}>
          {classItem.heroImage && (
            <Image
              src={classItem.heroImage}
              alt=""
              fill
              priority
              className="mo-class-detail__overlay-image"
            />
          )}
          <div className="mo-class-detail__overlay-content">
            <h1 className="mo-class-detail__overlay-title">{classItem.title}</h1>
            {classItem.tagline && (
              <p className="mo-class-detail__overlay-tagline">
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

      <section className="mo-class-detail__product" aria-label="Class details">
        <div className="mo-class-detail__product-layout">
          <div className="mo-class-detail__gallery">
            <div className="mo-class-detail__gallery-main">
              <Image
                src={gallery[activeImage]}
                alt={classItem.title}
                width={1024}
                height={1024}
                priority={!classItem.heroImage}
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
              <p className="mo-class-detail__price">
                {formatClassPriceDetailed(selectedSession.price)}
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

            <AttendeeForm quantity={quantity} />

            <button type="button" className="mo-button mo-class-detail__add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {facilitators.length > 0 && (
        <section className="mo-class-detail__facilitators" aria-label="Facilitators">
          <h2 className="mo-class-detail__facilitators-title">Facilitators</h2>

          <div className="mo-product-detail__tabs-desktop">
            <div className="mo-product-detail__tab-nav" role="tablist">
              {facilitators.map((facilitator, index) => (
                <button
                  key={facilitator.name}
                  type="button"
                  role="tab"
                  aria-selected={activeFacilitator === index}
                  className={activeFacilitator === index ? "is-active" : undefined}
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

          <div className="mo-product-detail__accordion">
            {facilitators.map((facilitator) => (
              <div key={facilitator.name} className="mo-product-detail__accordion-item">
                <button
                  type="button"
                  className="mo-product-detail__accordion-trigger"
                  aria-expanded={openAccordion === facilitator.name}
                  onClick={() => toggleAccordion(facilitator.name)}
                >
                  {facilitator.name}
                </button>
                {openAccordion === facilitator.name && (
                  <div className="mo-product-detail__accordion-body">
                    <FacilitatorPanel facilitator={facilitator} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {classItem.related?.length > 0 && (
        <section className="mo-product-detail__related" aria-label="Related classes">
          <h2 className="mo-product-detail__related-title">Related classes</h2>
          <div className="mo-product-detail__tabs-desktop">
            <div className="mo-product-detail__tab-nav" role="tablist">
              {classItem.related.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeRelatedClass === index}
                  className={activeRelatedClass === index ? "is-active" : undefined}
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
                  className="mo-class-card mo-class-card--link"
                >
                  <div className="mo-class-card__media">
                    <Image src={activeRelatedClassData.image} alt={activeRelatedClassData.title} width={320} height={240} />
                  </div>
                  <p className="mo-class-card__title">{activeRelatedClassData.title}</p>
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
    <main id="main" className="mo-classes">
      <ClassTypesNav activeLabel="All" />

      <section className="mo-classes-list" aria-label="Classes">
        <div className="mo-classes-toolbar">
          <button
            type="button"
            className="mo-classes-toolbar__filter"
            aria-expanded={filtersOpen}
            aria-controls="classes-filters"
            onClick={() => setFiltersOpen(true)}
          >
            Filter
          </button>
          <p className="mo-classes-toolbar__count">
            {ALL_CLASSES.length} products
          </p>
        </div>

        <ClassFiltersDrawer open={filtersOpen} onClose={() => setFiltersOpen(false)} />

        <div className="mo-class-card-list">
          {ALL_CLASSES.map((classItem) => (
            <ClassCard key={classItem.slug} classItem={classItem} />
          ))}
        </div>
      </section>
    </main>
  );
}