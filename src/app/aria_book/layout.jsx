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