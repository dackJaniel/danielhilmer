import Nav from "@/_components/Nav";
import "./globals.css";
import Footer from "@/_components/Footer";
import { ToastContainer } from "react-toastify";

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
      <body className="bg-gray-100">
        <Nav />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
