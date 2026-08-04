import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedinIn, 
    FaEnvelope, 
    FaPhoneAlt, 
    FaMapMarkerAlt,
    FaGlobe
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Link sections mapped to USWA organizational areas
    const footerSections = [
        {
            title: "Focus Areas",
            links: [
                { name: 'Basic Education & Literacy', href: '/programs' },
                { name: 'Health & Sanitation', href: '/programs' },
                { name: 'Women Empowerment', href: '/programs' },
                { name: 'Tree Plantation & Climate', href: '/programs' },
                { name: 'Human Rights Advocacy', href: '/programs' },
            ]
        },
        {
            title: "Quick Links",
            links: [
                { name: 'About USWA', href: '/about' },
                { name: 'Our Achievements', href: '/achievements' },
                { name: 'Registration & Audits', href: '/about' },
                { name: 'Get Involved', href: '/contact' },
                { name: 'Contact Us', href: '/contact' },
            ]
        }
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, href: "#", ariaLabel: "Facebook" },
        { icon: <FaTwitter />, href: "#", ariaLabel: "Twitter" },
        { icon: <FaInstagram />, href: "#", ariaLabel: "Instagram" },
        { icon: <FaLinkedinIn />, href: "#", ariaLabel: "LinkedIn" },
    ];

    return (
        <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-5 max-w-md">
                        <Link to="/" className="inline-block group">
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-light text-2xl tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
                                    US<span className="font-serif italic text-emerald-600">WA</span>
                                </span>
                                <span className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
                                    United Social Watch & Advocacy
                                </span>
                            </div>
                        </Link>

                        {/* Description & Motto */}
                        <div className="relative pl-4 border-l-2 border-emerald-500">
                            <p className="text-sm leading-relaxed text-slate-600">
                                Dedicated to social advocacy, education, healthcare, and community empowerment across Sindh and Pakistan without discrimination.
                            </p>
                            <p className="text-xs font-semibold text-emerald-700 italic mt-2">
                                Motto: "Bila Imtiaz Sub Ki Khidmat"
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2.5 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.ariaLabel}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-sm transition-all duration-300"
                                >
                                    <span className="text-sm">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Link Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                                    {section.title}
                                </h4>
                            </div>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.href} 
                                            className="inline-block text-sm text-slate-600 hover:text-emerald-700 transition-all duration-200 hover:translate-x-1"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                                Contact Info
                            </h4>
                        </div>

                        <div className="space-y-3 text-sm">
                            {/* Phone Numbers */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <FaPhoneAlt className="text-xs" />
                                </div>
                                <div className="text-xs text-slate-600 flex flex-col">
                                    <a href="tel:+923101300002" className="hover:text-emerald-700 transition-colors">+92-310-1300002</a>
                                    <a href="tel:+923009219073" className="hover:text-emerald-700 transition-colors">+92-300-9219073</a>
                                </div>
                            </div>
                            
                            {/* Emails */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <FaEnvelope className="text-xs" />
                                </div>
                                <div className="text-xs text-slate-600 flex flex-col">
                                    <a href="mailto:info@uswa.org.uk" className="hover:text-emerald-700 transition-colors">info@uswa.org.uk</a>
                                    <a href="mailto:president.uswa@gmail.com" className="hover:text-emerald-700 transition-colors">president.uswa@gmail.com</a>
                                </div>
                            </div>

                            {/* Head Office Address */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <FaMapMarkerAlt className="text-xs" />
                                </div>
                                <div className="text-xs text-slate-600">
                                    <p className="font-semibold text-slate-800">Head Office</p>
                                    <p className="leading-relaxed">P.O. Box No. 626, Main GPO, I.I. Chundrigar Road, Karachi (74200), Sindh, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Legal / Details Bar */}
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-medium text-slate-500">
                    <p>
                        &copy; {currentYear} United Social Watch & Advocacy (USWA). Registration No. KAR 107.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-slate-400">Tax Exempt / FBR Audited</span>
                        <span>•</span>
                        <Link to="/about" className="hover:text-emerald-700 transition-colors">Governance & Audits</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;