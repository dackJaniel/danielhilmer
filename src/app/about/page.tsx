import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import { Button } from "@/components/ui/button";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faLinkedinIn,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import profilePic from "../../images/danielhilmer.jpg";

export const metadata: Metadata = {
  title: "Daniel Hilmer - Webentwicklung",
  description:
    "Freiberuflicher Webentwickler spezialisiert auf JavaScript-Frameworks wie React, NodeJS und NextJS.",
  keywords:
    "Webentwicklung, JavaScript, React, NodeJS, NextJS, Prisma, SQL, NoSQL, HTML5, CSS3, SCSS, Tailwind",
};

export default function Home() {
  return (
    <main className="md:h-1/2 flex flex-col md:flex-row gap-4 md:items-center max-w-2lg md:max-w-7xl m-auto p-2">
      <Image
        className="w-48 h-48 rounded-full md:w-1/2 md:h-[80vh] object-cover md:rounded-2xl"
        src={profilePic}
        alt="Daniel Hilmer - Web Development"
        placeholder="blur"
      />
      <div className="md:w-1/2 mr-4">
        <IconContainer>
          <RoundedIcon icon={faHtml5} tooltip="HTML5" />
          <RoundedIcon icon={faCss3} tooltip="CSS3, SCSS, Tailwind" />
          <RoundedIcon icon={faGithub} tooltip="GitHub" />
          <RoundedIcon icon={faJs} tooltip="JavaScript, TypeScript" />
          <RoundedIcon icon={faReact} tooltip="React, NextJS" />
          <RoundedIcon icon={faNodeJs} tooltip="NodeJS" />
          <RoundedIcon icon={faDatabase} tooltip="SQL, NoSQL, Prisma" />
        </IconContainer>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">
          Freiberufliche JavaScript Entwicklung
        </h1>
        <div className="my-8 bg-white shadow-sm p-4 md:p-8 rounded-lg flex gap-4 items-start w-full">
          <FontAwesomeIcon
            className="min-w-5 max-w-5 h-5 text-slate-900 hidden sm:block"
            icon={faInfoCircle}
          />
          <p>
            Hi, ich bin <span className="font-bold">Daniel Hilmer</span>, ein
            leidenschaftlicher Webentwickler, der sich auf die Erstellung
            ansprechender Websites und innovativer Webanwendungen spezialisiert
            hat. Mit einem starken Fokus auf
            <span className="font-bold"> JavaScript-Frameworks</span> wie React,
            NodeJS und NextJS, kombiniert mit einem fundierten Verständnis für
            modernste Technologien, bringe ich eine kreative und effektive
            Herangehensweise an jedes Projekt.
          </p>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Button asChild variant="outline">
              <Link
                href="https://github.com/dackJaniel"
                target="_blank"
                className="flex gap-2"
              >
                <span className="hidden sm:block">Github</span>{" "}
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.linkedin.com/in/daniel-hilmer-038390206/"
                target="_blank"
                className="flex gap-2"
              >
                <span className="hidden sm:block">LinkedIn</span>{" "}
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
