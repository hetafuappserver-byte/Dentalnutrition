"use client";

import { FAQ_PAGE_TITLE, FAQ_SECTIONS } from "./faqData";

function FaqIcon() {
  return (
    <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
      <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-current transition-transform duration-200 group-open:scale-x-0" />
    </span>
  );
}

function FaqAccordion({ question, answerHtml, id }) {
  return (
    <details className="group border-t border-[rgba(64,30,23,0.15)] last:border-b" id={id}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[1.125rem] text-[1.0625rem] leading-[1.45] [&::-webkit-details-marker]:hidden">
        <span className="flex-1 text-left">{question}</span>
        <FaqIcon />
      </summary>
      <div
        className="pb-5 text-base leading-[1.65] text-[rgba(64,30,23,0.85)] [&_a]:text-[#02c3c2] [&_a]:underline [&_a]:underline-offset-[0.15em] [&_li+li]:mt-2 [&_p]:m-0 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:m-0 [&_ul]:pl-5"
        dangerouslySetInnerHTML={{ __html: answerHtml }}
      />
    </details>
  );
}

export default function Faqs() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="mx-auto max-w-[820px] border-b border-[rgba(64,30,23,0.15)] px-5 py-10 text-center md:px-8 md:py-12">
        <h1 className="m-0 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          {FAQ_PAGE_TITLE}
        </h1>
      </section>

      {FAQ_SECTIONS.map((section) => (
        <section
          key={section.category}
          className="mx-auto max-w-[820px] border-b border-[rgba(64,30,23,0.15)] px-5 py-10 md:px-8 md:py-12"
          aria-labelledby={`faq-category-${section.category}`}
        >
          <h2
            id={`faq-category-${section.category}`}
            className="m-0 mb-5 [font-family:var(--heading-font)] text-lg font-semibold tracking-[0.08em] uppercase"
          >
            {section.category}
          </h2>
          <div className="flex flex-col">
            {section.items.map((item, index) => (
              <FaqAccordion
                key={`${section.category}-${item.question}`}
                id={`faq-${section.category.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                question={item.question}
                answerHtml={item.answerHtml}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
