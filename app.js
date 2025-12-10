const scrollLinks = document.querySelectorAll("[data-target]");
const githubResult = document.getElementById("github-result");
const contactForm = document.getElementById("contact-form");
const messageField = document.getElementById("message");
const footerYear = document.getElementById("year");
const GITHUB_USERNAME = "Alexandru-07";
const MAILBOX = "astrimx.contact@gmail.com";
const planButtons = document.querySelectorAll("[data-plan-note]");
const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const attributeElements = document.querySelectorAll("[data-i18n-attr]");

const translations = {
  ro: {
    "nav.projects": "Proiectele mele",
    "nav.plans": "Planuri",
    "nav.portfolio": "Portofoliul meu",
    "nav.dashboard": "Dashboard",
    "nav.contact": "Contact",
    "nav.policy": "Politica de confidentialitate",
    "nav.cta": "Scrie-mi",
    "hero.eyebrow": "Anghel Alexandru // Programator + CEO",
    "hero.title": "O experienta disponibila tuturor.",
    "hero.subtitle":
      "De la concept la lansare, AstrimX construieste interfete curate, front-end-uri rapide si povesti de produs imersive create pentru fondatorii ambitiosi.",
    "hero.primaryCta": "Vezi planurile",
    "hero.secondaryCta": "Vezi proiectele",
    "hero.portfolioCta": "Portofoliul meu",
    "hero.latencyLabel": "Latenta",
    "hero.deploysLabel": "Lansari",
    "hero.stackLabel": "Stack",
    "hero.stackValue": "HTML / CSS / JS",
    "portfolio.eyebrow": "Portofoliu live",
    "portfolio.title": "Experiente rapide construite si lansate real",
    "portfolio.subtitle":
      "Selectie curenta de proiecte publice gazduite pe GitHub Pages, cu focus pe viteza, claritate si micro-animatii.",
    "portfolio.cta.primary": "Vezi proiectele live",
    "portfolio.cta.secondary": "Cere un proiect similar",
    "portfolio.badge.count": "4 proiecte live",
    "portfolio.badge.fast": "Sub 1s LCP pe desktop",
    "portfolio.badge.stack": "HTML / CSS / JavaScript",
    "portfolio.live.heading": "Lansari reale",
    "portfolio.live.description":
      "Carduri cu proiectele mele preferate. Fiecare link deschide instant versiunea live, gata de explorat.",
    "portfolio.secondary.heading": "Ai nevoie de un site nou?",
    "portfolio.secondary.description":
      "Daca vibe-ul acestor proiecte iti place, pot construi rapid o experienta similara pentru brandul tau, cu aceeasi atentie la detalii si viteza.",
    "portfolio.projects.shopit.tag": "E-commerce UI",
    "portfolio.projects.shopit.desc":
      "Landing dedicat pentru un magazin online, cu layout modular, accent pe conversie si experienta clara de cumparare.",
    "portfolio.projects.aura.tag": "Atelier creativ",
    "portfolio.projects.aura.desc":
      "Website elegant pentru un atelier de creatie, cu estetica luminoasa, accent pe storytelling si galerie curata.",
    "portfolio.projects.agro.tag": "Brand agricol",
    "portfolio.projects.agro.desc":
      "Landing prietenos pentru un brand agricol, cu sectiuni aerisite si iconografie clara pentru servicii.",
    "portfolio.projects.solar.tag": "Experimente JS",
    "portfolio.projects.solar.desc":
      "Primul proiect in care am folosit intens JavaScript si CSS pentru a construi o explorare 3D stilizata a sistemului solar.",
    "portfolio.card.cta": "Vezi live",
    "portfolio.card.note": "Lansat pe GitHub Pages",
    "portfolio.cta.dashboard": "Intoarce-te la dashboard",
    "portfolio.cta.contact": "Trimite un brief",
    "projects.heading": "Proiectele mele",
    "projects.description":
      "O privire live asupra fluxurilor mele curente din GitHub, direct din contul AstrimX.",
    "projects.github.title": "Evidenta GitHub",
    "projects.github.description":
      "Selectie live din <strong>@Alexandru-07</strong>. Acceseaza profilul complet intr-un singur click.",
    "projects.skills.title": "Tehnologii principale",
    "projects.skills.description":
      "Instrumente testate pentru front-end modern.",
    "plans.heading": "Planuri",
    "plans.description":
      "Alege nivelul de colaborare potrivit pentru viziunea ta de produs.",
    "plans.standard.title": "Plan Standard",
    "plans.standard.priceNote": "Landing page",
    "plans.standard.description":
      "Landing page gata de lansare, cu text clar si interfata responsiva.",
    "plans.standard.feature1": "Site de o pagina (Landing Page)",
    "plans.standard.feature2": "Sectiuni: Hero, Despre, Servicii, Contact",
    "plans.standard.feature3":
      "Design complet responsiv (mobil/tableta/desktop)",
    "plans.standard.feature4":
      "SEO on-page de baza (title si meta description)",
    "plans.standard.feature5": "1 revizie",
    "plans.standard.feature6": "Livrare: 3-5 zile",
    "plans.standard.feature7": "Construit cu HTML / CSS / JavaScript",
    "plans.standard.feature8": "Hosting si domeniu neincluse (ofer ghidaj)",
    "plans.standard.cta": "Alege Standard",
    "plans.standard.note":
      "Vreau sa continui cu Planul Standard ($15). Te rog trimite-mi urmatorii pasi si spune-mi ce informatii iti sunt necesare.",
    "plans.plus.title": "Plan Plus",
    "plans.plus.priceNote": "Pana la 3 pagini",
    "plans.plus.description":
      "Experienta multi-pagina extinsa cu detalii de miscare si flux de contact.",
    "plans.plus.feature1":
      "Pana la 3 pagini (Home, Despre, Servicii sau similar)",
    "plans.plus.feature2": "Design modern cu sectiuni avansate",
    "plans.plus.feature3": "Animatii si tranzitii CSS line",
    "plans.plus.feature4": "Formular de contact (functionalitate de baza)",
    "plans.plus.feature5": "Design complet responsiv",
    "plans.plus.feature6":
      "SEO on-page de baza (title si meta pentru fiecare pagina)",
    "plans.plus.feature7": "Configurare favicon",
    "plans.plus.feature8": "2 revizii",
    "plans.plus.feature9": "Livrare: 4-7 zile",
    "plans.plus.feature10": "Ghidaj pentru hosting si domeniu inclus",
    "plans.plus.cta": "Alege Plus",
    "plans.plus.note":
      "Sunt gata sa aleg Planul Plus ($35) si vreau detalii despre timeline si informatiile de care ai nevoie.",
    "plans.premium.title": "Plan Premium",
    "plans.premium.priceNote": "Pachet personalizat",
    "plans.premium.description":
      "Sistem complet personalizat cu integrari, optimizare si lansare.",
    "plans.premium.feature1":
      "Pana la 5 pagini (Home, Despre, Servicii, Portofoliu/Galerie, Contact)",
    "plans.premium.feature2": "Design complet personalizat (fara template-uri)",
    "plans.premium.feature3": "Animatii UI avansate si micro-interactiuni",
    "plans.premium.feature4":
      "Formular de contact sau integrare externa (Netlify Forms / FormSubmit / Web3Forms)",
    "plans.premium.feature5": "Pagina portofoliu/galerie inclusa",
    "plans.premium.feature6":
      "Optimizare performanta (imagini comprimate, cod curat)",
    "plans.premium.feature7": "SEO on-page de baza pentru toate paginile",
    "plans.premium.feature8": "Integrare Google Maps (optional)",
    "plans.premium.feature9": "Protectie anti-spam in formular (honeypot)",
    "plans.premium.feature10": "Design complet responsiv",
    "plans.premium.feature11": "3 revizii",
    "plans.premium.feature12":
      "Hosting si deploy complet (Netlify / GitHub Pages / hosting client)",
    "plans.premium.feature13": "Livrare: 7-10 zile",
    "plans.premium.cta": "Alege Premium",
    "plans.premium.note":
      "Vreau sa rezerv Planul Premium ($75). Trimite-mi detalii despre integrari, livrare si pasii de inceput.",
    "contact.heading": "Contacteaza AstrimX",
    "contact.description":
      "Porneste o discutie instant &mdash; fara tab-uri noi in inbox.",
    "contact.card.heading": "Comandamentul AstrimX",
    "contact.card.subheading": "Anghel Alexandru &mdash; Programator &amp; CEO",
    "contact.card.company": "Companie",
    "contact.card.email": "Email principal",
    "contact.form.heading": "Trimite un brief direct",
    "contact.form.helper":
      "Mesajele pleaca printr-un client de mail securizat. Trimiterea directa in Gmail necesita un backend dedicat.",
    "form.name.label": "Nume complet",
    "form.name.placeholder": "Numele si prenumele",
    "form.email.label": "Email",
    "form.email.placeholder": "tu@example.com",
    "form.message.label": "Detalii proiect",
    "form.message.placeholder": "Descrie site-ul, obiectivele si deadline-ul.",
    "form.submit": "Trimite mesajul",
    "footer.credit": "AstrimX &middot; Creat de Anghel Alexandru",
    "github.loading": "Incarc datele GitHub pentru @Alexandru-07...",
    "github.unavailable": "Profilul GitHub nu este disponibil acum.",
    "github.fetching": "Se preiau datele din GitHub...",
    "github.notFound":
      "Nu am gasit un profil cu acel username. Verifica scrierea.",
    "github.serviceDown":
      "GitHub nu este disponibil acum. Reincearca in scurt timp.",
    "github.network": "A aparut o problema de retea. Verifica conexiunea.",
    "github.empty": "Momentan nu exista depozite publice.",
    "github.noBio": "Nu exista biografie disponibila.",
    "github.cta": "Deschide profilul",
    "github.followers": "Urmaritori",
    "github.repos": "Repo-uri",
  },
  en: {
    "nav.projects": "My Projects",
    "nav.plans": "Plans",
    "nav.portfolio": "My Portofolio",
    "nav.dashboard": "Dashboard",
    "nav.contact": "Contact",
    "nav.policy": "Privacy policy",
    "nav.cta": "Get in Touch",
    "hero.eyebrow": "Anghel Alexandru // Programmer + CEO",
    "hero.title": "An experience available to everyone.",
    "hero.subtitle":
      "From concept to launch, AstrimX delivers crisp interfaces, performant frontends, and immersive product stories crafted for ambitious founders.",
    "hero.primaryCta": "Explore Plans",
    "hero.secondaryCta": "View Projects",
    "hero.portfolioCta": "My Portofolio",
    "hero.latencyLabel": "Latency",
    "hero.deploysLabel": "Deploys",
    "hero.stackLabel": "Stack",
    "hero.stackValue": "HTML / CSS / JS",
    "portfolio.eyebrow": "Live portfolio",
    "portfolio.title": "Fast experiences shipped to production",
    "portfolio.subtitle":
      "Current selection of public projects hosted on GitHub Pages, focused on speed, clarity, and thoughtful motion.",
    "portfolio.cta.primary": "View live builds",
    "portfolio.cta.secondary": "Request a similar build",
    "portfolio.badge.count": "4 live builds",
    "portfolio.badge.fast": "Sub-1s LCP on desktop",
    "portfolio.badge.stack": "HTML / CSS / JavaScript",
    "portfolio.live.heading": "Shipped builds",
    "portfolio.live.description":
      "Cards for my favorite launches. Each link opens the live version instantly so you can explore the experience.",
    "portfolio.secondary.heading": "Need a fresh build?",
    "portfolio.secondary.description":
      "If you like the vibe of these projects, I can ship a similar experience for your brand with the same care for detail and speed.",
    "portfolio.projects.shopit.tag": "E-commerce UI",
    "portfolio.projects.shopit.desc":
      "Dedicated landing for an online shop with modular layout, conversion-focused copy, and a clear buying path.",
    "portfolio.projects.aura.tag": "Creative atelier",
    "portfolio.projects.aura.desc":
      "Elegant site for a creative workshop with bright aesthetic, storytelling focus, and a clean gallery.",
    "portfolio.projects.agro.tag": "Agro brand",
    "portfolio.projects.agro.desc":
      "Friendly landing for an agriculture brand with airy sections and clear iconography for services.",
    "portfolio.projects.solar.tag": "JS experiments",
    "portfolio.projects.solar.desc":
      "The first project where I leaned heavily on JavaScript and CSS to build a stylized 3D solar system exploration.",
    "portfolio.card.cta": "View live",
    "portfolio.card.note": "Shipped on GitHub Pages",
    "portfolio.cta.dashboard": "Back to dashboard",
    "portfolio.cta.contact": "Send a brief",
    "projects.heading": "My Projects",
    "projects.description":
      "A live snapshot of my current GitHub workstreams pulled straight from the AstrimX account.",
    "projects.github.title": "GitHub Spotlight",
    "projects.github.description":
      "Streaming highlights from <strong>@Alexandru-07</strong>. Click through for the complete profile.",
    "projects.skills.title": "Core Stacks",
    "projects.skills.description": "Battle-tested tools for modern frontends.",
    "plans.heading": "Plans",
    "plans.description":
      "Pick the collaboration layer that matches your product vision.",
    "plans.standard.title": "Standard Plan",
    "plans.standard.priceNote": "Landing page",
    "plans.standard.description":
      "Launch-ready landing page with polished copy and responsive UI.",
    "plans.standard.feature1": "1-page website (Landing Page)",
    "plans.standard.feature2": "Sections: Hero, About, Services, Contact",
    "plans.standard.feature3":
      "Fully responsive design (mobile/tablet/desktop)",
    "plans.standard.feature4": "Basic on-page SEO (title & meta description)",
    "plans.standard.feature5": "1 revision",
    "plans.standard.feature6": "Delivery: 3-5 days",
    "plans.standard.feature7": "Built with HTML / CSS / JavaScript",
    "plans.standard.feature8":
      "Hosting & domain not included (guidance available)",
    "plans.standard.cta": "Choose Standard",
    "plans.standard.note":
      "I'd like to move forward with the Standard Plan ($15). Please share the next steps and let me know what details you need.",
    "plans.plus.title": "Plus Plan",
    "plans.plus.priceNote": "Up to 3 pages",
    "plans.plus.description":
      "Expanded multi-page experience with motion details and contact flow.",
    "plans.plus.feature1": "Up to 3 pages (Home, About, Services or similar)",
    "plans.plus.feature2": "Modern design with advanced sections",
    "plans.plus.feature3": "Smooth CSS animations & transitions",
    "plans.plus.feature4": "Contact form (basic functionality)",
    "plans.plus.feature5": "Fully responsive design",
    "plans.plus.feature6": "Basic on-page SEO (title & meta for each page)",
    "plans.plus.feature7": "Favicon setup",
    "plans.plus.feature8": "2 revisions",
    "plans.plus.feature9": "Delivery: 4-7 days",
    "plans.plus.feature10": "Hosting & domain guidance included",
    "plans.plus.cta": "Choose Plus",
    "plans.plus.note":
      "I'm ready to choose the Plus Plan ($35) and would love more information about the timeline and anything you need from me.",
    "plans.premium.title": "Premium Plan",
    "plans.premium.priceNote": "Custom suite",
    "plans.premium.description":
      "Complete custom site system with integrations, optimization, and deployment.",
    "plans.premium.feature1":
      "Up to 5 pages (Home, About, Services, Portfolio/Gallery, Contact)",
    "plans.premium.feature2": "Fully custom design (no templates)",
    "plans.premium.feature3": "Advanced UI animations & micro-interactions",
    "plans.premium.feature4":
      "Contact form (basic or external integration: Netlify Forms / FormSubmit / Web3Forms)",
    "plans.premium.feature5": "Portfolio/Gallery page included",
    "plans.premium.feature6":
      "Performance optimization (compressed images, clean code)",
    "plans.premium.feature7": "Basic on-page SEO for all pages",
    "plans.premium.feature8": "Google Maps integration (optional)",
    "plans.premium.feature9": "Anti-spam form protection (honeypot)",
    "plans.premium.feature10": "Fully responsive design",
    "plans.premium.feature11": "3 revisions",
    "plans.premium.feature12":
      "Hosting & full deployment (Netlify / GitHub Pages / client hosting)",
    "plans.premium.feature13": "Delivery: 7-10 days",
    "plans.premium.cta": "Choose Premium",
    "plans.premium.note":
      "I want to book the Premium Plan ($75). Please send me more info on integrations, deployment, and how we get started.",
    "contact.heading": "Contact AstrimX",
    "contact.description":
      "Start a thread instantly&mdash;no inbox tab hopping required.",
    "contact.card.heading": "AstrimX Command Deck",
    "contact.card.subheading": "Anghel Alexandru &mdash; Programmer &amp; CEO",
    "contact.card.company": "Company",
    "contact.card.email": "Primary Email",
    "contact.form.heading": "Send A Direct Brief",
    "contact.form.helper":
      "Messages dispatch via secure mail client. Direct Gmail delivery requires a connected backend.",
    "form.name.label": "Full Name",
    "form.name.placeholder": "First name and last name",
    "form.email.label": "Email",
    "form.email.placeholder": "you@example.com",
    "form.message.label": "Project Notes",
    "form.message.placeholder": "Describe your site, goals, and deadline.",
    "form.submit": "Send Message",
    "footer.credit": "AstrimX &middot; Crafted by Anghel Alexandru",
    "github.loading": "Loading GitHub data for @Alexandru-07...",
    "github.unavailable": "GitHub profile unavailable at the moment.",
    "github.fetching": "Fetching profile data...",
    "github.notFound": "No profile found with that username. Check spelling.",
    "github.serviceDown": "GitHub is unavailable right now. Try again shortly.",
    "github.network": "Network issue detected. Please verify your connection.",
    "github.empty": "No public repos yet",
    "github.noBio": "No bio available",
    "github.cta": "Open Profile",
    "github.followers": "Followers",
    "github.repos": "Repos",
  },
};

