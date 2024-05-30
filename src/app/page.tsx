import ButtonLink from "@/_components/ButtonLink";
import IconContainer from "@/_components/Icons/IconContainer";
import RoundedIcon from "@/_components/Icons/RoundedIcon";
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

export default function Home() {
  return (
    <main className="md:h-1/2 flex flex-col md:flex-row gap-4 items-center max-w-2lg md:max-w-7xl m-auto p-2">
      <Image
        className="md:w-1/2 md:h-1/2 object-cover rounded-lg"
        width={1000}
        height={1000}
        src="/images/danielhilmer.jpg"
        alt="Daniel Hilmer Web Development"
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
        <h1 className="text-7xl">Freiberufliche JavaScript Entwicklung</h1>
        <div className="my-8 bg-white shadow-sm p-8 rounded-lg flex gap-4 items-start">
          <FontAwesomeIcon
            className="min-w-5 max-w-5 h-5 text-slate-900"
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
          <div className="flex gap-2">
            <ButtonLink
              href="/kontakt"
              name="Kontakt aufnehmen"
              type="primary"
            />
            {/* <ButtonLink href="/" name="Werdegang" /> */}
          </div>
          <IconContainer>
            <Link href="">
              <RoundedIcon icon={faGithub} />
            </Link>
            <Link href="">
              <RoundedIcon icon={faLinkedinIn} />
            </Link>
          </IconContainer>
        </div>
      </div>
    </main>
  );
}
