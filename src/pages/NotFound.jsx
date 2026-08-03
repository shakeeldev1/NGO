import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl sm:text-9xl font-bold text-emerald-500 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-slate-300 max-w-md mx-auto mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
