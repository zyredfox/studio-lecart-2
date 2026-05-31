import type { ImageMetadata } from "astro";
import type { CaseStudyId } from "@/config/types";

import thumbTataCarotte from "@/assets/images/portfolio/tata-carotte.webp";
import thumbSainteBarbe from "@/assets/images/portfolio/saintebarbe.webp";
import thumbAtelierLisa from "@/assets/images/portfolio/galerie.webp";

export const portfolioThumbnails: Record<CaseStudyId, ImageMetadata> = {
  "tata-carotte": thumbTataCarotte,
  "sainte-barbe": thumbSainteBarbe,
  "atelier-lisa": thumbAtelierLisa,
};

export function getPortfolioThumbnail(id: CaseStudyId): ImageMetadata {
  return portfolioThumbnails[id];
}
