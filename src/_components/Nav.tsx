import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 p-2">
      <div className="shadow-md py-2 px-4 rounded-full flex items-center justify-between max-w-7xl m-auto bg-gray-100">
        <Link href="/">
          <Image src="/images/logo_durch.png" alt="" width={40} height={40} />
        </Link>
        <ul className="flex items-center gap-1">
          <li>
            <ButtonLink
              href="/projekte/dev"
              name="Dev Projekte"
              type="outline"
            />
          </li>
          {/* <li>
            <Link
              className="px-4 py-2 hover:bg-cyan-900 hover:text-slate-100 transition-colors rounded-md"
              href="https://danielhilmer.de/"
              target="_black">
              Kunden Projekte
            </Link>
          </li> */}
          <li>
            <ButtonLink href="/" name="Kontakt" type="primary" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
