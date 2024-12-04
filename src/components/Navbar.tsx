import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-lg bg-opacity-30 bg-[#030712] text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://cdn-icons-png.freepik.com/256/7798/7798272.png?ga=GA1.1.65795729.1709754432&semt=ais_hybrid" 
          alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            CVOrbit
          </span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <a target='blank' href="https://portfolio-generator-blush.vercel.app/" className="hover:text-purple-400 transition-colors">
            Create Portfolio
          </a>
          <a href="https://github.com/hyperboy107/resume-builder" className="hover:text-purple-400 transition-colors">
            Gihub Repo
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;