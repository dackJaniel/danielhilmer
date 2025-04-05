import React from "react";
import Projekte from "../Projekte";
import {
  faHtml5,
  faJs,
  faPhp,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import mwr from "../../../images/mwr.png";
import focusdv from "../../../images/focus-dv.png";
import helmfriedbauer from "../../../images/helmfried-bauer.png";
import weilweibseinfetzt from "../../../images/weilweibseinfetzt.png";
import steinbrechers from "../../../images/steinbrechers.png";
import libertyhorses from "../../../images/libertyhorses.png";
import hangers from "../../../images/hangers-1850082_1280.jpg";
import maxwenningershop from "../../../images/max-wenninger-shop.png";
import maxwenninger from "../../../images/max-wenninger.png";
import chefskitchen from "../../../images/chefs-kitchen.jpg";

const projectData = [
  {
    icons: [faWordpress],
    tooltips: ["WordPress"],
    heading: "Chef´s Kitchen",
    description: "Support und Wartung der Webseite von Chef´s Kitchen.",
    link: "https://chefs-kitchen.de/",
    labels: [
      { name: "In Arbeit" },
      { name: "2024 - Jetzt" },
      { name: "Betreuung" },
    ],
    imageSrc: chefskitchen,
  },
  {
    icons: [faWordpress],
    tooltips: ["WordPress"],
    heading: "Munich Wine Rebels",
    description:
      "Entwicklung einer neuen Webseite für Munich Wine Rebels (Remake).",
    link: "https://munichwinerebels.de/",
    labels: [
      { name: "In Arbeit" },
      { name: "2023 - Jetzt" },
      { name: "Remake" },
      { name: "Betreuung" },
    ],
    imageSrc: mwr,
  },
  {
    icons: [faWordpress],
    tooltips: ["WordPress"],
    heading: "focus",
    description: "Individuelle Webseite für focus.",
    link: "http://focus-dv.de/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2023 - Jetzt" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: focusdv,
  },
  {
    icons: [faWordpress],
    tooltips: ["WordPress"],
    heading: "Helmfried Bauer",
    description: "Individuelle Webseite für Helmfried Bauer.",
    link: "https://hbauer-consulting.at/",
    labels: [{ name: "Abgeschlossen" }, { name: "2023" }, { name: "Neu" }],
    imageSrc: helmfriedbauer,
  },
  {
    icons: [faWordpress],
    tooltips: ["WordPress"],
    heading: "Weil WeibSein Fetzt",
    description: "Individuelle Webseite für Weil WeibSein Fetzt.",
    link: "https://www.weilweibseinfetzt.de/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2022" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: weilweibseinfetzt,
  },
  {
    icons: [faWordpress, faBasketShopping],
    tooltips: ["WordPress", "WooCommerce"],
    heading: "Steinbrechers",
    description: "Individueller Online Shop für Steinbrechers.",
    link: "https://steinbrechers.shop/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2022" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: steinbrechers,
  },
  {
    icons: [faWordpress, faBasketShopping],
    tooltips: ["WordPress", "WooCommerce"],
    heading: "Libertyhorses",
    description: "Individueller Online Shop für Libertyhorses.",
    link: "https://libertyhorses.de/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2021" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: libertyhorses,
  },
  {
    icons: [faWordpress, faBasketShopping],
    tooltips: ["WordPress", "WooCommerce"],
    heading: "Kleidungs Online Shop",
    description: "Individueller Online Shop für einen Kleidungs Shop.",
    labels: [{ name: "Abgeschlossen" }, { name: "2021" }, { name: "Neu" }],
    imageSrc: hangers,
  },
  {
    icons: [faWordpress, faBasketShopping],
    tooltips: ["WordPress", "WooCommerce"],
    heading: "Max Wenninger Online Shop",
    description:
      "Individueller Online Shop für den Fitness Coach Max Wenninger.",
    link: "https://shop.maxwenninger.de/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2021" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: maxwenningershop,
  },
  {
    icons: [faHtml5, faSass, faJs, faPhp],
    tooltips: ["HTML5", "SASS", "JavaScript", "PHP"],
    heading: "Max Wenninger",
    description: "Individuelle Webseite für den Fitness Coach Max Wenninger.",
    link: "https://www.maxwenninger.de/",
    labels: [
      { name: "Abgeschlossen" },
      { name: "2020" },
      { name: "Neu" },
      { name: "Betreuung" },
    ],
    imageSrc: maxwenninger,
  },
];

export default function page() {
  return (
    <main className="py-10 flex flex-col gap-8 max-w-lg md:max-w-7xl m-auto px-2">
      <h1 className="text-7xl">Kunden Projekte</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projectData.map((project, index) => (
          <Projekte
            key={index}
            icons={project.icons}
            tooltips={project.tooltips}
            heading={project.heading}
            description={project.description}
            labels={project.labels}
            link={project.link}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </main>
  );
}
