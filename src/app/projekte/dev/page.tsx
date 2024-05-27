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
import { faBrain, faLock } from "@fortawesome/free-solid-svg-icons";

function page() {
  return (
    <main className="py-10 flex flex-col gap-4 max-w-lg md:max-w-7xl m-auto">
      <h1 className="text-7xl">Projekte</h1>
      <div className="grid grid-cols-4 gap-3">
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
          labels={["In Arbeit"]}
        />
        {/* Daniel Hilmer */}
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs, faReact]}
          tooltips={["HTML5", "TailwindCSS", "JavaScript", "NodeJS", "NextJS"]}
          heading="Daniel Hilmer"
          description="Meine eigene Website, die ich mit NextJS und TailwindCSS umgesetzt habe."
          labels={["In Arbeit"]}
          imageSrc="danielhilmer.png"
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
          labels={["In Arbeit"]}
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
          labels={["In Arbeit"]}
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
          labels={["Abgeschlossen"]}
        />
        <Projekte
          icons={[faHtml5, faCss3, faJs, faNodeJs]}
          tooltips={["HTML5", "CSS3/ SASS", "JavaScript", "NodeJS"]}
          heading="Dog Tour"
          description="Dieses Projekt konnte ich während meines Studiums bei der SAE in München umsetzen."
          labels={["Abgeschlossen"]}
        />
        <Projekte
          icons={[faFigma, faHtml5, faCss3, faJs, faNodeJs]}
          tooltips={[
            "UI & UX Design",
            "HTML5",
            "CSS3/ SASS",
            "JavaScript",
            "NodeJS",
          ]}
          heading="UseLess"
          description="Dieses Projekt konnte ich während meines Studiums bei der SAE in München umsetzen."
          labels={["Abgeschlossen"]}
        />
      </div>
    </main>
  );
}

export default page;
