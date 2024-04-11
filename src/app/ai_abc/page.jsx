"use client";
import React, { useRef } from "react";
import useSWR from 'swr';
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Hero from "@/components/Hero.jsx";
import HeaderBlock from "@/components/HeaderBlock.jsx";
import ChildrenBookCard from "@/components/ChildrenBookCard";
import "@/css/ai_book.css";
import "@/css/markdown.css";

const fetcher = (url) => fetch(url).then(res => res.json());

const AIBook = () => {
  const heroRef = useRef();
  const { data: cardsData, error } = useSWR('/json/children_cards.json', fetcher);

  if (error) return <div>Failed to load data.</div>;
  if (!cardsData) return <div>Loading...</div>; // or any other loading state UI

  return (
    <div className="container black-bk">
      <Navbar heroRef={heroRef} delay={true} />

      <Hero
        title="AI Abc's"
        statement="Let's Learn some AI terms!"
        image="/images/children/ai_abc_hero.webp
      "
      />

      <div className="content-area">
        <HeaderBlock title="AI Term Poems" text="" />

        {cardsData.map((card, index) => (
          <ChildrenBookCard
            key={card.id}
            title={card.title}
            imagePath={card.image}
            markdownPath={card.text}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>


    </div>
  );
};

export default AIBook;
