import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
            {/* Navigation Header */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
};

export default Layout;