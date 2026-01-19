'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function Mission() {
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
          <h1 className={styles.heroTitle}>Our Mission</h1>
          <p className={styles.heroSubtitle}>
            Removing barriers to play, one piece of gear at a time.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        {/* State of the World Section */}
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionContent}>
              <div className={`${styles.sectionLeftColumn} ${styles.fadeUp}`}>
                <h2 className={styles.sectionTitle}>State of the World</h2>
                <div className={styles.textContent}>
                  <p>
                    Every year, millions of children are sidelined, not by lack of talent or interest, 
                    but by cost. Youth sports have become increasingly expensive, with equipment expenses 
                    that are prohibitive for low-income families. As a result, talented kids never get 
                    the chance to play, missing out on the lessons in teamwork, discipline, and confidence 
                    that sports provide. Students For Sports works to change this by collecting and 
                    distributing gently used equipment to children who need it most, one piece of gear at a time.
                  </p>
                </div>
              </div>
              <div className={`${styles.sectionImage} ${styles.fadeUp}`}>
                {/* Placeholder for section image */}
              </div>
            </div>
          </div>
        </div>

        {/* Our Goal Section */}
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.sectionContent} ${styles.sectionContentReversed}`}>
              <div className={`${styles.sectionImage} ${styles.fadeUp}`}>
                {/* Placeholder for section image */}
              </div>
              <div className={`${styles.sectionLeftColumn} ${styles.fadeUp}`}>
                <h2 className={styles.sectionTitle}>Our Goal</h2>
                <div className={styles.textContent}>
                  <p>
                  At Students for Sports, we believe every young person deserves the opportunity to play and thrive through sports. We partner with local businesses, schools, and organizations to collect and refurbish gently used sports equipment, redistributing it to youth shelters, community programs, and families in need. Our mission is to remove barriers to play and ensure every child can experience the confidence, teamwork, and joy that sports provide while building a more equitable and sustainable future for youth athletics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className={styles.methodologySection}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>Methodology</h2>
            <div className={`${styles.methodologySteps} ${styles.fadeUp}`}>
              <span className={styles.methodologyStep}>
                <span className={styles.methodologyNumber}>1.</span> Connect with local businesses, schools, and organizations to collect sports equipment.
              </span>
              <FaArrowRight className={styles.methodologyArrow} />
              <span className={styles.methodologyStep}>
                <span className={styles.methodologyNumber}>2.</span> Refurbish and ensure that all equipment is safe to be used and enjoyed.
              </span>
              <FaArrowRight className={styles.methodologyArrow} />
              <span className={styles.methodologyStep}>
                <span className={styles.methodologyNumber}>3.</span> Distribute the sports equipment to underserved communities, youth shelters, and other organizations.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}