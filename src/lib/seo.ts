import { site, fullAddress } from '../data/site';
import { areas, otherLocalities } from '../data/areas';

/** Identificatorul stabil al afacerii, referit din celelalte scheme. */
export const businessId = (origin: string) => `${origin}#tamplarie`;

export function localBusiness(origin: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'FurnitureStore'],
    '@id': businessId(origin),
    name: site.name,
    alternateName: 'Hanu Tamplaru',
    description: site.description,
    url: origin,
    image,
    logo: `${origin.replace(/\/$/, '')}/favicon.svg`,
    telephone: site.phoneIntl,
    email: site.email,
    foundingDate: String(site.foundingYear),
    currenciesAccepted: 'RON',
    paymentAccepted: 'Numerar, transfer bancar',
    knowsLanguage: ['ro'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: `Județul ${site.address.county}`,
      postalCode: site.address.zip,
      addressCountry: 'RO',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Județul Bacău' },
      ...areas.map((a) => ({ '@type': 'City', name: a.name })),
      ...otherLocalities.slice(0, 12).map((n) => ({ '@type': 'Place', name: n })),
    ],
    openingHoursSpecification: site.hoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    makesOffer: {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Mobilă la comandă' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Județul Bacău' },
    },
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

export function serviceSchema(opts: {
  origin: string;
  url: string;
  name: string;
  description: string;
  image: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#serviciu`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    image: opts.image,
    provider: { '@id': businessId(opts.origin) },
    areaServed: { '@type': 'AdministrativeArea', name: 'Județul Bacău' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: opts.url,
      servicePhone: site.phoneIntl,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'RON',
        valueAddedTaxIncluded: true,
      },
      seller: { '@id': businessId(opts.origin) },
    },
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function itemList(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function articleSchema(opts: {
  origin: string;
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    author: { '@type': 'Organization', name: site.name, url: opts.origin },
    publisher: { '@id': businessId(opts.origin) },
    inLanguage: 'ro-RO',
  };
}

export function howToSchema(steps: { title: string; text: string }[], name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

export const printableAddress = fullAddress;
