"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import { TEAM_PAGE } from "./teamData";

function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`team-modal-${member.id}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer border-0 bg-transparent"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative m-0 max-h-[90vh] w-full max-w-[900px] overflow-y-auto bg-white rounded-lg">
        <button
          type="button"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-600 hover:text-gray-900 z-10 cursor-pointer border-0 bg-transparent p-0"
          aria-label="Close"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8 md:p-10">
          <div className="relative flex items-center justify-center">
            <Image
              src={member.image}
              alt={member.name}
              width={600}
              height={600}
              className="w-full h-auto max-w-[600px]"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-teal-600 rounded-full"></div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-4 [font-family:var(--heading-font)] tracking-[0.08em] uppercase">{member.name}</h2>
            <p className="text-xl text-gray-600 mb-8 font-bold">{member.role}</p>
            {member.instagram && (
              <p className="mb-6">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#02c3c2] underline decoration-1"
                >
                  <ArrowUpRight width={20} /> {member.instagramHandle}
                </a>
              </p>
            )}
            <ul className="space-y-4 text-gray-700">
              {member.bio?.map((point, index) => {
                try {
                  const formattedText = point.replace(/ \*\* (.*?) \*\* /g, "<strong>$1</strong>");
                  return (
                    <li key={index} className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span dangerouslySetInnerHTML={{ __html: formattedText }} />
                    </li>
                  );
                } catch {
                  return (
                    <li key={index} className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  );
                }
              })}
              {member.achievements?.length && (
                <>
                  <li className="flex gap-2 font-bold mt-4">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>ACHIEVEMENTS</span>
                  </li>
                  {member.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MeetTheTeamPage() {
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
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeId, closeModal]);

  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-6 pb-16 min-[700px]:gap-6 min-[700px]:px-8 min-[700px]:py-10 min-[700px]:pb-20">
          <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-2 text-center md:px-8 md:pt-10 md:pb-3">
            <h1 className="m-0 [font-family:var(--heading-font)] text-[clamp(2rem,5vw,3rem)] font-normal tracking-[0.08em] uppercase">
              {TEAM_PAGE.title}
            </h1>
          </div>

          {TEAM_PAGE.sections.map((section) => (
            <div key={section.title}>
              <section className="mx-auto max-w-[1200px] px-5 pt-2 pb-4 text-center md:px-8 md:pt-3 md:pb-6">
                <p className="m-0 [font-family:var(--heading-font)] text-[clamp(1.75rem,4.5vw,2.75rem)] font-normal capitalize">
                  {section.title}
                </p>
              </section>
              <section className="mx-auto max-w-[1200px] px-5 py-8 md:px-8 md:py-10">
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 min-[700px]:gap-x-8 min-[700px]:gap-y-10">
                  {section.members.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setActiveId(member.modalId)}
                      className="cursor-pointer border-0 bg-transparent p-0 text-left w-[calc(50%-10px)] min-[700px]:w-[calc(25%-16px)]"
                    >
                      <div className="mx-auto mb-4 aspect-square w-full max-w-[155px] overflow-hidden rounded-full bg-[#f3f3f3] min-[700px]:max-w-[250px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={600}
                          height={600}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="m-0 text-center [font-family:var(--heading-font)] text-base font-normal tracking-[0.08em] uppercase min-[700px]:text-xl">
                        {member.name}
                      </p>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </section>

        <TeamModal member={activeMember} onClose={closeModal} />
      </main>
      <Footer />
    </>
  );
}
