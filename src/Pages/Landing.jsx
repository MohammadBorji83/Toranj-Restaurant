import React from "react";
import Navbar from "../components/Menu";
import Hero from "../components/Hero";
import Foods from "../components/Food-Menu";
import QaA from "../components/QA";
import CTA from "../components/CTA";
import Popular from "../components/Popular";


function Landing() {
  return (
    <>
    <Hero />
    <Popular />
    <Foods />
    <QaA />
    <CTA />
    </>
  );
}

export default Landing;
