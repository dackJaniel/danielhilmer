import Nav from "@/_components/Nav";
import "./globals.css";
import Footer from "@/_components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <script
        id="usercentrics-cmp"
        async
        data-eu-mode="true"
        data-settings-id="t5sF0OzEcttMs-"
        src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"></script>
      <body className="bg-slate-200">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
