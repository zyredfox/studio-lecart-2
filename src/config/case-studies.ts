import type { CaseStudy } from "@/config/types";

/**
 * Études de cas Studio Lecart — ton client d’abord (inspiré STAR / agences vitrine).
 * Pas de stack ni KPI techniques en vitrine : le détail technique reste en échange direct.
 */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "tata-carotte",
    cardSummary: "Un site clair pour présenter trois services à Grenoble, pensé mobile.",
    title: "Tata Carotte — garde et promenade canine",
    client: "Tata Carotte (pet sitter indépendante, Grenoble)",
    sector: "Services aux particuliers — animaux",
    problem:
      "Peu visible en ligne alors que trois offres différentes coexistent (garde à domicile, promenade, transport véto). Les tarifs manquaient de clarté et les clients partis en vacances avaient besoin d’être rassurés.",
    solution:
      "Site vitrine structuré autour de trois parcours simples, avec une page Tarifs lisible, une page Vacances dédiée, et des boutons pour appeler ou écrire sans détour.",
    outcomes: [
      "Chaque service a sa place : le visiteur comprend en quelques secondes ce qui est proposé.",
      "Tarifs et informations « vacances » accessibles sans fouiller le site.",
      "Contact direct (téléphone, e-mail) et renvoi vers les avis Google pour inspirer confiance.",
    ],
    resultUrl: "https://tata-carotte.fr",
  },
  {
    id: "sainte-barbe",
    cardSummary: "Un espace privé pour réserver les chambres sans se marcher dessus.",
    title: "Domaine Sainte Barbe — réservations familiales",
    client: "Famille Leroy — Domaine Sainte Barbe (Plouharnel, Morbihan)",
    sector: "Location saisonnière — espace familial privé",
    problem:
      "Coordonner les séjours entre proches, éviter les doubles réservations, et garder guides d’accès et infos maison au même endroit — sans tout exposer au public.",
    solution:
      "Espace connecté par compte : calendrier des chambres, demandes de séjour, et pages utiles (guide, accès) réservées aux personnes autorisées.",
    outcomes: [
      "Les créneaux se voient en un coup d’œil : moins de confusion qu’avec un tableur partagé.",
      "Chacun peut proposer ou valider un séjour selon les règles de la famille.",
      "Les infos pratiques de la maison restent centralisées pour les membres du cercle.",
    ],
    resultUrl: "https://sainte-barbe.netlify.app",
  },
  {
    id: "atelier-lisa",
    cardSummary: "Une galerie soignée et un parcours simple pour les commandes sur mesure.",
    title: "Atelier de Lisa — galerie d’artiste",
    client: "Lisa — Atelier de Lisa (peintre & linograveuse, Grenoble)",
    sector: "Art & culture — vente d'œuvres",
    problem:
      "Montrer peintures et linogravures avec de belles images, être trouvable sur le web, et recevoir des demandes « sur mesure » sans se lancer dans une boutique en ligne lourde.",
    solution:
      "Galerie par type d’œuvre, fiche dédiée par pièce, page Sur mesure pour les projets personnalisés, et contact par e-mail — adapté au rythme d’une artiste.",
    outcomes: [
      "Chaque œuvre est présentée avec son visuel et un texte qui la contextualise.",
      "Ajout d’une nouvelle pièce sans refaire l’ensemble du site.",
      "Parcours naturel : découvrir la galerie, puis écrire pour une commande.",
    ],
    resultUrl: "https://atelier-lisa.fr",
  },
] as const;

export const portfolioPageLead =
  "Trois sites livrés que vous pouvez parcourir. Pour chaque projet : le besoin du client, ce qui a été mis en place, et ce que ça change au quotidien — sans jargon technique.";

export const homePortfolioSection = {
  kicker: "Réalisations",
  title: "Des sites que vous pouvez visiter",
  lead: "Petite vitrine locale, espace de réservation familial, galerie d’artiste — des projets concrets, pas des maquettes.",
} as const;

/** Projet mis en avant dans le hero (capture principale). */
export const heroFeaturedCaseStudyId = "tata-carotte" as const;
