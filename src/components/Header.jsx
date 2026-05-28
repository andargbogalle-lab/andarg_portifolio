import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>AB</div>
        
        <div className="header-right">
          <div className="theme-switcher">
            <button 
              className={`theme-button light ${theme === 'light' ? 'active' : ''}`}
              onClick={() => changeTheme('light')}
              aria-label="Light theme"
              title="Light Theme"
            />
            <button 
              className={`theme-button dark ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => changeTheme('dark')}
              aria-label="Dark theme"
              title="Dark Theme"
            />
            <button 
              className={`theme-button green ${theme === 'green' ? 'active' : ''}`}
              onClick={() => changeTheme('green')}
              aria-label="Green theme"
              title="Green Theme"
            />
            <button 
              className={`theme-button orange ${theme === 'orange' ? 'active' : ''}`}
              onClick={() => changeTheme('orange')}
              aria-label="Orange theme"
              title="Orange Theme"
            />
          </div>

          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
            <button 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </button>
            <button 
              className={activeSection === 'cv' ? 'active' : ''}
              onClick={() => handleNavClick('cv')}
            >
              CV
            </button>
            <button 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
