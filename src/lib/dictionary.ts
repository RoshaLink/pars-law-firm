import type { Locale } from "@/types";

export const UI = {
  contactCta: { en: "Contact Us", fa: "تماس با ما" },
  langToggleEn: { en: "EN", fa: "EN" },
  langToggleFa: { en: "فارسی", fa: "فارسی" },
  menuOpen: { en: "Menu", fa: "منو" },
  menuClose: { en: "Close", fa: "بستن" },

  heroHeadline: { en: "We are Pars", fa: "دفتر حقوقی پارس" },
  heroSubhead: {
    en: "Immigration and family law counsel for Toronto's Persian community and beyond — direct advice, carried all the way through.",
    fa: "مشاوره حقوقی در حوزه مهاجرت و خانواده برای جامعه فارسی‌زبان تورنتو و فراتر از آن — راهنمایی مستقیم، همراه شما تا پایان مسیر.",
  },
  heroCta: { en: "Book a Consultation", fa: "رزرو مشاوره" },

  welcomeHeading: { en: "Welcome to Pars", fa: "به پارس خوش آمدید" },
  welcomeBody: {
    en: "We're a Toronto immigration and family law practice built around one idea: legal advocacy should feel personal. Our door stays open — come tell us about your situation.",
    fa: "ما یک دفتر حقوقی مهاجرت و خانواده در تورنتو هستیم که بر پایه یک ایده شکل گرفته: دفاع حقوقی باید رویکردی شخصی داشته باشد. درِ ما همیشه باز است — بیایید و در مورد وضعیت خود با ما صحبت کنید.",
  },

  insightsHeading: { en: "Recent Insights", fa: "تازه‌ترین اخبار و مقالات" },
  insightsMoreNews: { en: "More News", fa: "اخبار بیشتر" },
  insightsMoreArticles: { en: "More Articles", fa: "مقالات بیشتر" },
  readMore: { en: "Read more", fa: "ادامه مطلب" },

  practiceHeading: { en: "Law that moves with your life", fa: "حقوقی که همراه زندگی شماست" },
  practiceBody: {
    en: "Immigration and family matters rarely arrive one at a time. We built a practice that handles both — so your sponsorship case and your custody agreement are never working against each other.",
    fa: "مسائل مهاجرت و خانواده به‌ندرت به‌تنهایی پیش می‌آیند. ما دفتری ساختیم که هر دو را پوشش می‌دهد — تا پرونده حمایت و توافق حضانت شما هرگز در تضاد با یکدیگر نباشند.",
  },
  practiceCta: { en: "Our Practice Areas", fa: "حوزه‌های تخصصی ما" },

  caseResultsHeading: { en: "Case Results", fa: "نتایج پرونده‌ها" },
  caseResultsSub: {
    en: "Outcomes are anonymized to protect client confidentiality.",
    fa: "نتایج برای حفظ محرمانگی موکلان به‌صورت ناشناس ارائه شده‌اند.",
  },
  caseResultsCta: { en: "View Outcome", fa: "مشاهده نتیجه" },

  teamHeading: { en: "Meet the People at Pars", fa: "با اعضای تیم پارس آشنا شوید" },
  teamLinkLabel: { en: "Meet the Team", fa: "با تیم آشنا شوید" },

  careersEyebrow: { en: "Careers", fa: "فرصت‌های شغلی" },
  careersHeading: { en: "Ready for a Pars kind of day?", fa: "آماده یک روز در پارس هستید؟" },
  careersBody: {
    en: "We're always looking for lawyers and staff who want real client contact from day one — in a firm small enough that your work is never anonymous.",
    fa: "ما همیشه به دنبال وکلا و کارکنانی هستیم که از روز اول می‌خواهند ارتباط واقعی با موکل داشته باشند — در دفتری که کار شما هرگز ناشناس نمی‌ماند.",
  },
  careersLink: { en: "Careers at Pars", fa: "فرصت‌های شغلی در پارس" },

  cultureEyebrow: { en: "Life at Pars", fa: "فضای کاری در پارس" },
  cultureHeading: { en: "Behind the case files", fa: "فراتر از پرونده‌ها" },

  aboutEyebrow: { en: "About", fa: "درباره ما" },
  aboutHeading: { en: "Read more about Pars", fa: "بیشتر درباره پارس بخوانید" },

  footerLegalHeading: { en: "Legal", fa: "امور حقوقی" },
  footerTerms: { en: "Terms of Use", fa: "شرایط استفاده" },
  footerPrivacy: { en: "Privacy Policy", fa: "سیاست حریم خصوصی" },
  footerAccessibility: { en: "Accessibility", fa: "دسترسی‌پذیری" },
  footerCookies: { en: "Cookie Policy", fa: "سیاست کوکی" },
  footerResourcesHeading: { en: "Resources", fa: "منابع" },
  footerDisclaimer: {
    en: "The content of this website is provided for general information only and does not constitute legal advice. No lawyer-client relationship is formed by visiting this site.",
    fa: "محتوای این وب‌سایت صرفاً برای اطلاع‌رسانی عمومی ارائه شده و به منزله مشاوره حقوقی نیست. مراجعه به این سایت هیچ رابطه وکیل-موکلی ایجاد نمی‌کند.",
  },
} satisfies Record<string, Record<Locale, string>>;

export function t(entry: Record<Locale, string>, locale: Locale) {
  return entry[locale];
}
