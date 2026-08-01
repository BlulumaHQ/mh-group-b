import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { FinalCta, PageHero, ProjectsGrid } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () =>
    pageHead({
      title: "Projects | MH Group LLC",
      description: content.pages.projects.description,
      path: "/projects",
    }),
});

function ProjectsPage() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t(content.projects.eyebrowAll, lang)}
        heading={t(content.projects.heading, lang)}
        image="/images/projects/upper-west-side-86th-after-02.webp"
        imageAlt="Renovated Upper West Side interior with natural light"
      />
      <ProjectsGrid />
      <FinalCta />
    </>
  );
}
