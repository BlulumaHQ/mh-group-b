export type Project = {
  slug: string;
  name: { en: string; "zh-TW": string };
  neighborhood: { en: string; "zh-TW": string };
  service: { en: string; "zh-TW": string };
  image: string;
  width: number;
  height: number;
  alt: { en: string; "zh-TW": string };
};

/**
 * Only projects with supplied, completed ("after") photography are published.
 * Additional supplied properties remain unpublished until finished imagery exists.
 */
export const projects: Project[] = [
  {
    slug: "east-66th-street-residence",
    name: { en: "East 66th Street Residence", "zh-TW": "東 66 街住宅" },
    neighborhood: { en: "Upper East Side, Manhattan", "zh-TW": "曼哈頓上東區" },
    service: { en: "Interior Renovation & Furnishing", "zh-TW": "室內翻新與家具配置" },
    image: "/images/projects/upper-east-side-66th-after-01.webp",
    width: 2400,
    height: 1601,
    alt: {
      en: "Renovated galley kitchen with light oak cabinetry and marble-look countertops on East 66th Street",
      "zh-TW": "東 66 街住宅翻新後的廚房，淺橡木櫥櫃與石紋檯面",
    },
  },
  {
    slug: "west-86th-street-apartment",
    name: { en: "West 86th Street Apartment", "zh-TW": "西 86 街公寓" },
    neighborhood: { en: "Upper West Side, Manhattan", "zh-TW": "曼哈頓上西區" },
    service: { en: "Full Renovation & Design", "zh-TW": "全面翻新與設計" },
    image: "/images/projects/upper-west-side-86th-after-01.webp",
    width: 2400,
    height: 1602,
    alt: {
      en: "Renovated bedroom with prewar detailing and warm oak flooring on West 86th Street",
      "zh-TW": "西 86 街公寓翻新後的臥室，保留戰前建築細節與溫潤木地板",
    },
  },
  {
    slug: "east-55th-street-residence-10c",
    name: { en: "East 55th Street Residence 10C", "zh-TW": "東 55 街住宅 10C" },
    neighborhood: { en: "Midtown East, Manhattan", "zh-TW": "曼哈頓中城東" },
    service: { en: "Interior Design & Styling", "zh-TW": "室內設計與空間造型" },
    image: "/images/projects/midtown-east-55th-10c-after-01.webp",
    width: 2400,
    height: 1600,
    alt: {
      en: "Bright living area with layered rug and slim modern seating in a Midtown East residence",
      "zh-TW": "中城東住宅明亮的起居空間，搭配地毯與現代座椅",
    },
  },
  {
    slug: "east-55th-street-residence-3d",
    name: { en: "East 55th Street Residence 3D", "zh-TW": "東 55 街住宅 3D" },
    neighborhood: { en: "Midtown East, Manhattan", "zh-TW": "曼哈頓中城東" },
    service: { en: "Furnishing & Move-In Service", "zh-TW": "家具配置與入住服務" },
    image: "/images/projects/midtown-east-55th-3d-after-02.webp",
    width: 2400,
    height: 1602,
    alt: {
      en: "Furnished open living and dining space with open shelving in a Midtown East residence",
      "zh-TW": "中城東住宅完成家具配置的開放式起居與用餐空間",
    },
  },
];

export const projectGallery: Record<string, { src: string; w: number; h: number }[]> = {
  "east-66th-street-residence": [
    { src: "/images/projects/upper-east-side-66th-after-02.webp", w: 2400, h: 1600 },
    { src: "/images/projects/upper-east-side-66th-after-03.webp", w: 600, h: 400 },
  ],
  "west-86th-street-apartment": [
    { src: "/images/projects/upper-west-side-86th-after-02.webp", w: 2400, h: 1602 },
    { src: "/images/projects/upper-west-side-86th-after-03.webp", w: 2400, h: 1602 },
  ],
  "east-55th-street-residence-10c": [
    { src: "/images/projects/midtown-east-55th-10c-after-02.webp", w: 2400, h: 1600 },
    { src: "/images/projects/midtown-east-55th-10c-after-03.webp", w: 600, h: 400 },
  ],
  "east-55th-street-residence-3d": [
    { src: "/images/projects/midtown-east-55th-3d-after-01.webp", w: 1600, h: 1068 },
    { src: "/images/projects/midtown-east-55th-3d-after-03.webp", w: 599, h: 400 },
  ],
};
