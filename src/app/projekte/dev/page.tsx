import React from "react";
import Projekte from "../Projekte";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

function page() {
  return (
    <main className="py-10 flex flex-col gap-4 max-w-lg md:max-w-7xl m-auto">
      <h1 className="text-7xl">Projekte</h1>
      <div className="grid grid-cols-4">
        <Projekte icons={[faHtml5]} heading="Überschrift" description="Bla" />
      </div>
    </main>
  );
}

export default page;
