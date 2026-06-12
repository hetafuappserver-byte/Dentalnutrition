"use client";

import { useState } from "react";

const CONTACT_EMAIL = "reachthebest@hetafu.com";

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
    <main id="main" className="mo-contact">
      <section className="mo-contact-section">
        <div className="mo-contact-inner">
          <h1 className="mo-contact-title">Contact</h1>

          {submitted ? (
            <p className="mo-contact-success" role="status">
              Thank you for reaching out. Your email client should open so you
              can send your message. You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          ) : (
            <form
              id="contact_form"
              className="mo-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="mo-contact-form__row">
                <div className="mo-contact-form__field">
                  <label className="mo-sr-only" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className="mo-contact-form__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mo-contact-form__field">
                  <label className="mo-sr-only" htmlFor="contact-email">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    className="mo-contact-form__input"
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

              <div className="mo-contact-form__field">
                <label className="mo-sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="mo-contact-form__textarea"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <button type="submit" className="mo-button mo-button--solid">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
