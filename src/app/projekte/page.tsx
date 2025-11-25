import React from "react";
import supabase from "@/server/db/supabase";
import { SmallForm } from "@/components/SmallForm";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { convertTooltipsToIcons } from "../../lib/convertTooltipsToIcons";

async function Projects() {
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .order("is_highlight", { ascending: false })
    .order("start_date", { ascending: false });

  if (error) {
    console.error("Fehler beim Laden der Projekte:", error);
    return <div>Fehler beim Laden der Projekte</div>;
  }

  const projectsWithImages = await Promise.all(
    data.map(async (project) => {
      // Tooltips aus DB zu Array konvertieren
      const tooltips =
        project.tooltips?.split(",").map((t: string) => t.trim()) || [];

      // Icons basierend auf Tooltips generieren
      const icons = convertTooltipsToIcons(project.tooltips);

      // Labels zu Objekten konvertieren
      const labels =
        project.labels
          ?.split(",")
          .map((label: string) => ({ name: label.trim() })) || [];

      return {
        ...project,
        icons: icons,
        tooltips: tooltips,
        labels: labels,
      };
    }),
  );

  return (
    <main className="py-10 flex flex-col gap-8 max-w-lg md:max-w-7xl m-auto px-2">
      <h1 className="text-7xl">Projekte</h1>

      <div>
        <p className="max-w-5xl mt-2 mb-10 text-lg text-muted-foreground">
          Willkommen bei der Projektübersicht von Daniel Hilmer – Webentwicklung
          & Softwarelösungen. Auf dieser Seite findest du eine umfassende
          Auswahl unserer Kundenprojekte und eigenen Dev-Projekte – von
          individuellen Webanwendungen über skalierbare SaaS-Systeme bis hin zu
          innovativen Tools und Plugins. Jedes Projekt steht für Qualität,
          technisches Know-how und echte Mehrwerte.
          <br></br>
          Ob du nach Referenzen für Webentwicklung, Softwareentwicklung,
          Frontend & Backend, API-Design oder individuell programmierten
          Lösungen suchst – hier bekommst du einen praxisnahen Einblick in
          unsere Arbeit. Lass dich inspirieren, und wenn du Lust hast, gemeinsam
          ein neues Projekt zu realisieren, kontaktiere mich gerne direkt.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="border border-gray-100 bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden">
          <h4 className="font-bold text-2xl mb-4">Kostenlos anfragen!</h4>
          <div className="max-w-lg bg-green-200 border-2 p-4 border-green-300 rounded-md flex items-center justify-between my-4">
            {/* <h4 className="font-bold">Jetzt per WhatsApp kontaktieren</h4> */}
            <Button asChild variant="outline">
              <Link
                href="https://wa.me/message/SUK6VOGPWX2HJ1"
                className="flex gap-2 w-full"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Kontakt
              </Link>
            </Button>
          </div>

          <SmallForm />
        </div>
        {projectsWithImages.map((project, index) => (
          <ProjectCard
            id={project.id}
            key={index}
            icons={project.icons}
            tooltips={project.tooltips}
            heading={project.heading}
            description={project.description}
            labels={project.labels}
            imageSrc={project.imageSrc}
            is_highlight={project.is_highlight}
            link={{
              href: project.link,
              text: "Besuchen",
            }}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
