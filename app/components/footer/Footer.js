import Link from 'next/link';
import styles from './Footer.module.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.navLinks}>
              <div className={styles.navColumn}>
                <Link href="/" className={styles.footerLink}>Home</Link>
                <Link href="/meet-the-team" className={styles.footerLink}>Team</Link>
              </div>
              <div className={styles.navColumn}>
                <Link href="/mission" className={styles.footerLink}>Our Mission</Link>
                <Link href="/partners" className={styles.footerLink}>Partners</Link>
              </div>
            </div>
            <div className={styles.copyright}>
              <p>Students For Sports 501(c)(3) 2026</p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.socialIcons}>
              <a href="tel:" className={styles.socialIcon} aria-label="Phone">
                <FaPhone />
                <span className={styles.iconLabel}>Phone</span>
              </a>
              <a href="mailto:studentsforsportsorg@gmail.com" className={styles.socialIcon} aria-label="Email">
                <FaEnvelope />
                <span className={styles.iconLabel}>Email</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
                <span className={styles.iconLabel}>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedin />
                <span className={styles.iconLabel}>LinkedIn</span>
              </a>
            </div>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Join our newsletter!" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
