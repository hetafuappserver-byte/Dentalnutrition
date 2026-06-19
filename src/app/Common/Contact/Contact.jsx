"use client";

import { useState } from "react";

const CONTACT_EMAIL = "reachthebest@hetafu.com";

const BTN_SOLID =
  "inline-flex items-center justify-center self-center border border-[#401e17] bg-[#401e17] px-6 py-[0.85rem] mt-2 [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-transparent hover:text-[#401e17]";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="border-b border-[rgba(64,30,23,0.15)] px-5 py-10 pb-14 md:px-8 md:py-14 md:pb-[4.5rem]">
        <div className="mx-auto max-w-[680px] text-center">
          <h1 className="m-0 mb-8 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
            Contact
          </h1>

          {submitted ? (
            <p
              className="m-0 text-[1.0625rem] leading-[1.65] text-[rgba(64,30,23,0.85)] [&_a]:text-[#02c3c2] [&_a]:underline [&_a]:underline-offset-[0.15em]"
              role="status"
            >
              Thank you for reaching out. Your email client should open so you
              can send your message. You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          ) : (
            <form
              id="contact_form"
              className="flex flex-col gap-4 text-left"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col">
                  <label
                    className="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className="w-full border border-[rgba(64,30,23,0.15)] bg-white px-4 py-[0.9rem] [font-family:var(--body-font)] text-base leading-normal text-[#401e17] transition-[border-color] duration-200 focus:border-[#02c3c2] focus:outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                    htmlFor="contact-email"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    className="w-full border border-[rgba(64,30,23,0.15)] bg-white px-4 py-[0.9rem] [font-family:var(--body-font)] text-base leading-normal text-[#401e17] transition-[border-color] duration-200 focus:border-[#02c3c2] focus:outline-none"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="min-h-32 w-full resize-y border border-[rgba(64,30,23,0.15)] bg-white px-4 py-[0.9rem] [font-family:var(--body-font)] text-base leading-normal text-[#401e17] transition-[border-color] duration-200 focus:border-[#02c3c2] focus:outline-none"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <button type="submit" className={BTN_SOLID}>
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
