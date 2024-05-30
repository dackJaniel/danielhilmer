"use client";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Tooltip } from "react-tooltip";

interface IRoundedIconProps {
  icon: IconDefinition;
  tooltip?: string;
  size?: "sm" | "md" | "lg";
}

function randomId() {
  return Math.random().toString(36);
}

const RoundedIcon = ({
  icon,
  tooltip = "",
  size = "md",
}: IRoundedIconProps) => {
  const id = randomId();
  return (
    <>
      <Tooltip
        id={`${id}`}
        style={{
          borderRadius: "100rem",
          padding: "5px 10px",
          backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
        }}
      />
      <li
        className="rounded-full bg-slate-900"
        data-tooltip-id={`${id}`}
        data-tooltip-content={`${tooltip}`}
        data-tooltip-place="top">
        <FontAwesomeIcon
          className={`text-slate-100 flex justify-center items-center cursor-pointer ${
            size === "sm"
              ? "w-4 h-4 p-1"
              : size === "md"
              ? "w-8 h-8 p-2"
              : "w-14 h-14 p-2"
          }`}
          icon={icon}
        />
      </li>
    </>
  );
};

export default RoundedIcon;
