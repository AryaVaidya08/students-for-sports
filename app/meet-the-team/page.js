'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Manas',
      role: 'President/Founder',
      bio: 'Manas is the Founder and President of Students For Sports. He leads the organization with passion and dedication to ensuring every child has access to sports equipment.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Jadon',
      role: 'Vice President/Co-Founder',
      bio: 'Jadon is the Co-Founder and Vice President of Students for Sports, founded alongside Manas, and is a junior at Bridgewater-Raritan Regional High School where he plays lacrosse. Growing up immersed in sports, he recognized inequities in access to athletics, inspiring him to help start Students for Sports, and he also enjoys graphic design and photography in his free time.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: 'Mohnish',
      role: 'Chief Operating Director',
      bio: 'Mohnish serves as the Chief Operating Director, overseeing the day-to-day operations of Students For Sports and ensuring smooth coordination of our programs.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    },
  ];

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
          <h1 className={styles.heroTitle}>Meet the Team</h1>
          <p className={styles.heroSubtitle}>
            Student led. Community powered.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={`${styles.aboutLeftColumn} ${styles.fadeUp}`}>
              <h2 className={styles.sectionTitle}>About Us</h2>
              <p className={styles.aboutText}>
                Hi! We're the Students For Sports team, a group of student-athletes dedicated to 
                ensuring every kid has the opportunity to play. We've been fortunate to experience 
                firsthand how sports teach teamwork, discipline, and resilience, and we're passionate 
                about making sure cost never keeps talented kids off the field. If you're interested 
                in partnering with us or getting involved, please reach out using the form below.
              </p>
            </div>
            <div className={`${styles.aboutImage} ${styles.fadeUp}`}>
              {/* Placeholder for about image */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={`${styles.teamCard} ${styles.fadeUp}`}>
                <div className={styles.imageContainer}>
                  <div 
                    className={styles.memberImage}
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Join Section */}
      <section className={styles.joinSection}>
        <div className={styles.container}>
          <div className={`${styles.joinContent} ${styles.fadeUp}`}>
            <h2 className={styles.joinTitle}>Want to join?</h2>
            <Link href="/contact" className={styles.joinButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}