import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 w-full shadow-md py-4">
      <div className="flex flex-col justify-between m-auto max-w-7xl ">
        <div className="flex">
          <div>
            <h4 className="text-lg">Datenschutz</h4>
            <ul>
              <li>
                <Link href="/datenschutz">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/impressum">Impressum</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            <span className="font-bold">© 2024</span> Daniel Hilmer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
