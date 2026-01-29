import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import { Button } from "@/components/ui/button";
import { convertTooltipsToIcons } from "@/lib/convertTooltipsToIcons";
import { createClient } from "@/lib/supabase/server";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("id", id);

  if (error) {
    return (
      <main className="py-10 flex flex-col gap-8 md:max-w-5xl m-auto px-2 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">
          Fehler beim Laden des Projektes
        </h1>
        <div>
          <p>
            Leider ist ein Fehler aufgetreten. Bitte versuche es später erneut.
          </p>
          <Button className="mt-2">
            <Link href="/">Zurück</Link>
          </Button>
        </div>
      </main>
    );
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

  const project = await projectsWithImages[0];

  return (
    <main className="py-10 flex flex-col gap-8 md:max-w-5xl m-auto px-2 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl">{project.heading}</h1>
      <div className="flex flex-col gap-4 whitespace-pre-line">
        <p>{project.description}</p>
        <Image
          src={project.imageSrc}
          alt={project.heading}
          width={1000}
          height={1000}
          className="w-full max-h-96 object-cover rounded-lg"
        />
        <div className="flex gap-2">
          {project.icons && (
            <IconContainer>
              {project.icons.map((icon: IconDefinition, index: number) => (
                <RoundedIcon
                  key={`details-${icon}-${index}`}
                  icon={icon}
                  tooltip={project.tooltips[index]}
                  size="sm"
                />
              ))}
            </IconContainer>
          )}
          <div className="flex gap-2">
            {project.labels &&
              project.labels.map((label: { name: string }, index: number) => (
                <div
                  className="bg-white py-1 px-2 text-sm rounded-full"
                  key={`details-${label.name}-${index}`}
                >
                  {label.name}
                </div>
              ))}
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          {project.link && (
            <Button>
              <Link href={project.link} target="_blank">
                Ansehen
              </Link>
            </Button>
          )}
          <Button variant={"outline"}>
            <Link href="/projekte">Weitere Projekte</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
