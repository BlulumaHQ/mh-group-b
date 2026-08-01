export type Lang = "en" | "zh-TW";

export const content = {
  brand: "MH Group LLC",
  contact: {
    phone: "+1 (917) 283-4300",
    phoneHref: "tel:+19172834300",
    email: "hello@mhgroupllc.com",
    location: { en: "New York, NY", "zh-TW": "紐約，紐約州" },
  },
  nav: [
    { to: "/", en: "Home", "zh-TW": "首頁" },
    { to: "/projects", en: "Projects", "zh-TW": "項目案例" },
    { to: "/services", en: "Services", "zh-TW": "服務" },
    { to: "/our-philosophy", en: "Our Philosophy", "zh-TW": "我們的理念" },
    { to: "/contact", en: "Contact", "zh-TW": "聯絡我們" },
  ],
  hero: {
    eyebrow: {
      en: "One Partner. Every Step Home.",
      "zh-TW": "一站式夥伴，陪您完成家的每一步。",
    },
    headline: {
      en: ["Your All-in-One", "Real Estate & Home", "Solution in New York"],
      "zh-TW": ["您在紐約的", "全方位房地產", "與居家服務方案"],
    },
    body: {
      en: "From buying or selling to managing, designing, furnishing, and moving in — we take care of everything so you can enjoy the results.",
      "zh-TW":
        "從買賣房產，到物業管理、設計、裝修、家具配置與入住安排，我們統籌每一個環節，讓您專注享受成果。",
    },
    ctaPrimary: { en: "Explore Our Services", "zh-TW": "探索我們的服務" },
    ctaSecondary: { en: "View Our Projects", "zh-TW": "查看項目案例" },
  },
  services: {
    eyebrow: {
      en: "Integrated. Seamless. Exceptional.",
      "zh-TW": "整合．無縫．卓越",
    },
    heading: {
      en: "A One-Stop Solution for Your Home Journey",
      "zh-TW": "一站式成就您的理想家居旅程",
    },
    items: [
      {
        id: "real-estate",
        icon: "home" as const,
        title: { en: ["Real Estate", "Sales & Purchase"], "zh-TW": ["房地產買賣"] },
        body: {
          en: "Expert guidance for buying, selling, and investing in residential properties across Manhattan.",
          "zh-TW": "提供住宅買賣與投資的專業指導，服務範圍涵蓋曼哈頓。",
        },
      },
      {
        id: "property-management",
        icon: "building" as const,
        title: { en: ["Property", "Management"], "zh-TW": ["物業管理"] },
        body: {
          en: "Comprehensive management services that protect your investment and maximize value.",
          "zh-TW": "全面的物業管理服務，協助保護您的投資並提升物業價值。",
        },
      },
      {
        id: "renovation",
        icon: "plan" as const,
        title: {
          en: ["Renovation & Project", "Management"],
          "zh-TW": ["裝修與項目管理"],
        },
        body: {
          en: "End-to-end renovation management with trusted contractors and meticulous attention to detail.",
          "zh-TW": "從規劃到完成的全程裝修管理，配合值得信賴的承包商，嚴謹掌握每一項細節。",
        },
      },
      {
        id: "furniture",
        icon: "lamp" as const,
        title: {
          en: ["Furniture, Styling &", "Move-In Service"],
          "zh-TW": ["家具配置、空間造型與入住服務"],
        },
        body: {
          en: "Curated furniture selection, professional styling, and seamless move-in for a perfect start.",
          "zh-TW": "精選家具、專業空間造型與無縫入住安排，讓新居從第一天起就完整到位。",
        },
      },
    ],
  },
  projects: {
    eyebrowFeatured: { en: "Featured Projects", "zh-TW": "精選項目" },
    eyebrowAll: { en: "Our Projects", "zh-TW": "我們的項目" },
    heading: { en: "Spaces We Transform", "zh-TW": "我們改造的空間" },
    viewAll: { en: "View All Projects", "zh-TW": "查看所有項目" },
  },
  process: {
    eyebrow: { en: "Our Process", "zh-TW": "服務流程" },
    heading: {
      en: "A Seamless Experience from Start to Finish",
      "zh-TW": "從開始到完成的無縫體驗",
    },
    steps: [
      {
        num: "01",
        icon: "search" as const,
        title: { en: "Discover", "zh-TW": "了解需求" },
        body: {
          en: "We listen to your goals and understand your lifestyle and investment needs.",
          "zh-TW": "我們聆聽您的目標，深入了解您的生活方式與投資需求。",
        },
      },
      {
        num: "02",
        icon: "plan" as const,
        title: { en: "Plan", "zh-TW": "規劃方案" },
        body: {
          en: "We craft a tailored strategy with the right property, design, and service plan.",
          "zh-TW": "我們根據合適的物業、設計方向與服務內容，制定專屬策略。",
        },
      },
      {
        num: "03",
        icon: "gear" as const,
        title: { en: "Manage", "zh-TW": "統籌執行" },
        body: {
          en: "Our team executes every detail with precision, transparency, and constant communication.",
          "zh-TW": "我們以精準、透明與持續溝通的方式，統籌執行每一項細節。",
        },
      },
      {
        num: "04",
        icon: "home" as const,
        title: { en: "Enjoy", "zh-TW": "安心入住" },
        body: {
          en: "Move in with confidence and enjoy a home that reflects your vision.",
          "zh-TW": "安心入住，享受真正體現您理想與品味的家。",
        },
      },
    ],
  },
  philosophy: {
    eyebrow: { en: "Our Philosophy", "zh-TW": "我們的理念" },
    heading: {
      en: ["Built on Trust.", "Driven by Excellence."],
      "zh-TW": ["以信任為本，", "以卓越為準則。"],
    },
    body: {
      en: "At MH Group LLC, we believe a home is more than a space—it's where life happens and wealth grows. We're committed to delivering unparalleled service, craftsmanship, and value at every step.",
      "zh-TW":
        "在 MH Group LLC，我們相信家不只是一個空間，更是生活發生與資產成長的地方。我們致力於在每一個環節提供卓越服務、精湛品質與長期價值。",
    },
    values: [
      { icon: "shield" as const, en: "Integrity", "zh-TW": "誠信" },
      { icon: "compass" as const, en: "Expertise", "zh-TW": "專業" },
      { icon: "star" as const, en: "Excellence", "zh-TW": "卓越" },
    ],
  },
  partnership: {
    eyebrow: { en: "In Partnership with", "zh-TW": "合作夥伴" },
    heading: "The Maggie Huang Team",
    body: {
      en: "As the parent company, MH Group LLC provides the space-extended services and resources that power The Maggie Huang Team's real estate expertise and client success.",
      "zh-TW":
        "作為母公司，MH Group LLC 提供延伸服務與資源，協助 The Maggie Huang Team 強化其房地產專業與客戶服務成果。",
    },
    cta: {
      en: "Learn More About The Maggie Huang Team",
      "zh-TW": "進一步了解 The Maggie Huang Team",
    },
  },
  finalCta: {
    heading: { en: "Ready to Begin Your Journey?", "zh-TW": "準備開始您的家居旅程嗎？" },
    body: {
      en: "Let us take care of the details, so you can enjoy the possibilities.",
      "zh-TW": "讓我們處理所有細節，您只需專注享受更多可能。",
    },
    cta: { en: "Get in Touch", "zh-TW": "聯絡我們" },
  },
  footer: {
    navigation: { en: "Navigation", "zh-TW": "網站導覽" },
    services: { en: "Services", "zh-TW": "服務項目" },
    contact: { en: "Contact", "zh-TW": "聯絡資訊" },
    blurb: {
      en: "A one-stop solution for real estate, property management, renovation, and home furnishing. We take care of everything, so you can enjoy the results.",
      "zh-TW":
        "整合房地產、物業管理、裝修與家具配置的一站式服務。我們統籌所有細節，讓您專注享受成果。",
    },
    rights: { en: "All rights reserved.", "zh-TW": "版權所有。" },
  },
  pages: {
    projects: {
      title: { en: "Projects | MH Group LLC", "zh-TW": "項目案例 | MH Group LLC" },
      description:
        "Completed Manhattan residential renovation, interior design, and furnishing projects by MH Group LLC.",
    },
    services: {
      title: { en: "Services | MH Group LLC", "zh-TW": "服務 | MH Group LLC" },
      heading: { en: "What We Do", "zh-TW": "我們的服務" },
      description:
        "Real estate sales and purchase, property management, renovation and project management, furniture, styling and move-in services in New York.",
    },
    philosophy: {
      title: { en: "Our Philosophy | MH Group LLC", "zh-TW": "我們的理念 | MH Group LLC" },
      description:
        "Built on trust, driven by excellence — the values behind MH Group LLC's integrated real estate and home services in New York.",
    },
    contact: {
      title: { en: "Contact | MH Group LLC", "zh-TW": "聯絡我們 | MH Group LLC" },
      description:
        "Contact MH Group LLC in New York for real estate, property management, renovation, furnishing, and move-in services.",
      phoneLabel: { en: "Phone", "zh-TW": "電話" },
      emailLabel: { en: "Email", "zh-TW": "電子郵件" },
      locationLabel: { en: "Location", "zh-TW": "服務地區" },
    },
  },
} as const;

export function t<T>(field: { en: T; "zh-TW": T }, lang: Lang): T {
  return field[lang];
}
