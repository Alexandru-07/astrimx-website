const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const attributeElements = document.querySelectorAll("[data-i18n-attr]");
const footerYear = document.getElementById("year");
const backToTopButton = document.querySelector(".back-to-top");

const translations = {
  ro: {
    "nav.dashboard": "Dashboard",
    "nav.portfolio": "Portofoliul meu",
    "nav.policy": "Politica de confidentialitate",
    "nav.contact": "Contact",
    "cta.contact": "Contacteaza-ne",
    "hero.eyebrow": "Legal & colaborare",
    "hero.title": "Termeni & Conditii – AstrimX",
    "hero.lead":
      "Termenii stabilesc modul in care colaboram, ce servicii sunt incluse, cum functioneaza platile si ce asteptari avem reciproc pentru un proiect livrat corect.",
    "hero.note":
      "Aplicabili tuturor solicitarilor trimise prin site sau pe email. Te rog sa ii parcurgi inainte de a incepe un proiect.",
    "hero.updated": "Ultima actualizare: Decembrie 2025",
    "badge.services": "Servicii digitale",
    "badge.remote": "Colaborare remote",
    "badge.deposit": "Avans 30–50%",
    "badge.delivery": "Livrare pe etape",
    "section.overview.title": "Ce reglementeaza acest document",
    "section.overview.desc":
      "Acesti termeni se aplica site-ului AstrimX si oricarei colaborari pornite prin formularul de contact sau email. Acceptarea lor permite o colaborare clara, fara ambiguitati.",
    "section.1.title": "Informatii generale",
    "section.1.lead":
      "Acest website este operat de AstrimX, reprezentat de Anghel Alexandru, furnizor de servicii de dezvoltare web si front-end. Prin accesarea site-ului sau trimiterea unui mesaj prin formularul de contact confirmi ca esti de acord cu acesti termeni.",
    "section.2.title": "Serviciile oferite",
    "section.2.lead":
      "AstrimX ofera servicii digitale, inclusiv, dar fara a se limita la:",
    "section.2.item1": "dezvoltare website-uri si landing pages",
    "section.2.item2": "design front-end",
    "section.2.item3": "optimizare SEO de baza (on-page)",
    "section.2.item4": "integrare formulare de contact si solutii similare",
    "section.2.note":
      "Detaliile pachetului sunt afisate pe site si pot fi ajustate prin acord comun cu clientul.",
    "section.3.title": "Procesul de colaborare",
    "section.3.lead": "Colaborarea incepe dupa:",
    "section.3.item1": "confirmarea scrisa a proiectului (email / formular)",
    "section.3.item2": "acceptarea ofertei",
    "section.3.item3": "achitarea avansului, daca este solicitat",
    "section.3.note":
      "Clientul furnizeaza continutul necesar (texte, imagini, cerinte) la timp pentru a evita intarzierile.",
    "section.4.title": "Plati si avans",
    "section.4.lead":
      "Pentru inceperea unui proiect, AstrimX poate solicita un avans de 30–50% din valoarea totala.",
    "section.4.item1": "avansul confirma rezervarea",
    "section.4.item2": "avansul devine nereturnabil dupa inceperea lucrului",
    "section.4.note":
      "Restul sumei se achita la finalizarea proiectului, inainte de livrarea finala sau publicarea site-ului.",
    "section.5.title": "Metode de plata",
    "section.5.lead":
      "Platile se pot efectua prin metode agreate de comun acord, precum:",
    "section.5.item1": "transfer bancar",
    "section.5.item2": "PayPal",
    "section.5.item3": "alte metode convenite intre parti",
    "section.6.title": "Livrare si revizii",
    "section.6.lead":
      "Termenul de livrare depinde de complexitatea proiectului si de promptitudinea clientului.",
    "section.6.item1":
      "fiecare pachet include un numar limitat de revizii (conform descrierii de pe site)",
    "section.6.item2": "modificarile suplimentare pot fi taxate separat",
    "section.7.title": "Drepturi de autor",
    "section.7.lead": "Dupa achitarea integrala a proiectului:",
    "section.7.item1":
      "clientul primeste dreptul de utilizare a produsului final",
    "section.7.item2":
      "AstrimX poate afisa proiectul in portofoliu, cu exceptia cazului in care se solicita confidentialitate",
    "section.8.title": "Anulare si intrerupere",
    "section.8.lead": "Proiectul poate fi suspendat daca:",
    "section.8.item1": "clientul intrerupe comunicarea",
    "section.8.item2":
      "nu sunt furnizate materialele necesare intr-un termen rezonabil",
    "section.8.note": "In aceste situatii, avansul nu se ramburseaza.",
    "section.9.title": "Limitarea raspunderii",
    "section.9.lead": "AstrimX nu este raspunzatoare pentru:",
    "section.9.item1": "pierderi indirecte",
    "section.9.item2":
      "probleme cauzate de servicii terte (hosting, domenii, platforme)",
    "section.9.item3": "modificari realizate de client dupa livrare",
    "section.10.title": "Confidentialitate",
    "section.10.lead":
      "Informatiile furnizate de client sunt confidentiale si folosite doar pentru realizarea proiectului.",
    "section.11.title": "Modificarea termenilor",
    "section.11.lead":
      "AstrimX isi rezerva dreptul de a modifica acesti termeni. Versiunea actualizata va fi publicata pe aceasta pagina.",
    "section.12.title": "Contact",
    "section.12.lead":
      'Pentru orice intrebare legata de Termeni & Conditii, ne poti contacta la: <a href="mailto:astrimx.contact@gmail.com">📧 astrimx.contact@gmail.com</a>.',
    "footer.credit": "AstrimX &middot; Creat de Anghel Alexandru",
  },
  en: {
    "nav.dashboard": "Dashboard",
    "nav.portfolio": "My Portofolio",
    "nav.policy": "Privacy policy",
    "nav.contact": "Contact",
    "cta.contact": "Contact us",
    "hero.eyebrow": "Legal & collaboration",
    "hero.title": "Terms & Conditions – AstrimX",
    "hero.lead":
      "These terms explain how we work together, what services are included, how payments operate, and the shared expectations for a smooth delivery.",
    "hero.note":
      "Applies to any inquiry sent through the site or by email. Please review before starting a project.",
    "hero.updated": "Last update: December 2025",
    "badge.services": "Digital services",
    "badge.remote": "Remote-first",
    "badge.deposit": "30–50% deposit",
    "badge.delivery": "Milestone delivery",
    "section.overview.title": "What this document covers",
    "section.overview.desc":
      "These terms apply to the AstrimX site and any collaboration started via the contact form or email. Accepting them keeps our work clear and predictable.",
    "section.1.title": "General information",
    "section.1.lead":
      "This website is operated by AstrimX, represented by Anghel Alexandru, a provider of web development and front-end services. By accessing the site or sending a message via the contact form you agree to these terms.",
    "section.2.title": "Services provided",
    "section.2.lead":
      "AstrimX offers digital services, including but not limited to:",
    "section.2.item1": "website and landing page development",
    "section.2.item2": "front-end design",
    "section.2.item3": "basic on-page SEO",
    "section.2.item4": "contact form integrations and similar solutions",
    "section.2.note":
      "Package details are shown on the site and can be adjusted by mutual agreement with the client.",
    "section.3.title": "Collaboration process",
    "section.3.lead": "Collaboration starts after:",
    "section.3.item1": "written project confirmation (email / form submission)",
    "section.3.item2": "offer acceptance",
    "section.3.item3": "payment of the deposit, if requested",
    "section.3.note":
      "The client supplies the needed content (copy, images, requirements) on time to avoid delays.",
    "section.4.title": "Payments & deposit",
    "section.4.lead":
      "To begin a project, AstrimX may request a 30–50% deposit of the total value.",
    "section.4.item1": "the deposit reserves the project slot",
    "section.4.item2": "the deposit is non-refundable once work begins",
    "section.4.note":
      "The remaining balance is due at project completion, before final delivery or publishing the site.",
    "section.5.title": "Payment methods",
    "section.5.lead":
      "Payments can be made via mutually agreed methods, such as:",
    "section.5.item1": "bank transfer",
    "section.5.item2": "PayPal",
    "section.5.item3": "other methods agreed between parties",
    "section.6.title": "Delivery & revisions",
    "section.6.lead":
      "Delivery timelines depend on project complexity and client responsiveness.",
    "section.6.item1":
      "each package includes a limited number of revisions (as shown on the site)",
    "section.6.item2": "extra changes may be billed separately",
    "section.7.title": "Copyright",
    "section.7.lead": "After full payment is received:",
    "section.7.item1": "the client receives the right to use the final product",
    "section.7.item2":
      "AstrimX may showcase the project in the portfolio unless confidentiality is explicitly requested",
    "section.8.title": "Cancellation & suspension",
    "section.8.lead": "The project may be paused if:",
    "section.8.item1": "the client stops communication",
    "section.8.item2":
      "required materials are not provided within a reasonable timeframe",
    "section.8.note": "In these cases, the deposit is non-refundable.",
    "section.9.title": "Limitation of liability",
    "section.9.lead": "AstrimX is not liable for:",
    "section.9.item1": "indirect losses",
    "section.9.item2":
      "issues caused by third-party services (hosting, domains, platforms)",
    "section.9.item3": "changes made by the client after delivery",
    "section.10.title": "Confidentiality",
    "section.10.lead":
      "Client information is treated as confidential and used solely to deliver the project.",
    "section.11.title": "Changes to terms",
    "section.11.lead":
      "AstrimX reserves the right to update these terms. The latest version will be published on this page.",
    "section.12.title": "Contact",
    "section.12.lead":
      'For questions about the Terms & Conditions, contact us at: <a href="mailto:astrimx.contact@gmail.com">📧 astrimx.contact@gmail.com</a>.',
    "footer.credit": "AstrimX &middot; Crafted by Anghel Alexandru",
  },
};

