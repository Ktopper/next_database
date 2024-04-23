
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/css/navbar.css'; // Ensure this import path alias is correctly set in jsconfig.json or tsconfig.json

function Navbar({ heroRef, delay = false }) {
  // Initialize state without assuming access to window
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 700 : true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Use useEffect to handle resize events only on the client-side
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 700);
      }
    };

    // Ensure window is defined before adding event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial state based on current window size
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (!heroRef || !heroRef.current) return; // Guard against undefined refs and ensure they are attached
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsNavbarVisible(!entry.isIntersecting);
    }, { threshold: 1 });
  
    observer.observe(heroRef.current);
  
    return () => observer.disconnect(); // Clean up the observer on unmount
  }, [heroRef]);

  const handleHamburgerClick = (e) => {
    e.stopPropagation(); // Stop the click from bubbling up
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeMenu = () => {
    setIsHamburgerOpen(false);
  };

  // Add document event listeners only on the client-side
  useEffect(() => {
    const closeMenuOutsideClick = (event) => {
      if (event.target.closest('.hamburger') === null) {
        setIsHamburgerOpen(false);
      }
    };

    if (isHamburgerOpen && typeof document !== 'undefined') {
      document.addEventListener('click', closeMenuOutsideClick);
      return () => document.removeEventListener('click', closeMenuOutsideClick);
    }
  }, [isHamburgerOpen]);

  return (
    <nav className={isNavbarVisible ? 'open' : ''}>
      <h1 className="nav-title">
        <Link href="/">Fervor Books</Link>
        <hr />
      </h1>

      <Link href="/"> <img className="nav-logo" src="/images/home/fervorlogo9.png" alt="logo"  /> </Link>

      {isMobile ? (
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>

          {isHamburgerOpen && (
            <ul className="nav-links">
              <li><Link href="/aria_book"> Aria Novel </Link></li>
              <li><Link href="/ai_abc"> AI ABCs </Link></li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="nav-links">
        <li><Link href="/aria_book"> Aria Novel </Link></li>
        <li><Link href="/ai_abc">AI ABCs </Link></li>

        </ul>
      )}
    </nav>
  );
}

export default Navbar;
