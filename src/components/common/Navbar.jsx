import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links tailored to USWA organization requirements
const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Programs & Focus', to: '/programs' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHover, setActiveHover] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll effect for navbar background shadow and density
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reset mobile menu and hover states when changing routes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveHover(null);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled 
                    ? 'py-2 bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200' 
                    : 'py-3 bg-white border-b border-slate-100'
            }`}
        >
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
                
                {/* Brand / NGO Name */}
                <Link
                    to="/"
                    className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg"
                    aria-label="USWA Home"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col"
                    >
                        <span className="text-slate-900 font-extrabold text-xl lg:text-2xl tracking-tight leading-none">
                            USWA
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
                            United Social Watch & Advocacy
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation with Sliding Pill Hover */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <div 
                        className="flex items-center p-1.5 rounded-full border border-slate-200 bg-slate-50/80 backdrop-blur-md"
                        onMouseLeave={() => setActiveHover(null)}
                    >
                        {navLinks.map((link) => {
                            const isCurrentPath = isActive(link.to);
                            
                            return (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => setActiveHover(link.name)}
                                >
                                    {/* Animated Hover Indicator */}
                                    {activeHover === link.name && (
                                        <motion.div
                                            layoutId="nav-hover"
                                            className="absolute inset-0 bg-slate-200/70 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                        />
                                    )}

                                    <Link
                                        to={link.to}
                                        className={`block px-4 py-2 text-xs lg:text-sm font-medium transition-colors rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                                            isCurrentPath 
                                                ? 'text-emerald-700 font-bold' 
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle Navigation Menu"
                    className="lg:hidden p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
                </button>
            </div>

            {/* Mobile Animated Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 px-4 py-5 flex flex-col gap-2 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block p-3 rounded-xl text-sm font-medium transition-colors ${
                                    isActive(link.to) 
                                        ? 'bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200' 
                                        : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;