"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";
const LOGO = "/Logos/LogoBlack.svg";

const NAV_ITEMS = [
  {
    label: "Education",
    href: "/pages/education",
    discover: "Discover Hetafu Academy Education",
    groups: [
      {
        title: "In-Person",
        links: [
          { label: "All Classes", href: "/pages/all-classes" },
          { label: "Course Types", href: "/pages/class-types" },
          { label: "IDA Academy", href: "/pages/education" },
          { label: "Academy on the Road", href: "/pages/academy-on-the-road" },
          {
            label: "Academy Certification Program",
            href: "/pages/academy-certification",
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
    href: "/pages/product-knowledge",
    discover: "Discover Product Knowledge",
    groups: [
      {
        title: "Category",
        links: [{ label: "Bits", href: "/Products/bits" },
          {
            label: "Lollipops",
            href: "/Products/lollipops",
          }, 
           { label: "Mouthwashes", href: "/Products/mouthwash" },
          {
            label: "Smarts",
            href: "/Products/smarts",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/pages/meet-the-team",
    flatLinks: [
      { label: "Meet the Team", href: "/pages/meet-the-team" },
      { label: "Sustainability", href: "/pages/sustainability" },
      { label: "Hetafu VS IDA", href: "/pages/hetafu-vs-ida" },
      { label: "Distribution", href: "/pages/distribution" },
      { label: "Contact us", href: "/pages/contact" },
    ],
  },
];

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

function MegaMenu({ item, isOpen }) {
  return (
    <div
      className={`mo-mega-menu${isOpen ? " is-open" : ""}`}
      role="region"
      aria-label={`${item.label} menu`}
      aria-hidden={!isOpen}
    >
      <div className="mo-mega-menu__inner">
        {item.discover && (
          <Link href={item.href} className="mo-mega-menu__discover">
            {item.discover}
            <IconArrowRight />
          </Link>
        )}

        <div className="mo-mega-menu__body">
          {item.groups && (
            <ul className="mo-mega-menu__linklist">
              {item.groups.map((group) => (
                <li key={group.title} className="mo-mega-menu__column">
                  <p className="mo-mega-menu__group-title">{group.title}</p>
                  <div className="mo-mega-menu__links">
                    {group.links.map((link) => (
                      <Link key={link.label} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {item.flatLinks && (
            <ul className="mo-mega-menu__flat-list">
              {item.flatLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="mo-mega-menu__flat-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {item.promos && (
            <div className="mo-mega-menu__promo-grid">
              {item.promos.map((promo) => (
                <Link
                  key={promo.title}
                  href={promo.href}
                  className="mo-mega-menu__promo-item"
                >
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={315}
                    height={365}
                  />
                  <span className="mo-mega-menu__promo-overlay">{promo.title}</span>
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
    <header className="mo-header">
      <div className="mo-header__inner">
        <h1 className="mo-header__logo">
          <Link href="/">
            <span className="mo-sr-only">Hetafu</span>
            <Image
              src={LOGO}
              alt="Hetafu — Health Taste Fun"
              width={212}
              height={150}
              priority
            />
          </Link>
        </h1>

        <nav className="mo-header__primary-nav" aria-label="Primary navigation">
          <button
            type="button"
            className="mo-header__menu-btn"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="mo-sr-only">Navigation menu</span>
            <IconMenu />
          </button>

          <ul className="mo-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="mo-header__nav-item"
                onMouseEnter={() => showMegaMenu(item.label)}
                onMouseLeave={scheduleCloseMegaMenu}
                onFocusCapture={() => showMegaMenu(item.label)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    scheduleCloseMegaMenu();
                  }
                }}
              >
                <Link href={item.href} className="mo-header__nav-trigger">
                  {item.label}
                </Link>
                <MegaMenu item={item} isOpen={openMenu === item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`mo-mobile-nav${mobileOpen ? " is-open" : ""}`}
      >
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <button
              type="button"
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
              <div className="mo-mobile-nav__sub">
                {item.discover && (
                  <Link href={item.href}>{item.discover}</Link>
                )}
                {item.groups?.flatMap((group) =>
                  group.links.map((link) => (
                    <Link key={`${group.title}-${link.label}`} href={link.href}>
                      {link.label}
                    </Link>
                  )),
                )}
                {item.flatLinks?.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/account/login">Account</Link>
      </div>
    </header>
  );
}