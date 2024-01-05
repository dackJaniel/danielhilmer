import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IRoundedIconProps {
  icon: IconDefinition;
}

const RoundedIcon = ({ icon }: IRoundedIconProps) => {
  return (
    <li className="rounded-full bg-slate-900">
      <FontAwesomeIcon className="w-10 h-10 text-slate-100 p-2" icon={icon} />
    </li>
  );
};

export default RoundedIcon;