const defaultLanguage = "ro";
let currentLanguage = defaultLanguage;
let githubProfileData = null;
let githubRepoData = [];
let lastGithubMessageKey = null;

const translate = (key, lang = currentLanguage) => {
  const fallback = translations.en?.[key];
  return translations[lang]?.[key] ?? fallback ?? key;
};

const updateYear = () => {
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;

    const translation = dictionary[key] ?? translations.en?.[key];
    if (!translation) return;

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

const scrollToSection = (targetId) => {
  const section = document.getElementById(targetId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const anchor = event.currentTarget;
    const target =
      anchor.dataset.target || anchor.getAttribute("href").replace("#", "");
    if (!target) {
      return;
    }
    event.preventDefault();
    scrollToSection(target);
  });
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!messageField) return;
    const template = button.dataset.planNote;
    if (!template) return;
    const existing = messageField.value.trim();
    messageField.value = existing
      ? `${template}\n\n${existing}`
      : `${template}\n\n`;
    messageField.focus();
  });
});

const setGithubMessage = (messageKey) => {
  if (!githubResult) return;
  lastGithubMessageKey = messageKey;
  githubProfileData = null;
  githubRepoData = [];
  githubResult.innerHTML = `<p class="muted-text">${translate(messageKey)}</p>`;
};

