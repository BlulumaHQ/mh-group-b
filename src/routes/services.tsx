import { createFileRoute } from "@tanstack/react-router";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { iconMap } from "@/components/Icons";
import { FinalCta, PageHero, Process } from "@/components/sections";

const serviceImages: Record<string, { src: string; alt: string; w: number; h: number }> = {
  "real-estate": {
    src: "/images/projects/upper-east-side-66th-neighborhood.webp",
    alt: "Prewar residential buildings overlooking Central Park",
    w: 960,
    h: 641,
  },
  "property-management": {
    src: "/images/projects/carnegie-hill-87th-neighborhood.webp",
    alt: "Carnegie Hill apartment building facade in Manhattan",
    w: 600,
    h: 600,
  },
  renovation: {
    src: "/images/projects/upper-east-side-66th-after-02.webp",
    alt: "Renovated Upper East Side kitchen with light oak cabinetry",
    w: 2400,
    h: 1600,
  },
  furniture: {
    src: "/images/projects/midtown-east-55th-3d-after-01.webp",
    alt: "Furnished Midtown East living space with open shelving",
    w: 1600,
    h: 1068,
  },
};

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | MH Group LLC" },
      { name: "description", content: content.pages.services.description },
      { property: "og:title", content: "Services | MH Group LLC" },
      { property: "og:description", content: content.pages.services.description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t(content.services.eyebrow, lang)}
        heading={t(content.services.heading, lang)}
        image="/images/projects/midtown-east-55th-10c-after-02.webp"
        imageAlt="Bright renovated Midtown East living area"
      />

      <div className="bg-background">
        {content.services.items.map((item, i) => {
          const Icon = iconMap[item.icon];
          const img = serviceImages[item.id]!;
          const reversed = i % 2 === 1;
          return (
            <section
              key={item.id}
              id={item.id}
              className="shell grid scroll-mt-28 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <Icon className="h-10 w-10 text-brass" />
                <h2 className="mt-6 text-[0.95rem] font-semibold tracking-[0.14em] text-teal uppercase">
                  {t(item.title, lang).join(" ")}
                </h2>
                <span className="rule-brass mt-5" />
                <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-ink">
                  {t(item.body, lang)}
                </p>
              </div>
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className={`h-72 w-full object-cover object-center lg:h-[26rem] ${reversed ? "lg:order-1" : ""}`}
              />
            </section>
          );
        })}
      </div>

      <Process />
      <FinalCta />
    </>
  );
}
