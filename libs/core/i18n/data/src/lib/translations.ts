import { languages } from "@my-profile-ssr/shared/common-data";

export type AppTranslations = {
  'summary.experience': string;
  'summary.techStack': string;
}

const roTranslations: AppTranslations = {
  'summary.experience': 'Experiență',
  'summary.techStack': 'Tehnologii',
}

const enTranslations: AppTranslations = {
  'summary.experience': 'Experience',
  'summary.techStack': 'Tech Stack',
}


export const translations: Record<languages, AppTranslations> = {
  en: enTranslations,
  ro: roTranslations
}