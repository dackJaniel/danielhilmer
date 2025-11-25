"use client";

import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

interface IProjekteProps {
  id: string;
  imageSrc?: StaticImageData;
  icons?: any[];
  tooltips?: string[];
  heading: string;
  description: string;
  labels?: { name: string; link?: string; icon?: any }[];
  is_highlight?: boolean;
  link?: { href: string; text: string };
}

import defaultImg from "../images/cat-8198720_1280.jpg";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

const ProjectCard = ({
  id,
  imageSrc = defaultImg,
  icons,
  tooltips = [],
  heading,
  description,
  labels,
  is_highlight,
  link,
}: IProjekteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLongDescription = description.length > 100;
  const shortDescription = isLongDescription
    ? `${description.substring(0, 100)}...`
    : description;

  return (
    <div className="border border-gray-100 bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden">
      <Image
        src={imageSrc}
        alt="not-found"
        className="rounded-lg object-cover w-full h-36"
        width={300}
        height={200}
      />

      {is_highlight && (
        <div className="absolute top-0 left-0 bg-yellow-500 rounded-full p-1 m-2">
          <StarFilledIcon className="w-4 h-4 text-white" />
        </div>
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
        <p>{shortDescription}</p>
        <Button className="mt-3">
          <Link href={`/projekte/${id}`}>Weitere Informationen</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
