'use client'
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomePageCards from "@/components/HomePageCards";

function HomePage() {
  const heroRef = useRef(); // This will be used to reference the Hero component

  return (
    <div className="container">
      <Navbar heroRef={heroRef} delay={true} />
      <Hero
        title="Welcome to Fervor Books"
        statement="Where Writing meets AI adventures"
        image="/images/home/field_blue_gold.png"
      />
      <div className='content-area'>
        <HomePageCards />
      </div>
      <Footer />

    </div>
  );
}

export default HomePage;
