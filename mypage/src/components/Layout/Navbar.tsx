'use client';

import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="container-responsive section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Code2 className="size-8 text-primary-700" />
            <span className="text-xl font-bold text-primary-900">
              Latif Kawuma
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/SHANON_SIMON_LUBEGA_CV.pdf"
              download="SHANON_SIMON_LUBEGA_CV.pdf"
              className="btn-primary text-sm"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link py-2 px-4 hover:bg-primary-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/SHANON_SIMON_LUBEGA_CV.pdf"
                download="SHANON_SIMON_LUBEGA_CV.pdf"
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;