import { createFileRoute } from "@tanstack/react-router";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { PageHero } from "@/components/sections";
import { CtaAnchor } from "@/components/Cta";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | MH Group LLC" },
      { name: "description", content: content.pages.contact.description },
      { property: "og:title", content: "Contact | MH Group LLC" },
      { property: "og:description", content: content.pages.contact.description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const { lang } = useLanguage();
  const labels = content.pages.contact;

  return (
    <>
      <PageHero
        eyebrow={t(content.finalCta.cta, lang)}
        heading={t(content.finalCta.heading, lang)}
        body={t(content.finalCta.body, lang)}
        image="/images/projects/turtle-bay-49th-neighborhood.webp"
        imageAlt="Midtown Manhattan skyline"
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="space-y-10">
            <div className="border-t border-[color:var(--border-warm)] pt-6">
              <p className="eyebrow">{t(labels.phoneLabel, lang)}</p>
              <a
                href={content.contact.phoneHref}
                className="font-display mt-3 block text-2xl text-teal transition-colors hover:text-brass"
              >
                {content.contact.phone}
              </a>
            </div>
            <div className="border-t border-[color:var(--border-warm)] pt-6">
              <p className="eyebrow">{t(labels.emailLabel, lang)}</p>
              <a
                href={`mailto:${content.contact.email}`}
                className="font-display mt-3 block text-2xl break-words text-teal transition-colors hover:text-brass"
              >
                {content.contact.email}
              </a>
            </div>
            <div className="border-t border-[color:var(--border-warm)] pt-6">
              <p className="eyebrow">{t(labels.locationLabel, lang)}</p>
              <p className="font-display mt-3 text-2xl text-teal">
                {t(content.contact.location, lang)}
              </p>
            </div>
          </div>

          <div className="bg-teal p-10 lg:p-14">
            <h2 className="display-section text-ivory">
              {t(content.services.heading, lang)}
            </h2>
            <ul className="mt-8 space-y-4">
              {content.services.items.map((s) => (
                <li
                  key={s.id}
                  className="border-b border-ivory/10 pb-4 text-[0.78rem] font-semibold tracking-[0.14em] text-ivory/85 uppercase last:border-b-0"
                >
                  {t(s.title, lang).join(" ")}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaAnchor href={`mailto:${content.contact.email}`}>
                {t(content.finalCta.cta, lang)}
              </CtaAnchor>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
