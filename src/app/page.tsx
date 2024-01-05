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
              className="w-5 h-5 text-slate-900"
              icon={faInfoCircle}
            />
            <p>
              Hi, ich bin <span className="font-bold">Daniel Hilmer</span>
              <br />
              ich entwickle <span className="font-bold">
                Webseiten
              </span> und <span className="font-bold">Webapps</span>, oft auf
              basis von JavaScript Frameworks wie React mit NodeJS oder NextJS.
            </p>
          </div>
          <ButtonLink href="/" name="Kontakt aufnehmen" />
        </div>
      </header>
      <main></main>
    </>
  );
}