const defaultLanguage = "ro";
let currentLanguage = defaultLanguage;

const translate = (key, lang = currentLanguage) => {
  const fallback = translations.en?.[key];
  return translations[lang]?.[key] ?? fallback ?? key;
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang];
  if (!dictionary) return;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const translation = translate(key, lang);
    if (element.dataset.i18nMode === "html") {
      element.innerHTML = translation;
    } else {
      element.textContent = translation;
    }
  });

  attributeElements.forEach((element) => {
    const rawInstructions = element.dataset.i18nAttr;
    if (!rawInstructions) return;

    rawInstructions.split("|").forEach((instruction) => {
      if (!instruction) return;
      const [attrNameRaw, keyRaw] = instruction.split(":");
      const attrName = attrNameRaw?.trim();
      const attrKey = (keyRaw && keyRaw.trim()) || element.dataset.i18n || "";
      if (!attrName || !attrKey) return;

      const translation = dictionary[attrKey] ?? translations.en?.[attrKey];
      if (translation === undefined) return;
      element.setAttribute(attrName, translation);
    });
  });
};

const updateLanguageButtons = (activeLang) => {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateYear = () => {
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
};

const scrollToNav = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleBackToTop = () => {
  if (!backToTopButton) return;
  const shouldShow = window.scrollY > 220;
  backToTopButton.classList.toggle("visible", shouldShow);
};

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLanguageButtons(lang);
  updateYear();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (!lang || lang === currentLanguage) return;
    setLanguage(lang);
  });
});

backToTopButton?.addEventListener("click", scrollToNav);
window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();

setLanguage(defaultLanguage);
