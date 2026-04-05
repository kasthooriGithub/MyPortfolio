import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled || isMenuOpen ? 'bg-glass shadow-sm' : 'bg-transparent'} py-2 py-lg-3 transition-all`}>
      <div className="container">
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/" 
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <span className="fw-bold fs-4">JK</span>
        </Link>
        
        <button 
          className="navbar-toggler border-0 shadow-none p-1" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-white fs-1`}></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-4 mb-lg-0 mt-3 mt-lg-0">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link px-lg-3 text-capitalize" 
                  href={`/#${item}`} 
                  onClick={(e) => scrollToSection(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
            {isAdmin && (
              <Link to="/admin" className="btn btn-outline-secondary btn-sm px-4">Admin</Link>
            )}
            <a 
              href="#contact" 
              className="btn btn-primary px-4 shadow-sm" 
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
