import Image from "next/image";

const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

const IMAGES = {
  hero: `${CDN}/Haircolor-Homepage-Banner.png?v=1771524815&width=2000`,
  overlay1: `${CDN}/Artboard_1_4.png?v=1771860449&width=2000`,
  overlay2: `${CDN}/Artboard_2_5.png?v=1771862636&width=2000`,
  overlay3: `${CDN}/Artboard_3_5.png?v=1771862636&width=2000`,
  overlay4: `${CDN}/Color_Infusion_Banner.png?v=1774446858&width=2000`,
  appPhone: `${CDN}/Updated-App-Phone.png?v=1771448454&width=780`,
  appStore: `${CDN}/Download_on_the_App_Store_Badge_US-UK_blk_092917_f35fc401-e659-497d-8a28-743b547d549d0.png?v=1771450952&width=1200`,
  googlePlay: `${CDN}/GetItOnGooglePlay_Badge_Web_color_English.png?v=1771450230&width=1200`,
};

const OVERLAY_SECTIONS = [
  {
    title: "Current Critical Gaps in Oral Care",
    paragraphs: [
      "Conventional oral care products (toothpaste, mouthwash) work on the principle of complete sterilization, which means both good & bad bacteria in the mouth are killed in just 2 minutes. However, every meal, drink, and continuous snacking reintroduces harmful microbes throughout the day & leaving the mouth unprotected for the next 23 hours and 58 minutes.",
      "It's similar to cleaning a floor with a disinfectant; The surface is completely sterilised and may look clean initially, but once someone walks over it with dirty shoes, the floor gets dirty again. Same is the situation with our current oral care practices. Oral sterilization (99% germ kill rate) does not mean long-term oral protection.",
    ],
    image: IMAGES.overlay1,
  },
  {
    title: "Dangers of an Unprotected Mouth",
    paragraphs: [
      "When the oral microbiome is imbalanced, it first leads to various oral problems such as plaque buildup, cavities, gum inflammation, bleeding gums, bad breath, and recurrent mouth infections. But the impact does not stop in the mouth.",
      "The mouth is the entry point to your entire body. Due to the limitations of current oral care products, our oral cavities are not protected throughout the day, allowing harmful bacteria to enter the bloodstream and affect other parts of the body.",
    ],
    image: IMAGES.overlay2,
  },
  {
    title: "Systemic Health Impact",
    paragraphs: [
      "🫀 70% of Heart attacks — Harmful oral bacteria and gum inflammation can enter the bloodstream, damage blood vessels, promote arterial plaque buildup, and increase the risk of clot formation.",
      "🫁 Lung infections — Oral bacteria can be aspirated or spread systemically, increasing the risk and severity of respiratory infections, including pneumonia and chronic bronchitis.",
      "🧠 Brain fog — Oral microbial imbalance impairs cognitive function (focus, memory, and mental ability). 🦠 IBS & bloating — Harmful oral bacteria can travel to the gut, alter gut microbial balance, and promote intestinal inflammation linked with IBS and related digestive disorders.",
      "🫘 Kidney infections — Harmful oral bacteria can travel through the blood and overload the kidneys. 🧬 Cancers — Long-term oral microbial imbalance can damage DNA (Breast, lung, stomach). 🩸 Diabetes — Increases insulin resistance. 🤰 Pregnancy complications — Harmful oral bacteria increase the risk of early birth and low birth weight.",
    ],
    image: IMAGES.overlay3,
  },
  {
    title: "The Unique Hetafu Innovation",
    paragraphs: [
      "Hetafu edible, sugar-free, alkaline pH probiotic Dental Nutrition formulations provide day-long protection, unlike the existing oral care products that sterilize in just 2 mins and leave the mouth unprotected for the rest of the day.",
      "Hetafu uses active molecules of essential oils and signature probiotic strains to targetly remove harmful germs & promote the growth of beneficial bacteria that act as a live security guard in the mouth — providing the longest protection for the heart, lungs, gut, brain, and all other vital organs.",
    ],
    image: IMAGES.overlay4,
  },
];

