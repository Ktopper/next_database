
import "@/css/globals.css";
import "@/css/style.css";
import "@/css/design_system.css"
import "@/css/navbar.css";
import "@/css/footer.css";
import "@/css/hero.css";
import "@/css/block.css";


import React from 'react';

import Footer from '@/components/Footer';
import '@/css/navbar.css';

const MainLayout = ({ children }) => {
    return (
        <div >
        
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default MainLayout;