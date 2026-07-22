const CDN = "https://moroccanoilprofessionals.com/cdn/shop/files";

export const SUMMITS_COLLECTION = {
  title: "Summits",
  href: "/collections/summits",
  description:
    "Our live digital summits provide attendees with over 6 hours of Moroccanoil Professional Education, covering color, styling, and cutting trends—including editorial looks you can easily adapt behind the chair. Tickets are $25 and all registrants receive a post-summit recording. Summits are filled with games and giveaways, plus plenty of interaction with our moderators, facilitators, and your fellow stylists!",
};

export const SUMMITS = [
  {
    slug: "june-summit",
    title: "June Summit - All About Blondes",
    price: "$25.00",
    description:
      "It's the season of blondes—blonde hair and blonde care. Join us on June 22 as our global artists and ambassadors showcase fresh techniques using our Blonde Voyage Portfolio, while also sharing tips and tricks for maintaining your summer blondes.",
    image: `${CDN}/June_Summit_1x1_7e873137-8c21-44a9-b0be-790213df01b1.png?v=1775062533&width=360`,
    heroImage: `${CDN}/tPF1mm7S.png?v=1774982633&width=1600`,
    gallery: [
      `${CDN}/June_Summit_1x1_7e873137-8c21-44a9-b0be-790213df01b1.png?v=1775062533&width=1080`,
    ],
    features: [
      { text: "Duration: 1 day" },
      { text: "Format: Virtual" },
      { text: "Class Time: 11:00 am" },
    ],
    variants: [{ id: "virtual-june-22", label: "Virtual / June 22" }],
    href: "/products/june-summit",
  },
  {
    slug: "summits-shades-of-intensity-copy",
    title: "September Summit",
    price: "$25.00",
    description: "Details coming soon!",
    image: `${CDN}/Artboard2_4.png?v=1771860507&width=360`,
    gallery: [`${CDN}/Artboard2_4.png?v=1771860507&width=1080`],
    features: [
      { text: "Duration: 1 day" },
      { text: "Format: Virtual" },
    ],
    variants: [{ id: "virtual-september", label: "Virtual" }],
    href: "/products/summits-shades-of-intensity-copy",
  },
];

export function getSummitBySlug(slug) {
  return SUMMITS.find((summit) => summit.slug === slug);
}

export function getSummitHref(slug) {
  return `/products/${slug}`;
}
