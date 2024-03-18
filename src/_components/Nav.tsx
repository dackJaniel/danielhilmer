import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";

const Nav = () => {
  return (
    <nav className="bg-slate-100 w-full shadow-md p-2 fixed">
      <div className="flex items-center justify-between max-w-7xl m-auto">
        <Image src="/images/logo_durch.png" alt="" width={50} height={50} />
        <ul className="flex items-center gap-1">
          <li>
            <Link
              className="px-4 py-2 hover:bg-cyan-900 hover:text-slate-100 transition-colors rounded-md"
              href="">
              Dev Projekte
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 hover:bg-cyan-900 hover:text-slate-100 transition-colors rounded-md"
              href="https://danielhilmer.de/"
              target="_black">
              Kunden Projekte
            </Link>
          </li>
          <li>
            <ButtonLink href="/" name="Kontakt" primary={true} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
