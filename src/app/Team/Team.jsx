"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TEAM_PAGE } from "./teamData";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      className="mo-team__instagram-icon"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="mo-team-modal" role="dialog" aria-modal="true" aria-labelledby={`team-modal-${member.id}`}>
      <button
        type="button"
        className="mo-team-modal__overlay"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="mo-team-modal__content">
        <button
          type="button"
          className="mo-team-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        <div className="mo-team-modal__image">
          <Image
            src={member.image}
            alt={member.name}
            width={600}
            height={600}
          />
        </div>
        <div className="mo-team-modal__text">
          <div className="mo-team-modal__bio" id={`team-modal-${member.id}`}>
            <h1>{member.name}</h1>
            <h4>{member.role}</h4>
            {member.instagram && (
              <p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mo-team-modal__instagram"
                >
                  <InstagramIcon /> {member.instagramHandle}
                </a>
              </p>
            )}
            {member.bio?.map((paragraph, index) => {
              if (paragraph === "ACHIEVEMENTS" && member.achievements?.length) {
                return (
                  <div key={index}>
                    <p>{paragraph}</p>
                    <ul className="mo-team-modal__achievements">
                      {member.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeId, setActiveId] = useState(null);

  const membersById = useMemo(() => {
    const map = new Map();
    for (const section of TEAM_PAGE.sections) {
      for (const member of section.members) {
        map.set(member.modalId, member);
      }
    }
    return map;
  }, []);

  const activeMember = activeId ? membersById.get(activeId) : null;

  const closeModal = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId, closeModal]);

  return (
    <main id="main" className="mo-team">
      <section className="mo-team-hero" aria-label="Meet the Team hero">
        <Image
          src={TEAM_PAGE.hero}
          alt=""
          width={2000}
          height={960}
          priority
          className="mo-team-hero__image"
        />
      </section>

      <section className="mo-team-section mo-team-section--center">
        <p className="mo-team-title">{TEAM_PAGE.title}</p>
      </section>

      {TEAM_PAGE.sections.map((section) => (
        <div key={section.title}>
          <section className="mo-team-section mo-team-section--center">
            <p className="mo-team-heading">{section.title}</p>
          </section>

          <section className="mo-team-section">
            <div className="mo-team-grid">
              {section.members.map((member) => (
                <article key={member.modalId} className="mo-team-card">
                  <button
                    type="button"
                    className="mo-team-card__photo"
                    onClick={() => setActiveId(member.modalId)}
                    aria-label={`View bio for ${member.name}`}
                  >
                    <Image
                      src={member.image}
                      alt=""
                      width={600}
                      height={600}
                      className="mo-team-card__image"
                    />
                  </button>
                  <div className="mo-team-card__info">
                    <p className="mo-team-card__name">{member.name}</p>
                    <h6 className="mo-team-card__role">
                      {member.gridRole || member.role}
                    </h6>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ))}

      {activeMember && (
        <TeamModal member={activeMember} onClose={closeModal} />
      )}
    </main>
  );
}
