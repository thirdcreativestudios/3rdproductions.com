export const siteUrl = "https://www.3rdproductions.com";

export const languageOrder = ["en", "es", "nl", "ca"];

export const languages = {
  en: { label: "EN", name: "English", hreflang: "en", locale: "en_US" },
  es: { label: "ES", name: "Español", hreflang: "es", locale: "es_ES" },
  nl: { label: "NL", name: "Nederlands", hreflang: "nl", locale: "nl_NL" },
  ca: { label: "CAT", name: "Català", hreflang: "ca", locale: "ca_ES" }
};

export const tickerItems = [
  "cinematography",
  "production",
  "social media",
  "motion",
  "CGI",
  "3D",
  "Barcelona",
  "Amsterdam",
  "Madrid",
  "Rotterdam"
];

const studioImages = [
  {
    className: "studio-image tall odyssey-still reveal",
    src: "/POSTER_IMAGES/odyssey_MateuszStaniak.webp",
    alt: "Odyssey still"
  },
  {
    className: "studio-image reveal",
    src: "/PRODUCTION/20230616-tomdoms_1942540.webp",
    alt: "Production moment"
  },
  {
    className: "studio-image institute-still reveal",
    src: "/POSTER_IMAGES/HetNieuweInstituut.webp",
    alt: "Het Nieuwe Instituut still"
  }
];

const highlightsItems = [
  {
    className: "work-card wide reveal",
    video: "https://youtu.be/idmtwV6YZ_M",
    src: "/POSTER_IMAGES/Higher.webp",
    alt: "Stedelijk Museum performance still",
    title: "Stedelijk Museum"
  },
  {
    className: "work-card reveal",
    video: "https://youtu.be/s16WYEkrv3M",
    src: "/POSTER_IMAGES/PaperTrails.webp",
    alt: "Paper Trails",
    title: "Paper Trails"
  },
  {
    className: "work-card reveal",
    video: "https://youtu.be/O4pQ_si_nEM",
    src: "/POSTER_IMAGES/Lynparza-new.png",
    alt: "Lynparza",
    title: "Lynparza"
  }
];

const cinemaItems = [
  { title: "Fever", video: "https://youtu.be/rmCJeeMUJdc", src: "/POSTER_IMAGES/Fever.webp", alt: "Fever" },
  { title: "Odyssey", video: "https://youtu.be/l_eRST3rDtU", src: "/POSTER_IMAGES/Odyssey.webp", alt: "Odyssey" },
  { title: "Solo", video: "https://youtu.be/blvr3w-Tiqk", src: "/POSTER_IMAGES/Solo.webp", alt: "Solo" }
];

const productionImages = [
  { src: "/PRODUCTION/20240705-tomdoms_03608283.webp", alt: "Production still" },
  { src: "/PRODUCTION/DocLab+IDFA+2024-6.webp", alt: "DocLab IDFA" },
  { src: "/PRODUCTION/Dutch-Design-Week-exhibition-structure-1536x1024-1-1440x960.jpg", alt: "Dutch Design Week" },
  { src: "/PRODUCTION/BK20231111-DocLab-79.webp", alt: "DocLab production" }
];

const publicityItems = {
  en: [
    { title: "Het Nieuwe Instituut", meta: "Institutional / Culture", video: "https://youtu.be/RvcJhIxFcf0" },
    { title: "European Union", meta: "Public Communication", video: "https://youtu.be/PFcngKKwos4" },
    { title: "Stedelijk Museum", meta: "Social / Performance", video: "https://youtu.be/idmtwV6YZ_M" },
    { title: "AstraZeneca", meta: "Brand / Education", video: "https://youtu.be/9plu4YEDmno" },
    { title: "enecé", meta: "Motion / Learning", video: "https://youtu.be/06E41oFF0eM" }
  ],
  es: [
    { title: "Het Nieuwe Instituut", meta: "Institucional / Cultura", video: "https://youtu.be/RvcJhIxFcf0" },
    { title: "European Union", meta: "Comunicación pública", video: "https://youtu.be/PFcngKKwos4" },
    { title: "Stedelijk Museum", meta: "Social / Performance", video: "https://youtu.be/idmtwV6YZ_M" },
    { title: "AstraZeneca", meta: "Marca / Educación", video: "https://youtu.be/9plu4YEDmno" },
    { title: "enecé", meta: "Motion / Aprendizaje", video: "https://youtu.be/06E41oFF0eM" }
  ],
  nl: [
    { title: "Het Nieuwe Instituut", meta: "Institutioneel / Cultuur", video: "https://youtu.be/RvcJhIxFcf0" },
    { title: "European Union", meta: "Publieke communicatie", video: "https://youtu.be/PFcngKKwos4" },
    { title: "Stedelijk Museum", meta: "Social / Performance", video: "https://youtu.be/idmtwV6YZ_M" },
    { title: "AstraZeneca", meta: "Merk / Educatie", video: "https://youtu.be/9plu4YEDmno" },
    { title: "enecé", meta: "Motion / Leren", video: "https://youtu.be/06E41oFF0eM" }
  ],
  ca: [
    { title: "Het Nieuwe Instituut", meta: "Institucional / Cultura", video: "https://youtu.be/RvcJhIxFcf0" },
    { title: "European Union", meta: "Comunicació pública", video: "https://youtu.be/PFcngKKwos4" },
    { title: "Stedelijk Museum", meta: "Social / Performance", video: "https://youtu.be/idmtwV6YZ_M" },
    { title: "AstraZeneca", meta: "Marca / Educació", video: "https://youtu.be/9plu4YEDmno" },
    { title: "enecé", meta: "Motion / Aprenentatge", video: "https://youtu.be/06E41oFF0eM" }
  ]
};

