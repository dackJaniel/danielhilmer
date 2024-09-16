import "./globals.css";
import Footer from "@/components/ui/footer";
import { Provider } from "@/components/provider";
import Nav from "@/components/ui/nav";
import { Metadata } from "next";
<<<<<<< HEAD
import Script from "next/script";
=======
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

import logo from "../_images/logo_durch.png";
>>>>>>> e0f286a364e8e72f5248dd15ef08744767877698

export const metadata: Metadata = {
  title: "Daniel Hilmer - Webentwicklung",
  description:
    "Freiberuflicher Webentwickler spezialisiert auf JavaScript-Frameworks wie React, NodeJS und NextJS.",
  keywords:
    "Webentwicklung, JavaScript, React, NodeJS, NextJS, Prisma, SQL, NoSQL, HTML5, CSS3, SCSS, Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
<<<<<<< HEAD
      <link rel="icon" href="./images/logo_durch.png" sizes="any" />
=======
      <link rel="icon" href="/logo_durch.png" type="image/png" sizes="32x32" />
>>>>>>> e0f286a364e8e72f5248dd15ef08744767877698
      <body className="bg-gray-100">
        <Provider>
          <Nav />
          {children}
          <Footer />
<<<<<<< HEAD
          <Script
            strategy="lazyOnload"
            id="usercentrics-cmp"
            data-eu-mode="true"
            data-settings-id="t5sF0OzEcttMs-"
            src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
            async></Script>
=======
          <Toaster />
>>>>>>> e0f286a364e8e72f5248dd15ef08744767877698
        </Provider>
        <script
          // strategy="lazyOnload"
          id="usercentrics-cmp"
          data-eu-mode="true"
          data-settings-id="t5sF0OzEcttMs-"
          src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
          async></script>
      </body>
    </html>
  );
}
