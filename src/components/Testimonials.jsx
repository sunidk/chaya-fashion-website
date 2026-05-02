import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Smitha Shetty',
    role: 'Bride, Nittur, Udupi',
    stars: 5,
    quote:
      'Vijayalaxmi akka stitched my bridal blouse and lehenga — it was perfect for my wedding in Udupi. The fit was so precise, everyone kept asking who my tailor was. I have been recommending Chaya Fashion to every bride I know!',
    initials: 'SS',
    gradient: 'linear-gradient(135deg, #6B1D2E, #B76E79)',
  },
  {
    name: 'Kavitha Rao',
    role: 'Regular Client, Udupi',
    stars: 5,
    quote:
      "I have been coming to Chaya Fashion for years now. Vijayalaxmi akka understands exactly what I want, even when I cannot explain it properly. My salwar kameez and blouses always come out beautifully. Best tailor in Udupi!",
    initials: 'KR',
    gradient: 'linear-gradient(135deg, #C9A84C, #A8873A)',
  },
  {
    name: 'Rekha Kamath',
    role: 'Customer, Manipal, Udupi',
    stars: 5,
    quote:
      "I came here for a special occasion saree blouse and was amazed by the quality. The stitching is so neat and the fit is perfect. Vijayalaxmi akka is very skilled and patient. Will definitely come back for all my stitching needs!",
    initials: 'RK',
    gradient: 'linear-gradient(135deg, #1A1A2E, #6B1D2E)',
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`testimonial__star${i < count ? ' testimonial__star--filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
      current.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials__bg" aria-hidden="true">
        <div className="testimonials__bg-shape testimonials__bg-shape--1"></div>
        <div className="testimonials__bg-shape testimonials__bg-shape--2"></div>
      </div>
      <div className="container">
        <div className="testimonials__header fade-in">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Words from Our Patrons</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Real stories from women who trust us with their most precious moments.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card fade-in delay-${i + 1}`}>
              <div className="testimonial__quote-mark" aria-hidden="true">"</div>
              <Stars count={t.stars} />
              <p className="testimonial__quote">{t.quote}</p>
              <div className="testimonial__author">
                <div
                  className="testimonial__avatar"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div className="testimonial__info">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__rating fade-in delay-4">
          <div className="testimonials__rating-inner">
            <div className="testimonials__rating-score">
              <span className="testimonials__rating-number">5.0</span>
              <div className="testimonials__rating-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="testimonial__star testimonial__star--filled">★</span>
                ))}
              </div>
            </div>
            <div className="testimonials__rating-divider"></div>
            <div className="testimonials__rating-info">
              <span className="testimonials__rating-count">Overall Rating — 5.0 out of 5</span>
              <span className="testimonials__rating-platform">500+ Happy Clients · Nittur, Udupi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
