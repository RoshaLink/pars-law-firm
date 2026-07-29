export type Locale = "en" | "fa";

export interface LocalizedText {
  en: string;
  fa: string;
}

export interface NavLink {
  label: LocalizedText;
  href: string;
}

export interface NavGroup {
  label: LocalizedText;
  href?: string;
  children?: NavLink[];
}

export interface InsightArticle {
  id: string;
  date: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  href: string;
}

export interface CaseResult {
  id: string;
  practiceArea: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface TeamMember {
  id: string;
  name: string;
  role: LocalizedText;
  initials: string;
  photo?: string;
}

export interface OfficeContact {
  city: LocalizedText;
  phone: string;
  email: string;
  addressLines: string[];
}
