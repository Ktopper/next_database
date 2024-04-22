import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/css/navbar.css'; // Ensure path alias is correctly set in jsconfig.json or tsconfig.json

function Navbar({ heroRef, delay = false }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 700 : true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = delay ? setTimeout(() => {
      setIsNavbarVisible(true);
    }, 500) : null;
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef || !heroRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsNavbarVisible(!entry.isIntersecting);
    }, { threshold: 1 });

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [heroRef]);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    function closeMenuOutsideClick(event) {
      if (!event.target.closest('.hamburger')) {
        setIsHamburgerOpen(false);
      }
    }

    if (isHamburgerOpen) {
      document.addEventListener('click', closeMenuOutsideClick);
    }

    return () => {
      document.removeEventListener('click', closeMenuOutsideClick);
    };
  }, [isHamburgerOpen]);

  return (
    <nav className={isNavbarVisible ? 'open' : ''}>
      {/* Content and links */}
    </nav>
  );
}

export default Navbar;
