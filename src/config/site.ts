/** Studio Lecart — source unique (contact, identité, SEO, feature flags). */

export const siteConfig = {
  siteName: "Studio Lecart",
  siteTagline: "Sites vitrine haute performance & évolutions IA",
  /** Une ligne dans le pied de page (NAP + zone — pas de paragraphe dupliqué SEO). */
  footerTagline:
    "Sites vitrine & IA · Grenoble, Isère et France (sur place ou à distance)",
  themeColor: "#0f766e",
  url: "https://studio-lecart.fr",
  email: "contact@studio-lecart.fr",
  country: "FR",
  founderName: "Julien Lecart",
  founderLastName: "Lecart",
  founderFirstName: "Julien",
  founderAge: 27,
  founderCity: "Grenoble",
  founderCredentials:
    "Diplômé d'ingénieur · Développeur · Formation data scientist",
  founderIntro:
    "J'aime le travail carré. Ma double compétence en développement et en analyse de données me permet de créer des sites transparents : vous reprenez le contrôle sur vos textes, et votre site est pensé pour durer, sans frais cachés.",
  trustSectors: ["Artisans", "Associations", "Indépendants", "TPE"] as const,
  heroPillsAfterCity: ["Ingénieur", "Dev", "Culture data"] as const,
  servicesIaSectionKicker: "Offres Studio",
  schemaDefaultDescription:
    "Julien Lecart, ingénieur à Grenoble — création de sites vitrines professionnels ultra-rapides, robustes, sans frais cachés et prêts pour les évolutions de demain.",
  ogImagePath: "/og.png",

  // ── PLACEHOLDERS — valeurs provisoires à remplacer avant déploiement ──
  /** Numéro E.164 pour `tel:` et JSON-LD */
  phone: "+33600000000",
  /** Numéro affiché (footer, contact, à propos) */
  phoneDisplay: "06 00 00 00 00",
  /** URL prise de rendez-vous (vide = masquer le bouton sur /contact) */
  calendarUrl: "",
  /** Adresse postale (mentions légales, footer, schema.org) */
  addressLine: "12 rue Example, 38000 Grenoble",
  /** Numéro SIRET — 14 chiffres (mentions légales) */
  siret: "123 456 789 00012",
  /** Témoignage fictif — page d'accueil tant qu'aucun avis client n'est publié */
  placeholderTestimonialQuote:
    "« Projet livré dans les délais, avec un site clair et des explications accessibles. »",
  placeholderTestimonialFooter: "— Client TPE, secteur artisanal",
  // ── fin PLACEHOLDERS ──
} as const;

export function applySiteTokens(text: string): string {
  return text
    .replace(/\{siteName\}/g, siteConfig.siteName)
    .replace(/\{founderFirstName\}/g, siteConfig.founderFirstName)
    .replace(/\{founderName\}/g, siteConfig.founderName)
    .replace(/\{founderLastName\}/g, siteConfig.founderLastName)
    .replace(/\{founderCity\}/g, siteConfig.founderCity);
}

export function seoHomeDescription(): string {
  return `${siteConfig.siteName} à ${siteConfig.founderCity} : ${siteConfig.founderName}, ingénieur & développeur — sites vitrine sur mesure, rapides et visibles sur Google, avec IA utile quand elle fait gagner du temps.`;
}

export function seoAProposDescription(): string {
  return `${siteConfig.founderFirstName} ${siteConfig.founderLastName} — ${siteConfig.founderAge} ans, ${siteConfig.founderCity}. Ingénieur, développeur, formation data scientist. ${siteConfig.siteName}, sites vitrine et IA utile.`;
}

export function seoContactDescription(): string {
  return `Contactez ${siteConfig.siteName} pour un devis ou un échange sur votre projet vitrine, SEO ou IA. Réponse sous quelques jours ouvrés depuis ${siteConfig.founderCity}.`;
}

export function seoServicesDescription(): string {
  return `Sites vitrine rapides, réponses automatiques et connexion d'outils métiers pour ${siteConfig.siteName} à ${siteConfig.founderCity}. Problème → solution → livrables clairs pour chaque offre.`;
}

export function seoForfaitsDescription(): string {
  return `Forfaits Essentiel (à partir de 1 200 €), Pro (à partir de 2 500 €) et Sur mesure & IA (sur devis) chez ${siteConfig.siteName}. Comparatif et devis personnalisé après brief.`;
}

export function seoPortfolioDescription(): string {
  return `Portfolio ${siteConfig.siteName} : Tata Carotte, Domaine Sainte Barbe, Atelier de Lisa. Besoin client, livrables et bénéfices — sites en ligne consultables.`;
}

export function seoMethodeDescription(): string {
  return `Méthode de travail ${siteConfig.siteName} : échange, structure, validation, développement sur mesure, mise en ligne et accompagnement. Processus transparent depuis ${siteConfig.founderCity}.`;
}

export function seoMentionsLegalesDescription(): string {
  return `Mentions légales du site ${siteConfig.siteName} — éditeur ${siteConfig.founderName}, contact et hébergement.`;
}

export function founderInitials(): string {
  return siteConfig.founderName
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function siteBaseUrl(): string {
  return siteConfig.url.replace(/\/+$/, "");
}

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteBaseUrl()}${path}`;
}
