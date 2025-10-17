"use client";

import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

interface IProjekteProps {
  imageSrc?: StaticImageData;
  icons?: any[];
  tooltips?: string[];
  heading: string;
  description: string;
  labels?: { name: string; link?: string; icon?: any }[];
  link?: { href: string; text: string };
}

import defaultImg from "../images/cat-8198720_1280.jpg";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProjectCard = ({
  imageSrc = defaultImg,
  icons,
  tooltips = [],
  heading,
  description,
  labels,
  link,
}: IProjekteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLongDescription = description.length > 100;
  const shortDescription = isLongDescription
    ? `${description.substring(0, 100)}...`
    : description;

  // Hilfsfunktion zum Rendern der Detailansicht (für Dialog und Drawer wiederverwendbar)
  const renderDetailsContent = () => (
    <>
      {/* <div className="mt-4">
        <Image
          src={imageSrc}
          alt={heading}
          className="rounded-lg object-cover w-full h-48"
          placeholder="blur"
        />
      </div> */}
      {icons && icons.length > 0 && (
        <IconContainer>
          {icons?.map((icon, index) => (
            <RoundedIcon
              key={`details-${icon}-${index}`}
              icon={icon}
              tooltip={tooltips[index]}
              size="sm"
            />
          ))}
        </IconContainer>
      )}
      {labels && (
        <div className="flex gap-1 flex-wrap mt-4">
          {labels?.map((label, index) =>
            label.link ? (
              <Link
                key={`details-${label.name}-${index}`}
                href={label.link}
                target="_blank"
                className="bg-slate-100 py-0 px-3 rounded-full cursor-pointer hover:bg-slate-200 transition-colors text-sm"
              >
                <span>
                  {label.name}{" "}
                  {label.icon && <FontAwesomeIcon icon={label.icon} />}
                </span>
              </Link>
            ) : (
              <span
                key={`details-${label.name}-${index}`}
                className="bg-slate-100 py-0 px-3 rounded-full text-sm"
              >
                {label.name}{" "}
                {label.icon && <FontAwesomeIcon icon={label.icon} />}
              </span>
            ),
          )}
        </div>
      )}
      {link?.href && (
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href={link.href} target="_blank">
              {link.text}
            </Link>
          </Button>
        </div>
      )}
    </>
  );

  return (
    <div className="border border-gray-100 bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden">
      <Image
        src={imageSrc}
        alt="not-found"
        className="rounded-lg object-cover w-full h-36"
        width={300}
        height={200}
      />

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
          {shortDescription}
          {(isLongDescription || link) && (
            <>
              {isMobile ? (
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                  <DrawerTrigger asChild>
                    <Button
                      className="p-0 w-full"
                      variant={"outline"}
                      onClick={() => setIsOpen(true)}
                    >
                      Weiter Informationen
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>{heading}</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4">
                      <p className="mb-4">{description}</p>
                      {renderDetailsContent()}
                    </div>
                  </DrawerContent>
                </Drawer>
              ) : (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <Button
                    className="mt-4 w-full"
                    variant={"outline"}
                    onClick={() => setIsOpen(true)}
                  >
                    Weitere Informationen
                  </Button>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{heading}</DialogTitle>
                    </DialogHeader>
                    <div>
                      <ScrollArea className="h-[200px] w-full mb-4">
                        {description}
                      </ScrollArea>

                      {renderDetailsContent()}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </>
          )}
        </p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {/* FIXME: Code Duplication */}
        {/* TODO: Colors */}
        {/*{labels?.map((label, index) =>
          label.link ? (
            <div key={index}>{label.name}</div>
          ) : (
            <span
              key={`${label.name}-${index}`}
              className="bg-slate-100 py-0 px-3 rounded-full text-sm"
            >
              {label.name} {label.icon && <FontAwesomeIcon icon={label.icon} />}
            </span>
          ),
        )}*/}
      </div>
    </div>
  );
};

export default ProjectCard;
