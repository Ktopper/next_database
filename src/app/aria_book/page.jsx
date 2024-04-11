"use client";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Hero from "@/components/Hero.jsx";
import HeaderBlock from "@/components/HeaderBlock.jsx";
import BookCard from "@/components/BookCard";
import "@/css/ai_book.css";
import "@/css/markdown.css";

const cardsData = [
  {
    id: "1",
    title: "Chapter 1: Wake Up",
    text: "/markdown/aria/chapter1.md",
    image: "/images/aria/chapter1.webp",
  },
  {
    id: "2",
    title: "Chapter 2: Direction",
    text: "/markdown/aria/chapter2.md",
    image: "/images/aria/chapter2.webp",
  },
  {
    id: "3",
    title: "Chapter 3: Running",
    text: "/markdown/aria/chapter3.md",
    image: "/images/aria/chapter1.webp",
  },
  {
    id: "4",
    title: "Chapter 4: Plan",
    text: "/markdown/aria/chapter4.md",
    image: "/images/aria/chapter2.webp",
  },
];

const AriaBook = () => {
  const heroRef = useRef();

  return (
    <div className="container black-bk">
      <Navbar heroRef={heroRef} delay={true} />

      <Hero
        className="black-bk"
        title="Aria Book 1"
        statement="An Adventure in AI storytelling!"
        image="/images/aria/aria_title3.png"
      />

      <div className="content-area">
        <HeaderBlock className="black-bk" title="Aria: The Unknowing" text="" />

        {cardsData.map((card, index) => (
          <BookCard
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

export default AriaBook;
