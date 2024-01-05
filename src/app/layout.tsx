import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";

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
      <body className="bg-slate-100">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
