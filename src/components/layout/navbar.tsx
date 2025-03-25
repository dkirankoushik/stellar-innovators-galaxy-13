
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Problem & Solution', href: '#solution' },
    { title: 'Team', href: '#team' },
    { title: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'backdrop-blur-xl bg-space-dark/80 py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2" 
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-bold text-xl text-white hover:opacity-80 transition-opacity">
            Stellarix <span className="text-stellar-blue">Space</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-stellar-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-full border border-stellar-blue text-stellar-blue hover:bg-stellar-blue/10 transition-colors text-sm font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism animate-fade-down">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-white py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full border border-stellar-blue text-stellar-blue hover:bg-stellar-blue/10 transition-colors text-sm font-medium self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
