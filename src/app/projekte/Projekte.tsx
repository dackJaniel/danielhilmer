import IconContainer from "@/components/ui/Icons/IconContainer";
import RoundedIcon from "@/components/ui/Icons/RoundedIcon";
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
  labels?: { name: string; link?: string; icon?: any }[];
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
      <div className="flex gap-1 flex-wrap">
        {/* FIXME: Code Duplication */}
        {/* TODO: Colors */}
        {labels?.map((label, index) =>
          label.link ? (
            <Link
              key={`${label.name}-${index}`}
              href={label.link}
              target="_blank"
              className="bg-slate-100 py-0 px-3 rounded-full cursor-pointer hover:bg-slate-200 transition-colors text-sm">
              <span key={`${label.name}-${index}`}>
                {label.name}{" "}
                {label.icon && <FontAwesomeIcon icon={label.icon} />}
              </span>
            </Link>
          ) : (
            <span
              key={`${label.name}-${index}`}
              className="bg-slate-100 py-0 px-3 rounded-full text-sm">
              {label.name} {label.icon && <FontAwesomeIcon icon={label.icon} />}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Projekte;
