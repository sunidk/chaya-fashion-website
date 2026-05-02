import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleParallax = () => {
      const scrolled = window.scrollY;
      el.style.setProperty('--parallax-y', `${scrolled * 0.3}px`);
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Decorative floating elements */}
      <div className="hero__deco hero__deco--circle1" aria-hidden="true"></div>
      <div className="hero__deco hero__deco--circle2" aria-hidden="true"></div>
      <div className="hero__deco hero__deco--line1" aria-hidden="true"></div>
      <div className="hero__deco hero__deco--line2" aria-hidden="true"></div>
      <div className="hero__deco hero__deco--diamond1" aria-hidden="true">✦</div>
      <div className="hero__deco hero__deco--diamond2" aria-hidden="true">✦</div>
      <div className="hero__deco hero__deco--floral" aria-hidden="true">❋</div>

      <div className="hero__overlay" aria-hidden="true"></div>

      <div className="hero__content container">
        <span className="hero__eyebrow">Nittur, Udupi · Premium Ladies Tailoring</span>
        <h1 className="hero__title">
          Crafting Elegance,<br />
          <em>Stitching Dreams</em>
        </h1>
        <p className="hero__subtitle">
          Where every thread tells a story of grace. Custom-fitted outfits crafted
          with love, precision, and 25+ years of artisanal expertise.
        </p>
        <div className="hero__actions">
          <a
            className="btn-primary hero__btn-whatsapp"
            href="https://wa.me/919481267850"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
          <button
            className="btn-secondary"
            onClick={() => handleScrollTo('gallery')}
          >
            View Our Work
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">2000+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Satisfaction</span>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={() => handleScrollTo('services')}
        aria-label="Scroll to services"
      >
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </button>
    </section>
  );
}
