import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' && window.location.hash === href;
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'Funcionalidades', href: '#features', isPage: false },
    { name: 'Utilizadores', href: '#users', isPage: false },
    { name: 'Screenshots', href: '#showcase', isPage: false },
    { name: 'Tecnologias', href: '#tech', isPage: false },
    { name: 'FAQ', href: '#faq', isPage: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-lg border-b border-[#334155]/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-blue-500/20 transition-all">
            N
          </div>
          <span className="text-xl font-bold text-[#f1f5f9] tracking-tight">NextApp</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-blue-400' : 'text-[#94a3b8] hover:text-[#60a5fa]'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' && window.location.hash === link.href ? 'text-blue-400' : 'text-[#94a3b8] hover:text-[#60a5fa]'
                }`}
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/player" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 inline-block text-center">
            Começar
          </Link>
        </div>

        <button
          className="md:hidden text-[#f1f5f9]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-[#334155] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-[#f1f5f9] font-medium py-2 hover:text-[#60a5fa] ${
                      location.pathname === link.href ? 'text-blue-400' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[#f1f5f9] font-medium py-2 hover:text-[#60a5fa]"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link
                to="/player"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl w-full mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
