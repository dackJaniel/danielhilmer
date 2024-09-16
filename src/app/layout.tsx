import "./globals.css";
import Footer from "@/components/ui/footer";
import { Provider } from "@/components/provider";
import Nav from "@/components/ui/nav";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
      <link rel="icon" href="/logo_durch.png" type="image/png" sizes="32x32" />
      <body className="bg-gray-100">
        <Provider>
          <Nav />
          {children}
          <Footer />
          <Script
            strategy="lazyOnload"
            id="usercentrics-cmp"
            data-eu-mode="true"
            data-settings-id="t5sF0OzEcttMs-"
            src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
            async></Script>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
