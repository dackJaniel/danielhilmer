import IconContainer from "@/_components/Icons/IconContainer";
import RoundedIcon from "@/_components/Icons/RoundedIcon";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import React from "react";

interface IProjekteProps {
  imageSrc?: string;
  icons?: any[];
  heading: string;
  description: string;
}

const Projekte = ({
  imageSrc = "cat-8198720_1280.jpg",
  icons,
  heading,
  description,
}: IProjekteProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col gap-2">
      <Image
        src={`/images/${imageSrc}`}
        alt="not-found"
        width={300}
        height={300}
        className="rounded-lg object-cover"
      />
      <IconContainer>
        {icons?.map((icon, index) => (
          <RoundedIcon key={`${icon}-${index}`} icon={faHtml5} size="sm" />
        ))}
      </IconContainer>
      <div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Projekte;
