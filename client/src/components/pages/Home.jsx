import React from "react";
import "../../App.css";
import { Cards, HeroSection } from "../organisms/main";
import Footer from "../organisms/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
