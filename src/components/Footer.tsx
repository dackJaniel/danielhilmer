import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="xl:m-auto mx-2 my-2 max-w-7xl">
      <footer className="bg-white text-slate-900 w-full shadow-md p-4 rounded-md">
        <div className="flex flex-col justify-between m-auto max-w-7xl ">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <h4 className="text-lg font-semibold">Service</h4>
              <ul>
                <li>
                  <Link
                    href="/wordpress"
                    className="cursor-pointer hover:underline"
                  >
                    WordPress Entwicklung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/custom"
                    className="cursor-pointer hover:underline"
                  >
                    Individuelle Webentwicklung
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h4 className="text-lg font-semibold">Blog</h4>
              <ul>
                <li>
                  <Link
                    href="/blog/webdesign-webdevelopment-studium-sae"
                    className="cursor-pointer hover:underline"
                  >
                    So ist das Studium an der SAE
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h4 className="text-lg font-semibold">Datenschutz</h4>
              <ul>
                <li>
                  <Link
                    href="/datenschutz"
                    className="cursor-pointer hover:underline"
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="cursor-pointer hover:underline"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <Button asChild>
                <Link href="/kontakt">Jetzt Kontakt aufnehmen!</Link>
              </Button>
            </div> */}
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
