import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="m-auto mt-4 max-w-7xl">
      <footer className="bg-white text-slate-900 w-full shadow-md p-4 rounded-md">
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
            <p className="text-sm">© Copyright 2024 - Daniel Hilmer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
