import ButtonLink from "@/components/ButtonLink";
import Language from "@/components/Language";
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
        <div className="w-1/2">
          <Language />
          <h1 className="text-7xl">Freiberufliche JavaScript Entwiklung</h1>
          <p>
            Hi, ich bin <span>Daniel Hilmer</span>
          </p>
          <ButtonLink href="/" name="Kontakt aufnehmen" />
        </div>
      </header>
      <main></main>
    </>
  );
}
