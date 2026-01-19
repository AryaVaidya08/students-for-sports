'use client';

import { useEffect } from 'react';
import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/next"
import FAQ from "./components/faq/FAQ";
import GetInTouchStats from "./components/get-in-touch-stats/GetInTouchStats";

export default function Home() {
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

    // Use setTimeout to ensure DOM is ready
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
    <div className={styles.page} id="home">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Play Knows No Price.</h1>
          <p className={styles.heroSubtitle}>Join us in fostering teamwork and athleticism among students everywhere.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={`${styles.mission} ${styles.fadeUp}`} id="mission">
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={`${styles.missionLeftColumn} ${styles.fadeUp}`}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <div className={styles.missionText}>
                <p>
                  Students For Sports provides sports equipment to children who can't afford it. Through donations and local partnerships, we've given over 1,000 kids across the Tri-State Area the gear they need to play. Everyone deserves a shot. Let's pass them the ball.
                </p>
              </div>
            </div>
            <div className={`${styles.missionImage} ${styles.fadeUp}`}>
              {/* Placeholder for mission image */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Stats Section */}
      <GetInTouchStats />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
