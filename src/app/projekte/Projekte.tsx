"use client";

import IconContainer from "@/components/icons/IconContainer";
import RoundedIcon from "@/components/icons/RoundedIcon";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
  link?: string;
}

import defaultImg from "../../images/cat-8198720_1280.jpg";
import { Button } from "@/components/ui/button";

const Projekte = ({
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
            )
          )}
        </div>
      )}
      {link && (
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href={link} target="_blank">
              Webseite besuchen
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
        placeholder="blur"
      />
      {link && (
        <Link
          href={`${link}`}
          target="_blank"
          className="absolute top-0 right-0 rounded-md bg-white p-3 hover:text-cyan-900 transition-colors"
        >
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
          {shortDescription}
          {isLongDescription && (
            <>
              {isMobile ? (
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                  <DrawerTrigger asChild>
                    <Button variant={"link"} onClick={() => setIsOpen(true)}>
                      Weiter lesen...
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
                  <button
                    className="text-cyan-700 hover:text-cyan-900 font-medium ml-1"
                    onClick={() => setIsOpen(true)}
                  >
                    Weiter lesen...
                  </button>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{heading}</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <p className="mb-4">{description}</p>
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
        {labels?.map((label, index) =>
          label.link ? (
            <Link
              key={`${label.name}-${index}`}
              href={label.link}
              target="_blank"
              className="bg-slate-100 py-0 px-3 rounded-full cursor-pointer hover:bg-slate-200 transition-colors text-sm"
            >
              <span key={`${label.name}-${index}`}>
                {label.name}{" "}
                {label.icon && <FontAwesomeIcon icon={label.icon} />}
              </span>
            </Link>
          ) : (
            <span
              key={`${label.name}-${index}`}
              className="bg-slate-100 py-0 px-3 rounded-full text-sm"
            >
              {label.name} {label.icon && <FontAwesomeIcon icon={label.icon} />}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Projekte;
