import { useEffect, useRef } from 'react';
import {
  GiFlowerEmblem, GiSewingMachine, GiSewingNeedle,
  GiScissors, GiDress, GiClothes, GiDiamondRing,
  GiCrown, GiSafetyPin, GiRibbon, GiPencilRuler, GiYarn
} from 'react-icons/gi';
import './Services.css';

const services = [
  {
    Icon: GiFlowerEmblem,
    title: 'Sada Blouse',
    description: 'Simple and elegant plain blouse stitching with a perfect fit — ideal for everyday saree pairings.',
    price: '₹280',
    tag: 'Most Popular',
  },
  {
    Icon: GiRibbon,
    title: 'Lining Blouse',
    description: 'Blouse with a smooth inner lining for added comfort and a neat, polished finish inside and out.',
    price: '₹380',
    tag: null,
  },
  {
    Icon: GiSewingMachine,
    title: 'Machine Embroidery Blouse',
    description: 'Rich machine embroidery on both front and back panels for a decorative, eye-catching look.',
    price: '₹600',
    tag: 'Premium',
  },
  {
    Icon: GiDiamondRing,
    title: 'Boat Neck / Back Hole Neck',
    description: 'Trendy boat neck or stylish back hole neck blouse designs for an elegant and modern appearance.',
    price: '₹430',
    tag: 'Trending',
  },
  {
    Icon: GiPencilRuler,
    title: 'Normal Cups Blouse',
    description: 'Blouse with neatly stitched cups for a well-structured, comfortable, and flattering silhouette.',
    price: '₹550',
    tag: 'Best Fit',
  },
  {
    Icon: GiCrown,
    title: 'Princess Cut with Cups Blouse',
    description: 'Princess cut blouse with built-in cups offering a beautifully shaped and well-supported fit.',
    price: '₹650',
    tag: 'Best Value',
  },
  {
    Icon: GiSafetyPin,
    title: 'Prince Cut Blouse',
    description: 'Classic prince cut blouse for a structured, elegant look — perfect for any festive occasion.',
    price: '₹450',
    tag: 'Classic',
  },
  {
    Icon: GiSewingNeedle,
    title: 'Saree Falls',
    description: 'Professional saree falls stitching for a neat hem and well-draped saree every single time.',
    price: '₹100',
    tag: 'Quick Service',
  },
  {
    Icon: GiScissors,
    title: 'Saree Kuch',
    description: 'Expert saree kuch work done with precision to ensure perfect pleating and graceful draping.',
    price: '₹300',
    tag: null,
  },
  {
    Icon: GiClothes,
    title: 'Dress Stitching',
    description: 'Custom dress stitching in your preferred style — casual, ethnic, or formal — with a boutique finish.',
    price: '₹500',
    tag: 'Custom',
  },
  {
    Icon: GiDress,
    title: 'Churidar / Salwar',
    description: 'Well-fitted churidar or salwar stitched to your measurements for a comfortable, elegant everyday look.',
    price: '₹300',
    tag: null,
  },
  {
    Icon: GiYarn,
    title: 'Kurti Stitching',
    description: 'Stylish kurti stitching in your choice of fabric and cut — casual, straight, or A-line styles.',
    price: '₹400',
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
            From everyday saree blouses to special occasion wear — each stitch a promise of perfection.
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
