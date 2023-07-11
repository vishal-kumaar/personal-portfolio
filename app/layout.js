import "./globals.css";
import Navbar from "../components/Navbar";
import Contexts from "../contexts";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import user from "@/portfolio/user";
import pageDescriptions from "@/portfolio/pageDesc.";
import fonts from "./fonts";

export const metadata = {
  title: user.name,
  description: pageDescriptions.indexPage,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Contexts>
          <Sidebar />
          <Project />
          <div
            className={`flex flex-col min-h-screen transition-opacity ease-in-out duration-500`}>
            <Navbar />
            <div className="flex-grow flex flex-col bg-white">{children}</div>
            <Footer />
          </div>
        </Contexts>
      </body>
    </html>
  );
}
