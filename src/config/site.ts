/** Studio Lecart — source unique (contact, identité, SEO, feature flags). */

export const siteConfig = {
  siteName: "Studio Lecart",
  siteTagline: "Sites vitrine sur mesure & IA",
  themeColor: "#0d9488",
  url: "https://studio-lecart.fr",
  email: "contact@studio-lecart.fr",
  phone: "+33600000000",
  phoneDisplay: "06 00 00 00 00",
  calendarUrl: "",
  n8nChatWebhookUrl: "",
  country: "FR",
  founderName: "Julien Lecart",
  founderLastName: "Lecart",
  founderFirstName: "Julien",
  founderAge: 27,
  founderCity: "Grenoble",
  founderCredentials:
    "Diplômé d'ingénieur · Développeur · Formation data scientist",
  founderIntro:
    "Je relie le développement web rigoureux et la culture data : des sites nets et maintenables, et des briques IA quand elles servent vraiment votre métier — pas pour la frime.",
  addressLine: "Grenoble — adresse complète à compléter",
  siret: "SIRET à compléter",
  trustSectors: ["Artisans", "Associations", "Indépendants", "TPE"] as const,
  heroPillsAfterCity: ["Ingénieur", "Dev", "Culture data"] as const,
  servicesIaSectionKicker: "Offres Studio",
  placeholderTestimonialQuote:
    "« On voulait un site honnête et lisible ; {founderFirstName} a tenu les délais et a su vulgariser sans nous prendre pour des idiots. »",
  placeholderTestimonialFooter:
    "— Exemple de formulation — à remplacer par un vrai client",
  showcaseDemoChatTitle: "Assistant {siteName} (démo)",
  n8nChatInitialGreeting:
    "Bonjour — je peux vous orienter sur les services de {siteName}. Une question en tête ?",
  schemaDefaultDescription:
    "Julien Lecart, ingénieur & développeur à Grenoble — sites vitrine sur mesure, SEO de base, IA et chatbots utiles pour TPE et indépendants.",
  ogImagePath: "/og.png",
} as const;

function envDisablesN8nChat(value: string | undefined): boolean {
  if (value === undefined || value === "") return false;
  const v = value.trim().toLowerCase();
  return v === "0" || v === "false" || v === "off" || v === "no";
}

export function getN8nChatWebhookUrl(): string {
  const fromEnv = import.meta.env.PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim();
  if (fromEnv) return fromEnv;
  return String(siteConfig.n8nChatWebhookUrl ?? "").trim();
}

export function isN8nChatEnabled(): boolean {
  if (envDisablesN8nChat(import.meta.env.PUBLIC_N8N_CHAT_ENABLED)) return false;
  return getN8nChatWebhookUrl().length > 0;
}

export function applySiteTokens(text: string): string {
  return text
    .replace(/\{siteName\}/g, siteConfig.siteName)
    .replace(/\{founderFirstName\}/g, siteConfig.founderFirstName)
    .replace(/\{founderName\}/g, siteConfig.founderName)
    .replace(/\{founderLastName\}/g, siteConfig.founderLastName)
    .replace(/\{founderCity\}/g, siteConfig.founderCity);
}

export function seoHomeDescription(): string {
  return `${siteConfig.siteName} à ${siteConfig.founderCity} : ${siteConfig.founderName}, ingénieur & développeur — sites vitrine sur mesure, SEO de base, IA et chatbots utiles.`;
}

export function seoAProposDescription(): string {
  return `${siteConfig.founderFirstName} ${siteConfig.founderLastName} — ${siteConfig.founderAge} ans, ${siteConfig.founderCity}. Ingénieur, développeur, formation data scientist. ${siteConfig.siteName}, sites vitrine et IA utile.`;
}

export function seoContactDescription(): string {
  return `Contactez ${siteConfig.siteName} pour un devis ou un échange sur votre projet vitrine, SEO ou IA. Réponse sous quelques jours ouvrés depuis ${siteConfig.founderCity}.`;
}

export function seoServicesDescription(): string {
  return `Sites vitrine sur mesure, SEO de base et solutions IA pour ${siteConfig.siteName} à ${siteConfig.founderCity}. Problème → solution → livrables clairs pour chaque offre.`;
}

export function seoForfaitsDescription(): string {
  return `Forfaits Essentiel (à partir de 1 200 €), Pro (à partir de 2 500 €) et Sur mesure & IA (sur devis) chez ${siteConfig.siteName}. Comparatif et devis personnalisé après brief.`;
}

export function seoPortfolioDescription(): string {
  return `Portfolio ${siteConfig.siteName} : site pet sitter Tata Carotte, réservations familiales Domaine Sainte Barbe, galerie Atelier de Lisa. Études de cas avec stack, résultats et performances.`;
}

export function seoMethodeDescription(): string {
  return `Méthode de travail ${siteConfig.siteName} : brief, structure, maquette, développement SSG, mise en ligne et accompagnement. Processus transparent depuis ${siteConfig.founderCity}.`;
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
