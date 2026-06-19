const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.77877735095103!2d78.38758763300747!3d17.4486918344204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913d87c4584d%3A0xfe7840c650ff1bab!2sHetafu%20%7C%20World%E2%80%99s%20First%20Dental%20Nutrition%20Brand!5e0!3m2!1sen!2sin!4v1780902905301!5m2!1sen!2sin";

export default function Distribution() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section className="mx-auto max-w-[1200px] border-b border-[rgba(64,30,23,0.15)] px-5 py-10 text-center md:px-8 md:py-14">
        <h1 className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize">
          Distribution
        </h1>
        <p className="mx-auto max-w-[820px] text-lg leading-[1.65] [&_a]:text-[#02c3c2] [&_a]:underline [&_a]:underline-offset-[0.15em]">
          {`Find Hetafu through dental professionals nationwide. For product inquiries and distribution support, contact us at `}
          <a href="mailto:reachthebest@hetafu.com">reachthebest@hetafu.com</a>
          {` or `}
          <a href="tel:+918106989955">+91 8106989955</a>.
        </p>
      </section>

      <section
        className="mx-auto max-w-none border-b border-[rgba(64,30,23,0.15)] px-5 py-8 md:px-8"
        aria-label="Hetafu office location map"
      >
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[900px] min-h-[450px] overflow-hidden border border-[rgba(64,30,23,0.15)] bg-white">
          <iframe
            src={MAP_EMBED_URL}
            title="Hetafu | World's First Dental Nutrition Brand"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
