import { useEffect, useRef } from 'react';
import { GiSewingMachine, GiDress, GiDiamondRing, GiSewingNeedle, GiClothes, GiFlowerEmblem } from 'react-icons/gi';
import './Services.css';

const services = [
  {
    Icon: GiSewingMachine,
    title: 'Custom Blouse Stitching',
    description: 'Perfectly fitted blouses tailored to your exact measurements. From simple cuts to intricate designs with back patterns and necklines.',
    price: '₹499',
    tag: 'Most Popular',
  },
  {
    Icon: GiDress,
    title: 'Salwar Kameez',
    description: 'Elegant salwar suits crafted in traditional and contemporary styles. Anarkali, churidar, palazzo, and more — your choice.',
    price: '₹799',
    tag: null,
  },
  {
    Icon: GiDiamondRing,
    title: 'Lehenga & Bridal Wear',
    description: 'Exquisite bridal lehengas and special occasion wear with expert embroidery and embellishment work. Your dream outfit, realized.',
    price: '₹2999',
    tag: 'Bridal',
  },
  {
    Icon: GiSewingNeedle,
    title: 'Saree Alterations',
    description: 'Professional saree falls, petticoat stitching, and alterations. We also do saree blouse matching and border work.',
    price: '₹199',
    tag: null,
  },
  {
    Icon: GiClothes,
    title: 'Western Outfits',
    description: 'Modern western silhouettes — dresses, skirts, trousers, and co-ord sets tailored with a boutique-quality finish.',
    price: '₹899',
    tag: 'Trending',
  },
  {
    Icon: GiFlowerEmblem,
    title: 'Embroidery & Embellishments',
    description: 'Handcrafted embroidery, mirror work, sequin detailing, and embellishments to elevate any outfit to a work of art.',
    price: '₹349',
    tag: null,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
      current.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) =>
        observer.observe(el)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="services__header fade-in">
          <span className="section-label">What We Create</span>
          <h2 className="section-title">Our Tailoring Services</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            From everyday elegance to once-in-a-lifetime bridal moments — each stitch a promise of perfection.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card fade-in delay-${Math.min(i + 1, 6)}`}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              {service.tag && (
                <span className="service-card__tag">{service.tag}</span>
              )}
              <div className="service-card__icon-wrap">
                <service.Icon className="service-card__icon" />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__footer">
                <span className="service-card__price-label">Starting from</span>
                <span className="service-card__price">{service.price}</span>
              </div>
              <div className="service-card__hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
