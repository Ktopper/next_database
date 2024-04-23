"use client";

import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import HeaderBlock from "@/components/HeaderBlock.jsx";
import "@/css/ai_book.css";
import "@/css/markdown.css";
import OnboardingForm from "@/components/OnboardingForm";



const OnboardingPage = () => {


  return (
    <div className="container black-bk">
   

      <Hero
        className="black-bk"
        title="Aria Book 1"
        statement="An Adventure in AI storytelling!"
        image="/images/aria/aria_title3.png"
      />

      <div className="content-area">
        <HeaderBlock className="black-bk" title="Aria: The Unknowing" text="" />
<OnboardingForm />

      </div>
    </div>
  );
};

export default OnboardingPage;
