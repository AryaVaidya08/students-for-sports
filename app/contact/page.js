'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import GetInTouch from '../components/get-in-touch/GetInTouch';

export default function Contact() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeUpVisible);
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      const fadeUpElements = document.querySelectorAll(`.${styles.fadeUp}`);
      fadeUpElements.forEach((el) => observer.observe(el));
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      const fadeUpElements = document.querySelectorAll(`.${styles.fadeUp}`);
      fadeUpElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Get in touch with Students For Sports.
          </p>
        </div>
      </section>
      {/* Get In Touch Section */}
      <div className={styles.fadeUp}>
        <GetInTouch />
      </div>
    </div>
  );
}