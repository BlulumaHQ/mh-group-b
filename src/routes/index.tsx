import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { CtaLink } from "@/components/Cta";
import {
  FeaturedProjects,
  FinalCta,
  Partnership,
  PhilosophySplit,
  Process,
  ServicesOverview,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Home | MH Group LLC",
      description:
        "MH Group LLC provides integrated real estate, property management, renovation, interior styling, furnishing, and move-in services in New York.",
      path: "/",
    }),
});


function Hero() {
  const { lang } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden bg-teal">
      <img
        src="/images/home/home-hero-new-york-residence.webp"
        alt="Central Park and prewar residential buildings on Manhattan's Upper East Side"
        width={960}
        height={641}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center lg:left-auto lg:w-[60%]"
      />
      <div className="absolute inset-0 -z-10 bg-teal/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-teal lg:from-30% lg:via-teal/85 lg:via-52% lg:to-transparent" />
      <div className="shell flex min-h-[82svh] items-center pt-32 pb-20 lg:pt-36">
        <div className="max-w-xl lg:w-[54%] lg:max-w-[44rem]">
          <p className="eyebrow">{t(content.hero.eyebrow, lang)}</p>
          <h1 className="display-hero mt-6 text-ivory">
            {t(content.hero.headline, lang).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <span className="rule-brass mt-8" />
          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">
            {t(content.hero.body, lang)}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink to="/services">{t(content.hero.ctaPrimary, lang)}</CtaLink>
            <CtaLink to="/projects" variant="outlineLight">
              {t(content.hero.ctaSecondary, lang)}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Process />
      <PhilosophySplit />
      <Partnership />
      <FinalCta />
    </>
  );
}
