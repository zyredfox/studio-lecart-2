import type { NavItem } from "@/config/types";

export const navItems: readonly NavItem[] = [
  { href: "/", label: "Accueil", end: true },
  { href: "/services", label: "Services" },
  { href: "/forfaits", label: "Forfaits" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/methode", label: "Méthode" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

/** Liens pied de page (navigation + mentions légales). */
export const footerNavItems: readonly NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/forfaits", label: "Forfaits" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/methode", label: "Méthode" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
