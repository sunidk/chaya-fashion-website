import { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaStar } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);

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
      current.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) =>
        observer.observe(el)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__bg" aria-hidden="true"></div>
      <div className="container">
        <div className="contact__header fade-in">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title contact__title">Visit Us or Reach Out</h2>
          <div className="gold-divider centered"></div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            No appointment needed — simply walk in during working hours. You can also call or WhatsApp us anytime.
          </p>
        </div>

        <div className="contact__layout">
          {/* Info Panel */}
          <div className="contact__info fade-in-left delay-1">
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="contact-info__label">Our Shop</h4>
                <p className="contact-info__text">
                  Kalsanka Ambagilu Rd,<br />
                  Karnataka Housing Board Colony,<br />
                  Nittur, Udupi, Karnataka – 576102
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <FaPhone />
              </div>
              <div>
                <h4 className="contact-info__label">Call Us</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a href="tel:+919481267850" className="contact-info__text contact-info__link">
                    +91 94812 67850
                  </a>
                  <a href="tel:+918453335708" className="contact-info__text contact-info__link">
                    +91 84533 35708
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon contact-info__icon--whatsapp">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="contact-info__label">WhatsApp</h4>
                <a
                  href="https://wa.me/919481267850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__text contact-info__link"
                >
                  +91 94812 67850
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <FaClock />
              </div>
              <div>
                <h4 className="contact-info__label">Working Hours</h4>
                <p className="contact-info__text">
                  Monday – Saturday: 9:00 AM – 9:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon contact-info__icon--star">
                <FaStar />
              </div>
              <div>
                <h4 className="contact-info__label">Overall Rating</h4>
                <p className="contact-info__text">
                  Overall 5.0 / 5 &nbsp;·&nbsp; 500+ Happy Clients
                </p>
              </div>
            </div>

            <div className="contact__cta-buttons">
              <a href="tel:+919481267850" className="btn-primary contact__cta-btn">
                <FaPhone /> Call Now
              </a>
              <a
                href="https://wa.me/919481267850"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp contact__cta-btn"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="contact__map-wrap fade-in-right delay-2">
            <div className="contact__map-label">
              <FaMapMarkerAlt /> Find Us on the Map
            </div>
            <div className="contact__map-frame">
              <iframe
                title="Chaya Fashion location on Google Maps"
                src="https://maps.google.com/maps?q=Chaya+Fashion+%26+Ladies+Tailor,+Kalsanka+Ambagilu+Rd,+Nittur,+Udupi,+Karnataka+576102&output=embed&iwloc=&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/place/Chaya+Fashion+%26+Ladies+Tailor/data=!4m2!3m1!1s0x0:0x46da3b04a00b4347"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__directions-link"
            >
              Get Directions — Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
