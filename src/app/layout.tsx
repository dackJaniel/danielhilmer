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
      <body className="bg-slate-100">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
