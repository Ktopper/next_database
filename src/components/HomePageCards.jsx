import React, { useState } from 'react';
import useSWR from 'swr'; // Using SWR for data fetching

const fetcher = (url) => fetch(url).then((res) => res.json());

function HomePageCards() {
  const { data: newsStories, error } = useSWR('/json/home_cards.json', fetcher);

  if (error) return <div>Failed to load the stories.</div>;
  if (!newsStories) return <div>Loading...</div>; // Display loading state

  return (
    <div className="news-grid">
      {newsStories.slice().reverse().map((story) => (
        <div key={story.id} className="news-card">
          <img src={story.image} alt={story.title} className="card-image" />
          <h2>{story.title}</h2>
          <p>{story.text}</p>
          <a className='button-link' href={story.url}>Explore</a>
        </div>
      ))}
    </div>
  );
}

export default HomePageCards;