function ImageTextOverlay({ title, paragraphs, image, align = "left" }) {
  const isRight = align === "right";

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label={title}
    >
      <div className="relative w-full">
        <Image
          src={image}
          alt=""
          width={2000}
          height={1200}
          className="block h-auto min-h-[280px] w-full object-cover min-[700px]:min-h-[420px]"
        />
        <div
          className={`absolute inset-0 flex items-center bg-black/30 px-5 py-10 md:px-12 md:py-14 lg:px-20 ${
            isRight ? "justify-end" : "justify-start"
          } max-md:justify-center`}
        >
          <div
            className={`max-w-[680px] text-white max-md:text-center ${
              isRight ? "text-right" : "text-left"
            }`}
          >
            <p className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.25rem,3vw,1.75rem)] font-normal tracking-[0.1em] uppercase">
              {title}
            </p>
            <div className="[&_p]:m-0 [&_p]:mb-4 [&_p]:text-base [&_p]:leading-[1.65] [&_p:last-child]:mb-0">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DentalNutition() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      {/* image-with-text-overlay — hero banner (no text overlay) */}
      <section className="w-full overflow-hidden" aria-label="Dental Nutrition hero">
        <Image
          src={IMAGES.hero}
          alt="Dental Nutrition"
          width={2000}
          height={1200}
          priority
          className="block h-auto min-h-[280px] w-full object-cover min-[700px]:min-h-[420px]"
        />
      </section>

      {/* rich-text — bordered intro section */}
      <section className="border-b border-[rgba(64,30,23,0.15)] px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="m-0 mb-5 [font-family:var(--heading-font)] text-[clamp(1.75rem,4vw,2rem)] font-normal tracking-[0.1em] uppercase">
            Dental Nutrition
          </p>
          <div className="[&_p]:m-0 [&_p]:mb-4 [&_p]:text-lg [&_p]:leading-[1.65] [&_p:last-child]:mb-0">
            <p>
              In simple words, Dental nutrition is oral care in edible form.
            </p>
            <p>
              Medicines can give temporary relief from internal disease
              conditions, but when the mouth (the body&apos;s main entry point) is
              left unprotected, harmful bacteria continue to enter the bloodstream
              every day, causing these problems to recur.
            </p>
            <p>
              Just as a country needs soldiers at its borders, the mouth needs
              gatekeepers that stop repeated bacterial attacks at the source,
              reduce disease recurrence, protect vital organs, and support
              long-term overall health. This is exactly where Hetafu steps in.
            </p>
          </div>
        </div>
      </section>

      {/* image-with-text-overlay — 4 stacked sections with spacing */}
      <div className="flex flex-col gap-6 py-10 md:gap-10 md:py-14">
        {OVERLAY_SECTIONS.map((section, index) => (
          <ImageTextOverlay
            key={section.title}
            title={section.title}
            paragraphs={section.paragraphs}
            image={section.image}
            align={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>

      {/* image-with-text — app promo section */}
      <section className="border-t border-[rgba(64,30,23,0.15)] px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={IMAGES.appPhone}
              alt="Dental Nutrition app"
              width={780}
              height={900}
              className="h-auto w-full max-w-[430px] object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className="m-0 mb-4 [font-family:var(--heading-font)] text-[clamp(1.25rem,3vw,1.875rem)] font-normal tracking-[0.05em]">
              <strong>
                Ask our Dental Nutrition Experts about all things dental
                nutrition!
              </strong>
            </h3>
            <p className="m-0 mb-6 text-lg leading-[1.65]">
              Access inspirational and educational videos, plus self-guided
              learning on nutrition, dental health, product application, and
              more. Available for iOS and Android mobile and tablet devices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 [&_img]:h-11 [&_img]:w-auto">
              <a href="https://apps.apple.com/us/app/dental-nutrition/id123456789">
                <Image
                  src={IMAGES.appStore}
                  alt="Download on the App Store"
                  width={160}
                  height={44}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.dentalnutrition">
                <Image
                  src={IMAGES.googlePlay}
                  alt="Get it on Google Play"
                  width={160}
                  height={44}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
