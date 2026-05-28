/** Types Schema.org utilisés sur le site vitrine */
export type SchemaOrgType =
  | "ProfessionalService"
  | "LocalBusiness"
  | "WebPage"
  | "FAQPage";

export type FaqSchemaItem = {
  question: string;
  answer: string;
};
