import { useState, useEffect, useRef } from 'react';
import chayaLogo from '../assets/chaya_logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} ref={menuRef}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src={chayaLogo} alt="" className="navbar__logo-icon" aria-hidden="true" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Chaya Fashion</span>
            <span className="navbar__logo-sub">Ladies Tailor</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeSection === link.href.replace('#', '') ? ' navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/919481267850" className="navbar__cta" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__brand">
          <img src={chayaLogo} alt="Chaya Fashion" className="mobile-menu__logo" />
          <div className="mobile-menu__logo-text">
            <span className="mobile-menu__logo-main">Chaya Fashion</span>
            <span className="mobile-menu__logo-sub">Ladies Tailor</span>
          </div>
        </div>

        <nav className="mobile-menu__nav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-menu__link${activeSection === link.href.replace('#', '') ? ' mobile-menu__link--active' : ''}`}
              style={{ animationDelay: menuOpen ? `${i * 0.07 + 0.15}s` : '0s' }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/919481267850"
          className="mobile-menu__cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          WhatsApp Us
        </a>

        <p className="mobile-menu__hours">Mon – Sat &nbsp;·&nbsp; 9 AM – 9 PM &nbsp;·&nbsp; Nittur, Udupi</p>
      </div>
    </header>
  );
}
