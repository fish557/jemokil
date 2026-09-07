import faqs from "../data/faqs";

const SITE_URL = "https://jemokil.com";
const SITE_NAME = "JEMOKIL";

const defaultSEO = {
  en: {
    title:
      "JEMOKIL | Professional Pest Management & Fumigation Tanzania",

    description:
      "JEMOKIL provides professional pest management, fumigation, inspection and preventive pest control services for homes, businesses and institutions across Tanzania.",
  },

  sw: {
    title:
      "JEMOKIL | Huduma za Kitaalamu za Kudhibiti Wadudu Tanzania",

    description:
      "JEMOKIL hutoa huduma za kitaalamu za kudhibiti wadudu, ufukizaji, ukaguzi na kinga kwa nyumba, biashara na taasisi Tanzania.",
  },
};


/* ========================================
   PAGE SEO CONFIGURATION
======================================== */

export const seoPages = {
  home: {
    en: {
      title:
        "JEMOKIL | Professional Pest Management & Fumigation Tanzania",

      description:
        "Professional pest management, fumigation, inspection and preventive pest control services for homes, businesses and institutions across Tanzania.",
    },

    sw: {
      title:
        "JEMOKIL | Huduma za Kitaalamu za Kudhibiti Wadudu Tanzania",

      description:
        "Huduma za kitaalamu za kudhibiti wadudu, ufukizaji, ukaguzi na kinga kwa nyumba, biashara na taasisi Tanzania.",
    },

    path: "/",
  },


  services: {
    en: {
      title:
        "Pest Control & Fumigation Services | JEMOKIL Tanzania",

      description:
        "Explore JEMOKIL's professional pest management, fumigation, pest-specific control, inspection and preventive pest management services in Tanzania.",
    },

    sw: {
      title:
        "Huduma za Kudhibiti Wadudu na Ufukizaji | JEMOKIL",

      description:
        "Gundua huduma za JEMOKIL za kudhibiti wadudu, ufukizaji, ukaguzi na usimamizi wa kinga kwa nyumba, biashara na taasisi Tanzania.",
    },

    path: "/services",
  },


  about: {
    en: {
      title:
        "About JEMOKIL | Professional Pest Management Company",

      description:
        "Learn about JEMOKIL, our professional approach to pest management, equipment, standards, team and commitment to protecting homes, businesses and institutions.",
    },

    sw: {
      title:
        "Kuhusu JEMOKIL | Kampuni ya Kudhibiti Wadudu",

      description:
        "Jifunze kuhusu JEMOKIL, mbinu yetu ya kitaalamu ya kudhibiti wadudu, vifaa, viwango, timu na dhamira yetu ya kulinda maeneo mbalimbali.",
    },

    path: "/about",
  },


  contact: {
    en: {
      title:
        "Contact JEMOKIL | Request Pest Control Service Tanzania",

      description:
        "Contact JEMOKIL for professional pest control, fumigation, inspection and preventive pest management services. Call, WhatsApp or request a service online.",
    },

    sw: {
      title:
        "Wasiliana na JEMOKIL | Omba Huduma ya Kudhibiti Wadudu",

      description:
        "Wasiliana na JEMOKIL kwa huduma za kitaalamu za kudhibiti wadudu, ufukizaji, ukaguzi na kinga. Piga simu, WhatsApp au omba huduma mtandaoni.",
    },

    path: "/contact",
  },


  notFound: {
    en: {
      title:
        "Page Not Found | JEMOKIL",

      description:
        "The page you are looking for could not be found on the JEMOKIL website.",
    },

    sw: {
      title:
        "Ukurasa Haupatikani | JEMOKIL",

      description:
        "Ukurasa unaoutafuta haupatikani kwenye tovuti ya JEMOKIL.",
    },

    path: "/404",
  },
};


/* ========================================
   SET META TAG
======================================== */

function setMetaTag(attribute, value, content) {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );

  if (!element) {
    element = document.createElement("meta");

    element.setAttribute(attribute, value);

    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}


/* ========================================
   SET LINK TAG
======================================== */

