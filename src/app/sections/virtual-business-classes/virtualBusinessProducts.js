const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const VIRTUAL_BUSINESS_COLLECTION = {
  title: "Virtual Business Classes",
  href: "/collections/virtual-business-classes",
  description:
    "Virtual business education classes from Moroccanoil Professionals.",
};

export const VIRTUAL_BUSINESS_CLASSES = [
  {
    slug: "leveraging-loyalty-quick-start",
    title: "Leveraging Loyalty Quick Start",
    price: "Free",
    priceIsFree: true,
    description:
      "New to loyalty or need a refresher? This Loyalty Quick Start class breaks down the ins and outs of our loyalty program—from status and reward percentages to redemptions and Click & Go tools. You'll leave knowing exactly how to navigate the portal and make loyalty work for you.",
    descriptionNote: "Livestream at 12 PM EST – Dates vary, time stays the same!",
    image: `${CDN}/MOSalonSpotlight_Elevated_colour_begins_with_care_for_the_hair._At_our_salon_Lisa_Dinh_Hair.jpg?v=1776974066&width=360`,
    heroImage: `${CDN}/BannerLivestream.png?v=1771364059&width=2000`,
    gallery: [
      `${CDN}/MOSalonSpotlight_Elevated_colour_begins_with_care_for_the_hair._At_our_salon_Lisa_Dinh_Hair.jpg?v=1776974066&width=1080`,
    ],
    features: [
      { text: "Duration: 1 hour" },
      { text: "Format: Virtual" },
      { text: "Class Time: 12 pm" },
    ],
    variants: [
      { id: "virtual-july-13-2026", label: "Virtual / July 13 2026" },
      { id: "virtual-august-17-2026", label: "Virtual / August 17 2026" },
      { id: "virtual-september-14-2026", label: "Virtual / September 14 2026" },
      { id: "virtual-october-26-2026", label: "Virtual / October 26 2026" },
    ],
    href: "/products/leveraging-loyalty-quick-start",
    cta: "View More Dates",
  },
  {
    slug: "rethinking-retail",
    title: "Rethinking Retail",
    price: "$50.00",
    description:
      "In this interactive session, we will review today's consumer trends and how they impact how and why make certain purchases. We will explore retail execution strategies that focus more on long term and consistent growth versus one-off incentives and reactive tactics that deliver mediocre results... focusing on shifting our approach to building an all culture that works long term and becomes part of your business model.",
    image: `${CDN}/MoroccanoilloveontheCaliforniacoast._Thisheavenlysetupislocatedat_centralcoastha.jpg?v=1780345981&width=360`,
    gallery: [
      `${CDN}/MoroccanoilloveontheCaliforniacoast._Thisheavenlysetupislocatedat_centralcoastha.jpg?v=1780345981&width=1080`,
    ],
    features: [
      { text: "Format: Virtual" },
    ],
    variants: [{ id: "virtual", label: "Virtual" }],
    href: "/products/rethinking-retail",
    cta: "View More Dates",
  },
];

export function getVirtualBusinessBySlug(slug) {
  return VIRTUAL_BUSINESS_CLASSES.find((item) => item.slug === slug);
}

export function getVirtualBusinessHref(slug) {
  return `/products/${slug}`;
}

export function getVirtualBusinessCardDescription(item) {
  if (!item.descriptionNote) {
    return item.description;
  }

  return `${item.description}\n${item.descriptionNote}`;
}
