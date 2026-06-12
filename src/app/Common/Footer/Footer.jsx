"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const FOOTER_LINKS = {
  professionals: [
    { label: "Education", href: "/pages/education" },
    { label: "Haircolor", href: "/pages/hair-color-home" },
    {
      label: "Color Formulation Tool",
      href: "/pages/color-formulation-quiz",
    },
    {
      label: "IDA Learning Platform",
      href: "https://ida.docebosaas.com/learn",
    },
    { label: "MO Pro Rewards Shop", href: "/collections/rewards-shop" },
  ],
  about: [
    { label: "Meet the Team", href: "/pages/meet-the-team" },
    { label: "Sustainability", href: "/pages/sustainability" },
    { label: "Hetafu x IDA", href: "/pages/hetafu-vs-ida" },
    { label: "Distribution", href: "/pages/distribution" },
  ],
  support: [
    { label: "FAQ", href: "/pages/frequently-asked-questions" },
    { label: "Contact us", href: "/pages/contact" },
  ],
};

const LEGAL_LINKS = [
  { label: "Giveaway rules", href: "/pages/giveaway-rules" },
  { label: "Safety Data Sheet", href: "/pages/safety-data-sheets" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms and conditions", href: "/policies/terms-of-service" },
];

const SPOTLIGHT_VIDEOS = [
  {
    id: "c48bd4d5-e39b-4600-9c94-59818d88e271",
    poster:
      "https://cdn.shopify.com/s/files/1/0967/8422/0450/files/preview_images/2a13a02e3608472cb1109faf9487bb73.thumbnail.0000000000.jpg?v=1780315909&width=960&height=540",
    src: "https://cdn.shopify.com/videos/c/vp/2a13a02e3608472cb1109faf9487bb73/2a13a02e3608472cb1109faf9487bb73.HD-720p-1.6Mbps-85423660.mp4",
    alt: "Color Rhapsody 10 and Sculpting Pomade deliver vibrant results in just 10 minutes.",
  },
  {
    id: "c7872665-cf1e-46b7-83f5-c337ee35b09f",
    poster:
      "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/c7872665-cf1e-46b7-83f5-c337ee35b09f/c7872665-cf1e-46b7-83f5-c337ee35b09f.0000000.jpg",
    src: "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/c7872665-cf1e-46b7-83f5-c337ee35b09f/c7872665-cf1e-46b7-83f5-c337ee35b09f_640.mp4",
    alt: "Expert level Moroccanoil haircolor edition behind the chair.",
  },
  {
    id: "264def6a-38ba-4ced-a03b-68ca507b6901",
    poster:
      "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/264def6a-38ba-4ced-a03b-68ca507b6901/264def6a-38ba-4ced-a03b-68ca507b6901.0000000.jpg",
    src: "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/264def6a-38ba-4ced-a03b-68ca507b6901/264def6a-38ba-4ced-a03b-68ca507b6901_640.mp4",
    alt: "Blonde Voyage Powder Lightener delivers flawless blondes with up to 9 levels of lift.",
  },
  {
    id: "19e42840-9c50-4550-8174-b6d7c9424de0",
    poster:
      "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/19e42840-9c50-4550-8174-b6d7c9424de0/19e42840-9c50-4550-8174-b6d7c9424de0.0000000.jpg",
    src: "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/19e42840-9c50-4550-8174-b6d7c9424de0/19e42840-9c50-4550-8174-b6d7c9424de0_640.mp4",
    alt: "Moroccanoil Sculpting Pomade provides strong hold and a high-shine finish.",
  },
  {
    id: "59399bd9-33cc-4492-83d9-54097c8bbab9",
    poster:
      "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/59399bd9-33cc-4492-83d9-54097c8bbab9/59399bd9-33cc-4492-83d9-54097c8bbab9.0000000.jpg",
    src: "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/59399bd9-33cc-4492-83d9-54097c8bbab9/59399bd9-33cc-4492-83d9-54097c8bbab9_640.mp4",
    alt: "Global Ambassador @ahappyjustin shares his Moroccanoil must-haves on set and in the salon.",
  },
  {
    id: "cf4ae7e1-6aac-4221-a8eb-503aec22fd14",
    poster:
      "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/cf4ae7e1-6aac-4221-a8eb-503aec22fd14/cf4ae7e1-6aac-4221-a8eb-503aec22fd14.0000000.jpg",
    src: "https://videos.gotolstoy.com/public/8d4d0602-2011-451b-ba4b-90e136c7062a/cf4ae7e1-6aac-4221-a8eb-503aec22fd14/cf4ae7e1-6aac-4221-a8eb-503aec22fd14_640.mp4",
    alt: "A new chapter is coming soon to the Moroccanoil NYC Academy.",
  },
];

const SLIDE_WIDTH = 316;

function IconArrowSubmit() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 640 640" fill="none">
      <path
        d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 3.532c0-1.554 1.696-2.514 3.029-1.715l14.113 8.468c1.294.777 1.294 2.653 0 3.43L7.029 22.183c-1.333.8-3.029-.16-3.029-1.715V3.532Z"
        fill="#fff"
      />
    </svg>
  );
}

