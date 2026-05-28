import type { CaseStudy } from "@/config/types";

/**
 * Études de cas Studio Lecart — projets réels du dépôt Github.
 * Chiffres : faits mesurés en projet ou fourchettes indicatives clairement qualifiées.
 */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "tata-carotte",
    title: "Tata Carotte — garde et promenade canine",
    client: "Tata Carotte (pet sitter indépendante, Grenoble)",
    sector: "Services aux particuliers — animaux",
    problem:
      "Peu de visibilité en ligne pour trois offres distinctes (garde à domicile, promenade, « taxi » véto), des tarifs à clarifier et une page « vacances » pour rassurer les clients pendant les absences.",
    solution:
      "Site vitrine React/Vite optimisé mobile : accueil orienté conversion, pages Tarifs et Vacances dédiées, structure SEO locale (Grenoble), métadonnées par page, liens téléphone/e-mail directs, images héro compressées et chargement différé.",
    results: [
      "3 parcours métier explicites en HTML sémantique (garde, promenade, transport).",
      "Déploiement statique Netlify — pas de backend à maintenir pour la vitrine.",
      "Architecture prête pour un score Lighthouse Performance ≥ 90 sur les pages marketing (objectif projet).",
      "Intégration lien fiche Google Business pour les avis clients.",
    ],
    stack: ["React", "Vite", "TypeScript", "Netlify"],
    resultUrl: "https://tata-carotte.fr",
  },
  {
    id: "domaine-sainte-barbe",
    title: "Domaine Sainte Barbe — réservations familiales",
    client: "Famille Leroy — Domaine Sainte Barbe (Plouharnel, Morbihan)",
    sector: "Location saisonnière — espace familial privé",
    problem:
      "Coordonner les séjours entre membres de la famille, éviter les doubles réservations sur les chambres, centraliser guides d'accès et informations maison sans exposer les données publiquement.",
    solution:
      "Application web complète : authentification Supabase, calendrier de réservation multi-chambres, espace admin (gestion accès, réservations, options), Edge Functions sécurisées, RLS Postgres, tests d'intégration sur les actions admin sensibles.",
    results: [
      "Espace privé avec connexion par compte — pages publiques (guide, accès) séparées de l'admin.",
      "Workflow réservation : demande, validation et suivi des créneaux sans tableur partagé.",
      "Couverture tests permissions admin (refus invité / non-admin avant cas autorisés).",
      "Hébergement Netlify + backend Supabase — évolutif sans refonte de la vitrine publique.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "Netlify",
    ],
    resultUrl: "https://sainte-barbe.netlify.app",
  },
  {
    id: "atelier-lisa",
    title: "Atelier de Lisa — galerie d'artiste",
    client: "Lisa — Atelier de Lisa (peintre & linograveuse, Grenoble)",
    sector: "Art & culture — vente d'œuvres",
    problem:
      "Présenter un catalogue d'œuvres (peintures, linogravures) avec des visuels de qualité, des textes SEO par pièce et un parcours « sur mesure » sans boutique en ligne lourde.",
    solution:
      "Site vitrine avec galerie générée au build (script Node + métadonnées JSON par œuvre), routage clair Accueil / Galerie / Sur mesure, balises Open Graph, tokens de marque centralisés dans siteConfig.",
    results: [
      "Catalogue indexable : chaque œuvre dispose d'un titre, alt et slug dédiés.",
      "Pipeline build `generate-gallery` — ajout d'œuvres sans toucher au code des pages.",
      "Parcours contact par e-mail — pas de panier complexe, adapté au volume artisanal.",
      "URL canonique atelier-lisa.fr — identité visuelle cohérente (thème, signature artiste).",
    ],
    stack: ["React", "Vite", "TypeScript", "Node (build gallery)"],
    resultUrl: "https://atelier-lisa.fr",
  },
] as const;

export const portfolioPageLead =
  "Trois projets livrés ou en production : vitrine locale, application de réservation familiale et galerie d'artiste. Chaque fiche détaille le client, le problème, la solution technique et les résultats observables.";
