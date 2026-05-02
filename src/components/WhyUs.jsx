import { useEffect, useRef } from 'react';
import { FaAward, FaGem, FaDoorOpen, FaRulerCombined } from 'react-icons/fa';
import './WhyUs.css';

const features = [
  {
    Icon: FaAward,
    number: '25+',
    title: 'Years of Excellence',
    description:
      'Over two decades of tailoring expertise, delivering perfection with every garment for thousands of satisfied clients.',
  },
  {
    Icon: FaGem,
    number: '100%',
    title: 'Premium Fabrics',
    description:
      'We source only the finest silks, cottons, and blended fabrics — because exceptional clothes start with exceptional materials.',
  },
  {
    Icon: FaDoorOpen,
    number: '0',
    title: 'Walk-In Welcome',
    description:
      'No appointments needed. Simply walk in during working hours and we will attend to you with full care and personal attention.',
  },
  {
    Icon: FaRulerCombined,
    number: '∞',
    title: 'Perfect Fit Guarantee',
    description:
      'Unlimited free alterations until your outfit fits exactly the way you envisioned. Your satisfaction is our standard.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const current = sectionRef.current;
    if (current) {
      current.querySelectorAll('.fade-in, .fade-in-left').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="why-us" ref={sectionRef}>
      <div className="why-us__bg-pattern" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="why-us__dot"></span>
        ))}
      </div>
      <div className="container">
        <div className="why-us__header fade-in">
          <span className="section-label">Why Chaya Fashion</span>
          <h2 className="section-title why-us__title">The Chaya Difference</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Four pillars that make us the most trusted ladies tailor in Udupi.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((f, i) => (
            <div key={f.title} className={`why-card fade-in delay-${i + 1}`}>
              <div className="why-card__top">
                <div className="why-card__icon-wrap">
                  <f.Icon className="why-card__icon" />
                </div>
                <div className="why-card__number">{f.number}</div>
              </div>
              <h3 className="why-card__title">{f.title}</h3>
              <p className="why-card__desc">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="why-us__banner fade-in">
          <div className="why-us__banner-content">
            <span className="why-us__banner-icon">✦</span>
            <p className="why-us__banner-text">
              "Every woman deserves to feel like royalty in her own clothes.
              At Chaya Fashion, we make that happen — stitch by stitch."
            </p>
            <span className="why-us__banner-author">— Vijayalaxmi, Master Tailor & Founder, Chaya Fashion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
