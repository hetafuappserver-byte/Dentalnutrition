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
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`team-modal-${member.id}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer border-0 bg-transparent"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative m-0 max-h-[80vh] w-[min(100%,600px)] overflow-y-auto rounded-lg bg-white p-8">
        <button
          type="button"
          className="absolute top-4 right-4 flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-2xl leading-none"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        <div className="mx-auto mb-4 w-1/2 [&_img]:w-full [&_img]:rounded-full">
          <Image
            src={member.image}
            alt={member.name}
            width={600}
            height={600}
          />
        </div>
        <div className="text-center">
          <div
            className="flex flex-col items-center [&_h1]:m-0 [&_h1]:mb-1 [&_h1]:[font-family:var(--heading-font)] [&_h1]:text-2xl [&_h1]:font-normal [&_h1]:tracking-[0.08em] [&_h1]:uppercase [&_h4]:m-0 [&_h4]:mb-4 [&_h4]:[font-family:var(--heading-font)] [&_h4]:text-base [&_h4]:font-normal [&_p]:m-0 [&_p]:mb-4 [&_p]:max-w-full [&_p]:leading-[1.65]"
            id={`team-modal-${member.id}`}
          >
            <h1>{member.name}</h1>
            <h4>{member.role}</h4>
            {member.instagram && (
              <p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#02c3c2] underline decoration-1"
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
                    <ul className="mb-4 list-disc pl-5 text-left">
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
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="w-full overflow-hidden" aria-label="Meet the Team hero">
        <Image
          src={TEAM_PAGE.hero}
          alt=""
          width={2000}
          height={960}
          priority
          className="h-auto min-h-[280px] w-full object-cover min-[700px]:min-h-[420px]"
        />
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-8 text-center md:px-8 md:py-10">
        <p className="m-0 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] lowercase">
          {TEAM_PAGE.title}
        </p>
      </section>

      {TEAM_PAGE.sections.map((section) => (
        <div key={section.title}>
          <section className="mx-auto max-w-[1200px] px-5 py-8 text-center md:px-8 md:py-10">
            <p className="m-0 [font-family:var(--heading-font)] text-[clamp(1.25rem,3vw,1.75rem)] font-normal capitalize">
              {section.title}
            </p>
          </section>

          <section className="mx-auto max-w-[1200px] px-5 py-8 md:px-8 md:py-10">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 min-[700px]:grid-cols-4 min-[700px]:gap-x-8 min-[700px]:gap-y-10">
              {section.members.map((member) => (
                <article
                  key={member.modalId}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <button
                    type="button"
                    className="aspect-square w-[min(100%,220px)] cursor-pointer overflow-hidden rounded-full border-0 bg-transparent p-0 hover:[&_img]:scale-105"
                    onClick={() => setActiveId(member.modalId)}
                    aria-label={`View bio for ${member.name}`}
                  >
                    <Image
                      src={member.image}
                      alt=""
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-[350ms]"
                    />
                  </button>
                  <div className="flex flex-col gap-[0.35rem]">
                    <p className="m-0 [font-family:var(--heading-font)] text-lg font-normal tracking-[0.04em] uppercase">
                      {member.name}
                    </p>
                    <h6 className="m-0 [font-family:var(--body-font)] text-sm font-normal tracking-[0.08em] uppercase">
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
