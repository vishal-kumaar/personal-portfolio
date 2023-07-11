import {
    Cutive_Mono,
    Fira_Sans,
    Poppins,
    Roboto,
    Signika,
    Cedarville_Cursive,
  } from "next/font/google";
  
  const cutiveMono = Cutive_Mono({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-cutive-mono",
  });
  
  const signika = Signika({
    weight: "700",
    subsets: ["latin"],
    variable: "--font-signika",
  });
  
  const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-roboto",
  });
  
  const poppins = Poppins({
    weight: ["200", "300"],
    subsets: ["latin"],
    variable: "--font-poppins",
  });
  
  const firaSans = Fira_Sans({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-fira-sans",
  });
  
  const cedarvilleCursive = Cedarville_Cursive({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-cedarville-cursive",
  });
  
  const fonts = [
    cutiveMono.variable,
    signika.variable,
    roboto.variable,
    poppins.variable,
    firaSans.variable,
    cedarvilleCursive.variable,
  ].join(" ");
  
  export default fonts;