function setLinkTag(rel, href) {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`
  );

  if (!element) {
    element = document.createElement("link");

    element.setAttribute("rel", rel);

    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}


/* ========================================
   SET JSON-LD
======================================== */

function setStructuredData(data) {
  const id = "jemokil-structured-data";

  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");

    script.id = id;

    script.type = "application/ld+json";

    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}


/* ========================================
   LOCAL BUSINESS STRUCTURED DATA
======================================== */

function createLocalBusinessSchema(content) {
  return {
    "@type": "LocalBusiness",

    "@id": `${SITE_URL}/#business`,

    name: SITE_NAME,

    url: SITE_URL,

    logo: `${SITE_URL}/logo.svg`,

    image: `${SITE_URL}/hero-pest-control.webp`,

    description: content.description,

    telephone: "+255613223732",

    email: "info@jemokil.com",

    areaServed: [
      {
        "@type": "City",
        name: "Dar es Salaam",
      },

      {
        "@type": "Place",
        name: "Zanzibar",
      },

      {
        "@type": "City",
        name: "Mwanza",
      },

      {
        "@type": "City",
        name: "Arusha",
      },

      {
        "@type": "City",
        name: "Dodoma",
      },

      {
        "@type": "City",
        name: "Mbeya",
      },
    ],

    serviceType: [
      "Pest Management",
      "Fumigation",
      "Pest Inspection",
      "Preventive Pest Management",
    ],
  };
}


/* ========================================
   FAQ STRUCTURED DATA
======================================== */

function createFAQSchema(language) {
  return {
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name:
        language === "sw"
          ? faq.question.sw
          : faq.question.en,

      acceptedAnswer: {
        "@type": "Answer",

        text:
          language === "sw"
            ? faq.answer.sw
            : faq.answer.en,
      },
    })),
  };
}


/* ========================================
   APPLY SEO
======================================== */

export function applySEO({
  page = "home",
  language = "en",
}) {
  const pageSEO =
    seoPages[page] || seoPages.home;

  const content =
    pageSEO[language] ||
    pageSEO.en ||
    defaultSEO.en;

  const canonicalUrl =
    `${SITE_URL}${pageSEO.path}`;

  const isNotFound =
    page === "notFound";


  /* ========================================
     DOCUMENT LANGUAGE
  ======================================== */

  document.documentElement.lang =
    language === "sw"
      ? "sw-TZ"
      : "en-TZ";


  /* ========================================
     TITLE
  ======================================== */

  document.title = content.title;


  /* ========================================
     BASIC METADATA
  ======================================== */

  setMetaTag(
    "name",
    "description",
    content.description
  );

  setMetaTag(
    "name",
    "robots",
    isNotFound
      ? "noindex, nofollow"
      : "index, follow"
  );

  setMetaTag(
    "name",
    "author",
    SITE_NAME
  );


  /* ========================================
     CANONICAL
  ======================================== */

  setLinkTag(
    "canonical",
    canonicalUrl
  );


  /* ========================================
     OPEN GRAPH
  ======================================== */

  setMetaTag(
    "property",
    "og:title",
    content.title
  );

  setMetaTag(
    "property",
    "og:description",
    content.description
  );

  setMetaTag(
    "property",
    "og:type",
    "website"
  );

  setMetaTag(
    "property",
    "og:url",
    canonicalUrl
  );

  setMetaTag(
    "property",
    "og:site_name",
    SITE_NAME
  );

  setMetaTag(
    "property",
    "og:locale",
    language === "sw"
      ? "sw_TZ"
      : "en_TZ"
  );

  setMetaTag(
    "property",
    "og:image",
    `${SITE_URL}/hero-pest-control.webp`
  );


  /* ========================================
     TWITTER / SOCIAL
  ======================================== */

  setMetaTag(
    "name",
    "twitter:card",
    "summary_large_image"
  );

  setMetaTag(
    "name",
    "twitter:title",
    content.title
  );

  setMetaTag(
    "name",
    "twitter:description",
    content.description
  );

  setMetaTag(
    "name",
    "twitter:image",
    `${SITE_URL}/hero-pest-control.webp`
  );


  /* ========================================
     STRUCTURED DATA
  ======================================== */

  if (isNotFound) {
    const existingSchema =
      document.getElementById(
        "jemokil-structured-data"
      );

    if (existingSchema) {
      existingSchema.remove();
    }

    return;
  }


  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      createLocalBusinessSchema(content),
    ],
  };


  /* ========================================
     ADD FAQ SCHEMA TO CONTACT PAGE
  ======================================== */

  if (page === "contact") {
    structuredData["@graph"].push(
      createFAQSchema(language)
    );
  }


  setStructuredData(structuredData);
}


export default applySEO;