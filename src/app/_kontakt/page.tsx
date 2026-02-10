import React from "react";
import { KontaktForm } from "./KontaktForm";

function Kontakt() {
  return (
    <main className="py-8 flex flex-col md:flex-row gap-4 items-center max-w-lg md:max-w-xl m-auto">
      <div className="w-full bg-white p-14 rounded-3xl">
        <h1 className="text-4xl mb-8">Kontakt aufnehmen</h1>
        <KontaktForm />
      </div>
    </main>
  );
}

export default Kontakt;
