import React from "react";
import Projekte from "../Projekte";
import {
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faLock,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import newsai from "../../../images/newsai.png";
import danielhilmer from "../../../images/danielhilmer.png";
import glassEffect from "../../../images/glass-effect.png";
import autoCalendar from "../../../images/auto-calendar.png";
import icongenerator from "../../../images/icongenerator.png";
import fokusfabrik from "../../../images/fokusfabrik.png";
import dogTours from "../../../images/dog-tours.png";
import useless from "../../../images/useless.png";
import stampal from "../../../images/stampal.jpg";

const projectData = [
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faReact, faLock, faStripe],
    tooltips: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "NextJS",
      "Login (NextAuth)",
      "Stripe Zahlungen",
    ],
    heading: "Stampal",
    description:
      "Stampal ist eine Webapplikation, die es Unternehmen ermöglicht, von Physischen Stempelkarten auf digitale umzustellen. Die App wurde mit NextJS und TailwindCSS umgesetzt. Die Backend-Logik wurde mit NodeJS und Prisma realisiert. Die App nutzt Stripe für die Zahlungsabwicklung und NextAuth für die Authentifizierung.",
    labels: [{ name: "In Arbeit" }],
    imageSrc: stampal,
    link: "https://web.stampal.app/",
  },
  {
    icons: [
      faHtml5,
      faCss3,
      faJs,
      faNodeJs,
      faReact,
      faLock,
      faBrain,
      faPython,
    ],
    tooltips: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "NextJS",
      "Login (NextAuth)",
      "KI",
      "Python",
    ],
    heading: "Unbiased News",
    description:
      "Bachelor Projekt: Entwicklung einer deutschsprachigen Künstlichen Intelligenz zur automatischen News-Analyse und politischen Einordnung für eine Unbiased News Webapplikation.",
    labels: [
      { name: "Abgeschlossen" },
      { name: "Bachelor Projekt" },
      { name: "Konzept" },
      { name: "Unveröffentlicht" },
    ],
    imageSrc: newsai,
  },
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faReact],
    tooltips: ["HTML5", "TailwindCSS", "JavaScript", "NodeJS", "NextJS"],
    heading: "Daniel Hilmer",
    description:
      "Diese Website, die mit NextJS und TailwindCSS umgesetzt wurde.",
    labels: [{ name: "In Arbeit" }],
    imageSrc: danielhilmer,
  },
  {
    icons: [faHtml5, faCss3, faJs, faReact],
    tooltips: ["HTML5", "TailwindCSS", "JavaScript", "NextJS"],
    heading: "Window effect header",
    description:
      "Open Source Projekt: Window-Glass Effect Header, umgesetzt mit NextJS und TailwindCSS.",
    link: "/projekte/dev/window-effect-header",
    imageSrc: glassEffect,
    labels: [
      { name: "Abgeschlossen" },
      {
        name: "GitHub",
        link: "https://github.com/dackJaniel/window-effect-header",
        icon: faUpRightFromSquare,
      },
      { name: "Open Source" },
    ],
  },
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faReact, faLock],
    tooltips: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "NextJS",
      "Login (NextAuth)",
    ],
    heading: "Auto Kalender",
    description:
      "Eine Kalender-App, die ich mit NextJS umgesetzt habe. Die Webapp ermöglicht es, einen Persönlichen Kalender zu erstellen. Unterstützt wird der Benutzer durch nützliche KI Funktionen.",
    link: "https://auto-calendar.vercel.app/",
    labels: [
      { name: "In Arbeit" },
      { name: "Konzept" },
      { name: "Unveröffentlicht" },
      {
        name: "GitHub",
        link: "https://github.com/dackJaniel/auto-calendar",
        icon: faUpRightFromSquare,
      },
    ],
    imageSrc: autoCalendar,
  },
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faReact, faLock, faBrain],
    tooltips: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "NextJS",
      "Login (NextAuth)",
      "KI (OpenAI API)",
    ],
    heading: "Icon Generator",
    description:
      "Ein Icon Generator, den ich mit NextJS umgesetzt habe. Der Generator nutzt die OpenAI API, um aus einem Text ein Icon zu generieren.",
    labels: [
      { name: "Abgeschlossen" },
      { name: "Konzept" },
      { name: "Unveröffentlicht" },
    ],
    imageSrc: icongenerator,
  },
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faReact, faLock],
    tooltips: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "NextJS",
      "Login (NextAuth)",
    ],
    imageSrc: fokusfabrik,
    heading: "fokusfabrik",
    link: "https://fokusfabrik.media/",
    description:
      "Dieses Projekt konnte ich während meines Studiums bei der SAE in München umsetzen.",
    labels: [
      { name: "Abgeschlossen" },
      { name: "Studium" },
      { name: "Unveröffentlicht" },
    ],
  },
  {
    icons: [faHtml5, faCss3, faJs, faNodeJs, faLock],
    tooltips: [
      "HTML5",
      "CSS3/ SASS",
      "JavaScript",
      "NodeJS",
      "Login (Home made)",
    ],
    heading: "Dog Tours",
    description:
      "Fullstack Web-App, für eine Hundeschule, die Hundetouren (z.B. durch den Wald) anbieten möchte (Wie Geo cashing für Hunde), um das Gassi gehen interessanter zu machen.",
    imageSrc: dogTours,
    labels: [
      { name: "Abgeschlossen" },
      { name: "Konzept" },
      { name: "Unveröffentlicht" },
      { name: "Studium" },
    ],
  },
  {
    icons: [faFigma, faHtml5, faCss3, faJs],
    tooltips: ["UI & UX Design", "HTML5", "CSS3/ SASS", "JavaScript"],
    heading: "UseLess",
    description:
      "Dies ist ein Projekt, welches sich über das erste Jahr meines Studiums an der SAE in München erstreckt hat. Zuerst habe ich das Design erstellt um es daraufhin mit HTML, CSS und später auch mit JavaScript umzusetzen.",
    imageSrc: useless,
    labels: [
      { name: "Abgeschlossen" },
      { name: "Konzept" },
      { name: "Studium" },
      { name: "Unveröffentlicht" },
      {
        name: "GitHub",
        link: "https://github.com/dackJaniel/useLess",
        icon: faUpRightFromSquare,
      },
    ],
  },
];

function page() {
  return (
    <main className="py-10 flex flex-col gap-8 max-w-lg md:max-w-7xl m-auto px-2">
      <h1 className="text-7xl">Development Projekte</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projectData.map((project, index) => (
          <Projekte
            key={index}
            icons={project.icons}
            tooltips={project.tooltips}
            heading={project.heading}
            description={project.description}
            labels={project.labels}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}

export default page;
