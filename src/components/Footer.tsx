import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 w-full shadow-md py-2">
      <div className="flex flex-col justify-between max-w-6xl m-auto">
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
