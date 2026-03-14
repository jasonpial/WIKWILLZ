import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../context/ThemeContext';
import logo from "../assets/images/logo.jpeg";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Services', path: '/booking' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-30 h-20 rounded-lg overflow-hidden">
  <img
    src={logo}
    alt="Wikwilz Production Logo"
    className="w-full h-full object-cover"
  />
</div>
            <span className="text-white font-bold text-xl tracking-tighter">WIKWILZ PRODUCTIONZ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
                    location.pathname === link.path 
                      ? "text-gold" 
                      : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <Link
                to="/booking"
                className="bg-gold-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gold transition-all transform hover:scale-105"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path 
                    ? "text-gold" 
                    : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold-dark text-white px-3 py-3 rounded-md text-base font-bold"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
