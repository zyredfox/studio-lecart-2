/** Indique si un lien de navigation correspond à la page courante. */
export function isNavActive(
  currentPathname: string,
  href: string,
  end = false,
): boolean {
  const path =
    currentPathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (end) return path === target;
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}
