type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 48 48",
  "aria-hidden": true,
  focusable: "false" as const,
};

export function IconHome({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 21 24 7l18 14" />
      <path d="M10 20v21h28V20" />
      <path d="M20 41V29h8v12" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 41V15l12-6v32" />
      <path d="M20 41V19l20-6v28" />
      <path d="M26 20v4M32 19v4M26 28v4M32 27v4M26 36v4M32 35v4M13 19v4M13 27v4M13 35v4" />
    </svg>
  );
}

export function IconPlan({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 9h24l8 8v22H8z" />
      <path d="M32 9v8h8" />
      <path d="M14 24h14M14 31h10" />
      <path d="m36 24-8 8-3 1 1-3 8-8z" />
    </svg>
  );
}

export function IconLamp({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M17 8h14l4 12H13z" />
      <path d="M24 20v18" />
      <path d="M17 41h14" />
      <path d="M35 41h9V26" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="21" cy="21" r="12" />
      <path d="m30 30 11 11" />
    </svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="24" cy="24" r="7" />
      <path d="M24 5v6M24 37v6M43 24h-6M11 24H5M37.4 10.6l-4.2 4.2M14.8 33.2l-4.2 4.2M37.4 37.4l-4.2-4.2M14.8 14.8l-4.2-4.2" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 5 8 11v13c0 10 7 16 16 19 9-3 16-9 16-19V11z" />
      <path d="m17 24 5 5 10-10" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="24" cy="24" r="18" />
      <path d="m31 17-4 10-10 4 4-10z" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m24 6 5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 24h32M30 14l10 10-10 10" />
    </svg>
  );
}

export const iconMap = {
  home: IconHome,
  building: IconBuilding,
  plan: IconPlan,
  lamp: IconLamp,
  search: IconSearch,
  gear: IconGear,
  shield: IconShield,
  compass: IconCompass,
  star: IconStar,
} as const;

export type IconName = keyof typeof iconMap;
