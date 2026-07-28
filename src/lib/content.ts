import type {
  CaseResult,
  InsightArticle,
  NavGroup,
  OfficeContact,
  TeamMember,
} from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    label: { en: "Practice Areas", fa: "حوزه‌های تخصصی" },
    href: "#practice-areas",
    children: [
      { label: { en: "Immigration Law", fa: "حقوق مهاجرت" }, href: "#practice-areas" },
      { label: { en: "Family Law", fa: "حقوق خانواده" }, href: "#practice-areas" },
    ],
  },
  { label: { en: "Our Team", fa: "تیم ما" }, href: "#team" },
  { label: { en: "Case Results", fa: "نتایج پرونده‌ها" }, href: "#case-results" },
  {
    label: { en: "Careers", fa: "فرصت‌های شغلی" },
    href: "#careers",
    children: [
      { label: { en: "Open Positions", fa: "موقعیت‌های شغلی باز" }, href: "#careers" },
      { label: { en: "Students & Articling", fa: "کارآموزی حقوقی" }, href: "#careers" },
    ],
  },
  {
    label: { en: "Insights", fa: "دیدگاه‌ها" },
    href: "#insights",
    children: [
      { label: { en: "News", fa: "اخبار" }, href: "#insights" },
      { label: { en: "Articles", fa: "مقالات" }, href: "#insights" },
    ],
  },
  {
    label: { en: "About", fa: "درباره ما" },
    href: "#about",
    children: [
      { label: { en: "Our Story", fa: "داستان ما" }, href: "#about" },
      { label: { en: "Contact", fa: "تماس با ما" }, href: "#footer" },
    ],
  },
];

export const ARTICLES: InsightArticle[] = [
  {
    id: "express-entry-category-draws",
    date: "2026-07-14",
    category: { en: "Immigration", fa: "مهاجرت" },
    title: {
      en: "Understanding Category-Based Express Entry Draws",
      fa: "درک فراخوان‌های اکسپرس‌انتری بر اساس دسته‌بندی",
    },
    excerpt: {
      en: "How the latest category-based selections affect skilled worker candidates, and what applicants should prepare before the next round.",
      fa: "فراخوان‌های اخیر بر اساس دسته‌بندی چه تأثیری بر متقاضیان نیروی کار ماهر دارند و پیش از دور بعدی چه باید آماده کرد.",
    },
    href: "#insights",
  },
  {
    id: "spousal-sponsorship-refusals",
    date: "2026-07-06",
    category: { en: "Immigration", fa: "مهاجرت" },
    title: {
      en: "Spousal Sponsorship: Common Reasons for Refusal",
      fa: "حمایت همسر: دلایل رایج رد درخواست",
    },
    excerpt: {
      en: "A look at the most frequent grounds IRCC cites when refusing spousal sponsorship applications, and how to strengthen a file up front.",
      fa: "بررسی رایج‌ترین دلایلی که اداره مهاجرت کانادا برای رد درخواست حمایت همسر ذکر می‌کند و راه‌های تقویت پرونده از ابتدا.",
    },
    href: "#insights",
  },
  {
    id: "custody-basics-ontario",
    date: "2026-06-28",
    category: { en: "Family Law", fa: "حقوق خانواده" },
    title: {
      en: "Child Custody Basics in Ontario",
      fa: "مبانی حضانت فرزند در انتاریو",
    },
    excerpt: {
      en: "Decision-making responsibility, parenting time, and what the Divorce Act's 2021 changes actually mean for separating parents.",
      fa: "مسئولیت تصمیم‌گیری، زمان والدین و اینکه تغییرات ۲۰۲۱ قانون طلاق واقعاً برای والدین جدا شده چه معنایی دارد.",
    },
    href: "#insights",
  },
  {
    id: "study-permit-to-pr",
    date: "2026-06-19",
    category: { en: "Immigration", fa: "مهاجرت" },
    title: {
      en: "Study Permit to PR: Mapping the Pathway",
      fa: "از ویزای تحصیلی تا اقامت دائم: مسیر را بشناسید",
    },
    excerpt: {
      en: "A practical timeline for international students in Toronto weighing PGWP, provincial nominee streams, and Express Entry.",
      fa: "یک برنامه زمانی کاربردی برای دانشجویان بین‌المللی در تورنتو برای انتخاب میان PGWP، برنامه‌های استانی و اکسپرس‌انتری.",
    },
    href: "#insights",
  },
];

export const CASE_RESULTS: CaseResult[] = [
  {
    id: "family-sponsorship-approved",
    practiceArea: { en: "Immigration", fa: "مهاجرت" },
    title: { en: "Family Sponsorship Approved", fa: "تأیید حمایت خانوادگی" },
    summary: {
      en: "Guided a spousal sponsorship application through a complex prior-refusal history to a successful approval within one processing cycle.",
      fa: "یک پرونده حمایت همسر با سابقه رد پیچیده را با موفقیت طی یک چرخه رسیدگی به تأیید رساندیم.",
    },
  },
  {
    id: "pr-appeal-overturned",
    practiceArea: { en: "Immigration", fa: "مهاجرت" },
    title: { en: "PR Refusal Overturned on Appeal", fa: "لغو رد اقامت دائم در تجدیدنظر" },
    summary: {
      en: "Built and argued a federal court judicial review that overturned an unreasonable permanent residency refusal.",
      fa: "با تنظیم و دفاع از یک درخواست بازبینی قضایی در دادگاه فدرال، رد غیرمنطقی اقامت دائم را لغو کردیم.",
    },
  },
  {
    id: "custody-mediation-resolved",
    practiceArea: { en: "Family Law", fa: "حقوق خانواده" },
    title: { en: "Contested Custody Resolved by Mediation", fa: "حل اختلاف حضانت از طریق میانجی‌گری" },
    summary: {
      en: "Negotiated a full parenting-time agreement out of court, avoiding trial and preserving a workable co-parenting relationship.",
      fa: "یک توافق کامل زمان والدین را خارج از دادگاه مذاکره کردیم و از محاکمه جلوگیری شد.",
    },
  },
];

export const TEAM: TeamMember[] = [
  { id: "sara-rostami", name: "Sara Rostami", role: { en: "Founding Partner, Immigration", fa: "شریک مؤسس، مهاجرت" }, initials: "SR" },
  { id: "daniel-farrokh", name: "Daniel Farrokh", role: { en: "Partner, Family Law", fa: "شریک، حقوق خانواده" }, initials: "DF" },
  { id: "leila-amini", name: "Leila Amini", role: { en: "Senior Associate, Immigration", fa: "وکیل ارشد، مهاجرت" }, initials: "LA" },
  { id: "kian-moradi", name: "Kian Moradi", role: { en: "Associate, Family Law", fa: "وکیل، حقوق خانواده" }, initials: "KM" },
];

export const TEAM_QUOTE = {
  name: "Sara Rostami",
  role: { en: "Founding Partner, Immigration", fa: "شریک مؤسس، مهاجرت" },
  quote: {
    en: "“Every file in this office belongs to a family waiting on an answer. We treat the wait like it's ours too.”",
    fa: "«‌هر پرونده در این دفتر متعلق به خانواده‌ای است که منتظر پاسخ است. ما این انتظار را مثل انتظار خودمان جدی می‌گیریم.»",
  },
};

export const OFFICE: OfficeContact = {
  city: { en: "Toronto", fa: "تورنتو" },
  phone: "+1 (416) 555-0142",
  email: "hello@pars.law",
  addressLines: ["88 Queen Street West, Suite 1200", "Toronto, ON M5H 2N2", "Canada"],
};
