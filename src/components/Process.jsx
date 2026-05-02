import { useEffect, useRef } from 'react';
import { FaDoorOpen, FaComments, FaRulerCombined, FaShoppingBag } from 'react-icons/fa';
import './Process.css';

const steps = [
  {
    number: '01',
    Icon: FaDoorOpen,
    title: 'Walk In',
    description:
      'Simply walk in to our shop in Nittur, Udupi during working hours — no appointment needed. We welcome you with warmth and personal attention.',
  },
  {
    number: '02',
    Icon: FaComments,
    title: 'Consultation',
    description:
      'We discuss your style preferences, occasion, fabric choices, and design inspiration to understand exactly what you envision.',
  },
  {
    number: '03',
    Icon: FaRulerCombined,
    title: 'Measurements',
    description:
      'Precise body measurements taken by our expert tailor — multiple points to ensure a flawless, custom fit every time.',
  },
  {
    number: '04',
    Icon: FaShoppingBag,
    title: 'Pickup',
    description:
      'Your outfit is carefully crafted and ready for pickup. We do a final fitting check — free adjustments are always welcome until perfect.',
  },
];

export default function Process() {
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
    <section id="process" className="process" ref={sectionRef}>
      <div className="container">
        <div className="process__header fade-in">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From Dream to Drape</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Walk in anytime — our simple process ensures a seamless, enjoyable tailoring experience.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.number} className={`process-step fade-in delay-${i + 1}`}>
              <div className="process-step__connector" aria-hidden="true"></div>
              <div className="process-step__circle">
                <step.Icon className="process-step__icon" />
                <span className="process-step__number-badge">{step.number}</span>
              </div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
