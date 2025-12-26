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
    "nav.terms": "Termeni & Conditii",
    "nav.contact": "Contact",
    "cta.contact": "Contacteaza-ne",
    "hero.eyebrow": "Conform GDPR // Confidentialitate",
    "hero.title": "POLITICA DE CONFIDENȚIALITATE (GDPR) – AstrimX",
    "hero.lead":
      "Această Politică de Confidențialitate descrie modul în care AstrimX colectează, utilizează și protejează datele cu caracter personal ale vizitatorilor și clienților.",
    "hero.note":
      "Ne angajăm să respectăm Regulamentul (UE) 2016/679 privind protecția datelor (GDPR) și legislația națională aplicabilă în România.",
    "hero.updated": "Ultima actualizare: Decembrie 2025",
    "badge.gdpr": "GDPR în vigoare",
    "badge.scope": "Formular contact",
    "badge.storage": "Web3Forms + inbox",
    "badge.cookies": "Fără cookie-uri de tracking",
    "section.overview.title": "Ce acoperă această politică",
    "section.overview.desc":
      "Acest document descrie explicit datele pe care le colectăm, motivul, temeiul legal, durata de stocare, drepturile dumneavoastră și modalitatea de contact pentru orice solicitare.",
    "section.1.title": "Datele personale pe care le colectăm",
    "section.1.lead":
      "Prin intermediul formularului de contact de pe site colectăm următoarele informații:",
    "section.1.item1": "Nume complet",
    "section.1.item2": "Adresă de email",
    "section.1.item3": "Conținutul mesajului transmis prin formular",
    "section.1.item4":
      "Adresă IP (colectată automat de Web3Forms pentru protecție anti-abuz)",
    "section.1.note":
      "Nu colectăm date suplimentare, nu folosim cookie-uri de tracking și nu urmărim activitatea utilizatorilor.",
    "section.2.title": "Scopul prelucrării",
    "section.2.lead": "Datele sunt utilizate exclusiv pentru:",
    "section.2.item1": "a răspunde solicitării dumneavoastră",
    "section.2.item2": "a comunica detalii legate de proiect",
    "section.2.item3": "a vă oferi o ofertă sau propunere de colaborare",
    "section.2.item4": "schimburi de mesaje legate de servicii web",
    "section.2.note":
      "Nu folosim datele în alte scopuri (marketing, newsletter etc.).",
    "section.3.title": "Temeiul legal al prelucrării (GDPR)",
    "section.3.lead": "Prelucrăm datele în conformitate cu:",
    "section.3.item1":
      "Art. 6(1)(a) GDPR – Consimțământ, atunci când bifați că sunteți de acord cu procesarea datelor",
    "section.3.item2":
      "Art. 6(1)(b) GDPR – Executarea unui contract, atunci când discutăm detalii legate de un serviciu solicitat",
    "section.3.item3":
      "Art. 6(1)(f) GDPR – Interes legitim, pentru a putea răspunde cererilor dvs.",
    "section.4.title": "Unde sunt stocate datele",
    "section.4.item1":
      "Web3Forms – serviciu extern criptat, certificat și compatibil GDPR.",
    "section.4.item2":
      'Mesajul este trimis în inbox-ul nostru la adresa: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>.',
    "section.4.item3": "Nu folosim baze de date proprii.",
    "section.4.item4":
      "Nu transmitem date către alte servicii sau terți, în afara procesării prin Web3Forms.",
    "section.5.title": "Durata de stocare a datelor",
    "section.5.item1": "Comunicări în curs: pe durata discuțiilor",
    "section.5.item2": "Solicitări nesoluționate: până la 90 de zile",
    "section.5.item3":
      "Colaborări finalizate: păstrare minimă necesară în scop contractual",
    "section.5.note":
      "La cererea dvs., datele pot fi șterse imediat (vezi Secțiunea 6).",
    "section.6.title": "Drepturile dvs. conform GDPR",
    "section.6.item1": "Dreptul de acces la datele dvs.",
    "section.6.item2": "Dreptul la rectificare",
    "section.6.item3": "Dreptul la ștergere („dreptul de a fi uitat”)",
    "section.6.item4": "Dreptul de restricționare a prelucrării",
    "section.6.item5": "Dreptul la opoziție",
    "section.6.item6": "Dreptul de portabilitate a datelor",
    "section.6.lead":
      'Pentru exercitarea oricărui drept, ne puteți contacta la: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>.',
    "section.6.note": "Vom răspunde în maximum 30 de zile lucrătoare.",
    "section.7.title": "Dezvăluirea datelor către terți",
    "section.7.lead":
      "Nu vindem, nu distribuim și nu transferăm datele dvs. către terți.",
    "section.7.note":
      "Singura excepție este procesatorul tehnic Web3Forms, necesar pentru transmiterea mesajelor. Web3Forms este compatibil GDPR și nu utilizează datele dvs. în scopuri proprii.",
    "section.8.title": "Securitatea datelor",
    "section.8.item1": "transmitere criptată HTTPS",
    "section.8.item2": "protecție anti-spam (CAPTCHA)",
    "section.8.item3": "acces limitat la inbox",
    "section.8.item4": "procesare prin servere sigure Web3Forms",
    "section.8.note":
      "Totuși, nicio transmisie online nu poate fi garantată 100%.",
    "section.9.title": "Modificări ale politicii",
    "section.9.lead":
      "Ne rezervăm dreptul de a actualiza această Politică periodic. Modificările vor fi publicate pe această pagină cu data actualizării.",
    "section.10.title": "Contact privind protecția datelor",
    "section.10.lead":
      'Pentru întrebări, plângeri sau solicitări GDPR: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>',
    "footer.credit": "AstrimX &middot; Creat de Anghel Alexandru",
  },
  en: {
    "nav.dashboard": "Dashboard",
    "nav.portfolio": "My Portfolio",
    "nav.policy": "Privacy policy",
    "nav.terms": "Terms & Conditions",
    "nav.contact": "Contact",
    "cta.contact": "Contact us",
    "hero.eyebrow": "GDPR aligned // Privacy",
    "hero.title": "PRIVACY POLICY (GDPR) – AstrimX",
    "hero.lead":
      "This Privacy Policy explains how AstrimX collects, uses, and protects personal data from visitors and clients.",
    "hero.note":
      "We comply with Regulation (EU) 2016/679 (GDPR) and applicable Romanian data protection laws.",
    "hero.updated": "Last update: December 2025",
    "badge.gdpr": "GDPR ready",
    "badge.scope": "Contact form only",
    "badge.storage": "Web3Forms + inbox",
    "badge.cookies": "No tracking cookies",
    "section.overview.title": "What this policy covers",
    "section.overview.desc":
      "This document details the data we collect, why we process it, the legal basis, how long we keep it, your rights, and how to reach us.",
    "section.1.title": "Personal data we collect",
    "section.1.lead":
      "Through the site contact form we collect the following information:",
    "section.1.item1": "Full name",
    "section.1.item2": "Email address",
    "section.1.item3": "Message content sent via the form",
    "section.1.item4":
      "IP address (automatically collected by Web3Forms for anti-abuse protection)",
    "section.1.note":
      "We do not collect additional data, use tracking cookies, or monitor user activity.",
    "section.2.title": "Purpose of processing",
    "section.2.lead": "Data is used exclusively to:",
    "section.2.item1": "respond to your request",
    "section.2.item2": "communicate project details",
    "section.2.item3": "provide an offer or collaboration proposal",
    "section.2.item4": "exchange messages about web services",
    "section.2.note":
      "We do not use the data for other purposes (marketing, newsletters, etc.).",
    "section.3.title": "Legal basis for processing (GDPR)",
    "section.3.lead": "We process data under:",
    "section.3.item1":
      "Art. 6(1)(a) GDPR – Consent, when you explicitly agree to data processing",
    "section.3.item2":
      "Art. 6(1)(b) GDPR – Contract performance, when we discuss services you request",
    "section.3.item3":
      "Art. 6(1)(f) GDPR – Legitimate interest, to respond to your inquiries",
    "section.4.title": "Where data is stored",
    "section.4.item1":
      "Web3Forms – encrypted, certified, and GDPR-compliant external service.",
    "section.4.item2":
      'Your message is delivered to our inbox at: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>.',
    "section.4.item3": "We do not use proprietary databases.",
    "section.4.item4":
      "We do not share data with other services or third parties beyond Web3Forms processing.",
    "section.5.title": "Data retention",
    "section.5.item1": "Active conversations: for the duration of discussions",
    "section.5.item2": "Pending requests: up to 90 days",
    "section.5.item3":
      "Completed collaborations: minimum retention required for contractual purposes",
    "section.5.note":
      "On request, data can be erased immediately (see Section 6).",
    "section.6.title": "Your GDPR rights",
    "section.6.item1": "Right of access",
    "section.6.item2": "Right to rectification",
    "section.6.item3": "Right to erasure (“right to be forgotten”)",
    "section.6.item4": "Right to restrict processing",
    "section.6.item5": "Right to object",
    "section.6.item6": "Right to data portability",
    "section.6.lead":
      'To exercise any right, contact us at: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>.',
    "section.6.note": "We respond within a maximum of 30 working days.",
    "section.7.title": "Data disclosure to third parties",
    "section.7.lead":
      "We do not sell, distribute, or transfer your data to third parties.",
    "section.7.note":
      "The only exception is the technical processor Web3Forms, required to deliver messages. Web3Forms is GDPR compliant and does not use your data for its own purposes.",
    "section.8.title": "Data security",
    "section.8.item1": "encrypted HTTPS transmission",
    "section.8.item2": "anti-spam protection (CAPTCHA)",
    "section.8.item3": "limited inbox access",
    "section.8.item4": "processing via secure Web3Forms servers",
    "section.8.note":
      "However, no online transmission can be guaranteed to be 100% secure.",
    "section.9.title": "Policy changes",
    "section.9.lead":
      "We reserve the right to update this Policy periodically. Changes will be published on this page with the update date.",
    "section.10.title": "Data protection contact",
    "section.10.lead":
      'For questions, complaints, or GDPR requests: <a href="mailto:astrimx.contact@gmail.com">astrimx.contact@gmail.com</a>',
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
