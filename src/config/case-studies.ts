import type { CaseStudy } from "@/config/types";

/**
 * Études de cas Studio Lecart — besoin client, réponse concrète, bénéfices mesurables.
 */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "tata-carotte",
    cardSummary:
      "Un site rapide et clair pour rassurer les clients et afficher les tarifs sans détour à Grenoble.",
    title: "Tata Carotte — garde et promenade canine",
    client: "Tata Carotte (pet sitter indépendante, Grenoble)",
    sector: "Services aux particuliers — animaux",
    problem:
      "Peu visible en ligne sur smartphone alors que trois offres coexistent (garde, promenade, transport véto). Les tarifs manquaient de clarté et les clients partis en vacances avaient besoin d'être rassurés rapidement.",
    solution:
      "Site léger structuré autour de trois parcours simples, avec une page Tarifs lisible, une page Vacances dédiée et des boutons pour appeler ou écrire sans détour.",
    outcomes: [
      "Chargement nettement plus rapide sur mobile qu'un site classique de la concurrence locale.",
      "Tarifs et zone d'intervention faciles à trouver pour Google et les assistants d'IA.",
      "Contact direct (appel, e-mail) en un clic pour les demandes urgentes.",
    ],
    resultUrl: "https://tata-carotte.fr",
  },
  {
    id: "sainte-barbe",
    cardSummary:
      "Un espace privé pour organiser les réservations d'une grande maison de famille, avec 0 € de frais d'hébergement.",
    title: "Domaine Sainte Barbe — réservations familiales",
    client: "Famille Leroy — Domaine Sainte Barbe (Plouharnel, Morbihan)",
    sector: "Location saisonnière — espace familial privé",
    problem:
      "Coordonner les séjours entre proches, éviter les doubles réservations et centraliser guides d'accès et infos maison — sans exposer le domaine au public ni payer un serveur coûteux chaque mois.",
    solution:
      "Espace privé sécurisé par compte : calendrier des chambres, demandes de séjour et pages utiles (guide, accès) réservées aux personnes autorisées.",
    outcomes: [
      "Coût d'hébergement mensuel réduit à exactement 0 €.",
      "Interface fluide sur smartphone et infos pratiques accessibles même avec une connexion faible.",
      "Suppression des doublons et conflits de réservation grâce à un calendrier partagé unique.",
    ],
    resultUrl: "https://sainte-barbe.netlify.app",
  },
  {
    id: "atelier-lisa",
    cardSummary:
      "Une galerie fluide qui met en valeur les images des œuvres d'art sans ralentir le site, avec un parcours de commande direct.",
    title: "Atelier de Lisa — galerie d'artiste",
    client: "Lisa — Atelier de Lisa (peintre & linograveuse, Grenoble)",
    sector: "Art & culture — vente d'œuvres",
    problem:
      "Montrer peintures et linogravures en haute qualité sans ralentir le site, être trouvable sur le web et recevoir des demandes sur mesure sans lancer une boutique en ligne lourde.",
    solution:
      "Galerie par type d'œuvre avec images optimisées automatiquement, fiche dédiée par pièce, page Sur mesure pour les projets personnalisés et contact par e-mail.",
    outcomes: [
      "Galerie allégée de moitié sans perte visible de qualité pour les collectionneurs.",
      "Chaque œuvre est présentée avec son visuel et un texte clair, facile à retrouver en ligne.",
      "Parcours naturel : découvrir la galerie, puis écrire pour une commande sur mesure.",
    ],
    resultUrl: "https://atelier-lisa.fr",
  },
] as const;

export const portfolioPageLead =
  "Trois sites livrés que vous pouvez parcourir. Pour chaque projet : le besoin du client, ce qui a été mis en place et ce que ça change au quotidien — sans jargon.";

export const homePortfolioSection = {
  kicker: "Réalisations",
  title: "Des sites que vous pouvez visiter",
  lead: "Vitrine locale rapide, espace de réservation familial sans frais fixes, galerie d'artiste fluide — des projets concrets, pas des maquettes.",
} as const;

/** Projet mis en avant dans le hero (capture principale). */
export const heroFeaturedCaseStudyId = "tata-carotte" as const;
