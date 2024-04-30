import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IRoundedIconProps {
  icon: IconDefinition;
  size?: "sm" | "md" | "lg";
}

const RoundedIcon = ({ icon, size = "md" }: IRoundedIconProps) => {
  return (
    <li className="rounded-full bg-slate-900">
      <FontAwesomeIcon
        className={`text-slate-100  ${
          size === "sm"
            ? "w-5 h-5 p-1"
            : size === "md"
            ? "w-10 h-10 p-2"
            : "w-14 h-14 p-2"
        }`}
        icon={icon}
      />
    </li>
  );
};

export default RoundedIcon;
