import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">AB</div>
        
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
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('cv')}>CV</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
