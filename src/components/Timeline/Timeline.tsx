import React from "react";
import TimelineContainer from "./TimelineContainer";

const Timeline = () => {
  return (
    <section className="grid grid-cols-2 gap-4 max-w-7xl m-auto">
      <TimelineContainer
        title="Fachninformatiker"
        type="Freiberuflich"
        date="Sept. 2017 – Sept. 2020, 3 Jahre 1 Monat"
        description="Ausbildung zum Fachninformatiker (Systemintegration) bei der Max Planck Gesellschaft (Generalverwalltung)."
        logoUrl={{ src: "/images/mpg.png", alt: "Max Planck Gesellschaft" }}
      />
      <TimelineContainer
        title="Fachninformatiker"
        type="Ausbidlung"
        date="Sept. 2017 – Sept. 2020, 3 Jahre 1 Monat"
        description="Ausbildung zum Fachninformatiker (Systemintegration) bei der Max Planck Gesellschaft (Generalverwalltung)."
        logoUrl={{ src: "/images/mpg.png", alt: "Max Planck Gesellschaft" }}
      />
    </section>
  );
};

export default Timeline;
