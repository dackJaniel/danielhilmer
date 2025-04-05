"use client";

import Image from "next/image";
import Link from "next/link";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

import logo from "../images/logo_durch.png";

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
          <Image
            src={logo}
            alt="Daniel Hilmer Webdevelopment - Logo"
            className="cursor-pointer w-10 h-10"
          />
        </Link>
        <div className="md:hidden flex items-center gap-2">
          <Button asChild>
            <Link href="/kontakt">Kontakt</Link>
          </Button>
          <FontAwesomeIcon
            icon={faHamburger}
            className="text-2xl cursor-pointer hover:text-gray-700 transition-colors"
            onClick={toggleMenu}
          />
        </div>
        <div
          id="menu"
          className="flex md:block absolute md:relative right-2 md:right-0 top-20 md:top-0 w-fit md:w-auto h-fit md:h-auto bg-white justify-center items-center px-4 md:px-0 py-8 md:py-0 rounded-2xl shadow-md md:shadow-none"
        >
          <ul className="md:flex items-center gap-1">
            <li>
              <Button asChild variant="link">
                <Link href="/projekte/kunden">Kunden Projekte</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link href="/projekte/dev">Dev Projekte</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link href="/about">Über mich</Link>
              </Button>
            </li>
            <li className="hidden md:block">
              <Button asChild>
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </li>
            {/* <li>
              <ModeToggle />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
