import React from "react";
import Navbar from "../components/Menu";
import Hero from "../components/Hero";
import Popular from "../components/Popular-Card";
import Foods from "../components/Food-Menu";
import QaA from "../components/QA";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


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
