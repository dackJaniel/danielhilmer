import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "../ButtonLink";

interface ITimelineContainerProps {
  thumbUrl?: { src: string; alt: string };
  logoUrl?: { src: string; alt: string };
  type: "Ausbidlung" | "Studium" | "Angestellt" | "Freiberuflich";
  title: string;
  description?: string;
  date?: string;
  link?: string;
}

const TimelineContainer = ({
  thumbUrl,
  logoUrl,
  title,
  description,
  date,
  type,
  link,
}: ITimelineContainerProps) => {
  return (
    <div className="w-full h-min shadow-md bg-white rounded-md">
      {thumbUrl && (
        <Image
          width={300}
          height={300}
          alt={thumbUrl?.alt}
          src={thumbUrl?.src}
        />
      )}
      <div className="p-3">
        {logoUrl && (
          <Image width={50} height={50} alt={logoUrl?.alt} src={logoUrl?.src} />
        )}
        <h3 className="text-lg">
          {title} <span className="text-sm">({type})</span>
        </h3>
        <small className="text-sm">{date}</small>
        <p className="mt-2">{description}</p>

        {/* {link && <ButtonLink href={link} name="Mehr erfahren" primary={true} />} */}
      </div>
    </div>
  );
};

export default TimelineContainer;
