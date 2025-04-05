import { Metadata } from "next";

import CheckIcon from "@/components/icons/CheckIcon";
import { SmallForm } from "../components/SmallForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";

export const metadata: Metadata = {
  title: "Daniel Hilmer - Webentwicklung",
  description:
    "Freiberuflicher Webentwickler spezialisiert auf JavaScript-Frameworks wie React, NodeJS und NextJS.",
  keywords:
    "Skalierbare und leistungsstarke SaaS-Lösungen für Mittelständische Unternehmen, Maßgeschneiderte Webanwendungen für Ihr Unternehmen, Webentwicklung, Webanwendungen, SaaS-Lösungen, JavaScript-Frameworks, React, NodeJS, NextJS, Freiberuflicher Webentwickler, Webentwicklung für Unternehmen, Webentwicklung für Mittelstand, Webentwicklung für Startups, Webentwicklung für kleine Unternehmen, Webentwicklung für große Unternehmen, Webentwicklung für E-Commerce, Webentwicklung für B2B, Webentwicklung für B2C",
};

export default function Home() {
  return (
    <div className="max-w-2lg md:max-w-7xl m-auto p-2">
      <div className="md:h-1/2 flex flex-col-reverse md:flex-row-reverse gap-4 my-10 md:my-20">
        <div className="md:w-1/3">
          <section className="bg-green-200 border-2 p-4 border-green-300 rounded-md flex items-center justify-between my-4">
            {/* <h4 className="font-bold">Jetzt per WhatsApp kontaktieren</h4> */}
            <Button asChild variant="outline">
              <Link
                href="https://wa.me/message/SUK6VOGPWX2HJ1"
                className="flex gap-2 w-full"
              >
                <WhatsAppIcon className="w-4 h-4" /> Auf WhatsApp kontaktieren
              </Link>
            </Button>
          </section>
          <div className="bg-white rounded-xl p-8 shadow-sm relative overflow-visible">
            <h4 className="font-bold text-2xl mb-4">Kostenlos anfragen!</h4>
            <SmallForm />
          </div>
        </div>
        <div className="md:w-2/3 mr-4">
          <header>
            <h2 className="text-primary font-bold uppercase mt-4 mb-2">
              Maßgeschneiderte Webanwendungen für Ihr Unternehmen
            </h2>
            <h1 className="text-4xl sm:text-4xl lg:text-6xl mb-5">
              Skalierbare und leistungsstarke{" "}
              <span className="underline underline-offset-4 text-primary">
                SaaS-Lösungen
              </span>{" "}
              für Mittelständische Unternehmen
            </h1>
          </header>
          <main>
            <p className="mt-2 mb-10 text-lg text-muted-foreground">
              Wir bieten maßgeschneiderte Webentwicklungslösungen für
              mittelständische Unternehmen, die nach mehr als nur einer
              Standard-Webseite suchen. Von der Erstellung von dynamischen
              Webseiten bis hin zu komplexen Webanwendungen unterstützen wir Sie
              dabei, Ihr Business digital zu transformieren.
            </p>
            <div className="flex gap-2 flex-wrap">
              <div className="flex gap-2 rounded-full px-4 py-1 bg-white shadow-sm items-center text-sm">
                <CheckIcon className="w-4 h-4 text-green-600" /> Individuelle
                Webentwicklung
              </div>
              <div className="flex gap-2 rounded-full px-4 py-1 bg-white shadow-sm items-center text-sm">
                <CheckIcon className="w-4 h-4 text-green-600" /> Skalierbare
                Web-Apps
              </div>
              <div className="flex gap-2 rounded-full px-4 py-1 bg-white shadow-sm items-center text-sm">
                <CheckIcon className="w-4 h-4 text-green-600" />
                Sichere & performante Plattformen
              </div>
              <div className="flex gap-2 rounded-full px-4 py-1 bg-white shadow-sm items-center text-sm">
                <CheckIcon className="w-4 h-4 text-green-600" />
                KI-gestütze Lösungen
              </div>
              <div className="flex gap-2 rounded-full px-4 py-1 bg-white shadow-sm items-center text-sm">
                <CheckIcon className="w-4 h-4 text-green-600" />
                Professionelle & langfristige Zusammenarbeit
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
