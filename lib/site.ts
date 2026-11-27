// All gym details live here. Edit this file to update the site.
// Details from the Google listing for Pro Fitness, Versova.

export const site = {
  name: "Pro Fitness",
  tagline: "Train hard. Train smart. Train here.",
  area: "Versova, Mumbai",
  address: "65, Opp. Police Officers Society, Aram Nagar Part 2, Jeet Nagar, Versova, Andheri West, Mumbai 400061",
  hours: [
    { days: "Monday to Saturday", time: "6:00 AM to midnight" },
    { days: "Sunday", time: "9:00 AM to 3:00 PM" },
  ],
  phone: "+91 99877 27997", // from the Google listing; every "Call to book" button dials this
  // TODO: confirm WhatsApp number (digits only, with country code) and add the Instagram link
  whatsapp: "919987727997",
  instagram: "https://instagram.com/",
  // Google Maps listing for the gym (used for the "Get directions" button and the embedded map)
  mapsUrl:
    "https://www.google.com/maps?udm&fvr=1&pvq=Cg0vZy8xMXhwMjJfczlwIhEKC3BybyBmaXRuZXNzEAIYA4kBHJMkxzOkkLI&lqi=Cgtwcm8gZml0bmVzc0i1wr-h1LyAgAhaFRAAEAEYABgBIgtwcm8gZml0bmVzc5IBA2d5bQ&vet=10CAAQoqAOahcKEwiY2eTM06eYAxUAAAAAHQAAAAAQCg..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be7b70046ec77b1:0xb290a433c724931c",
  mapEmbed: "https://maps.google.com/maps?cid=12866964677688857372&output=embed",
  coords: { lat: 19.135287, lng: 72.813245 },
  amenities: ["Fully air-conditioned", "Free Wi-Fi", "Chilled water", "Free weights & machines"],
};

// Photos from the Google listing, chosen so that no people appear in them (selfies and mirror reflections excluded).
/** tel: link for the booking buttons, built from site.phone */
export const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

export const logoSrc = "/logo.png";

export const images = {
  about: "/images/about.jpg",
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Flat bench press under the Never Give Up mural" },
    { src: "/images/gallery-2.jpg", alt: "Leg press under the Stop Thinking, Start Doing wall" },
  ],
};

export const programs = [
  {
    n: "01",
    title: "Strength",
    copy: "Barbells, dumbbells and plate-loaded machines for progressive overload, from your first squat to a new PR.",
  },
  {
    n: "02",
    title: "Fat Loss",
    copy: "Structured cardio and conditioning blocks that burn fat without burning you out.",
  },
  {
    n: "03",
    title: "Personal Training",
    copy: "One-on-one coaching with form checks, a plan built around your goal, and someone to keep you accountable.",
  },
  {
    n: "04",
    title: "Muscle Building",
    copy: "Hypertrophy-focused splits, smart volume and recovery, plus the right equipment for every muscle group.",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];
