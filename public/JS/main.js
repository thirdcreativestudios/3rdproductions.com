(() => {
  "use strict";

  const FALLBACK_WHATSAPP = "https://wa.link/hlicbf";
  const WHATSAPP_NUMBER = "";
  const WHATSAPP_TEXT = "Hi Third, I have a moving-image project in mind. Context: ";
  const COOKIE_KEY = "third-cookie-choice-v2";

  const languageNames = { en: "EN", es: "ES", nl: "NL", ca: "CAT" };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const pageDataEl = $("#third-page-data");
  let pageData = {};
  try {
    pageData = pageDataEl ? JSON.parse(pageDataEl.textContent || "{}") : {};
  } catch {
    pageData = {};
  }

  const typeTimers = new WeakMap();
  const currentLang = pageData.lang || document.documentElement.lang || "en";
  let heroTypeTimer = 0;
  let heroTypingPaused = false;

  function whatsappHref() {
    if (!WHATSAPP_NUMBER) return FALLBACK_WHATSAPP;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  }

  function applyWhatsappLinks() {
    $("[data-whatsapp]").forEach((link) => {
      link.href = whatsappHref();
    });
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
      if (open) updateLanguageLinks();
    };

    const updateLanguageLinks = () => {
      $$("[data-lang-link]", menu).forEach((link) => {
        const lang = link.dataset.langLink;
        const hash = window.location.hash || "";
        link.href = `/${lang}/${hash}`;
        link.classList.toggle("is-active", lang === currentLang);
      });
      const current = $("#languageCurrent");
      if (current) current.textContent = languageNames[currentLang] || currentLang.toUpperCase();
    };

    updateLanguageLinks();
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) setOpen(false);
    });
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
      document.body.classList.toggle("menu-open", open);
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

    const lines = Array.isArray(pageData.heroManifesto) && pageData.heroManifesto.length
      ? pageData.heroManifesto
      : [target.textContent.trim()];

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
    prepareTypedTargets();
    initScenes();
    initContactBubbleVisibility();
    initVideos();
    initReveal();
    initCookieQuestion();
    startHeroHeading();
  });
})();

