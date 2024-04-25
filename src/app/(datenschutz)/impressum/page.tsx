import React from "react";

export default function Impressum() {
  return (
    <main className="max-w-lg md:max-w-7xl m-auto py-28">
      <h1 className="text-7xl">Impressum</h1>

      <h2 className="text-5xl mt-5 mb-2">
        Angaben gem&auml;&szlig; &sect; 5 TMG
      </h2>
      <p>
        Daniel Hilmer
        <br />
        Lorenzstraße 10
        <br />
        81737 München
      </p>

      <h2 className="text-5xl mt-5 mb-2">Kontakt</h2>
      <p>
        Telefon: 015167578205
        <br />
        E-Mail: mail@danielhilmer.de
      </p>

      <h2 className="text-5xl mt-5 mb-2">Redaktionell verantwortlich</h2>
      <p>
        Daniel Hilmer
        <br />
        Lorenzstraße 10
        <br />
        81737 München
      </p>

      <h2 className="text-5xl mt-5 mb-2">EU-Streitschlichtung</h2>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="text-5xl mt-5 mb-2">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </main>
  );
}
