export const site = {
  name: "Hanu Tâmplaru'",
  shortName: "Hanu Tâmplaru'",
  tagline: 'Tâmplărie și mobilă la comandă',
  description:
    "Hanu Tâmplaru' face mobilă la comandă în tot județul Bacău: bucătării, dressinguri, mobilier de living, paturi, mese și scaune din lemn masiv, uși de interior și de exterior. Măsurători, proiect și montaj incluse.",
  /** Varianta scurtă, pentru <meta name="description"> (max ~155 caractere). */
  metaDescription:
    'Mobilă la comandă în județul Bacău: bucătării, dressinguri, living, paturi, uși și mese din lemn masiv. Măsurători gratuite, montaj inclus.',
  /** ▼ DATE DE CONTACT — se schimbă doar aici, se propagă în tot site-ul. */
  phone: '0721 067 743',
  phoneHref: 'tel:+40721067743',
  phoneIntl: '+40721067743',
  whatsapp: 'https://wa.me/40721067743',
  /** TODO: înlocuiți cu adresa de email reală. */
  email: 'contact@hanutamplaru.ro',
  address: {
    street: 'Pârjol',
    city: 'Pârjol',
    county: 'Bacău',
    zip: '607430',
    country: 'România',
  },
  geo: { lat: 46.4622, lng: 26.6139 },
  /** TODO: adăugați linkurile reale de Facebook / Instagram. */
  social: [] as { label: string; href: string }[],
  hours: [
    { days: 'Luni – Vineri', time: '08:00 – 18:00' },
    { days: 'Sâmbătă', time: '09:00 – 14:00' },
    { days: 'Duminică', time: 'Închis' },
  ],
  /** Format schema.org pentru openingHoursSpecification. */
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  foundingYear: 2009,
  /** Endpoint pentru formularul de ofertă. TODO: creați un formular gratuit pe
   *  https://web3forms.com (sau Formspree) și puneți cheia aici. Gol = formularul
   *  afișează varianta „scrieți-ne pe WhatsApp / la telefon". */
  formEndpoint: '',
};

export const fullAddress = `${site.address.street}, jud. ${site.address.county}, ${site.address.zip}`;

export const mapsQuery = `Pârjol, Bacău, România`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=11&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

export const nav = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/materiale-si-finisaje', label: 'Materiale' },
  { href: '/proces', label: 'Cum lucrăm' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/contact', label: 'Contact' },
];

/** Linkuri suplimentare, în footer și în meniul mobil. */
export const navSecondary = [
  { href: '/mobila-la-comanda', label: 'Mobilă la comandă' },
  { href: '/amenajari-complete', label: 'Amenajări complete' },
  { href: '/montaj-livrare-garantie', label: 'Montaj & garanție' },
  { href: '/ghiduri', label: 'Ghiduri' },
  { href: '/intrebari-frecvente', label: 'Întrebări frecvente' },
  { href: '/zone-deservite', label: 'Zone deservite' },
];

export const usps = [
  {
    title: 'Măsurători la fața locului',
    text: 'Venim la dumneavoastră, măsurăm pereții milimetric și notăm fiecare priză, țeavă și denivelare. Din măsurători iese proiectul, nu invers.',
  },
  {
    title: 'Proiect înainte de producție',
    text: 'Primiți desenul mobilei, cu dimensiuni, culori și feronerie, înainte să tăiem prima placă. Modificările se fac pe hârtie, nu în atelier.',
  },
  {
    title: 'Lucrăm și lemn masiv, și PAL',
    text: 'Stejar, frasin, nuc și cireș pentru mese, paturi, scaune și uși. PAL melaminat și MDF vopsit sau furniruit pentru bucătării și dressinguri.',
  },
  {
    title: 'Montaj inclus, curat',
    text: 'Montăm noi, cu echipa noastră, și plecăm cu molozul și ambalajele. Mobila rămâne reglată și funcțională, nu doar pusă la perete.',
  },
];

export const stats = [
  { value: 16, suffix: '+', label: 'ani de tâmplărie în județul Bacău' },
  { value: 900, suffix: '+', label: 'proiecte de mobilă livrate și montate' },
  { value: 9, suffix: '', label: 'categorii de mobilier făcute în atelier' },
  { value: 24, suffix: 'h', label: 'timp mediu de răspuns la o cerere de ofertă' },
];