function IconPause() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M4.375 2.5c-.633 0-1.125.516-1.125 1.125v6.75A1.11 1.11 0 0 0 4.375 11.5h.75c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 5.125 2.5h-.75Zm4.5 0c-.633 0-1.125.516-1.125 1.125v6.75A1.11 1.11 0 0 0 8.875 11.5h.75c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 9.625 2.5h-.75Z"
        fill="#fff"
      />
    </svg>
  );
}

function IconVolumeOff() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6.266 1.551a0.667 0.667 0 0 1 0.382 0.583v7.714c0 0.261 -0.161 0.482 -0.381 0.602a0.651 0.651 0 0 1 -0.703 -0.12L2.85 7.918h-1.346a1.269 1.269 0 0 1 -1.286 -1.286v-1.286c0 -0.703 0.562 -1.286 1.286 -1.286h1.346L5.563 1.671a0.651 0.651 0 0 1 0.703 -0.12Zm2.492 2.651 1.105 1.106 1.105 -1.106c0.18 -0.18 0.483 -0.18 0.663 0 0.201 0.201 0.201 0.502 0 0.683L10.526 5.991l1.106 1.104c0.201 0.201 0.201 0.502 0 0.683a0.44 0.44 0 0 1 -0.663 0l-1.106 -1.105 -1.104 1.106c-0.201 0.201 -0.502 0.201 -0.683 0 -0.201 -0.182 -0.201 -0.483 0 -0.684l1.105 -1.105L8.073 4.886c-0.2 -0.18 -0.2 -0.482 0 -0.683 0.182 -0.18 0.483 -0.18 0.684 0Z"
        fill="#fff"
      />
    </svg>
  );
}

function IconVolumeOn() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6.627 1.55c.238.101.411.342.411.583v7.714c0 .261-.173.482-.411.603a.742.742 0 0 1-.757-.121l-2.921-2.41H1.5c-.779 0-1.385-.563-1.385-1.286V5.347c0-.703.606-1.286 1.385-1.286h1.449l2.921-2.39a.742.742 0 0 1 .757-.121Zm3.721 1.447c.931.723 1.537 1.788 1.537 2.993 0 1.225-.606 2.29-1.537 2.993a.542.542 0 0 1-.735-.06c-.195-.201-.152-.502.065-.683.714-.522 1.168-1.326 1.168-2.25 0-.904-.454-1.708-1.168-2.23a.475.475 0 0 1-.065-.683.565.565 0 0 1 .735-.08ZM9.029 4.503c.476.362.779.884.779 1.487 0 .623-.303 1.145-.779 1.507a.55.55 0 0 1-.736-.081.454.454 0 0 1 .087-.663.966.966 0 0 0 .389-.763.928.928 0 0 0-.389-.743.475.475 0 0 1-.087-.683.57.57 0 0 1 .736-.061Z"
        fill="#fff"
      />
    </svg>
  );
}

