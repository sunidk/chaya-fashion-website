import { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    category: 'Bridal Lehenga',
    gradient: 'linear-gradient(135deg, #6B1D2E 0%, #B76E79 50%, #C9A84C 100%)',
    size: 'tall',
    pattern: '❋',
  },
  {
    category: 'Silk Blouse',
    gradient: 'linear-gradient(135deg, #C9A84C 0%, #FAF6F0 50%, #B76E79 100%)',
    size: 'normal',
    pattern: '✦',
  },
  {
    category: 'Anarkali Suit',
    gradient: 'linear-gradient(135deg, #1A1A2E 0%, #6B1D2E 100%)',
    size: 'normal',
    pattern: '✿',
  },
  {
    category: 'Designer Saree',
    gradient: 'linear-gradient(135deg, #8B2D42 0%, #C9A84C 60%, #FAF6F0 100%)',
    size: 'wide',
    pattern: '❋',
  },
  {
    category: 'Palazzo Set',
    gradient: 'linear-gradient(135deg, #B76E79 0%, #1A1A2E 100%)',
    size: 'normal',
    pattern: '✦',
  },
  {
    category: 'Party Wear Gown',
    gradient: 'linear-gradient(135deg, #4A1020 0%, #C9A84C 50%, #B76E79 100%)',
    size: 'tall',
    pattern: '✿',
  },
  {
    category: 'Embroidered Kurti',
    gradient: 'linear-gradient(135deg, #C9A84C 0%, #6B1D2E 100%)',
    size: 'normal',
    pattern: '❋',
  },
  {
    category: 'Indo-Western',
    gradient: 'linear-gradient(135deg, #1A1A2E 0%, #B76E79 50%, #C9A84C 100%)',
    size: 'normal',
    pattern: '✦',
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const current = sectionRef.current;
    if (current) {
      current.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header fade-in">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">A Glimpse of Our Craft</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Each piece is a conversation between fabric and vision — hover to explore.
          </p>
        </div>

        <div className="gallery__grid fade-in delay-2">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item gallery-item--${item.size}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="gallery-item__bg"
                style={{ background: item.gradient }}
              >
                <span className="gallery-item__pattern" aria-hidden="true">
                  {item.pattern}
                </span>
                <span
                  className="gallery-item__pattern gallery-item__pattern--2"
                  aria-hidden="true"
                >
                  {item.pattern}
                </span>
              </div>
              <div className={`gallery-item__overlay${hoveredIndex === i ? ' gallery-item__overlay--show' : ''}`}>
                <div className="gallery-item__overlay-content">
                  <span className="gallery-item__overlay-icon">✦</span>
                  <span className="gallery-item__category">{item.category}</span>
                  <span className="gallery-item__view">View Detail</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__footer fade-in delay-3">
          <p className="gallery__footer-text">
            Want to see more? Visit us in person or
          </p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>✦</span> Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