const renderGithubProfile = (profile, repos = []) => {
  if (!githubResult) return;
  lastGithubMessageKey = null;
  githubProfileData = profile;
  githubRepoData = Array.isArray(repos) ? [...repos] : [];

  const topRepos =
    [...githubRepoData]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => `<span>${repo.name}</span>`)
      .join("") || `<span>${translate("github.empty")}</span>`;

  githubResult.innerHTML = `
        <div class="github-profile">
            <img src="${profile.avatar_url}" alt="${
    profile.login
  } avatar" loading="lazy">
            <div class="github-meta">
                <strong>${profile.name || profile.login}</strong>
                <span class="muted-text">${
                  profile.bio || translate("github.noBio")
                }</span>
                <div class="github-stats">
                    <span>${translate("github.followers")}: ${
    profile.followers
  }</span>
                    <span>${translate("github.repos")}: ${
    profile.public_repos
  }</span>
                </div>
            </div>
        </div>
        <div class="repo-tags">${topRepos}</div>
        <a class="cta secondary" href="${
          profile.html_url
        }" target="_blank" rel="noopener">${translate("github.cta")}</a>
    `;
};

const refreshGithubLanguage = () => {
  if (githubProfileData) {
    renderGithubProfile(githubProfileData, githubRepoData);
  } else if (lastGithubMessageKey) {
    setGithubMessage(lastGithubMessageKey);
  }
};

