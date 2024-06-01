"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function toggleMenu() {
  console.log("toggleMenu");
  const menu = document.querySelector("#menu");
  menu && menu.classList.toggle("hidden");
}

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 p-2 z-50">
      <div className="shadow-md py-2 px-4 rounded-full flex items-center justify-between max-w-7xl m-auto bg-white">
        <Link href="/">
          <Image src="/images/logo_durch.png" alt="" width={40} height={40} />
        </Link>
        <div className="md:hidden flex items-center gap-2">
          <ButtonLink href="/kontakt" name="Kontakt" type="primary" />
          <FontAwesomeIcon
            icon={faHamburger}
            className=" text-2xl cursor-pointer hover:text-gray-700 transition-colors"
            onClick={toggleMenu}
          />
        </div>
        <div
          id="menu"
          className="flex hidden md:block absolute md:relative right-2 md:right-0 top-20 md:top-0 w-fit md:w-auto h-fit md:h-auto bg-white justify-center items-center px-4 md:px-0 py-8 md:py-0 rounded-2xl shadow-md md:shadow-none">
          <ul className="md:flex items-center gap-1">
            <li>
              <Link
                className="block px-4 py-1 md:hover:bg-cyan-900 hover:underline md:hover:no-underline md:hover:text-slate-100 transition-colors rounded-full "
                href="https://danielhilmer.de/"
                target="_black">
                Mehr Info
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-1 md:hover:bg-cyan-900 hover:underline md:hover:no-underline md:hover:text-slate-100 transition-colors rounded-full"
                href="/projekte/kunden">
                Kunden Projekte
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-1 md:hover:bg-cyan-900 hover:underline md:hover:no-underline md:hover:text-slate-100 transition-colors rounded-full"
                href="/projekte/dev">
                Dev Projekte
              </Link>
            </li>
            <li className="hidden md:block">
              <ButtonLink href="/kontakt" name="Kontakt" type="primary" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
