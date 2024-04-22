'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomePageCards from "@/components/HomePageCards";

function HomePage() {
 // This will be used to reference the Hero component

  return (
    <div className="container">
      <Navbar  delay={true} />
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
