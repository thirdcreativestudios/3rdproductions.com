(() => {
  "use strict";

  const FALLBACK_WHATSAPP = "https://wa.link/hlicbf";
  const WHATSAPP_NUMBER = "";
  const WHATSAPP_TEXT = "Hi Third, I have a moving-image project in mind. Context: ";
  const COOKIE_KEY = "third-cookie-choice-v2";

  const translations = {
    en: {
      "skip": "Skip to highlights",
      "nav.highlights": "Highlights",
      "nav.cinematography": "Cinematography",
      "nav.production": "Production",
      "nav.commercial": "Publicity",
      "nav.contact": "Contact",
      "nav.cta": "Let's talk!",
      "hero.micro": "Barcelona / Rotterdam / elsewhere when the image asks",
      "hero.title": "Moving images for cinema, social media and public imagination.",
      "hero.secondary": "SHOWREEL",
      "intro.title": "Not an agency. Not only production.",
      "intro.copy": "A compact studio for moving-image work with taste, rhythm and production sense in the same room.",
      "intro.available": "films, campaign fragments, social media ads, public programs, edits, motion, CGI and 3D assets.",
      "highlights.kicker": "highlights",
      "highlights.title": "A broad cut through the archive.",
      "work.paper": "Football, travel, texture and social-first storytelling.",
      "work.lynparza": "Science translated into controlled, visual movement.",
      "cine.kicker": "cinematography",
      "cine.title": "Films shaped through presence, rhythm and the body of the image.",
      "prod.kicker": "production",
      "prod.title": "Cultural programs, public moments and spatial stories.",
      "prod.note": "Production and event work developed as a collaborator of PopKraft in Amsterdam, covering contexts such as IDFA DocLab, NFF and What Design Can Do.",
      "comm.kicker": "publicity",
      "comm.title": "Campaign images with cinematic instincts.",
      "contact.kicker": "contact",
      "contact.title": "Bring the brief. We will find the image.",
      "contact.copy": "For collaborations, commissions and production questions, reach us directly. Specific is useful. Messy is welcome.",
      "contact.whatsapp": "WhatsApp",
      "contact.meta": "Rotterdam / Barcelona<br />Mon-Fri, 09:00-18:00 CET<br />KVK #97257478",
      "modal.close": "Close",
      "cookies.title": "Cookie question",
      "cookies.copy": "Optional cookies would help measure visits from social ads and video interest. Essential only keeps the site working.",
      "cookies.essential": "Essential only",
      "cookies.optional": "Approve optional"
    },
    es: {
      "skip": "Saltar a destacados",
      "nav.highlights": "Destacados",
      "nav.cinematography": "Cinematografía",
      "nav.production": "Producción",
      "nav.commercial": "Publicidad",
      "nav.contact": "Contacto",
      "nav.cta": "Hablemos!",
      "hero.micro": "Barcelona / Róterdam / donde la imagen lo pida",
      "hero.title": "Imágenes en movimiento para cine, redes sociales e imaginación pública.",
      "hero.secondary": "SHOWREEL",
      "intro.title": "No una agencia. No solo producción.",
      "intro.copy": "Un estudio compacto para imagen en movimiento con gusto, ritmo y sentido práctico de producción.",
      "intro.available": "films, fragmentos de campaña, social media ads, programas públicos, edición, motion, CGI y 3D.",
      "highlights.kicker": "destacados",
      "highlights.title": "Un corte amplio del archivo.",
      "work.paper": "Fútbol, viaje, textura y narrativa pensada para redes.",
      "work.lynparza": "Ciencia traducida en movimiento visual controlado.",
      "cine.kicker": "cinematografía",
      "cine.title": "Films construidos desde la presencia, el ritmo y el cuerpo de la imagen.",
      "prod.kicker": "producción",
      "prod.title": "Programas culturales, momentos públicos e historias espaciales.",
      "prod.note": "Trabajo de producción y eventos desarrollado como colaborador de PopKraft en Amsterdam, cubriendo contextos como IDFA DocLab, NFF y What Design Can Do.",
      "comm.kicker": "publicidad",
      "comm.title": "Imágenes de campaña con instinto cinematográfico.",
      "contact.kicker": "contacto",
      "contact.title": "Trae el brief. Encontramos la imagen.",
      "contact.copy": "Para colaboraciones, encargos y producción, escribe directamente. Lo específico ayuda. Lo desordenado también sirve.",
      "contact.whatsapp": "WhatsApp",
      "contact.meta": "Róterdam / Barcelona<br />Lun-vie, 09:00-18:00 CET<br />KVK #97257478",
      "modal.close": "Cerrar",
      "cookies.title": "Pregunta sobre cookies",
      "cookies.copy": "Las cookies opcionales ayudarían a medir visitas desde anuncios en redes e interés por los vídeos. Solo esenciales mantiene el sitio funcionando.",
      "cookies.essential": "Solo esenciales",
      "cookies.optional": "Aprobar opcionales"
    },
    nl: {
      "skip": "Ga naar highlights",
      "nav.highlights": "Highlights",
      "nav.cinematography": "Cinematografie",
      "nav.production": "Productie",
      "nav.commercial": "Publiciteit",
      "nav.contact": "Contact",
      "nav.cta": "Laten we praten!",
      "hero.micro": "Barcelona / Rotterdam / waar het beeld naartoe wil",
      "hero.title": "Bewegende beelden voor cinema, social media en publieke verbeelding.",
      "hero.secondary": "SHOWREEL",
      "intro.title": "Geen bureau. Niet alleen productie.",
      "intro.copy": "Een compacte studio voor bewegend beeld met smaak, ritme en praktisch productiegevoel in dezelfde kamer.",
      "intro.available": "films, campagnefragmenten, social media ads, publieke programma's, edits, motion, CGI en 3D.",
      "highlights.kicker": "highlights",
      "highlights.title": "Een brede doorsnede uit het archief.",
      "work.paper": "Voetbal, reizen, textuur en verhalen met social timing.",
      "work.lynparza": "Wetenschap vertaald naar gecontroleerde visuele beweging.",
      "cine.kicker": "cinematografie",
      "cine.title": "Films gevormd door aanwezigheid, ritme en het lichaam van het beeld.",
      "prod.kicker": "productie",
      "prod.title": "Culturele programma's, publieke momenten en ruimtelijke verhalen.",
      "prod.note": "Productie- en eventwerk ontwikkeld als collaborator van PopKraft in Amsterdam, met contexten zoals IDFA DocLab, NFF en What Design Can Do.",
      "comm.kicker": "publiciteit",
      "comm.title": "Campagnebeelden met cinematografisch instinct.",
      "contact.kicker": "contact",
      "contact.title": "Breng de briefing. Wij vinden het beeld.",
      "contact.copy": "Voor samenwerkingen, opdrachten en productievragen: schrijf direct. Specifiek helpt. Rommelig mag ook.",
      "contact.whatsapp": "WhatsApp",
      "contact.meta": "Rotterdam / Barcelona<br />Ma-vr, 09:00-18:00 CET<br />KVK #97257478",
      "modal.close": "Sluiten",
      "cookies.title": "Cookievraag",
      "cookies.copy": "Optionele cookies helpen om bezoeken vanuit social ads en interesse in video's te meten. Alleen essentieel houdt de site werkend.",
      "cookies.essential": "Alleen essentieel",
      "cookies.optional": "Optioneel goedkeuren"
    },
    ca: {
      "skip": "Saltar als destacats",
      "nav.highlights": "Destacats",
      "nav.cinematography": "Cinematografia",
      "nav.production": "Producció",
      "nav.commercial": "Publicitat",
      "nav.contact": "Contacte",
      "nav.cta": "Parlem!",
      "hero.micro": "Barcelona / Rotterdam / allà on la imatge ho demani",
      "hero.title": "Imatges en moviment per a cinema, xarxes socials i imaginació pública.",
      "hero.secondary": "SHOWREEL",
      "intro.title": "No una agència. No només producció.",
      "intro.copy": "Un estudi compacte per a imatge en moviment amb gust, ritme i sentit pràctic de producció.",
      "intro.available": "films, fragments de campanya, social media ads, programes públics, edició, motion, CGI i 3D.",
      "highlights.kicker": "destacats",
      "highlights.title": "Un tall ampli de l'arxiu.",
      "work.paper": "Futbol, viatge, textura i relat pensat per a xarxes.",
      "work.lynparza": "Ciència traduïda en moviment visual controlat.",
      "cine.kicker": "cinematografia",
      "cine.title": "Films construïts des de la presència, el ritme i el cos de la imatge.",
      "prod.kicker": "producció",
      "prod.title": "Programes culturals, moments públics i històries espacials.",
      "prod.note": "Treball de producció i esdeveniments desenvolupat com a col·laborador de PopKraft a Amsterdam, cobrint contextos com IDFA DocLab, NFF i What Design Can Do.",
      "comm.kicker": "publicitat",
      "comm.title": "Imatges de campanya amb instint cinematogràfic.",
      "contact.kicker": "contacte",
      "contact.title": "Porta el brief. Trobarem la imatge.",
      "contact.copy": "Per a col·laboracions, encàrrecs i preguntes de producció, escriu directament. L'específic ajuda. El desordenat també.",
      "contact.whatsapp": "WhatsApp",
      "contact.meta": "Rotterdam / Barcelona<br />Dl-dv, 09:00-18:00 CET<br />KVK #97257478",
      "modal.close": "Tancar",
      "cookies.title": "Pregunta sobre cookies",
      "cookies.copy": "Les cookies opcionals ajudarien a mesurar visites des d'anuncis socials i interès pels vídeos. Només essencials manté el web funcionant.",
      "cookies.essential": "Només essencials",
      "cookies.optional": "Aprovar opcionals"
    }
  };

  const heroManifesto = {
    en: [
      "Moving images for cinema, social media and public imagination.",
      "Images for screens, rooms, feeds and festivals.",
      "Cinema when the frame needs a pulse.",
      "Production when the room, route and rhythm matter.",
      "Publicity that keeps some feeling in the frame."
    ],
    es: [
      "Imágenes en movimiento para cine, redes sociales e imaginación pública.",
      "Imágenes para pantallas, salas, feeds y festivales.",
      "Cine cuando el encuadre necesita pulso.",
      "Producción cuando importan sala, ruta y ritmo.",
      "Publicidad que conserva algo de sensación en el encuadre."
    ],
    nl: [
      "Bewegende beelden voor cinema, social media en publieke verbeelding.",
      "Beelden voor schermen, zalen, feeds en festivals.",
      "Cinema wanneer het kader een puls nodig heeft.",
      "Productie wanneer ruimte, route en ritme tellen.",
      "Publiciteit met gevoel in het kader."
    ],
    ca: [
      "Imatges en moviment per a cinema, xarxes socials i imaginació pública.",
      "Imatges per a pantalles, sales, feeds i festivals.",
      "Cinema quan l'enquadrament necessita pols.",
      "Producció quan importen espai, ruta i ritme.",
      "Publicitat que manté sensació en el marc."
    ]
  };

  const languageNames = { en: "EN", es: "ES", nl: "NL", ca: "CAT" };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const typeTimers = new WeakMap();
  let currentLang = "en";
  let heroTypeTimer = 0;
  let heroTypingPaused = false;

  function whatsappHref() {
    if (!WHATSAPP_NUMBER) return FALLBACK_WHATSAPP;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  }

  function applyWhatsappLinks() {
    $$("[data-whatsapp]").forEach((link) => {
      link.href = whatsappHref();
    });
  }

  function updateTextContent(dict) {
    $$("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value) el.textContent = value;
    });
    $$("[data-i18n-html]").forEach((el) => {
      const value = dict[el.dataset.i18nHtml];
      if (value) el.innerHTML = value;
    });
  }

  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  const productionNoteLineSets = {
    en: [
      "Production and event work",
      "developed as collaborator of PopKraft",
      "in Amsterdam, covering contexts such as",
      "IDFA DocLab, NFF and What Design Can Do."
    ],
    es: [
      "Trabajo de producción y eventos",
      "como colaborador de PopKraft",
      "en Amsterdam, cubriendo contextos como",
      "IDFA DocLab, NFF y What Design Can Do."
    ],
    nl: [
      "Productie- en eventwerk",
      "ontwikkeld als collaborator van PopKraft",
      "in Amsterdam, met contexten zoals",
      "IDFA DocLab, NFF en What Design Can Do."
    ],
    ca: [
      "Treball de producció i esdeveniments",
      "com a col·laborador de PopKraft",
      "a Amsterdam, cobrint contextos com",
      "IDFA DocLab, NFF i What Design Can Do."
    ]
  };

  function productionNoteLines(lang, text) {
    if (productionNoteLineSets[lang]) return productionNoteLineSets[lang];

    const clean = text.trim().replace(/\s+/g, " ");
    const words = clean.split(" ");
    const lineCount = 4;
    const target = Math.ceil(words.length / lineCount);
    const lines = [];
    for (let i = 0; i < lineCount; i += 1) {
      const start = i * target;
      const end = i === lineCount - 1 ? words.length : (i + 1) * target;
      lines.push(words.slice(start, end).join(" "));
    }
    return lines.filter(Boolean);
  }

  function renderProductionNotes(dict) {
    $$("[data-i18n-note]").forEach((el) => {
      const value = dict[el.dataset.i18nNote];
      if (!value) return;
      el.setAttribute("aria-label", value);
      el.innerHTML = productionNoteLines(currentLang, value)
        .map((line) => `<span>${escapeHTML(line)}</span>`)
        .join("");
    });
  }

  function prepareTypedTargets() {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$("[data-type-on-view]").forEach((el) => {
      const fullText = el.textContent.trim();
      window.clearTimeout(typeTimers.get(el));
      el.dataset.fullText = fullText;
      el.dataset.typed = "false";
      el.classList.remove("typing-active");
      if (!reduce) el.textContent = "";
      const scene = el.closest(".scene");
      if (scene?.classList.contains("scene-active")) typeElement(el);
    });
  }

  function setLanguage(lang) {
    currentLang = translations[lang] ? lang : "en";
    const dict = translations[currentLang];
    updateTextContent(dict);
    renderProductionNotes(dict);
    $("#languageCurrent").textContent = languageNames[currentLang];
    $$("#languageMenu [data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === currentLang);
    });
    document.documentElement.lang = currentLang;
    try { localStorage.setItem("third-lang", currentLang); } catch {}
    prepareTypedTargets();
    startHeroHeading();
  }

  function initLanguageMenu() {
    const picker = $("#languagePicker");
    const toggle = $("#languageToggle");
    const menu = $("#languageMenu");
    if (!picker || !toggle || !menu) return;

    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    $$("#languageMenu [data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
        setOpen(false);
      });
    });
    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) setOpen(false);
    });

    let stored = "en";
    try { stored = localStorage.getItem("third-lang") || "en"; } catch {}
    setLanguage(stored);
  }

  function initHeader() {
    const header = $("#siteHeader");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMenu() {
    const toggle = $("#menuToggle");
    const menu = $("#mobileMenu");
    if (!toggle || !menu) return;
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    $$("a", menu).forEach((link) => link.addEventListener("click", () => setOpen(false)));
  }

  function startHeroHeading() {
    const target = $("[data-typed-hero]");
    if (!target) return;
    window.clearTimeout(heroTypeTimer);
    if (heroTypingPaused) return;

    const lines = heroManifesto[currentLang] || heroManifesto.en;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.textContent = lines[0];
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const line = lines[lineIndex];
      target.textContent = line.slice(0, charIndex);

      if (!deleting && charIndex < line.length) {
        charIndex += 1;
        heroTypeTimer = window.setTimeout(tick, 48 + Math.random() * 38);
        return;
      }

      if (!deleting) {
        deleting = true;
        heroTypeTimer = window.setTimeout(tick, 1900);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        heroTypeTimer = window.setTimeout(tick, 20);
        return;
      }

      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      heroTypeTimer = window.setTimeout(tick, 420);
    };

    target.textContent = "";
    tick();
  }

  function typeElement(el) {
    const fullText = el.dataset.fullText || el.textContent.trim();
    if (!fullText || el.dataset.typed === "true") return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = fullText;
      el.dataset.typed = "true";
      return;
    }

    window.clearTimeout(typeTimers.get(el));
    el.textContent = "";
    el.classList.add("typing-active");
    let index = 0;

    const tick = () => {
      el.textContent = fullText.slice(0, index);
      if (index < fullText.length) {
        index += 1;
        typeTimers.set(el, window.setTimeout(tick, 28 + Math.random() * 24));
        return;
      }
      el.classList.remove("typing-active");
      el.dataset.typed = "true";
    };

    tick();
  }

  function initScenes() {
    document.body.classList.add("js-ready");
    const scenes = $$(".scene");
    if (!scenes.length) return;

    const activate = (scene) => {
      scene.classList.add("scene-active");
      $$("[data-type-on-view]", scene).forEach(typeElement);
    };

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scenes.forEach(activate);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -18% 0px" });

    scenes.forEach((scene) => observer.observe(scene));
  }

  function initContactBubbleVisibility() {
    const contact = $("#contact");
    if (!contact) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        document.body.classList.toggle("is-contact", entry.isIntersecting);
      });
    }, { threshold: 0.32 });
    observer.observe(contact);
  }

  function getYouTubeId(url = "") {
    const patterns = [
      /youtu\.be\/([^?&/]+)/,
      /youtube\.com\/watch\?v=([^?&/]+)/,
      /youtube\.com\/embed\/([^?&/]+)/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  function openVideo(rawUrl) {
    const id = getYouTubeId(rawUrl);
    const modal = $("#videoModal");
    const frame = $("#modalFrame");
    if (!id || !modal || !frame) return;

    heroTypingPaused = true;
    window.clearTimeout(heroTypeTimer);
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    const modal = $("#videoModal");
    const frame = $("#modalFrame");
    if (!modal || !frame) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    frame.innerHTML = "";
    document.body.style.overflow = "";
    heroTypingPaused = false;
    startHeroHeading();
  }

  function initVideos() {
    $$("[data-video]").forEach((el) => {
      el.addEventListener("click", () => openVideo(el.dataset.video));
      if (!el.hasAttribute("tabindex") && el.tagName !== "BUTTON") el.tabIndex = 0;
      el.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openVideo(el.dataset.video);
        }
      });
    });

    $("#modalClose")?.addEventListener("click", closeVideo);
    $("#videoModal")?.addEventListener("click", (event) => {
      if (event.target.id === "videoModal") closeVideo();
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeVideo();
    });
  }

  function initReveal() {
    const items = $$(".reveal");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    items.forEach((item) => observer.observe(item));
  }

  function initCookieQuestion() {
    const question = $("#cookieQuestion");
    if (!question) return;

    question.classList.add("is-visible");
    let stored = "";
    try { stored = localStorage.getItem(COOKIE_KEY) || ""; } catch {}
    if (stored) document.documentElement.dataset.cookies = stored;

    $$("[data-cookie-choice]", question).forEach((button) => {
      button.addEventListener("click", () => {
        const choice = button.dataset.cookieChoice;
        try { localStorage.setItem(COOKIE_KEY, choice); } catch {}
        document.documentElement.dataset.cookies = choice;
        question.classList.remove("is-visible");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyWhatsappLinks();
    initHeader();
    initMenu();
    initLanguageMenu();
    initScenes();
    initContactBubbleVisibility();
    initVideos();
    initReveal();
    initCookieQuestion();
  });
})();
