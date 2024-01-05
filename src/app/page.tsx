import ButtonLink from "@/components/ButtonLink";
import Language from "@/components/Language";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-screen flex gap-4 items-center">
        <Image
          className="w-1/2 h-full object-cover"
          width={1000}
          height={1000}
          src="/images/danielhilmer.jpg"
          alt="Daniel Hilmer Web Development"
        />
        <div className="w-1/2 mr-4">
          <Language />
          <h1 className="text-7xl">Freiberufliche JavaScript Entwiklung</h1>
          <div className="my-8 bg-slate-300 p-2 rounded-md flex gap-2">
            <FontAwesomeIcon
              className="min-w-5 max-w-5 h-5 text-slate-900"
              icon={faInfoCircle}
            />
            <p>
              Hi, ich bin <span className="font-bold">Daniel Hilmer</span>, ein
              leidenschaftlicher Webentwickler, der sich auf die Erstellung
              ansprechender Websites und innovativer Webanwendungen
              spezialisiert hat. Mit einem starken Fokus auf
              <span className="font-bold"> JavaScript-Frameworks</span> wie
              React, NodeJS und NextJS, kombiniert mit einem fundierten
              Verständnis für modernste Technologien, bringe ich eine kreative
              und effektive Herangehensweise an jedes Projekt.
            </p>
          </div>
          <div className="flex gap-2">
            <ButtonLink href="/" name="Kontakt aufnehmen" primary={true} />
            <ButtonLink href="/" name="Werdegang" />
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
