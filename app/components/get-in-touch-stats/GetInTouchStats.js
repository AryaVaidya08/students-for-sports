'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from './GetInTouchStats.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function GetInTouchStats() {
  const [kidsCount, setKidsCount] = useState(0);
  const [equipmentCount, setEquipmentCount] = useState(0);
  const [partnershipsCount, setPartnershipsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetValues = {
      kids: 1000,
      equipment: 500,
      partnerships: 50
    };

    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    const frameDuration = duration / totalFrames;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeUpVisible);
          
          // Start counting animation only once
          if (!hasAnimated && entry.target === sectionRef.current) {
            setHasAnimated(true);
            
            let currentFrame = 0;
            const animate = () => {
              currentFrame++;
              const progress = currentFrame / totalFrames;
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              setKidsCount(Math.floor(targetValues.kids * easeOutQuart));
              setEquipmentCount(Math.floor(targetValues.equipment * easeOutQuart));
              setPartnershipsCount(Math.floor(targetValues.partnerships * easeOutQuart));
              
              if (currentFrame < totalFrames) {
                setTimeout(animate, frameDuration);
              } else {
                // Ensure final values are set
                setKidsCount(targetValues.kids);
                setEquipmentCount(targetValues.equipment);
                setPartnershipsCount(targetValues.partnerships);
              }
            };
            
            setTimeout(animate, frameDuration);
          }
        }
      });
    }, observerOptions);

    // Observe fade up elements
    const timeoutId = setTimeout(() => {
      const fadeUpElements = document.querySelectorAll(`.${styles.fadeUp}`);
      fadeUpElements.forEach((el) => observer.observe(el));
      
      // Also observe the section itself for counter animation
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      const fadeUpElements = document.querySelectorAll(`.${styles.fadeUp}`);
      fadeUpElements.forEach((el) => observer.unobserve(el));
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className={`${styles.contact} ${styles.fadeUp}`} id="contact">
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={`${styles.statsColumn} ${styles.fadeUp}`}>
            <h2 className={styles.contactTitle}>Our Impact</h2>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  {formatNumber(kidsCount)}+
                </div>
                <div className={styles.statLabel}>Kids Helped</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  {formatNumber(equipmentCount)}+
                </div>
                <div className={styles.statLabel}>Equipment Pieces</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  {formatNumber(partnershipsCount)}+
                </div>
                <div className={styles.statLabel}>Partnerships</div>
              </div>
            </div>
          </div>
          <div className={`${styles.buttonColumn} ${styles.fadeUp}`}>
            <Link href="/contact" className={styles.contactButton}>
              <span>Get in Touch</span>
              <FaArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
