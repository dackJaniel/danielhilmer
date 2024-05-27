import IconContainer from "@/_components/Icons/IconContainer";
import RoundedIcon from "@/_components/Icons/RoundedIcon";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProjekteProps {
  imageSrc?: string;
  icons?: any[];
  tooltips?: string[];
  heading: string;
  description: string;
  labels?: string[];
  link?: string;
}

const Projekte = ({
  imageSrc = "cat-8198720_1280.jpg",
  icons,
  tooltips = [],
  heading,
  description,
  labels,
  link,
}: IProjekteProps) => {
  return (
    <div className="border border-gray-100 bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden">
      <Image
        src={`/images/${imageSrc}`}
        alt="not-found"
        width={300}
        height={300}
        className="rounded-lg object-cover w-full h-36"
      />
      {link && (
        <Link
          href={`${link}`}
          target="_blank"
          className="absolute top-0 right-0 rounded-md bg-white p-3 hover:text-cyan-900 transition-colors">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      )}
      <IconContainer gap="sm">
        {icons?.map((icon, index) => (
          <RoundedIcon
            key={`${icon}-${index}`}
            icon={icon}
            tooltip={tooltips[index]}
            size="sm"
          />
        ))}
      </IconContainer>
      <div>
        <h3 className="text-lg">{heading}</h3>
        <p>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
      <div className="flex gap-1">
        {labels?.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="bg-slate-900 text-white py-0 px-3 rounded-full">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projekte;
