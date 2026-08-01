import { createFileRoute } from "@tanstack/react-router";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { FinalCta, PageHero, Partnership, PhilosophySplit } from "@/components/sections";
import { iconMap } from "@/components/Icons";

export const Route = createFileRoute("/our-philosophy")({
  component: PhilosophyPage,
  head: () => ({
    meta: [
      { title: "Our Philosophy | MH Group LLC" },
      { name: "description", content: content.pages.philosophy.description },
      { property: "og:title", content: "Our Philosophy | MH Group LLC" },
      { property: "og:description", content: content.pages.philosophy.description },
      { property: "og:url", content: "/our-philosophy" },
    ],
    links: [{ rel: "canonical", href: "/our-philosophy" }],
  }),
});

function PhilosophyPage() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t(content.philosophy.eyebrow, lang)}
        heading={t(content.philosophy.heading, lang).join(" ")}
        image="/images/projects/upper-west-side-86th-after-03.webp"
        imageAlt="Renovated Upper West Side residence interior"
      />
      <PhilosophySplit />
      <section className="bg-ivory py-20 lg:py-24">
        <div className="shell grid gap-10 sm:grid-cols-3">
          {content.philosophy.values.map((v) => {
            const Icon = iconMap[v.icon];
            return (
              <div key={v.en} className="border-t border-[color:var(--border-warm)] pt-8">
                <Icon className="h-9 w-9 text-brass" />
                <h2 className="mt-5 text-[0.8rem] font-semibold tracking-[0.18em] text-teal uppercase">
                  {t(v, lang)}
                </h2>
              </div>
            );
          })}
        </div>
      </section>
      <Partnership />
      <FinalCta />
    </>
  );
}
