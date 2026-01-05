import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hexagon, CaretDown, List, X } from '@phosphor-icons/react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-navy/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
             <Hexagon weight="light" className="w-8 h-8 text-electric" />
             <div className="absolute inset-0 bg-electric/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-white uppercase">Lux Ops</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Demos Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-400 hover:text-electric font-mono text-sm uppercase tracking-wide py-2 transition-colors">
              Demos <CaretDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-panel border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div 
                onClick={() => handleDemoClick('/demo/racing')}
                className="block px-6 py-4 hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer border-b border-white/5 font-mono text-sm uppercase"
              >
                Racing // Telemetry
              </div>
              <div 
                onClick={() => handleDemoClick('/demo/drones')}
                className="block px-6 py-4 hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer border-b border-white/5 font-mono text-sm uppercase"
              >
                Drone // Ops
              </div>
              <div 
                onClick={() => handleDemoClick('/demo/fleet')}
                className="block px-6 py-4 hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer font-mono text-sm uppercase"
              >
                Fleet // Mgmt
              </div>
            </div>
          </div>

          <Link to="/industries" className="text-gray-400 hover:text-electric font-mono text-sm uppercase tracking-wide transition-colors">Industries</Link>
          <Link to="/pricing" className="text-gray-400 hover:text-electric font-mono text-sm uppercase tracking-wide transition-colors">Pricing</Link>
          <Link to="/blog" className="text-gray-400 hover:text-electric font-mono text-sm uppercase tracking-wide transition-colors">Blog</Link>
          <Link to="/about" className="text-gray-400 hover:text-electric font-mono text-sm uppercase tracking-wide transition-colors">About</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary" size="sm">Start Engine</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="font-mono text-electric mb-2 uppercase text-xs tracking-widest">Select Module</div>
          <Link to="/demo/racing" className="pl-4 text-gray-300 font-mono uppercase text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>Racing // Telemetry</Link>
          <Link to="/demo/drones" className="pl-4 text-gray-300 font-mono uppercase text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>Drone // Ops</Link>
          <Link to="/demo/fleet" className="pl-4 text-gray-300 font-mono uppercase text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>Fleet // Management</Link>
          <div className="h-px bg-white/10 my-2"></div>
          <Link to="/industries" className="text-lg font-display font-bold text-white uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
          <Link to="/pricing" className="text-lg font-display font-bold text-white uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/blog" className="text-lg font-display font-bold text-white uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="text-lg font-display font-bold text-white uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <div className="h-4"></div>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button fullWidth>Initialize</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;