export const content = {
  en: {
    seo: {
      title: "third | Moving Image Studio | Barcelona & Rotterdam",
      description: "Third is a moving image studio between Barcelona and Rotterdam, working across cinema, social media ads, publicity, marketing films, production, CGI, 3D and motion.",
      ogTitle: "third | Moving Image Studio",
      ogDescription: "Independent moving image work for cinema, social media, publicity, culture and projects in between."
    },
    skip: "Skip to highlights",
    nav: { highlights: "Highlights", cinematography: "Cinematography", production: "Production", publicity: "Publicity", contact: "Contact", cta: "Let's talk!" },
    hero: {
      title: "Moving images for cinema, social media and public imagination.",
      secondary: "SHOWREEL",
      manifesto: [
        "Moving images for cinema, social media and public imagination.",
        "Images for screens, rooms, feeds and festivals.",
        "Cinema when the frame needs a pulse.",
        "Production when the room, route and rhythm matter.",
        "Publicity that keeps some feeling in the frame."
      ]
    },
    intro: {
      title: "Not an agency. Not only production.",
      copy: "A compact studio for moving-image work with taste, rhythm and production sense in the same room.",
      rows: [
        { number: "02", title: "cinema", meta: "fiction / atmosphere / frame" },
        { number: "03", title: "social media ads", meta: "feeds / campaigns / fragments" },
        { number: "04", title: "publicity", meta: "public image / institutions / culture" },
        { number: "05", title: "production", meta: "rooms / routes / people" },
        { number: "06", title: "motion / CGI / 3D", meta: "systems / assets / movement" }
      ]
    },
    highlights: { kicker: "highlights", title: "A broad cut through the archive.", items: highlightsItems },
    cinema: { kicker: "cinematography", title: "Films shaped through presence, rhythm and the body of the image.", items: cinemaItems },
    production: {
      kicker: "production",
      title: "Cultural programs, public moments and spatial stories.",
      note: "Production and event work developed as a collaborator of PopKraft in Amsterdam, covering contexts such as IDFA DocLab, NFF and What Design Can Do.",
      noteLines: ["Production and event work", "developed as collaborator of PopKraft", "in Amsterdam, covering contexts such as", "IDFA DocLab, NFF and What Design Can Do."],
      images: productionImages
    },
    publicity: { kicker: "publicity", title: "Campaign images with cinematic instincts.", items: publicityItems.en },
    contact: {
      kicker: "contact",
      title: "Bring the brief. We will find the image.",
      copy: "For collaborations, commissions and production questions, reach us directly. Specific is useful. Messy is welcome.",
      whatsapp: "WhatsApp",
      meta: ["Rotterdam / Barcelona", "Mon-Fri, 09:00-18:00 CET", "KVK #97257478"]
    },
    modalClose: "Close",
    cookies: {
      title: "Cookie question",
      copy: "Optional cookies would help measure visits from social ads and video interest. Essential only keeps the site working.",
      essential: "Essential only",
      optional: "Approve optional"
    },
    studioImages
  },
  es: {
    seo: {
      title: "third | Estudio de imagen en movimiento | Barcelona y Róterdam",
      description: "Third es un estudio de imagen en movimiento entre Barcelona y Róterdam para cine, social media ads, publicidad, marketing, producción, CGI, 3D y motion.",
      ogTitle: "third | Estudio de imagen en movimiento",
      ogDescription: "Imagen en movimiento independiente para cine, redes sociales, publicidad, cultura y proyectos intermedios."
    },
    skip: "Saltar a destacados",
    nav: { highlights: "Destacados", cinematography: "Cinematografía", production: "Producción", publicity: "Publicidad", contact: "Contacto", cta: "Hablemos!" },
    hero: {
      title: "Imágenes en movimiento para cine, redes sociales e imaginación pública.",
      secondary: "SHOWREEL",
      manifesto: [
        "Imágenes en movimiento para cine, redes sociales e imaginación pública.",
        "Imágenes para pantallas, salas, feeds y festivales.",
        "Cine cuando el encuadre necesita pulso.",
        "Producción cuando importan sala, ruta y ritmo.",
        "Publicidad que conserva algo de sensación en el encuadre."
      ]
    },
    intro: {
      title: "No una agencia. No solo producción.",
      copy: "Un estudio compacto para imagen en movimiento con gusto, ritmo y sentido práctico de producción.",
      rows: [
        { number: "02", title: "cine", meta: "ficción / atmósfera / encuadre" },
        { number: "03", title: "social media ads", meta: "feeds / campañas / fragmentos" },
        { number: "04", title: "publicidad", meta: "imagen pública / instituciones / cultura" },
        { number: "05", title: "producción", meta: "salas / rutas / personas" },
        { number: "06", title: "motion / CGI / 3D", meta: "sistemas / assets / movimiento" }
      ]
    },
    highlights: { kicker: "destacados", title: "Un corte amplio del archivo.", items: highlightsItems },
    cinema: { kicker: "cinematografía", title: "Films construidos desde la presencia, el ritmo y el cuerpo de la imagen.", items: cinemaItems },
    production: {
      kicker: "producción",
      title: "Programas culturales, momentos públicos e historias espaciales.",
      note: "Trabajo de producción y eventos desarrollado como colaborador de PopKraft en Amsterdam, cubriendo contextos como IDFA DocLab, NFF y What Design Can Do.",
      noteLines: ["Trabajo de producción y eventos", "como colaborador de PopKraft", "en Amsterdam, cubriendo contextos como", "IDFA DocLab, NFF y What Design Can Do."],
      images: productionImages
    },
    publicity: { kicker: "publicidad", title: "Imágenes de campaña con instinto cinematográfico.", items: publicityItems.es },
    contact: {
      kicker: "contacto",
      title: "Trae el brief. Encontramos la imagen.",
      copy: "Para colaboraciones, encargos y producción, escribe directamente. Lo específico ayuda. Lo desordenado también sirve.",
      whatsapp: "WhatsApp",
      meta: ["Róterdam / Barcelona", "Lun-vie, 09:00-18:00 CET", "KVK #97257478"]
    },
    modalClose: "Cerrar",
    cookies: {
      title: "Pregunta sobre cookies",
      copy: "Las cookies opcionales ayudarían a medir visitas desde anuncios en redes e interés por los vídeos. Solo esenciales mantiene el sitio funcionando.",
      essential: "Solo esenciales",
      optional: "Aprobar opcionales"
    },
    studioImages
  },
  nl: {
    seo: {
      title: "third | Moving image studio | Barcelona & Rotterdam",
      description: "Third is een studio voor bewegend beeld tussen Barcelona en Rotterdam voor cinema, social media ads, publiciteit, marketingfilms, productie, CGI, 3D en motion.",
      ogTitle: "third | Moving image studio",
      ogDescription: "Onafhankelijk bewegend beeld voor cinema, social media, publiciteit, cultuur en projecten ertussenin."
    },
    skip: "Ga naar highlights",
    nav: { highlights: "Highlights", cinematography: "Cinematografie", production: "Productie", publicity: "Publiciteit", contact: "Contact", cta: "Laten we praten!" },
    hero: {
      title: "Bewegende beelden voor cinema, social media en publieke verbeelding.",
      secondary: "SHOWREEL",
      manifesto: [
        "Bewegende beelden voor cinema, social media en publieke verbeelding.",
        "Beelden voor schermen, zalen, feeds en festivals.",
        "Cinema wanneer het kader een puls nodig heeft.",
        "Productie wanneer ruimte, route en ritme tellen.",
        "Publiciteit met gevoel in het kader."
      ]
    },
    intro: {
      title: "Geen bureau. Niet alleen productie.",
      copy: "Een compacte studio voor bewegend beeld met smaak, ritme en praktisch productiegevoel in dezelfde kamer.",
      rows: [
        { number: "02", title: "cinema", meta: "fictie / atmosfeer / kader" },
        { number: "03", title: "social media ads", meta: "feeds / campagnes / fragmenten" },
        { number: "04", title: "publiciteit", meta: "publiek beeld / instellingen / cultuur" },
        { number: "05", title: "productie", meta: "ruimtes / routes / mensen" },
        { number: "06", title: "motion / CGI / 3D", meta: "systemen / assets / beweging" }
      ]
    },
    highlights: { kicker: "highlights", title: "Een brede doorsnede uit het archief.", items: highlightsItems },
    cinema: { kicker: "cinematografie", title: "Films gevormd door aanwezigheid, ritme en het lichaam van het beeld.", items: cinemaItems },
    production: {
      kicker: "productie",
      title: "Culturele programma's, publieke momenten en ruimtelijke verhalen.",
      note: "Productie- en eventwerk ontwikkeld als collaborator van PopKraft in Amsterdam, met contexten zoals IDFA DocLab, NFF en What Design Can Do.",
      noteLines: ["Productie- en eventwerk", "ontwikkeld als collaborator van PopKraft", "in Amsterdam, met contexten zoals", "IDFA DocLab, NFF en What Design Can Do."],
      images: productionImages
    },
    publicity: { kicker: "publiciteit", title: "Campagnebeelden met cinematografisch instinct.", items: publicityItems.nl },
    contact: {
      kicker: "contact",
      title: "Breng de briefing. Wij vinden het beeld.",
      copy: "Voor samenwerkingen, opdrachten en productievragen: schrijf direct. Specifiek helpt. Rommelig mag ook.",
      whatsapp: "WhatsApp",
      meta: ["Rotterdam / Barcelona", "Ma-vr, 09:00-18:00 CET", "KVK #97257478"]
    },
    modalClose: "Sluiten",
    cookies: {
      title: "Cookievraag",
      copy: "Optionele cookies helpen om bezoeken vanuit social ads en interesse in video's te meten. Alleen essentieel houdt de site werkend.",
      essential: "Alleen essentieel",
      optional: "Optioneel goedkeuren"
    },
    studioImages
  },
  ca: {
    seo: {
      title: "third | Estudi d'imatge en moviment | Barcelona i Rotterdam",
      description: "Third és un estudi d'imatge en moviment entre Barcelona i Rotterdam per a cinema, xarxes socials, publicitat, màrqueting, producció, CGI, 3D i motion.",
      ogTitle: "third | Estudi d'imatge en moviment",
      ogDescription: "Imatge en moviment independent per a cinema, xarxes socials, publicitat, cultura i projectes intermedis."
    },
    skip: "Saltar als destacats",
    nav: { highlights: "Destacats", cinematography: "Cinematografia", production: "Producció", publicity: "Publicitat", contact: "Contacte", cta: "Parlem!" },
    hero: {
      title: "Imatges en moviment per a cinema, xarxes socials i imaginació pública.",
      secondary: "SHOWREEL",
      manifesto: [
        "Imatges en moviment per a cinema, xarxes socials i imaginació pública.",
        "Imatges per a pantalles, sales, feeds i festivals.",
        "Cinema quan l'enquadrament necessita pols.",
        "Producció quan importen espai, ruta i ritme.",
        "Publicitat que manté sensació en el marc."
      ]
    },
    intro: {
      title: "No una agència. No només producció.",
      copy: "Un estudi compacte per a imatge en moviment amb gust, ritme i sentit pràctic de producció.",
      rows: [
        { number: "02", title: "cinema", meta: "ficció / atmosfera / enquadrament" },
        { number: "03", title: "social media ads", meta: "feeds / campanyes / fragments" },
        { number: "04", title: "publicitat", meta: "imatge pública / institucions / cultura" },
        { number: "05", title: "producció", meta: "espais / rutes / persones" },
        { number: "06", title: "motion / CGI / 3D", meta: "sistemes / assets / moviment" }
      ]
    },
    highlights: { kicker: "destacats", title: "Un tall ampli de l'arxiu.", items: highlightsItems },
    cinema: { kicker: "cinematografia", title: "Films construïts des de la presència, el ritme i el cos de la imatge.", items: cinemaItems },
    production: {
      kicker: "producció",
      title: "Programes culturals, moments públics i històries espacials.",
      note: "Treball de producció i esdeveniments desenvolupat com a col·laborador de PopKraft a Amsterdam, cobrint contextos com IDFA DocLab, NFF i What Design Can Do.",
      noteLines: ["Treball de producció i esdeveniments", "com a col·laborador de PopKraft", "a Amsterdam, cobrint contextos com", "IDFA DocLab, NFF i What Design Can Do."],
      images: productionImages
    },
    publicity: { kicker: "publicitat", title: "Imatges de campanya amb instint cinematogràfic.", items: publicityItems.ca },
    contact: {
      kicker: "contacte",
      title: "Porta el brief. Trobarem la imatge.",
      copy: "Per a col·laboracions, encàrrecs i preguntes de producció, escriu directament. L'específic ajuda. El desordenat també.",
      whatsapp: "WhatsApp",
      meta: ["Rotterdam / Barcelona", "Dl-dv, 09:00-18:00 CET", "KVK #97257478"]
    },
    modalClose: "Tancar",
    cookies: {
      title: "Pregunta sobre cookies",
      copy: "Les cookies opcionals ajudarien a mesurar visites des d'anuncis socials i interès pels vídeos. Només essencials manté el web funcionant.",
      essential: "Només essencials",
      optional: "Aprovar opcionals"
    },
    studioImages
  }
};
