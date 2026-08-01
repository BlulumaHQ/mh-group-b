import { Link } from "@tanstack/react-router";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-deep text-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr] lg:gap-10">
        <div>
          <span className="flex items-center gap-4">
            <img
              src="/images/logo-mh-group-circle.svg"
              alt="MH Group LLC"
              width={72}
              height={72}
              className="h-16 w-16 shrink-0 rounded-full border border-brass/45 p-px"
            />
            <span className="font-display text-lg">MH Group LLC</span>
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">
            {t(content.footer.blurb, lang)}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">{t(content.footer.navigation, lang)}</h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            {content.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-brass">
                  {t(item, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{t(content.footer.services, lang)}</h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            {content.services.items.map((s) => (
              <li key={s.id}>
                <Link to="/services" hash={s.id} className="transition-colors hover:text-brass">
                  {t(s.title, lang).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{t(content.footer.contact, lang)}</h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            <li>
              <a
                href={content.contact.phoneHref}
                className="transition-colors hover:text-brass"
              >
                {content.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${content.contact.email}`}
                className="transition-colors hover:text-brass"
              >
                {content.contact.email}
              </a>
            </li>
            <li>{t(content.contact.location, lang)}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell py-6">
          <p className="text-xs tracking-[0.08em] text-ivory/55">
            © {year} MH Group LLC. {t(content.footer.rights, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
