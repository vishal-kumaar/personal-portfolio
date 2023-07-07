import "./globals.css";
import Navbar from "../components/Navbar";
import Contexts from "../contexts";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import {user} from "../utils/portfolio";

export const metadata = {
  title: user.name,
  description: "Welcome to the portfolio website of Vishal Kumar, a talented JavaScript web developer. Explore a collection of impressive projects, insightful blog posts, and innovative web solutions. With a focus on clean code, captivating designs, and user-friendly experiences, Vishal combines technical expertise with creativity to deliver exceptional results. Discover the world of modern web development and be inspired by Vishal Kumar's passion for creating impactful digital experiences",
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
