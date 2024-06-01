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
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faLock,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function page() {
  return (
    <main className="py-10 flex flex-col gap-4 max-w-lg md:max-w-7xl m-auto px-2">
      <h1 className="text-7xl">Development Projekte</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Bachelor Projekt */}
        <Projekte
          icons={[
            faHtml5,
            faCss3,
            faJs,
            faNodeJs,
            faReact,
            faLock,
            faBrain,
            faPython,
          ]}
          tooltips={[
            "HTML5",
            "TailwindCSS",
            "JavaScript",
            "NodeJS",
            "NextJS",
            "Login (NextAuth)",
            "KI",
            "Python",
          ]}
          heading="Unbiased News"
          description="Bachelor Projekt: Entwicklung einer deutschsprachigen Künstlichen Intelligenz zur automatischen News-Analyse und politischen Einordnung für eine Unbiased News Webapplikation"
          labels={[{ name: "In Arbeit" }]}
        />
        {/* Daniel Hilmer */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faReact]}
          tooltips={["HTML5", "TailwindCSS", "JavaScript", "NodeJS", "NextJS"]}
          heading="Daniel Hilmer"
          description="Meine eigene Website, die ich mit NextJS und TailwindCSS umgesetzt habe."
          labels={[{ name: "In Arbeit" }]}
          imageSrc="danielhilmer.png"
        />
        {/* Window Effect Header */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faReact]}
          tooltips={["HTML5", "TailwindCSS", "JavaScript", "NextJS"]}
          heading="Window effect header"
          description="Open Source Projekt: Window-Glass Effect Header, umgesetzt mit NextJS und TailwindCSS."
          link="/projekte/dev/window-effect-header"
          imageSrc="glass-effect.png"
          labels={[
            { name: "Abgeschlossen" },
            {
              name: "GitHub",
              link: "https://github.com/dackJaniel/window-effect-header",
              icon: faUpRightFromSquare,
            },
            { name: "Open Source" },
          ]}
        />
        {/* Auto Kalender */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faReact, faLock]}
          tooltips={[
            "HTML5",
            "TailwindCSS",
            "JavaScript",
            "NodeJS",
            "NextJS",
            "Login (NextAuth)",
          ]}
          heading="Auto Kalender"
          description="Eine Kalender-App, die ich mit NextJS umgesetzt habe. Die Webapp ermöglicht es, einen Persönlichen Kalender zu erstellen. Unterstützt wird der Benutzer durch nützliche KI Funktionen."
          link="https://auto-calendar.vercel.app/"
          labels={[
            { name: "In Arbeit" },
            {
              name: "GitHub",
              link: "https://github.com/dackJaniel/auto-calendar",
              icon: faUpRightFromSquare,
            },
          ]}
          imageSrc="auto-calendar.png"
        />
        {/* Icon Generator */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faReact, faLock, faBrain]}
          tooltips={[
            "HTML5",
            "TailwindCSS",
            "JavaScript",
            "NodeJS",
            "NextJS",
            "Login (NextAuth)",
            "KI (OpenAI API)",
          ]}
          heading="Icon Generator"
          description="Ein Icon Generator, den ich mit NextJS umgesetzt habe. Der Generator nutzt die OpenAI API, um aus einem Text ein Icon zu generieren."
          labels={[{ name: "In Arbeit" }]}
          imageSrc="icongenerator.png"
        />
        {/* Fokusfabrik */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faReact, faLock]}
          tooltips={[
            "HTML5",
            "TailwindCSS",
            "JavaScript",
            "NodeJS",
            "NextJS",
            "Login (NextAuth)",
          ]}
          imageSrc="fokusfabrik.png"
          heading="fokusfabrik"
          link="https://fokusfabrik.media/"
          description="Dieses Projekt konnte ich während meines Studiums bei der SAE in München umsetzen."
          labels={[{ name: "Abgeschlossen" }]}
        />
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faLock]}
          tooltips={[
            "HTML5",
            "CSS3/ SASS",
            "JavaScript",
            "NodeJS",
            "Login (Home made)",
          ]}
          heading="Dog Tours"
          description="Fullstack Web-App, für eine Hundeschule, die Hundetouren (z.B. durch den Wald) anbieten möchte (Wie Geo cashing für Hunde), um das Gassi gehen interessanter zu machen."
          imageSrc="dog-tours.png"
          labels={[
            { name: "Abgeschlossen" },
            { name: "Konzept" },
            { name: "Unveröffentlicht" },
            { name: "Studium" },
            // {
            //   name: "GitHub",
            //   link: "https://github.com/dackJaniel/Dog-Tours",
            //   icon: faUpRightFromSquare,
            // },
          ]}
        />
        {/* useLess */}
        <Projekte
          icons={[faFigma, faHtml5, faCss3, faJs]}
          tooltips={["UI & UX Design", "HTML5", "CSS3/ SASS", "JavaScript"]}
          heading="UseLess"
          description="Dies ist ein Projekt, welches sich über das erste Jahr meines Studiums an der SAE in München erstreckt hat. Zuerst habe ich das Design erstellt um es daraufhin mit HTML, CSS und später auch mit JavaScript umzusetzen."
          imageSrc="useless.png"
          labels={[
            { name: "Abgeschlossen" },
            { name: "Studium" },
            { name: "Unveröffentlicht" },
            {
              name: "GitHub",
              link: "https://github.com/dackJaniel/useLess",
              icon: faUpRightFromSquare,
            },
          ]}
        />
      </div>
    </main>
  );
}

export default page;
