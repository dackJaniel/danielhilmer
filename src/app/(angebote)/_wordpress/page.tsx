import CheckIcon from "@/components/icons/CheckIcon";
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
import { Metadata } from "next";

import personCongingOne from "../../../images/person-coding-wp.webp";
import personCondingTwo from "../../../images/3d-art-person-coding.webp";

export const metadata: Metadata = {
  title: "Ihre professionelle WordPress-Website - Daniel Hilmer",
  description:
    "Professionelle WordPress-Websites erstellen lassen – individuell, schnell und professionell.",
  keywords:
    "wordpress homepage erstellen lassen, wordpress website erstellen lassen, wordpress, woocommerce, elementor pro, wordpress website erstellen, wordpress elementor, wordpress kosten, website erstellen wordpress, wordpress agentur, website mit wordpress erstellen, website erstellen mit wordpress, wordpresscom",
};

function WordPressPage() {
  return (
    <main className="py-10 flex flex-col gap-8 md:max-w-5xl m-auto px-2 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl">
        Ihre WordPress-Website – Schnell, Professionell & Individuell
      </h1>
      <p>
        Sie möchten eine professionelle WordPress Homepage erstellen lassen, die
        sich von der Masse abhebt und auf Ihre individuellen Bedürfnisse
        zugeschnitten ist? Dann sind Sie hier genau richtig! Ob Sie eine
        WordPress Website erstellen lassen möchten, einen Online-Shop mit
        WooCommerce planen oder das beliebte Elementor Pro als Page Builder
        bevorzugen – ich sorge dafür, dass Ihre Vision Realität wird.
      </p>
      <Button asChild variant="default">
        <Link href="/kontakt">Kontakt aufnehmen</Link>
      </Button>
      <section className="flex gap-2">
        <Image
          src={personCongingOne}
          alt="Person Designed und Programmiert eine WordPress Webseite"
          className="rounded-lg w-1/3 object-cover md:block hidden"
          placeholder="blur"
        />
        <Card className="md:w-2/3 w-full ">
          <CardHeader>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Warum WordPress?
            </h2>
            <CardDescription>Das weltweit führende CMS</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              WordPress ist das weltweit führende Content-Management-System und
              bietet unendliche Möglichkeiten für Ihre Website. Egal, ob Sie
              eine Unternehmensseite, einen Blog, oder einen Onlineshop
              erstellen möchten – mit WordPress sind Sie immer flexibel und
              zukunftssicher aufgestellt.
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 mb-2">
              Vorteile auf einen Blick:
            </h3>
            <ul>
              <CheckIconItem>Benutzerfreundlichkeit</CheckIconItem>
              <CheckIconItem>
                Unendliche Anpassungsmöglichkeiten mit Elementor und Elementor
                Pro
              </CheckIconItem>
              <CheckIconItem>
                Ideal für SEO-Optimierung und Online-Marketing
              </CheckIconItem>
              <CheckIconItem>Perfekt für WooCommerce-Shops</CheckIconItem>
              <CheckIconItem>
                Weltweit größte Community und stetige Weiterentwicklung
              </CheckIconItem>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="flex gap-2">
        <Card className="md:w-2/3 w-full ">
          <CardHeader>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Meine WordPress und WooCommerce Leistungen
            </h2>
            <CardDescription>
              Individuelle Lösungen für Ihre Webpräsenz oder Ihren Online-Shop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Ich biete Ihnen alles, was Sie brauchen, um eine beeindruckende
              WordPress Website erstellen zu lassen. Ob einfache Homepage,
              umfangreiche Unternehmenswebsite oder individueller Online-Shop –
              ich begleite Sie von der Konzeption bis zur finalen Umsetzung.
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 mb-2">
              Leistungspakete:
            </h3>
            <ul className="list-disc list-inside">
              <CheckIconItem>
                <strong>WordPress Website:</strong> Perfekt für kleine und
                mittelständische Unternehmen, die eine professionelle Webpräsenz
                benötigen.
              </CheckIconItem>
              <CheckIconItem>
                <strong>WooCommerce Onlineshops:</strong> Maßgeschneiderte
                E-Commerce-Lösungen für Ihren erfolgreichen Online-Handel.
              </CheckIconItem>
              <CheckIconItem>
                <strong>WordPress Support & Wartung:</strong> Regelmäßige
                Updates, Sicherheit und Support für eine reibungslose Nutzung.
              </CheckIconItem>
            </ul>
          </CardContent>
        </Card>
        <Image
          src={personCondingTwo}
          alt="Person Designed und Programmiert eine WordPress Webseite"
          className="rounded-lg w-1/3 object-cover md:block hidden"
          placeholder="blur"
        />
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Transparente WordPress Kosten
        </h2>
        <p>
          Eine WordPress Website erstellen zu lassen, muss nicht teuer sein. Bei
          mir erhalten Sie eine transparente Kostenstruktur ohne versteckte
          Gebühren. Sie entscheiden, welches Leistungspaket am besten zu Ihrem
          Budget und Ihren Zielen passt.
        </p>
        <div className="grid md:grid-cols-3 gap-2 ">
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl">Webseite</CardTitle>
                <div className="flex gap-1 pt-4">
                  <span>ab</span>
                  <span className="text-2xl font-bold">599€</span>
                </div>
                <CardDescription>
                  Professionelle WordPress Homepage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <CheckIconItem>ab 1 Seite</CheckIconItem>
                  <CheckIconItem>Responsive Design</CheckIconItem>
                  <CheckIconItem>ab 1 Revision</CheckIconItem>
                  <CheckIconItem>
                    Schnell ladendes WordPress Template
                  </CheckIconItem>
                  <CheckIconItem>
                    Datenschutz und Impressum (DSGVO)
                  </CheckIconItem>
                  <CheckIconItem>Cookie Banner (DSGVO)</CheckIconItem>
                  <CheckIconItem>vieles weiteres</CheckIconItem>
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl">Online Shop</CardTitle>
                <div className="flex gap-1 pt-4">
                  <span>ab</span>
                  <span className="text-2xl font-bold">899€</span>
                </div>
                <CardDescription>
                  Professioneller WooCommerce Shop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <CheckIconItem>ab 5 Seiten</CheckIconItem>
                  <CheckIconItem>WooCommerce Online Shop</CheckIconItem>
                  <CheckIconItem>Responsive Design</CheckIconItem>
                  <CheckIconItem>ab 1 Revision</CheckIconItem>
                  <CheckIconItem>
                    Schnell ladendes WordPress Template
                  </CheckIconItem>
                  <CheckIconItem>
                    Datenschutz und Impressum (DSGVO)
                  </CheckIconItem>
                  <CheckIconItem>Cookie Banner (DSGVO)</CheckIconItem>
                  <CheckIconItem>Verschiedenen Zahlungsmethoden</CheckIconItem>
                  <CheckIconItem>vieles weiteres</CheckIconItem>
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 text-white flex flex-col justify-between">
            <div>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle className="text-xl">Individuell</CardTitle>
                  <Badge variant="secondary" className="w-fit mb-1">
                    Beliebt
                  </Badge>
                </div>
                <div className="flex gap-1 pt-4">
                  <span className="text-2xl font-bold">Custom</span>
                </div>
                <CardDescription>
                  Individuelle Webseite oder Online Shop
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <CheckIconItem>
                    perfekt auf Ihre Wünsche zugeschnitten
                  </CheckIconItem>
                  <CheckIconItem>
                    WordPress Webseite oder WooCommerce Online Shop nach Ihren
                    Vorstellungen
                  </CheckIconItem>
                  <CheckIconItem>Responsive Design</CheckIconItem>
                  <CheckIconItem>
                    Datenschutz und Impressum (DSGVO)
                  </CheckIconItem>
                  <CheckIconItem>Cookie Banner (DSGVO)</CheckIconItem>
                  <CheckIconItem>SEO-Optimierung</CheckIconItem>
                  <CheckIconItem>Bild Optimierung</CheckIconItem>
                  <CheckIconItem>Ladezeitoptimierung</CheckIconItem>
                </ul>
              </CardContent>
            </div>
            <CardFooter className="mt-auto">
              <Button asChild variant="default">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Jetzt Ihre WordPress Website erstellen lassen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sie haben Fragen oder möchten eine individuelle WordPress Website
              erstellen lassen? Kontaktieren Sie mich gerne für ein
              unverbindliches Angebot. Ich freue mich darauf, Ihre Vision zu
              verwirklichen!
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="default">
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
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
              Was kostet es, eine WordPress Website erstellen zu lassen?
            </AccordionTrigger>
            <AccordionContent>
              Die WordPress Kosten hängen von den Anforderungen und Funktionen
              Ihrer Website ab. Eine einfache Seite beginnt bei [Preis]€,
              während umfangreichere Projekte entsprechend mehr kosten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Was ist der Unterschied zwischen WordPress.org und WordPress.com?
            </AccordionTrigger>
            <AccordionContent>
              WordPress.org bietet Ihnen volle Kontrolle über Ihre Website,
              während WordPress.com gehostete Lösungen anbietet. Beide Varianten
              haben ihre Vorteile, je nachdem, wie viel Kontrolle und
              Flexibilität Sie wünschen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Kann ich meine WordPress Website selbst pflegen?
            </AccordionTrigger>
            <AccordionContent>
              Ja! Mit Elementor oder Elementor Pro ist das Pflegen und
              Aktualisieren Ihrer Website kinderleicht. Ich schule Sie gerne,
              damit Sie das Beste aus Ihrer Website herausholen.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default WordPressPage;
