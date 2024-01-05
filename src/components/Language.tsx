import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";

const Language = () => {
  return (
    <>
      <ul className="flex items-center gap-3">
        <li className="rounded-full bg-slate-900">
          <FontAwesomeIcon
            className="w-10 h-10 text-slate-100 p-2"
            icon={faHtml5}
          />
        </li>
        <li className="rounded-full bg-slate-900">
          <FontAwesomeIcon
            className="w-10 h-10 text-slate-100 p-2"
            icon={faCss3}
          />
        </li>
        <li className="rounded-full bg-slate-900">
          <FontAwesomeIcon
            className="w-10 h-10 text-slate-100 p-2"
            icon={faJs}
          />
        </li>
        <li className="rounded-full bg-slate-900">
          <FontAwesomeIcon
            className="w-10 h-10 text-slate-100 p-2"
            icon={faReact}
          />
        </li>
        <li className="rounded-full bg-slate-900">
          <FontAwesomeIcon
            className="w-10 h-10 text-slate-100 p-2"
            icon={faNodeJs}
          />
        </li>
      </ul>
    </>
  );
};

export default Language;
