'use client'
import { useEffect, useState } from "react";
import "@/css/footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  return (
    <div className={`footer-area ${showFooter ? "show" : ""}`}>
    <hr></hr>
      <div className="footer-buttons">

      </div>
      <div className="footer-text">
    
  
     <p>© 2024 Fervor Life LLC. All Rights Reserved.
     </p>
     <p> Kris@FervorLife.com</p>
      </div>
    </div>
  );
}

export default Footer;
