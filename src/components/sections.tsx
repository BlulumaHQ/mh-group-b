import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { iconMap } from "@/components/Icons";
import { CtaLink } from "@/components/Cta";
import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";

export function ServicesOverview() {
  const { lang } = useLanguage();
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell text-center">
        <p className="eyebrow">{t(content.services.eyebrow, lang)}</p>
        <h2 className="display-section mx-auto mt-5 max-w-3xl text-teal">
          {t(content.services.heading, lang)}
        </h2>
      </div>
      <div className="shell mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {content.services.items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className={
                "flex flex-col items-center px-2 text-center lg:px-8 " +
                (i > 0
                  ? "border-t border-[color:var(--border-light)] pt-12 sm:border-t-0 sm:pt-0 lg:border-l"
                  : "")
              }
            >
              <Icon className="h-11 w-11 text-brass" />
              <h3 className="mt-6 text-[0.82rem] leading-relaxed font-semibold tracking-[0.14em] text-ink uppercase">
                {t(item.title, lang).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-muted-ink">
                {t(item.body, lang)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const { lang } = useLanguage();
  return (
    <section className="bg-teal py-20 lg:py-24">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
        <div className="min-w-0">
          <p className="eyebrow">{t(content.projects.eyebrowFeatured, lang)}</p>
          <h2 className="display-section mt-4 text-ivory">
            {t(content.projects.heading, lang)}
          </h2>
        </div>
        <div className="hidden sm:block">
          <CtaLink to="/projects" variant="outlineLight">
            {t(content.projects.viewAll, lang)}
          </CtaLink>
        </div>
      </div>

      <div className="shell mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <article key={p.slug} className="group relative overflow-hidden">
            <img
              src={p.image}
              alt={t(p.alt, lang)}
              width={p.width}
              height={p.height}
              loading="lazy"
              className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025] lg:h-[22rem]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-darkest/90 via-teal-darkest/40 to-transparent p-5 pt-16">
              <span className="block h-px w-8 bg-brass opacity-70 transition-all duration-300 group-hover:w-14" />
              <h3 className="mt-3 text-[0.8rem] font-semibold tracking-[0.13em] text-ivory uppercase">
                {t(p.name, lang)}
              </h3>
              <p className="mt-1.5 text-xs text-ivory/70">{t(p.service, lang)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="shell mt-10 sm:hidden">
        <CtaLink to="/projects" variant="outlineLight" className="w-full">
          {t(content.projects.viewAll, lang)}
        </CtaLink>
      </div>
    </section>
  );
}

export function Process() {
  const { lang } = useLanguage();
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="shell text-center">
        <p className="eyebrow">{t(content.process.eyebrow, lang)}</p>
        <h2 className="display-section mx-auto mt-5 max-w-3xl text-teal">
          {t(content.process.heading, lang)}
        </h2>
      </div>
      <ol className="shell mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
        {content.process.steps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <li key={step.num} className="relative lg:pr-8">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-brass">{step.num}</span>
                <Icon className="h-7 w-7 text-brass/80" />
              </div>
              <span className="mt-5 block h-px w-10 bg-teal/40" />
              <h3 className="mt-4 text-[0.8rem] font-semibold tracking-[0.16em] text-teal uppercase">
                {t(step.title, lang)}
              </h3>
              <p className="mt-3 max-w-[19rem] text-sm leading-relaxed text-muted-ink">
                {t(step.body, lang)}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function PhilosophySplit() {
  const { lang } = useLanguage();
  return (
    <section className="grid lg:grid-cols-[47fr_53fr]">
      <div className="bg-teal px-6 py-16 sm:px-10 lg:py-24 lg:pr-16 lg:pl-[max(1.25rem,calc((100vw-84rem)/2+3.5rem))]">
        <p className="eyebrow">{t(content.philosophy.eyebrow, lang)}</p>
        <h2 className="display-section mt-5 text-ivory">
          {t(content.philosophy.heading, lang).map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ivory/75">
          {t(content.philosophy.body, lang)}
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {content.philosophy.values.map((v) => {
            const Icon = iconMap[v.icon];
            return (
              <li key={v.en} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-brass" />
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-ivory uppercase">
                  {t(v, lang)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <img
        src="/images/home/home-philosophy-interior.webp"
        alt="Renovated Upper West Side living room with warm oak floors and layered natural light"
        width={2400}
        height={1602}
        loading="lazy"
        className="h-72 w-full object-cover object-center lg:h-full"
      />
    </section>
  );
}

export function Partnership() {
  const { lang } = useLanguage();
  return (
    <section id="partnership" className="scroll-mt-24 bg-background">
      <div className="shell grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
            <path d="M5 13.5 17 8v32H5z" fill="var(--brass)" />
            <path d="M21 5.5 37 13v27H21z" fill="var(--brass)" />
          </svg>
          <p className="eyebrow mt-8">{t(content.partnership.eyebrow, lang)}</p>
          <h2 className="display-section mt-3 text-teal">{content.partnership.heading}</h2>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted-ink">
            {t(content.partnership.body, lang)}
          </p>
          <div className="mt-9">
            <CtaLink to="/our-philosophy" hash="partnership">
              {t(content.partnership.cta, lang)}
            </CtaLink>
          </div>
        </div>
        <div className="border border-[color:var(--border-warm)] bg-paper p-10 lg:p-14">
          <p className="font-display text-2xl leading-snug text-teal">
            {t(content.philosophy.heading, lang)[0]}{" "}
            {t(content.philosophy.heading, lang)[1]}
          </p>
          <span className="rule-brass mt-6" />
          <ul className="mt-6 space-y-3 text-sm text-muted-ink">
            {content.services.items.map((s) => (
              <li key={s.id}>{t(s.title, lang).join(" ")}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { lang } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/home/home-final-cta-new-york.webp"
        alt="Midtown Manhattan skyline seen from a Turtle Bay residence"
        width={800}
        height={533}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-teal/90" />
      <div className="shell py-20 text-center lg:py-24">
        <h2 className="display-section text-ivory">{t(content.finalCta.heading, lang)}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/75">
          {t(content.finalCta.body, lang)}
        </p>
        <div className="mt-9 flex justify-center">
          <CtaLink to="/contact">{t(content.finalCta.cta, lang)}</CtaLink>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-teal">
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal via-teal/90 to-teal/60" />
      <div className="shell pt-40 pb-20 lg:pt-48 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-hero mt-4 max-w-3xl text-ivory">{heading}</h1>
        {body ? (
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ivory/75">{body}</p>
        ) : null}
        <span className="rule-brass mt-8" />
      </div>
    </section>
  );
}

export function ProjectsGrid() {
  const { lang } = useLanguage();
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="shell grid gap-x-6 gap-y-16 lg:grid-cols-12">
        {projects.map((p, i) => {
          const span = i % 4 === 0 || i % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5";
          return (
            <article key={p.slug} className={`group ${span}`}>
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={t(p.alt, lang)}
                  width={p.width}
                  height={p.height}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025] lg:h-[30rem]"
                />
              </div>
              <span className="mt-6 block h-px w-10 bg-brass" />
              <h2 className="mt-4 text-[0.85rem] font-semibold tracking-[0.14em] text-teal uppercase">
                {t(p.name, lang)}
              </h2>
              <p className="mt-2 text-sm text-muted-ink">{t(p.neighborhood, lang)}</p>
              <p className="mt-1 text-sm text-muted-ink">{t(p.service, lang)}</p>
            </article>
          );
        })}
      </div>
      <div className="shell mt-16 text-center">
        <Link
          to="/contact"
          className="text-[0.72rem] font-semibold tracking-[0.18em] text-teal uppercase underline decoration-brass underline-offset-8 transition-colors hover:text-brass"
        >
          {t(content.finalCta.cta, lang)}
        </Link>
      </div>
    </section>
  );
}
