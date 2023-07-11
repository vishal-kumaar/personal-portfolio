import "./globals.css";
import Navbar from "../components/Navbar";
import Contexts from "../contexts";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import user from "@/portfolio/user";
import pageDescriptions from "@/portfolio/pageDesc.";

export const metadata = {
  title: user.name,
  description: pageDescriptions.indexPage,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Contexts>
          <Sidebar />
          <Project />
          <Navbar />
          <div
            className={`flex flex-col min-h-screen transition-opacity ease-in-out duration-500`}>
            <div className="flex-grow flex flex-col bg-white">{children}</div>
            <Footer />
          </div>
        </Contexts>
      </body>
    </html>
  );
}
