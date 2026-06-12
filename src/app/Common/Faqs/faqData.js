const WHATSAPP_URL = "https://wa.me/918106989955";
const WHATSAPP_ORDER_URL =
  "https://wa.me/918106989955?text=Hi%2C%20I%20have%20a%20product%20inquiry.";

export const FAQ_PAGE_TITLE = "Frequently Asked Questions";

export const FAQ_CONTACT = {
  email: {
    label: "Email Address",
    value: "reachthebest@hetafu.com",
    href: "mailto:reachthebest@hetafu.com",
  },
  phone: {
    label: "Number",
    value: "+91 8106989955",
    href: "tel:+918106989955",
  },
  office: {
    label: "Office",
    value:
      "Plot No. 14D/1, 3rd Floor, Dwaraka Signature Building, Jaihind Gandhi Road, Madhapur, Hyderabad, Telangana-500081.",
  },
};

export const FAQ_SECTIONS = [
  {
    category: "CONTACT",
    items: [
      {
        question: FAQ_CONTACT.email.label,
        answerHtml: `<p><a href="${FAQ_CONTACT.email.href}">${FAQ_CONTACT.email.value}</a></p>`,
      },
      {
        question: FAQ_CONTACT.phone.label,
        answerHtml: `<p><a href="${FAQ_CONTACT.phone.href}">${FAQ_CONTACT.phone.value}</a></p>`,
      },
      {
        question: FAQ_CONTACT.office.label,
        answerHtml: `<p>${FAQ_CONTACT.office.value}</p>`,
      },
    ],
  },
  {
    category: "DENTAL NUTRITION",
    items: [
      {
        question: "What does Dental Nutrition mean?",
        answerHtml:
          "<p>Dental Nutrition means oral care in an edible form. It is the science of using nutrients to support teeth, gums, and oral microbiome health. Our products are designed to nourish and protect the mouth, beyond just brushing and flossing.</p>",
      },
      {
        question: "Why do teeth need nutrition?",
        answerHtml:
          "<p>Teeth and gums are living tissues that need nutrients to stay strong, resist decay, and recover from everyday damage. Targeted nutrition helps maintain enamel strength, gum health, and overall oral balance.</p>",
      },
      {
        question: "How does Dental nutrition differ from brushing?",
        answerHtml:
          "<p>Brushing works for only 1-2 minutes, leaving the mouth unprotected for the rest of the day. Dental Nutrition helps maintain a stable, healthy oral environment for the remaining 23 hours and 58 minutes.</p>",
      },
      {
        question: "Why are Hetafu products better than other oral care products?",
        answerHtml:
          "<p>Hetafu is the world&rsquo;s first Dental Nutrition approach, offering edible oral care that nourishes teeth, gums, and the oral microbiome. Unlike regular oral care products that kill both good and bad bacteria, Hetafu selectively reduces harmful microbes within 1 minute while supporting beneficial ones, providing longer-lasting protection beyond brushing.</p>",
      },
      {
        question: "Does Dental Nutrition replace brushing and flossing?",
        answerHtml:
          "<p>No, it doesn&rsquo;t replace them. Dental Nutrition works alongside brushing and flossing to provide all-day protection, microbiome balance, and targeted oral support that regular cleaning cannot offer.</p>",
      },
      {
        question: "What happens when bad bacteria increase in the mouth?",
        answerHtml:
          "<p>When harmful bacteria multiply, they create acids and toxins that cause cavities, swollen gums, bad breath, and oral imbalance. Over time, this disrupts the microbiome and makes the mouth more prone to infections and discomfort.</p>",
      },
      {
        question:
          "Why aren't regular vitamins and minerals enough for Dental nutrition?",
        answerHtml:
          "<p>Vitamins and minerals support overall health, but don&rsquo;t act locally inside the mouth, and their benefits are reduced due to bioavailability after digestion. Dental Nutrition delivers direct, targeted support to the oral microbiome, gums, and teeth where it&rsquo;s needed most.</p>",
      },
    ],
  },
  {
    category: "HETAFU PRODUCTS",
    items: [
      {
        question: "What makes Hetafu Dental Nutrition formulations so unique?",
        answerHtml:
          "<p>All the products are made with a blend of probiotics and essential oils that work together through a bacteriostatic (preventing the growth of harmful bacteria) and bactericidal (killing bad bacteria) mechanism. This dual action makes Hetafu the first-of-its-kind edible oral care system in the world.</p>",
      },
      {
        question: "What are the main active ingredients used in Hetafu products?",
        answerHtml:
          "<p>All products contain a blend of probiotics, essential oils, prebiotics, natural sweeteners, and pH-balancing ingredients. Each format is designed to support oral microbiome balance and healing.</p>",
      },
      {
        question: "What does it mean that Hetafu products are IDA-Accepted?",
        answerHtml:
          "<p>It means Hetafu products have been evaluated and accepted by the Indian Dental Association (IDA) and meet the standards for safety, quality, and claimed benefits. It serves as a trusted quality benchmark, helping both dentists and consumers choose reliable oral-care products with confidence.</p>",
      },
    ],
  },
  {
    category: "SAFETY",
    items: [
      {
        question: "Are Hetafu products safe for all age groups?",
        answerHtml:
          "<p>Yes, Hetafu products are edible, sugar-free, clinically tested, and safe for everyone from children (above 3 years) to adults, pregnant women, ICU patients, cancer patients, elderly individuals, and medically compromised groups.</p>",
      },
      {
        question: "Are Hetafu products clinically proven?",
        answerHtml:
          "<p>Yes, Hetafu products have been evaluated through 18+ clinical studies and are developed using science-backed formulations.</p>",
      },
      {
        question: "Are Hetafu products safe for diabetics?",
        answerHtml:
          "<p>Yes, all products are 100% sugar-free and made with natural sweeteners suitable for diabetics.</p>",
      },
      {
        question: "Are Hetafu products safe during pregnancy and breastfeeding?",
        answerHtml:
          "<p>Yes, our products are safe. Still, we recommend consulting a healthcare professional before use in pregnancy or breastfeeding.</p>",
      },
      {
        question: "Are there any side effects from using Hetafu products?",
        answerHtml:
          "<p>There are no significant side effects, but some people may experience mild gas or bloating initially. This is a temporary adjustment phase, as beneficial probiotics rebalance existing oral&ndash;gut bacteria. Symptoms usually settle as the body adapts and are not harmful.</p>",
      },
      {
        question: "Are Hetafu products safe to use daily?",
        answerHtml:
          "<p>Yes, they are designed for everyday use, with safe, edible &amp; natural ingredients suitable for continuous long-term oral support.</p>",
      },
      {
        question:
          "Can I use Hetafu products even if I don't have any dental problems?",
        answerHtml:
          "<p>Yes, because they help maintain a healthy oral microbiome, fresh breath, and strengthen the enamel, making them ideal for daily preventive oral care.</p>",
      },
      {
        question: "Can I use Hetafu products along with my regular medications?",
        answerHtml:
          "<p>Yes, they are safe to use with regular medications, antibiotics and painkillers, as they act locally in the mouth. If you are on long courses of medication, check with your doctor for personalised advice.</p>",
      },
      {
        question: "Are Hetafu products safe for kids?",
        answerHtml:
          "<p>Yes. Hetafu products are edible, sugar-free, and made of natural ingredients, making them safe for children (above 3 years).</p>",
      },
    ],
  },
  {
    category: "ORDERING",
    items: [
      {
        question: "Do I need a dentist's prescription to use these products?",
        answerHtml: `<p>Hetafu products are available through dentists, so you will need to visit your dental professional to receive the appropriate recommendation and guidance for use. <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a></p>`,
      },
      {
        question: "How to order these products?",
        answerHtml: `<p>You can order Hetafu products directly by clicking the link below and messaging us on WhatsApp: <a href="${WHATSAPP_ORDER_URL}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a></p>`,
      },
    ],
  },
  {
    category: "USAGE & APPLICATION",
    items: [
      {
        question: "Can Hetafu products support oral care with frequent snacking?",
        answerHtml:
          "<p>Yes. Frequent snacking increases oral acidity and bad bacteria. Hetafu products help by balancing oral pH and reducing harmful microbes and bad breath.</p>",
      },
      {
        question: "Will Hetafu gummies stick to braces and wires?",
        answerHtml:
          "<p>Yes, Hetafu gummies are soft and appliance-safe. They gently attach around brackets and wires, where bacteria commonly build up, and allow active ingredients to act on these plaque-prone areas, without damaging braces, causing discomfort, or increasing the risk of breakage. So, even if they stick, it is beneficial.</p>",
      },
      {
        question: "Can different Hetafu products be used together?",
        answerHtml:
          "<p>Yes. Different Hetafu products can be used together as part of daily oral care, as they are designed to complement each other. Follow your dentist&rsquo;s guidance for best results.</p>",
      },
      {
        question: "Should I use them even after oral issues have resolved?",
        answerHtml:
          "<p>Yes. Our products can be used for daily preventive oral care to help maintain long-term oral hygiene and systemic health.</p>",
      },
      {
        question: "How do gummies help in faster healing?",
        answerHtml:
          "<p>Hetafu gummies are formulated with probiotics and essential oils that clinically help reduce harmful oral bacteria and inflammation. By lowering the microbial load at the site of injury and supporting a healthier oral environment, they promote faster tissue healing and recovery.</p>",
      },
      {
        question: "Are Hetafu products useful to manage dental pain?",
        answerHtml:
          "<p>Yes. The essential oils and probiotics in Hetafu products help reduce bacterial load and inflammation, supporting healing and easing discomfort associated with dental pain.</p>",
      },
      {
        question: "Why are there different gummies for men & women?",
        answerHtml:
          '<p>Men and women experience different hormonal and oral health challenges. Hetafu gummies are formulated to address these specific biological and lifestyle needs more effectively. <a href="https://kspublisher.com/articles/596/" target="_blank" rel="noopener noreferrer">Read more</a> · <a href="https://sarpublication.com/articles/2230/" target="_blank" rel="noopener noreferrer">Read more</a></p>',
      },
      {
        question: "I use clear aligners. Can I use Hetafu products?",
        answerHtml:
          "<p>Yes. Hetafu products are aligner-safe and help maintain oral hygiene, reduce bad breath, and control bacterial buildup during aligner use.</p>",
      },
      {
        question: "Can Navy personnel use Hetafu products for daily oral care?",
        answerHtml:
          "<p>Yes. In confined environments like the Navy, where water availability for personal hygiene can be as limited as about 500 ml per person per week, Hetafu products are especially useful. They are water-free, swallow-safe, and easy to use, making them suitable when routine brushing, rinsing, and spitting are not feasible.</p>",
      },
      {
        question: "Can poor oral hygiene affect overall health?",
        answerHtml:
          "<p>Yes. An imbalanced oral microbiome doesn&rsquo;t just cause plaque, cavities, gum disease, and bad breath&mdash;it allows harmful bacteria to enter the bloodstream. This can impact the entire body, increasing the risk of heart disease, lung infections, brain fog, IBS, kidney problems, cancers, diabetes, and pregnancy complications.</p>",
      },
      {
        question: "Can I use Hetafu products with caps on teeth?",
        answerHtml:
          "<p>Hetafu products are safe with caps and crowns. Even if they stick, they do not pull off the restorations and help keep the area clean, supporting oral hygiene without irritation or damage.</p>",
      },
      {
        question:
          "Is there a link between poor oral health and increased cancer risk?",
        answerHtml:
          "<p>Yes. Poor oral hygiene can increase inflammation, which research has linked to higher risks of some systemic conditions, including cancers. Hetafu products help by selectively reducing harmful bacteria, maintaining oral balance, and supporting a healthier oral environment as part of daily care.</p>",
      },
    ],
  },
  {
    category: "AVAILABILITY & SHIPPING",
    items: [
      {
        question: "Are these products made in INDIA?",
        answerHtml:
          "<p>Yes. We are proud to say that all the Hetafu products are Made in India.</p>",
      },
      {
        question: "Are these products available in INDIA?",
        answerHtml:
          "<p>Yes. Hetafu products are available across India.</p>",
      },
      {
        question: "Where is the company based from?",
        answerHtml:
          "<p>Hetafu is headquartered in Hyderabad, India.</p>",
      },
      {
        question: "Is shipping within Hyderabad available?",
        answerHtml: `<p>Yes. We offer shipping within Hyderabad. You can place an order and get the products delivered directly to your location in the city by contacting us on WhatsApp: <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a></p>`,
      },
      {
        question: "Is international shipping available?",
        answerHtml:
          "<p>No. International shipping is not available at the moment. We are currently serving orders within India only and will share updates when international shipping becomes available.</p>",
      },
    ],
  },
];
