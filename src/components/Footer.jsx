import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import chayaLogo from '../assets/chaya_logo.png';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Custom Blouse Stitching',
  'Salwar Kameez',
  'Lehenga & Bridal Wear',
  'Saree Alterations',
  'Western Outfits',
  'Embroidery Work',
];

const socialLinks = [
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaFacebook, label: 'Facebook', href: '#' },
  { Icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919481267850' },
  { Icon: FaPinterest, label: 'Pinterest', href: '#' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer__top-line" aria-hidden="true"></div>

      <div className="footer__main container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={chayaLogo} alt="" className="footer__logo-icon" aria-hidden="true" />
            <div className="footer__logo-text">
              <span className="footer__logo-main">Chaya Fashion</span>
              <span className="footer__logo-sub">Ladies Tailor</span>
            </div>
          </a>
          <p className="footer__tagline">
            "Crafting Elegance, Stitching Dreams"
          </p>
          <p className="footer__brand-desc">
            Premium custom tailoring services for the modern Indian woman. Every thread, every stitch — a testament to our craft.
          </p>
          <div className="footer__social">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social-link"
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="footer__link-arrow">→</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="footer__link"
                  onClick={(e) => handleNavClick(e, '#services')}
                >
                  <span className="footer__link-arrow">→</span>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Visit Us</h4>
          <div className="footer__contact-info">
            <div className="footer__contact-item">
              <FaMapMarkerAlt className="footer__contact-icon" />
              <p>Kalsanka Ambagilu Rd, Karnataka Housing Board Colony, Nittur, Udupi – 576102</p>
            </div>
            <div className="footer__contact-item">
              <FaPhone className="footer__contact-icon" />
              <a href="tel:+919481267850" className="footer__contact-link">+91 94812 67850</a>
            </div>
            <div className="footer__contact-item">
              <FaWhatsapp className="footer__contact-icon footer__contact-icon--whatsapp" />
              <a href="https://wa.me/919481267850" target="_blank" rel="noopener noreferrer" className="footer__contact-link">WhatsApp Us</a>
            </div>
            <div className="footer__contact-item">
              <FaClock className="footer__contact-icon" />
              <p>Mon–Sat: 9AM – 9PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <div className="footer__bottom-line" aria-hidden="true"></div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Chaya Fashion and Ladies Tailor. All rights reserved.
          </p>
          <p className="footer__made-with">
            Crafted with <span className="footer__heart">♥</span> for elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
