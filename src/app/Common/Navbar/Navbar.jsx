"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO = "/Logos/LogoBlack.svg";

const NAV_ITEMS = [
  {
    label: "Education",
    href: "/education",
    discover: "Discover Hetafu Academy Education",
    groups: [
      {
        title: "In-Person",
        links: [
          { label: "All Classes", href: "/all-classes" },
          { label: "Course Types", href: "/class-types" },
          { label: "IDA Academy", href: "/education" },
          { label: "Academy on the Road", href: "/academy-on-the-road" },
          {
            label: "Academy Certification Program",
            href: "/academy-certification",
          },
        ],
      },
      {
        title: "Digital",
        links: [
          { label: "Summits", href: "/collections/summits" },
          {
            label: "Virtual Business Education",
            href: "/collections/virtual-business-classes",
          },
        ],
      },
    ],
  },
  {
    label: "Product Knowledge",
    href: "/product-knowledge",
    discover: "Discover Product Knowledge",
    groups: [
      {
        title: "Category",
        links: [
          { label: "Bits", href: "/products/bits" },
          { label: "Lollipops", href: "/products/lollipops" },
          { label: "Mouthwashes", href: "/products/mouthwash" },
          { label: "Smarts", href: "/products/smarts" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/meet-the-team",
    flatLinks: [
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Hetafu x IDA", href: "/hetafu-vs-ida" },
      { label: "Distribution", href: "/distribution" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const MOBILE_NAV_ITEM =
  "block w-full text-left py-[0.65rem] border-0 border-b border-[rgba(64,30,23,0.15)] bg-transparent [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase text-inherit cursor-pointer";

function IconArrowRight() {
  return (
    <svg aria-hidden="true" width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path
        d="m5 17 8-8-8-8"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M1 19h22M1 12h22M1 5h22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MegaMenu({ item, isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 hidden border-t border-[rgba(64,30,23,0.15)] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[opacity,visibility] duration-200 before:absolute before:bottom-full before:left-0 before:right-0 before:h-12 before:content-[''] min-[1000px]:block ${
        isOpen
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
      }`}
      role="region"
      aria-label={`${item.label} menu`}
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-[1400px] px-8 pb-8 pt-6">
        {item.discover && (
          <Link
            href={item.href}
            className="mb-5 inline-flex items-center gap-3 text-lg font-bold capitalize tracking-[0.02em]"
          >
            {item.discover}
            <IconArrowRight />
          </Link>
        )}

        <div className="flex flex-wrap items-start gap-8 min-[1000px]:gap-x-16">
          {item.groups && (
            <ul className="flex flex-wrap gap-12">
              {item.groups.map((group) => (
                <li key={group.title} className="min-w-40">
                  <p className="mb-4 m-0 [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-[0.65rem]">
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[0.9375rem] opacity-75 hover:opacity-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {item.flatLinks && (
            <ul className="m-0 flex w-full list-none flex-row flex-wrap items-center gap-8 p-0">
              {item.flatLinks.map((link) => (
                <li key={link.label} className="m-0">
                  <Link
                    href={link.href}
                    className="[font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {item.promos && (
            <div className="grid min-w-[min(100%,720px)] flex-1 grid-cols-3 gap-4">
              {item.promos.map((promo) => (
                <Link
                  key={promo.title}
                  href={promo.href}
                  className="group relative block overflow-hidden"
                >
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={315}
                    height={365}
                    className="h-[280px] w-full object-cover transition-transform duration-[350ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase text-white">
                    {promo.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const closeMenuTimerRef = useRef(null);

  const clearCloseMenuTimer = () => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  };

  const showMegaMenu = (label) => {
    clearCloseMenuTimer();
    setOpenMenu(label);
  };

  const scheduleCloseMegaMenu = () => {
    clearCloseMenuTimer();
    closeMenuTimerRef.current = setTimeout(() => setOpenMenu(null), 250);
  };

  useEffect(() => () => clearCloseMenuTimer(), []);

  return (
    <header className="relative sticky top-0 z-50 border-b border-[rgba(64,30,23,0.15)] bg-white">
      <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-[0.65rem] min-[1000px]:gap-[5.5rem]">
        <h1 className="m-0 order-2 flex flex-1 justify-center min-[1000px]:order-1 min-[1000px]:flex-none min-[1000px]:justify-start">
          <Link href="https://test.hetafu.com" className="inline-flex shrink-0">
            <span className="sr-only">Hetafu</span>
            <Image
              src={LOGO}
              alt="Hetafu — Health Taste Fun"
              width={212}
              height={150}
              priority
              className="!block !h-[72px] !w-auto md:!h-[88px] min-[1000px]:!h-24"
            />
          </Link>
        </h1>

        <nav
          className="order-1 flex items-center min-[1000px]:order-2 min-[1000px]:flex-1"
          aria-label="Primary navigation"
        >
          <button
            type="button"
            className="inline-flex cursor-pointer border-none bg-transparent p-1 text-inherit min-[1000px]:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Navigation menu</span>
            <IconMenu />
          </button>

          <ul className="hidden items-center gap-8 min-[1000px]:flex">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="group static"
                onMouseEnter={() => showMegaMenu(item.label)}
                onMouseLeave={scheduleCloseMegaMenu}
                onFocusCapture={() => showMegaMenu(item.label)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    scheduleCloseMegaMenu();
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="inline-block py-1 [font-family:var(--heading-font)] text-sm tracking-[0.1em] uppercase text-inherit hover:opacity-75"
                >
                  {item.label}
                </Link>
                <MegaMenu
                  item={item}
                  isOpen={openMenu === item.label}
                  onMouseEnter={() => showMegaMenu(item.label)}
                  onMouseLeave={scheduleCloseMegaMenu}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[rgba(64,30,23,0.15)] bg-white px-4 py-2 pb-3 min-[1000px]:!hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <button
              type="button"
              className={MOBILE_NAV_ITEM}
              aria-expanded={expandedMobile === item.label}
              onClick={() =>
                setExpandedMobile((current) =>
                  current === item.label ? null : item.label,
                )
              }
            >
              {item.label}
            </button>
            {expandedMobile === item.label && (
              <div className="pl-4">
                {item.discover && (
                  <Link href={item.href} className={MOBILE_NAV_ITEM}>
                    {item.discover}
                  </Link>
                )}
                {item.groups?.flatMap((group) =>
                  group.links.map((link) => (
                    <Link
                      key={`${group.title}-${link.label}`}
                      href={link.href}
                      className={`${MOBILE_NAV_ITEM} [font-family:var(--body-font)] text-[0.9375rem] normal-case tracking-[0.02em]`}
                    >
                      {link.label}
                    </Link>
                  )),
                )}
                {item.flatLinks?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${MOBILE_NAV_ITEM} [font-family:var(--body-font)] text-[0.9375rem] normal-case tracking-[0.02em]`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}