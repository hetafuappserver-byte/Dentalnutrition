"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "reachthebest@hetafu.com";

const TOPICS = [
  "General Inquiry",
  "Product Question",
  "Order Support",
  "Distribution",
  "Partnership",
  "Media & Press",
  "Other",
];

const INPUT =
  "w-full border border-[rgba(64,30,23,0.2)] bg-white px-4 py-[0.85rem] [font-family:var(--body-font)] text-base text-[#401e17] transition-[border-color] duration-200 focus:border-[#02c3c2] focus:outline-none";

const LABEL = "block mb-1 text-sm font-semibold text-[#401e17]";

const REQUIRED = <span className="text-[#02c3c2] ml-0.5">*</span>;

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    topic: "",
    subject: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\nSubject: ${form.subject}\n\n${form.description}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#02c3c2]/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#02c3c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="m-0 mb-4 [font-family:var(--heading-font)] text-3xl font-normal tracking-[0.05em]">Request Submitted</h1>
            <p className="m-0 mb-6 text-base leading-[1.65] text-[rgba(64,30,23,0.75)]">
              Thank you for reaching out. A member of our support staff will respond as soon as possible. You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#02c3c2] underline underline-offset-[0.15em]">{CONTACT_EMAIL}</a>.
            </p>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setForm({ email: "", name: "", topic: "", subject: "", description: "" }); setFile(null); }}
              className="border border-[#401e17] px-6 py-[0.75rem] text-sm font-bold tracking-[0.15em] uppercase transition-colors hover:bg-[#401e17] hover:text-white"
            >
              Submit another request
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[680px]">
          <h1 className="m-0 mb-2 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
            Submit a request
          </h1>
          <p className="m-0 mb-8 text-sm text-[rgba(64,30,23,0.6)]">
            Fields marked with an asterisk (<span className="text-[#02c3c2]">*</span>) are required.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className={LABEL} htmlFor="contact-email">Your email address {REQUIRED}</label>
              <input
                id="contact-email"
                className={INPUT}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={form.email}
                onChange={set("email")}
              />
            </div>

            {/* Full Name */}
            <div>
              <label className={LABEL} htmlFor="contact-name">Please enter your full name {REQUIRED}</label>
              <input
                id="contact-name"
                className={INPUT}
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
                value={form.name}
                onChange={set("name")}
              />
            </div>

            {/* Topic */}
            <div>
              <label className={LABEL} htmlFor="contact-topic">I am contacting you regarding {REQUIRED}</label>
              <div className="relative">
                <select
                  id="contact-topic"
                  className={`${INPUT} appearance-none pr-10 cursor-pointer`}
                  required
                  value={form.topic}
                  onChange={set("topic")}
                >
                  <option value="" disabled>Select a topic</option>
                  {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#401e17]" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className={LABEL} htmlFor="contact-subject">Subject {REQUIRED}</label>
              <input
                id="contact-subject"
                className={INPUT}
                type="text"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={set("subject")}
              />
            </div>

            {/* Description */}
            <div>
              <label className={LABEL} htmlFor="contact-description">Description {REQUIRED}</label>
              <textarea
                id="contact-description"
                className={`${INPUT} min-h-[140px] resize-y`}
                placeholder="Please enter the details of your request. A member of our support staff will respond as soon as possible."
                rows={5}
                required
                value={form.description}
                onChange={set("description")}
              />
            </div>

            {/* Attachments */}
            <div>
              <label className={LABEL}>Attachments</label>
              <div
                className="flex cursor-pointer items-center gap-3 border border-[rgba(64,30,23,0.2)] bg-white px-4 py-[0.85rem] transition-[border-color] hover:border-[#02c3c2]"
                onClick={() => fileRef.current?.click()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.41 17.41a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="#401e17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-[rgba(64,30,23,0.6)]">
                  {file ? file.name : "No file chosen"}
                </span>
                <input
                  ref={fileRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>

            {/* Privacy notice */}
            <p className="m-0 text-xs leading-[1.65] text-[rgba(64,30,23,0.55)]">
              Hetafu is committed to protecting your privacy. Any personal information provided to us as part of this service request will be used solely to address and resolve your issue. Please avoid sending us any sensitive information, including images where you or others are identifiable. You have the right to access, correct, or request deletion of your data at any time. For more details, please refer to our{" "}
              <Link href="/policies/privacy-policy" className="text-[#02c3c2] underline underline-offset-[0.15em]">Privacy Policy</Link>.
            </p>

            <button
              type="submit"
              className="self-start border border-[#401e17] bg-[#401e17] px-8 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase text-white transition-[color,background] duration-200 hover:bg-transparent hover:text-[#401e17]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
