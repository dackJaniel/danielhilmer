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

export default function page() {
  return (
    <main className="py-10 flex flex-col gap-8 max-w-lg md:max-w-7xl m-auto px-2">
      <h1 className="text-7xl">Kunden Projekte</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Projekte
          icons={[faWordpress]}
          tooltips={["WordPress"]}
          heading="Munich Wine Rebels"
          description="Entwicklung einer neuen Webseite für Munich Wine Rebels (Remake)."
          link="https://munichwinerebels.de/"
          labels={[
            { name: "In Arbeit" },
            { name: "2023 - Jetzt" },
            { name: "Remake" },
          ]}
          imageSrc={mwr}
        />
        <Projekte
          icons={[faWordpress]}
          tooltips={["WordPress"]}
          heading="focus"
          description="Individuelle Webseite für focus."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2023" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          link="http://focus-dv.de/"
          imageSrc={focusdv}
        />
        <Projekte
          icons={[faWordpress]}
          tooltips={["WordPress"]}
          heading="Helmfried Bauer"
          description="Individuelle Webseite für Helmfried Bauer."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2023" },
            { name: "Neu" },
          ]}
          link="https://hbauer-consulting.at/"
          imageSrc={helmfriedbauer}
        />
        <Projekte
          icons={[faWordpress]}
          tooltips={["WordPress"]}
          heading="Weil WeibSein Fetzt"
          description="Individuelle Webseite für Weil WeibSein Fetzt."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2022" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          link="https://www.weilweibseinfetzt.de/"
          imageSrc={weilweibseinfetzt}
        />
        <Projekte
          icons={[faWordpress, faBasketShopping]}
          tooltips={["WordPress", "WooCommerce"]}
          heading="Steinbrechers"
          description="Individueller Online Shop für Steinbrechers."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2022" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          link="https://steinbrechers.shop/"
          imageSrc={steinbrechers}
        />
        <Projekte
          icons={[faWordpress, faBasketShopping]}
          tooltips={["WordPress", "WooCommerce"]}
          heading="Libertyhorses"
          description="Individueller Online Shop für Libertyhorses."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2021" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          link="https://libertyhorses.de/"
          imageSrc={libertyhorses}
        />
        <Projekte
          icons={[faWordpress, faBasketShopping]}
          tooltips={["WordPress", "WooCommerce"]}
          heading="Kleidungs Online Shop"
          description="Individueller Online Shop für einen Kleidungs Shop."
          imageSrc={hangers}
          labels={[
            { name: "Abgeschlossen" },
            { name: "2021" },
            { name: "Neu" },
          ]}
        />
        <Projekte
          icons={[faWordpress, faBasketShopping]}
          tooltips={["WordPress", "WooCommerce"]}
          heading="Max Wenninger Online Shop"
          description="Individueller Online Shop für den Fitness Coach Max Wenninger."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2021" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          link="https://shop.maxwenninger.de/"
          imageSrc={maxwenningershop}
        />
        <Projekte
          icons={[faHtml5, faSass, faJs, faPhp]}
          tooltips={["HTML5", "SASS", "JavaScript", "PHP"]}
          heading="Max Wenninger"
          link="https://www.maxwenninger.de/"
          description="Individuelle Webseite für den Fitness Coach Max Wenninger."
          labels={[
            { name: "Abgeschlossen" },
            { name: "2020" },
            { name: "Neu" },
            { name: "Betreuung" },
          ]}
          imageSrc={maxwenninger}
        />
      </div>
    </main>
  );
}
