const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const ALL_CLASSES_COLLECTION = {
  title: "All Classes",
  href: "/pages/all-classes",
  description:
    "Moroccanoil Academy offers signature programs and business education for stylists at every step of their career. Learn more about our classes.",
};

function img(filename, width = 600) {
  return `${CDN}/${filename}&width=${width}`;
}

function cardImg(filename) {
  return img(filename, 360);
}

export const ALL_CLASSES = [
  {
    slug: "academy-collection",
    title: "Academy Collection",
    image: cardImg("ClassCategoryButton_Cutting_Action.png?v=1771431872"),
    description:
      "Discover the essence of Moroccanoil cutting methodology in this immersive, hands-on program. More than just six haircuts, this course focuses on mastering the fundamental concepts of line, layer, and graduation—the foundation for any cut.",
    sessions: [{ label: "New York City / August 17-19", price: "800.00" }],
    quickBuySoldOut: true,
  },
  {
    slug: "all-dressed-up-academy-on-the-road",
    title: "All Dressed Up",
    image: cardImg("MOROCCANOIL-AVONY-BEAUTY14815-1_Maki_Approved-805x1024.jpg?v=1771430347"),
    description:
      "Learn the key fundamentals of up-styling and bridal hair, including how to quickly adapt shapes for any scenario using essential techniques.",
    sessions: [{ label: "London / October 4-5 2026", price: "1330.00" }],
    quickBuySoldOut: true,
  },
  {
    slug: "blonde-voyage-balayage-ft-justin-toves-vincilione-academy-on-the-road",
    title: "Blonde Voyage Balayage ft. Justin Toves-Vincilione",
    image: cardImg("BlondeVoyageBalayage_AcademyontheRoad.png?v=1771426363"),
    description:
      "Master seamless freehand balayage with a trending haircut by @ahappyjustin in this Academy on the Road experience.",
    sessions: [{ label: "Los Angeles / June 7-8 2026", price: "650.00" }],
    quickBuySoldOut: true,
  },
  {
    slug: "blonde-voyage-blonding-3",
    title: "Blonde Voyage Blonding",
    image: cardImg("Blonde_Voyage_Blonding_Academy_on_the_Road.png?v=1771362085"),
    description:
      "Master the art of blonding in this hands-on program designed to elevate your technical skills and product expertise.",
    locationLine: "London | June 28-29, 2026 | 1 available seats",
    sessions: [
      { label: "London / June 28-29 2026", price: "1330.00" },
      {
        label: "New York City / August 24-26 2026",
        price: "950.00",
        soldOut: true,
      },
      { label: "Mexico City / March 2-4 2026", price: "1330.00", soldOut: true },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "bridal-bootcamp",
    title: "Bridal Bootcamp with Jocelyn Emerson",
    image: cardImg("ROSE3_94373-1024x683.jpg?v=1771433200"),
    description:
      "Join Moroccanoil Guest Artist @updos.by.jocelyn for this intensive hands-on workshop that gets you prepared for bridal season.",
    locationLine: "New York City | November 9, 2026 | 17 available seats",
    sessions: [
      { label: "New York City / November 9 2026", price: "450.00" },
      { label: "New York City / November 10 2026", price: "450.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "business-certification-1-0",
    title: "Business Certification 1.0",
    image: cardImg("BusinessCertification1.0_2.png?v=1771420527"),
    description:
      "An interactive program for salon owners, managers, and stylists focused on retailing, marketing, merchandising, and leadership skills.",
    locationLine: "New York City | August 3-5, 2026 | 4 available seats",
    sessions: [{ label: "New York City / August 3-5 2026", price: "1000.00" }],
    quickBuySoldOut: true,
  },
  {
    slug: "color-correction-simplified",
    title: "Color Correction Simplified",
    image: cardImg(
      "Color_Correction_Simplified_7707f3ed-65a2-4e5e-b986-43329fc4bd5a.png?v=1771432438",
    ),
    description:
      "Build confidence and mastery in the art of color correction in this immersive two-day program.",
    sessions: [
      { label: "New York City / August 31-September 1 2026", price: "600.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "cutting-mastery",
    title: "Cutting Mastery",
    image: cardImg("ISA_1_96665-1-1024x683.jpg?v=1777992217"),
    description:
      "Take your cutting skills to the next level with this advanced, hands-on program designed to expand upon the Moroccanoil cutting methodology.",
    sessions: [
      { label: "Toronto / July 20-21 2026", price: "600.00" },
      { label: "New York City / October 12-13 2026", price: "600.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "dimensional-blonding",
    title: "Dimensional Blonding with Jessica Scott Santo",
    image: cardImg(
      "MARIELOUSHOT2_93325-1024x683_4d267aeb-85a1-40a8-8238-74a2fca208b8.jpg?v=1771433069",
    ),
    description:
      "@jessicascotthair shares expert techniques for creating dimensional color and building a powerful social media presence.",
    locationLine: "New York City | November 2, 2026 | 14 available seats",
    sessions: [
      { label: "New York City / November 2 2026", price: "500.00" },
      { label: "New York City / November 3 2026", price: "500.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "luxury-bridal-styling-with-kasia-fortuna",
    title: "Luxury Bridal Styling with Kasia Fortuna",
    image: cardImg(
      "MARIELOU9_93943-1024x683_8b94d7c5-1981-4503-9225-4a14b1135d68.jpg?v=1765902113",
    ),
    description:
      "Refine your artistry and elevate your styling portfolio with timeless bridal techniques from Kasia Fortuna.",
    locationLine: "New York City | September 2, 2026 | 8 available seats",
    sessions: [
      { label: "New York City / September 2 2026", price: "450.00" },
      { label: "New York City / September 3 2026", price: "450.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "moroccanoil-trend-collection",
    title: "Moroccanoil Trend Collection",
    image: cardImg("Class_Button_TrendCollection.png?v=1771362087"),
    description:
      "Push the boundaries of your artistry in this exclusive three-day program that brings the Moroccanoil Trend Collection to life.",
    locationLine: "New York City | November 16-18, 2026 | 26 available seats",
    sessions: [
      { label: "New York City / August 10-12 2026", price: "1000.00" },
      { label: "New York City / September 8-10 2026 (En Español)", price: "1000.00" },
      { label: "New York City / November 16-18", price: "1000.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "rich-brunettes-and-hairtography",
    title: "Rich Brunettes and Hairtography with Maguy Compton",
    image: cardImg("ClassCategoryButton_Color_Action.png?v=1771433313"),
    description:
      "Maguy Compton shares tips and tricks for creating the perfect dimensional rich brunette look and hair photography.",
    locationLine: "New York City | November 30, 2026 | 17 available seats",
    sessions: [
      { label: "New York City / November 30 2026", price: "500.00" },
      { label: "New York City / December 1 2026", price: "500.00" },
    ],
    quickBuySoldOut: true,
  },
  {
    slug: "the-transformation-edit-cut-color-style-content",
    title: "The Transformation Edit: Cut. Color. Style. Content.",
    image: cardImg("IMG_6539.jpg?v=1780683907"),
    description:
      "An intimate, hands-on workshop with Global Ambassador Justin Toves-Vincillione exploring transformative artistry and digital content.",
    locationLine: "New York City | September 16, 2026 | 30 available seats",
    sessions: [{ label: "New York / September 16 2026", price: "600.00" }],
    quickBuySoldOut: true,
  },
];

const BLONDE_VOYAGE_BLONDING_DETAIL = {
  heroImage: `${CDN}/Blonde_Voyage_Blonding_Class_Banner.png?v=1774874828&width=2000`,
  gallery: [
    `${CDN}/Blonde_Voyage_Blonding_Academy_on_the_Road.png?v=1771362085&width=1024`,
  ],
  tagline: "Class is Academy Certification eligible",
  taglineHref: "/pages/academy-certification",
  description:
    "Master the art of blonding in this hands-on program designed to elevate your technical skills and product expertise. Explore modern lightening techniques across a variety of hair textures and canvases while working with the full Moroccanoil Blonde Voyage Lightener portfolio. (English/Spanish)",
  features: [
    { text: "Duration: 2 days" },
    { text: "Format: Hands-on" },
    { text: "Class Time: 9:00 am - 5:00 pm" },
  ],
  courseFocus: [
    "Strategic foiling and foilayage for maximum dimension",
    "Balayage and freehand techniques for seamless blends",
    "Curly canvas blonding: approach, placement, and care",
    "Hands-on use of Blonde Voyage Powder, Clay, and Cream Lighteners",
    "Toning mastery: selecting the right gloss or toner for each canvas",
    "Moroccanoil\u2019s signature 10-minute ArganID\u2122 Glossing service",
    "Custom placement and sectioning strategies for efficiency and impact",
    "Elevating the client experience through premium blonding services",
  ],
  location: [
    "LONDON",
    "Sta Studios, 14-17 Old Broad Street, London EC2N 1DW",
    "",
    "NEW YORK",
    "NYC ACADEMY: 1185 6th Avenue New York, NY 10036, Floor 32",
  ],
  sessions: [
    { id: "london", label: "London / June 28-29 2026", price: "1330.00" },
    {
      id: "nyc",
      label: "New York City / August 24-26 2026",
      price: "950.00",
      soldOut: true,
    },
  ],
  facilitators: [
    {
      name: "Cassie Siskovic",
      role: "Academy Director",
      image: `${CDN}/Cassie-Siskovic.jpg?v=1762268853&width=600`,
      quote:
        "Beauty is so much more than how you look. It's feeling like your highest self in whatever way you choose to express it.",
      bio: "A specialist in customized color and intuitive hair design, Cassie Siskovic feels that hairstyling is more than a craft—it's a lifelong calling. \"The responsibility of guiding others into finding their best fit is an honor and my deepest passion,\" she says. Thanks to this passion, her work has been featured by the Allure Store, Elle, Huffington Post, Purewow, The Tease, BehindtheChair, Modern Salon, ManeAddicts, and others.",
      instagram: {
        handle: "@cassiskovic",
        url: "https://www.instagram.com/cassiskovic/",
      },
    },
    {
      name: "Barri Gibson",
      role: "Global Trend Team",
      image: `${CDN}/Barri-Gibson.jpg?v=1761921791&width=600`,
      quote: "I love it when my clients light up at the end result.",
      bio: "A specialist in coloring curly and coily hair, Barri Gibson is on a dual mission to help women of color celebrate their hair, and to educate fellow hairstylists to expand and refine their skills.",
      instagram: {
        handle: "@barrigibsonhair",
        url: "https://www.instagram.com/barrigibsonhair",
      },
    },
    {
      name: "Gareth Williams",
      role: "Global Trend Team",
      image: `${CDN}/Gareth-Williams.png?v=1762270157&width=600`,
      quote:
        "The Moroccanoil approach to creating beautiful, expensive-looking hair is synonymous with my own beliefs.",
      bio: "Gareth Williams specializes in the creation of beautiful, bespoke haircolor. He joins Moroccanoil after leading color direction at one of the largest salon groups in the UK, where he worked with top beauty press, celebrities, and influencers. His career has taken him all over the world, with stops in India, Greece, Norway, Ireland, and Sweden, working with iconic brands on TV and the runway.",
      instagram: {
        handle: "@garethwilliamshair",
        url: "https://www.instagram.com/garethwilliamshair/?hl=en",
      },
    },
  ],
  related: [
    {
      slug: "blonde-voyage-balayage-ft-justin-toves-vincilione-academy-on-the-road",
      title: "Blonde Voyage Balayage ft. Justin Toves-Vincilione",
      image: cardImg("BlondeVoyageBalayage_AcademyontheRoad.png?v=1771426363"),
    },
    {
      slug: "cutting-mastery",
      title: "Cutting Mastery",
      image: cardImg("ISA_1_96665-1-1024x683.jpg?v=1777992217"),
    },
    {
      slug: "dimensional-blonding",
      title: "Dimensional Blonding with Jessica Scott Santo",
      image: cardImg(
        "MARIELOUSHOT2_93325-1024x683_4d267aeb-85a1-40a8-8238-74a2fca208b8.jpg?v=1771433069",
      ),
    },
    {
      slug: "color-correction-simplified",
      title: "Color Correction Simplified",
      image: cardImg(
        "Color_Correction_Simplified_7707f3ed-65a2-4e5e-b986-43329fc4bd5a.png?v=1771432438",
      ),
    },
  ],
};

const CLASS_DETAILS = {
  "blonde-voyage-blonding-3": BLONDE_VOYAGE_BLONDING_DETAIL,
};

function buildRelatedClasses(slug) {
  return ALL_CLASSES.filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      image: item.image,
    }));
}

export function getClassBySlug(slug) {
  const base = ALL_CLASSES.find((item) => item.slug === slug);
  if (!base) return null;

  const detail = CLASS_DETAILS[slug];
  if (detail) {
    return { ...base, ...detail };
  }

  const galleryImage = base.image
    .replace("&width=360", "&width=1200")
    .replace("&width=600", "&width=1200");

  return {
    ...base,
    heroImage: galleryImage,
    gallery: [galleryImage],
    tagline: "",
    features: [{ text: "Class Time: 9:00 am - 5:00 pm" }],
    courseFocus: [],
    location: [],
    facilitators: [],
    related: buildRelatedClasses(slug),
  };
}

export function formatClassPrice(price) {
  const value = Number(price);
  if (Number.isNaN(value) || value >= 100000) return null;
  return `$${value.toFixed(0)}`;
}

export function formatClassPriceDetailed(price) {
  const value = Number(price);
  if (Number.isNaN(value) || value >= 100000) return null;
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function getClassCardPrice(classItem) {
  const prices = classItem.sessions
    .map((session) => Number(session.price))
    .filter((value) => !Number.isNaN(value));

  if (!prices.length) return null;

  const minPrice = Math.min(...prices);
  const formatted = formatClassPriceDetailed(String(minPrice));
  if (!formatted) return null;

  const hasVariablePricing = new Set(prices).size > 1;
  return hasVariablePricing ? `From ${formatted}` : formatted;
}
