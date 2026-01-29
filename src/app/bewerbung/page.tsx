import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CheckIcon from "@/components/icons/CheckIcon";
import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import ProjectCard from "@/components/ProjectCard";
import { convertTooltipsToIcons } from "@/lib/convertTooltipsToIcons";
import profilePic from "@/images/danielhilmer.jpg";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faBrain,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Daniel Hilmer - Bewerbung Software Entwickler",
  description:
    "Erfahrener Full-Stack Developer mit Schwerpunkt auf modernen JavaScript-Frameworks, skalierbaren Webarchitekturen und effizienter Projektumsetzung.",
  keywords:
    "Software Entwickler, Full-Stack Developer, React, Next.js, Node.js, TypeScript, Bewerbung, Mid-Level Developer, Senior Developer, JavaScript, Web Development",
};

export default async function BewerbungPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("is_highlight", true)
    .order("start_date", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Fehler beim Laden der Projekte:", error);
  }

  const projectsWithImages = data
    ? await Promise.all(
        data.map(async (project) => {
          const tooltips =
            project.tooltips?.split(",").map((t: string) => t.trim()) || [];
          const icons = convertTooltipsToIcons(project.tooltips);
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
      )
    : [];

  return (
    <main className="max-w-2lg md:max-w-7xl m-auto p-2 py-10">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="md:w-1/3">
          <Image
            className="w-full max-h-96 rounded-2xl object-cover shadow-lg"
            src={profilePic}
            alt="Daniel Hilmer - Software Entwickler"
            placeholder="blur"
            priority
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-5xl lg:text-7xl mb-2">Daniel Hilmer</h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
            Software Entwickler
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Erfahrener Full-Stack-Developer mit Schwerpunkt auf modernen
            JavaScript-Frameworks, skalierbaren Webarchitekturen und effizienter
            Projektumsetzung. Kombination aus technischer Tiefe, Lehrkompetenz
            und hoher Selbstständigkeit im Kunden- und Projektmanagement.
          </p>
          <div className="flex gap-2 flex-wrap justify-between">
            <div className="flex gap-2 flex-wrap">
              <ButtonGroup>
                <Button asChild size="lg">
                  <Link
                    href="https://rkhpjgwktgxxgjxbzrzu.supabase.co/storage/v1/object/public/danielhilmer/Lebenslauf.pdf"
                    className="flex gap-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Lebenslauf (DE)
                  </Link>
                </Button>
                <ButtonGroupSeparator />
                <Button asChild size="lg">
                  <Link
                    href="https://rkhpjgwktgxxgjxbzrzu.supabase.co/storage/v1/object/public/danielhilmer/CV.pdf"
                    className="flex gap-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    CV (EN)
                  </Link>
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://github.com/dackJaniel"
                  target="_blank"
                  className="flex gap-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://www.linkedin.com/in/daniel-hilmer-038390206/"
                  target="_blank"
                  className="flex gap-2"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technische Kompetenzen */}
      <section className="mb-16">
        <h2 className="text-4xl lg:text-5xl mb-8">
          Technische{" "}
          <span className="underline underline-offset-4 text-primary">
            Kompetenzen
          </span>
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Frontend & UI
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>React, Next.js, TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Tailwind CSS, shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Responsive Design, UI/UX-Optimierung</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Backend & Datenbanken
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Node.js, Express, REST APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Prisma, SQL, MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Supabase, Authentication (Next Auth, Better Auth)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                DevOps & Infrastructure
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Docker, Coolify</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>CI/CD, Git/GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Linux Server Basics</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Weitere Technologien
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Python, PyTorch (AI/ML)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Figma, Adobe Creative Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <span>Agile Workflows, Projektmanagement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <IconContainer>
              <RoundedIcon icon={faReact} tooltip="React & Next.js" />
              <RoundedIcon icon={faNodeJs} tooltip="Node.js" />
              <RoundedIcon icon={faDatabase} tooltip="SQL, MongoDB, Prisma" />
              <RoundedIcon icon={faDocker} tooltip="Docker" />
              <RoundedIcon icon={faPython} tooltip="Python & PyTorch" />
              <RoundedIcon icon={faBrain} tooltip="AI & Machine Learning" />
            </IconContainer>
          </div>
        </div>
      </section>

      {/* Berufliche Highlights */}
      <section className="mb-16">
        <h2 className="text-4xl lg:text-5xl mb-8">
          Berufliche{" "}
          <span className="underline underline-offset-4 text-primary">
            Highlights
          </span>
        </h2>
        <div className="space-y-6">
          {/* Freelance */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Software Entwicklung
                </h3>
                <p className="text-primary font-semibold">
                  Freelancer (Selbstständig)
                </p>
              </div>
              <span className="text-muted-foreground">seit 12/2018</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Entwicklung produktionsreifer Webanwendungen und SaaS-Lösungen
                  mit React, Next.js & Node.js
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Aufbau kompletter Backend-Systeme mit Authentifizierung,
                  Datenbanken (Supabase, Prisma) und REST APIs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  UI/UX-Optimierung für bessere Conversion Rates und Performance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Eigenverantwortliche Projektplanung, Kundenmanagement und
                  Deployment
                </span>
              </li>
            </ul>
          </div>

          {/* SAE Institute */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Head Instructor Web Design & Web Development
                </h3>
                <p className="text-primary font-semibold">
                  SAE Institute München
                </p>
              </div>
              <span className="text-muted-foreground">01/2023 - 04/2025</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Leitung des gesamten Studienbereichs Web Development in
                  München mit Verantwortung für Curriculum und
                  Qualitätssicherung
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Entwicklung & Einführung neuer Curricula im Bereich JavaScript
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Planung & Umsetzung projektbasierter Lernmodule mit
                  praxisnahen Webanwendungen
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Coaching & Prüfung von Studierenden</span>
              </li>
            </ul>
          </div>

          {/* Q_PERIOR */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Werkstudent IT & System Administration
                </h3>
                <p className="text-primary font-semibold">Q_PERIOR</p>
              </div>
              <span className="text-muted-foreground">10/2021 - 12/2022</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Verwaltung von SharePoint-Systemen und IT-Infrastruktur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>IT 3rd Level Help Desk und Systemadministration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ausbildung */}
      <section className="mb-16">
        <h2 className="text-4xl lg:text-5xl mb-8">
          Ausbildung &{" "}
          <span className="underline underline-offset-4 text-primary">
            Qualifikation
          </span>
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Science – Web Development
                </h3>
                <p className="text-primary font-semibold">
                  SAE Institute München & University of Hertfordshire
                </p>
              </div>
              <span className="text-muted-foreground">09/2021 - 08/2024</span>
            </div>
            <p className="text-muted-foreground">
              Schwerpunkte: Full-Stack-Development, Next.js, React, Node.js,
              KI-Systeme (Python/PyTorch), Projektmanagement
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Fachinformatiker – Systemintegration (Ausbildung)
                </h3>
                <p className="text-primary font-semibold">
                  Max-Planck-Gesellschaft, Generalverwaltung
                </p>
              </div>
              <span className="text-muted-foreground">09/2017 - 07/2020</span>
            </div>
            <p className="text-muted-foreground">
              Schwerpunkte: IT-Infrastruktur, Netzwerktechnik, Hardware,
              Teamarbeit
            </p>
          </div>
        </div>
      </section>

      {/* Ausgewählte Projekte */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8">
          <h2 className="text-4xl lg:text-5xl mb-4 md:mb-0">
            Ausgewählte{" "}
            <span className="underline underline-offset-4 text-primary">
              Projekte
            </span>
          </h2>
          <Button asChild variant="outline">
            <Link href="/projekte">Alle Projekte ansehen →</Link>
          </Button>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Eine Auswahl meiner wichtigsten Projekte, die meine technischen
          Fähigkeiten und Erfahrung in der Umsetzung skalierbarer Webanwendungen
          demonstrieren. Von SaaS-Plattformen bis hin zu KI-gestützten Lösungen.
        </p>
        {projectsWithImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        ) : (
          <div className="bg-gray-50 rounded-xl p-8 text-center text-muted-foreground">
            Projekte werden geladen...
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl lg:text-4xl mb-4">
          Lassen Sie uns zusammenarbeiten
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Sie suchen einen erfahrenen Full-Stack Developer, der komplexe
          Projekte eigenständig umsetzen kann? Ich freue mich darauf, von Ihnen
          zu hören und gemeinsam innovative Lösungen zu entwickeln.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt" className="flex gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              Kontakt aufnehmen
            </Link>
          </Button>
          <ButtonGroup>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              <Link
                href="https://super.danielhilmer.de/storage/v1/object/public/danielhilmer//Lebenslauf.pdf"
                className="flex gap-2"
                target="_blank"
              >
                <FontAwesomeIcon icon={faDownload} />
                Lebenslauf (DE)
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              <Link
                href="https://super.danielhilmer.de/storage/v1/object/public/danielhilmer//CV.pdf"
                className="flex gap-2"
                target="_blank"
              >
                <FontAwesomeIcon icon={faDownload} />
                CV (EN)
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </section>
    </main>
  );
}
