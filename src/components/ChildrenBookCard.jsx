import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import '@/css/ai_book.css';


const ChildrenBookCard = ({ title, imagePath, markdownPath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(markdownPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => setMarkdownContent(text))
      .catch(error => console.error('Error fetching markdown content:', error));
  }, [markdownPath]);

  return (
    <div className="book-card">
      <Image src={imagePath} alt={title} width={500} height={300} />
      <div className="book-text">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChildrenBookCard;
