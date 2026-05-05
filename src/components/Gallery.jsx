import { useEffect, useRef, useState } from 'react';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';
import work6 from '../assets/work6.jpg';
import work7 from '../assets/work7.jpg';
import work8 from '../assets/work8.jpg';
import work9 from '../assets/work9.jpg';
import work10 from '../assets/work10.jpg';
import './Gallery.css';

const galleryItems = [
  { img: work1,  label: 'V-Neck Embroidery Blouse' },
  { img: work2,  label: 'Back Neck Design Blouse' },
  { img: work3,  label: 'Scallop Neck Embroidery Blouse' },
  { img: work4,  label: 'Boat Neck Blouse' },
  { img: work5,  label: 'Heavy Embroidery Blouse' },
  { img: work6,  label: 'Prince Cut Blouse' },
  { img: work7,  label: 'Round Neck Embroidery Blouse' },
  { img: work8,  label: 'Back Hole Neck Blouse' },
  { img: work9,  label: 'Saree Kuch Work' },
  { img: work10, label: 'Saree Falls Work' },
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
            Real work, real quality — every piece stitched with care and precision.
          </p>
        </div>

        <div className="gallery__grid fade-in delay-2">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.img} alt={item.label} className="gallery-item__img" />
              <div className={`gallery-item__overlay${hoveredIndex === i ? ' gallery-item__overlay--show' : ''}`}>
                <div className="gallery-item__overlay-content">
                  <span className="gallery-item__overlay-icon">✦</span>
                  <span className="gallery-item__category">{item.label}</span>
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
