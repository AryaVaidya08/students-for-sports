'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    '/images/partner1.png',
    '/images/partner2.png',
    '/images/partner3.png'
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

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
          <h1 className={styles.heroTitle}>Our Partners</h1>
          <p className={styles.heroSubtitle}>
            Working together to make sports accessible for all.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        {/* Partnership Types - Two Column Layout */}
        <div className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <div className={styles.partnershipTypes}>
              {/* Donation Partners */}
              <div className={`${styles.partnerColumn} ${styles.fadeUp}`}>
                <h2 className={styles.sectionTitle}>Donation Partners</h2>
                <p className={styles.partnerDescription}>
                  Do you have gently used sports equipment collecting dust? We partner with 
                  individuals, families, sporting goods stores, and schools to collect gear 
                  that's no longer being used. Whether it's a single baseball glove or an 
                  entire team's worth of equipment, every donation makes a difference.
                </p>
              </div>

              {/* Distribution Partners */}
              <div className={`${styles.partnerColumn} ${styles.fadeUp}`}>
                <h2 className={styles.sectionTitle}>Distribution Partners</h2>
                <p className={styles.partnerDescription}>
                  We partner with youth shelters, community centers, schools, and nonprofit 
                  organizations across the Tri-State Area to distribute equipment directly to 
                  children who need it. If your organization serves underprivileged youth and 
                  could benefit from sports equipment donations, we'd love to work with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Esteemed Partners Section */}
        <div className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>Esteemed Partners</h2>
            <div className={`${styles.carouselContainer} ${styles.fadeUp}`}>
              <div className={styles.fadeLeft}></div>
              <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                  {duplicatedPartners.map((partner, index) => (
                    <div key={index} className={styles.carouselSlide}>
                      <Image
                        src={partner}
                        alt={`Partner ${(index % partners.length) + 1}`}
                        width={400}
                        height={200}
                        className={styles.partnerLogo}
                        priority={index < partners.length}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.fadeRight}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Want to Join Section */}
      <section className={styles.joinSection}>
        <div className={styles.container}>
          <div className={`${styles.joinContent} ${styles.fadeUp}`}>
            <h2 className={styles.joinTitle}>Want to become a partner?</h2>
            <Link href="/contact" className={styles.joinButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}