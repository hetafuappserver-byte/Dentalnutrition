"use client";

import { FAQ_PAGE_TITLE, FAQ_SECTIONS } from "./faqData";

function FaqAccordion({ question, answerHtml, id }) {
  return (
    <details className="mo-faq__item" id={id}>
      <summary className="mo-faq__summary">
        <span className="mo-faq__question">{question}</span>
        <span className="mo-faq__icon" aria-hidden="true" />
      </summary>
      <div
        className="mo-faq__answer"
        dangerouslySetInnerHTML={{ __html: answerHtml }}
      />
    </details>
  );
}

export default function Faqs() {
  return (
    <main id="main" className="mo-faqs">
      <section className="mo-faq-section mo-faq-section--header">
        <h1 className="mo-faq-title">{FAQ_PAGE_TITLE}</h1>
      </section>

      {FAQ_SECTIONS.map((section) => (
        <section
          key={section.category}
          className="mo-faq-section"
          aria-labelledby={`faq-category-${section.category}`}
        >
          <h2
            id={`faq-category-${section.category}`}
            className="mo-faq-category"
          >
            {section.category}
          </h2>
          <div className="mo-faq-list">
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