function FooterLinkColumn({ title, links, children }) {
  return (
    <div className="mo-footer__block mo-footer__block--links">
      <p className="mo-footer__heading">{title}</p>
      <ul className="mo-footer__links">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("http") ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

function SpotlightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const dragState = useRef({ startX: 0, dragging: false });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }, [activeIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted, activeIndex]);

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + SPOTLIGHT_VIDEOS.length) % SPOTLIGHT_VIDEOS.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % SPOTLIGHT_VIDEOS.length);
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((current) => !current);
  };

  const handlePointerDown = (event) => {
    dragState.current = { startX: event.clientX, dragging: true };
  };

  const handlePointerUp = (event) => {
    if (!dragState.current.dragging) return;

    const delta = event.clientX - dragState.current.startX;
    dragState.current.dragging = false;

    if (Math.abs(delta) < 40) return;
    if (delta < 0) goToNext();
    else goToPrev();
  };

  const trackOffset = activeIndex * SLIDE_WIDTH + SLIDE_WIDTH * 0.5;

  return (
    <div
      className="mo-footer__spotlight"
      role="region"
      aria-label="Spotlight carousel"
    >
      <div
        className="mo-footer__spotlight-stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          dragState.current.dragging = false;
        }}
      >
        <div
          className="mo-footer__spotlight-track"
          style={{ transform: `translateX(calc(50% - ${trackOffset}px))` }}
        >
          {SPOTLIGHT_VIDEOS.map((video, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={video.id}
                className={`mo-footer__spotlight-slide${isActive ? " is-active" : ""}`}
                role="group"
                aria-label={`slide ${index + 1} of ${SPOTLIGHT_VIDEOS.length}`}
                aria-hidden={!isActive}
              >
                <div
                  className="mo-footer__spotlight-card"
                  onClick={() => selectSlide(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      selectSlide(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={video.alt}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive ? (
                    <video
                      ref={videoRef}
                      className="mo-footer__spotlight-video"
                      poster={video.poster}
                      playsInline
                      muted={isMuted}
                      loop
                      preload="metadata"
                      crossOrigin="anonymous"
                      aria-label={video.alt}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.poster}
                      alt={video.alt}
                      className="mo-footer__spotlight-image"
                      loading="lazy"
                      draggable={false}
                    />
                  )}

                  {isActive && (
                    <div className="mo-footer__spotlight-controls">
                      <button
                        type="button"
                        className="mo-footer__spotlight-control"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        onClick={(event) => {
                          event.stopPropagation();
                          togglePlay();
                        }}
                      >
                        {isPlaying ? <IconPause /> : <IconPlay />}
                      </button>
                      <button
                        type="button"
                        className="mo-footer__spotlight-control"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleMute();
                        }}
                      >
                        {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mo-footer">
      <div className="mo-footer__inner">
        <div className="mo-footer__community">
          <p className="mo-footer__heading mo-footer__community-label">
            Find your community
          </p>
          <p className="mo-footer__community-handle">
            <a
              href="https://www.instagram.com/IDAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              @IDA Academy
            </a>
          </p>
        </div>

        <div className="mo-footer__block-list">
          <div className="mo-footer__block mo-footer__block--app">
            <SpotlightCarousel />
          </div>

          <div className="mo-footer__block mo-footer__block--newsletter">
            <p className="mo-footer__heading">Stay in the know</p>
            <p className="mo-footer__newsletter-text">
              Stay in the loop about exclusive offers and the latest product
              information with our newsletter.
            </p>
            <form
              className="mo-footer__form"
              action="/contact#newsletter-form"
              method="post"
            >
              <input type="hidden" name="form_type" value="customer" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="contact[tags]" value="newsletter" />
              <div className="mo-footer__field">
                <input
                  id="footer-email"
                  type="email"
                  name="contact[email]"
                  placeholder="E-mail"
                  autoComplete="email"
                  required
                />
              </div>
              <button type="submit" className="mo-footer__submit" aria-label="Subscribe">
                <IconArrowSubmit />
              </button>
            </form>
          </div>

          <FooterLinkColumn title="About Us" links={FOOTER_LINKS.about}>
            <div className="mo-footer__commitments">
            </div>
          </FooterLinkColumn>

          <FooterLinkColumn title="Support" links={FOOTER_LINKS.support}>
            <div className="mo-footer__nyc">
              <p className="mo-footer__heading">NYC Academy</p>
              <div className="mo-nyc-address">
                <IconLocation />
                <div>
                  Plot No. 14D/1, 3rd Floor, Dwaraka Signature Building,
                  <br />
                  Jaihind Gandhi Road, Madhapur,
                  <br />
                  Hyderabad, Telangana-500081
                </div>
              </div>
            </div>
          </FooterLinkColumn>
        </div>

        <div className="mo-footer__social">
          <ul className="mo-social-media mo-social-media--list" role="list">
            <li className="mo-social-media__item">
              <a
                className="mo-social-media__link"
                href="https://www.instagram.com/IDAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <IconInstagram />
                Follow us on instagram!
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mo-footer-bottom">
        <p>© 2026 - Dental Nutrition. All Rights Reserved.</p>
        <ul>
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("http") ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
