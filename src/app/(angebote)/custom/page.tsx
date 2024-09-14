import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CheckIconItem from "@/components/ui/checkIconItem";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WordPressPage() {
  return (
    <>
      <Head>
        <title>Professionelle Webseite erstellen lassen</title>
        <meta
          name="description"
          content="Professionelle WordPress-Websites erstellen lassen – individuell, schnell und professionell."
        />
        <meta
          name="keywords"
          content="wordpress homepage erstellen lassen, wordpress website erstellen lassen, wordpress, woocommerce, elementor pro, wordpress website erstellen, wordpress elementor, wordpress kosten, website erstellen wordpress, wordpress agentur, website mit wordpress erstellen, website erstellen mit wordpress, wordpresscom"
        />
      </Head>
      <main className="py-10 flex flex-col gap-8 md:max-w-5xl m-auto px-2 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">
          Professionelle Webseite erstellen lassen – Ihr Erfolg ist mein Ziel
        </h1>
        <p>
          Möchten Sie eine Website erstellen lassen, die Ihr Unternehmen optimal
          präsentiert und mehr Kunden anzieht? Lassen Sie Ihre Homepage von mir
          erstellen – individuell, modern und genau auf Ihre Bedürfnisse
          zugeschnitten.
        </p>
        <Button asChild variant="default">
          <Link href="/kontakt">Kontakt aufnehmen</Link>
        </Button>
        <section className="flex gap-2">
          <Image
            src="/images/person-coding-wp.webp"
            alt="Person Designed und Codet eine WordPress Webseite"
            width={500}
            height={500}
            className="rounded-lg w-1/3 object-cover md:block hidden"
          />
          <Card className="md:w-2/3 w-full ">
            <CardHeader>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Warum eine Individuelle Webseite erstellen lassen?
              </h2>
              <CardDescription>
                Perfekt auf Ihr Unternehmen zugeschnitten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Eine maßgeschneiderte Website erstellen zu lassen bietet
                zahlreiche Vorteile gegenüber vorgefertigten Lösungen:
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 mb-2">
                Vorteile auf einen Blick:
              </h3>
              <ul>
                <CheckIconItem>
                  <strong>Einzigartigkeit:</strong> Ihre Internetseite hebt sich
                  von der Masse ab und spiegelt Ihre Markenidentität wider.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Flexibilität:</strong> Individuelle Anpassungen sind
                  jederzeit möglich, um Ihren wachsenden Anforderungen gerecht
                  zu werden.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Optimale Performance:</strong> Ich programmiere Ihre
                  Website so, dass sie schnell lädt und auf allen Geräten
                  hervorragend funktioniert.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>SEO-Optimierung:</strong> Durch gezielte Maßnahmen
                  wird Ihre Website besser von Suchmaschinen gefunden, was mehr
                  Besucher und potenzielle Kunden bedeutet.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Kostenersparnis auf lange Sicht:</strong> Eine
                  professionelle Website erstellen zu lassen kann Ihnen
                  langfristig Zeit und Geld sparen, da weniger Wartung und
                  Anpassungen erforderlich sind.
                </CheckIconItem>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section className="flex gap-2">
          <Card className="md:w-2/3 w-full ">
            <CardHeader>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Meine Leistungen für Ihren perfekten Internetauftritt
              </h2>
              <CardDescription>
                Individuelle Lösungen für Ihre Website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Ich biete Ihnen alles, was Sie brauchen, um eine beeindruckende
                WordPress Website erstellen zu lassen. Ob einfache Homepage,
                umfangreiche Unternehmenswebsite oder individueller Online-Shop
                – ich begleite Sie von der Konzeption bis zur finalen Umsetzung.
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 mb-2">
                Leistungspakete:
              </h3>
              <ul className="list-disc list-inside">
                <CheckIconItem>
                  <strong>Individuelle Webseite erstellen lassen:</strong> Ich
                  programmiere Ihre Website nach Ihren Wünschen.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Kosten für Website Erstellung:</strong> Transparente
                  und faire Preise für jedes Budget.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Webseiten Relaunch:</strong> Ich bringe Ihre
                  bestehende Internetseite auf den neuesten Stand.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Website mit eigener Domain:</strong> Ideal für
                  Start-ups und kleine Unternehmen.
                </CheckIconItem>
                <CheckIconItem>
                  <strong>Website erstellen lassen - Freelancer:</strong>{" "}
                  Profitieren Sie von meiner Flexibilität und Expertise als
                  Freelancer.
                </CheckIconItem>
              </ul>
            </CardContent>
          </Card>
          <Image
            src="/images/3d-art-person-coding.webp"
            alt="Person Designed und Codet eine WordPress Webseite"
            width={500}
            height={500}
            className="rounded-lg w-1/3 object-cover md:block hidden"
          />
        </section>
        <section className="flex flex-col gap-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Transparente Preise – Was kostet es, eine Website erstellen zu
            lassen?
          </h2>
          <div className="grid md:grid-cols-1 gap-2 ">
            <Card className="bg-gray-900 text-white flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-xl">
                      Transparente Preise auf Anfrage
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit mb-1">
                      Beliebt
                    </Badge>
                  </div>
                  <div className="flex gap-1 pt-4">
                    <span className="text-2xl font-bold">Custom</span>
                  </div>
                  <CardDescription>
                    Maßgeschneiderte Lösungen für höchste Ansprüche.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside grid md:grid-cols-2">
                    <CheckIconItem>
                      perfekt auf Ihre Wünsche zugeschnitten
                    </CheckIconItem>
                    <CheckIconItem>Responsive Design</CheckIconItem>
                    <CheckIconItem>
                      Datenschutz und Impressum (DSGVO)
                    </CheckIconItem>
                    <CheckIconItem>Cookie Banner (DSGVO)</CheckIconItem>

                    <CheckIconItem>SEO-Optimierung</CheckIconItem>
                    <CheckIconItem>Bild Optimierung</CheckIconItem>
                    <CheckIconItem>Ladezeitoptimierung</CheckIconItem>

                    <CheckIconItem>
                      Auf basis modernster Technologien wie JavaScript, React
                      und NextJS
                    </CheckIconItem>
                  </ul>
                </CardContent>
              </div>
              <CardFooter className="mt-auto">
                <Button asChild variant="secondary">
                  <Link href="/kontakt">Angebot anfordern</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Jetzt Ihre professionelle Website bauen lassen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Starten Sie jetzt durch und lassen Sie sich eine Website
                erstellen, die überzeugt. Kontaktieren Sie mich für eine
                kostenlose Beratung und erfahren Sie mehr über die Kosten für
                die Erstellung einer Website.
              </p>
              <strong>
                Ihr Erfolg ist nur einen Klick entfernt – Lassen Sie Ihre
                Website von einem Profi erstellen!
              </strong>
            </CardContent>
            <CardFooter>
              <Button asChild variant="default">
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
        <section className="grid md:grid-cols-2 gap-2">
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  So einfach können Sie Ihre Internetseite erstellen lassen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside grid md:grid-cols-2">
                  <CheckIconItem>
                    <strong>Kontaktaufnahme:</strong> Sprechen Sie mit mir über
                    Ihre Vorstellungen.
                  </CheckIconItem>
                  <CheckIconItem>
                    <strong>Planung:</strong> Ich entwickle ein Konzept für Ihre
                    neue Website.
                  </CheckIconItem>
                  <CheckIconItem>
                    <strong>Umsetzung:</strong> Ich programmiere Ihre Website
                    professionell.
                  </CheckIconItem>
                  <CheckIconItem>
                    <strong>Launch:</strong> Ihre neue Homepage geht online und
                    begeistert Ihre Besucher.
                  </CheckIconItem>
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button asChild variant="default">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Warum ich der richtige Website Anbieter für Sie bin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <CheckIconItem>
                    <strong>Erfahrung:</strong> Jahrelange Expertise in der
                    Erstellung von Internetseiten.
                  </CheckIconItem>
                  <CheckIconItem>
                    <strong>Qualität:</strong> Höchste Standards bei Design und
                    Funktionalität.
                  </CheckIconItem>
                  <CheckIconItem>
                    <strong>Service:</strong> Persönliche Betreuung und Support
                    auch nach dem Launch.
                  </CheckIconItem>
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button asChild variant="default">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
        <section className="my-5">
          <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 mb-2">
            Häufig gestellte Fragen (FAQ)
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Wie viel kostet es, eine Website erstellen zu lassen?
              </AccordionTrigger>
              <AccordionContent>
                Die Kosten für die Erstellung einer Website hängen von Ihren
                individuellen Anforderungen und Wünschen ab. Für ein genaues
                Angebot kontaktieren Sie mich bitte für eine unverbindliche
                Beratung.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Wie lange dauert es, bis meine neue Website online ist?
              </AccordionTrigger>
              <AccordionContent>
                Die Entwicklungszeit variiert je nach Umfang und Komplexität des
                Projekts. In der Regel kann eine einfache Internetseite
                innerhalb von 2-4 Wochen fertiggestellt werden. Ein genauer
                Zeitrahmen wird während der Planungsphase festgelegt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Kann ich meine Website nach der Fertigstellung selbst
                bearbeiten?
              </AccordionTrigger>
              <AccordionContent>
                Je nach Wunsch kann Ihre Webseite mit einem Content Management
                System (CMS) ausgestattet werden, das es Ihnen ermöglicht,
                Inhalte selbst zu pflegen und zu aktualisieren. Ich berate Sie
                gerne zu den verschiedenen Möglichkeiten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Bieten Sie auch einen Webseiten Relaunch für bestehende Seiten
                an?
              </AccordionTrigger>
              <AccordionContent>
                Absolut! Ich unterstütze Sie gerne dabei, Ihre vorhandene
                Homepage zu modernisieren und technisch auf den neuesten Stand
                zu bringen. Ein Webseiten Relaunch kann das Design auffrischen
                und die Funktionalität verbessern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Warum sollte ich einen Freelancer beauftragen, meine Website zu
                erstellen?
              </AccordionTrigger>
              <AccordionContent>
                Als Freelancer biete ich Ihnen persönliche Betreuung,
                Flexibilität und direkte Kommunikation. Sie profitieren von
                maßgeschneiderten Lösungen und haben einen festen
                Ansprechpartner für alle Fragen rund um die Erstellung Ihrer
                Website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </>
  );
}

export default WordPressPage;