const fetchGithubProfile = async (username = GITHUB_USERNAME) => {
  if (!githubResult) return;

  const handle = (username || "").trim();

  if (!handle) {
    setGithubMessage("github.unavailable");
    return;
  }

  try {
    githubResult.classList.add("loading");
    setGithubMessage("github.fetching");

    const [profileRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${handle}`),
      fetch(`https://api.github.com/users/${handle}/repos?per_page=20`),
    ]);

    if (!profileRes.ok) {
      if (profileRes.status === 404) {
        setGithubMessage("github.notFound");
      } else {
        setGithubMessage("github.serviceDown");
      }
      return;
    }

    const profile = await profileRes.json();
    const repos = repoRes.ok ? await repoRes.json() : [];
    renderGithubProfile(profile, repos);
  } catch (error) {
    console.error("GitHub fetch failed", error);
    setGithubMessage("github.network");
  } finally {
    githubResult.classList.remove("loading");
  }
};

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLanguageButtons(lang);
  refreshGithubLanguage();
  updateYear();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (!lang || lang === currentLanguage) return;
    setLanguage(lang);
  });
});

setLanguage(defaultLanguage);

if (githubResult) {
  setGithubMessage("github.loading");
  fetchGithubProfile();
}

// NU SE UTILIZEAZA MOMENTAN (OLD VERSION)

// contactForm?.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(contactForm);
//   const name = (formData.get("name") || "").trim();
//   const email = (formData.get("email") || "").trim();
//   const message = (formData.get("message") || "").trim();

//   const subject = encodeURIComponent(
//     `AstrimX Project Brief - ${name || "Prospect"}`
//   );
//   const body = encodeURIComponent(
//     `Name: ${name}\nEmail: ${email}\n\nProject Notes:\n${message}\n\nSent from AstrimX contact console.`
//   );

//   window.location.href = `mailto:${MAILBOX}?subject=${subject}&body=${body}`;
//   contactForm.reset();
// });
