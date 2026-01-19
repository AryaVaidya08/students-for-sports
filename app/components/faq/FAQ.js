'use client';

import { useState, useEffect } from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "What is Students for Sports?",
    answer: "Students for Sports is an organization promoting sports among students through coordination and support."
  },
  {
    question: "How can I join?",
    answer: "You can join by signing up on our website and participating in our upcoming events and activities."
  },
  {
    question: "What activities do you offer?",
    answer: "We offer various sports events, training sessions, and workshops aimed at enhancing student engagement in sports and fitness."
  },
  {
    question: "Who can participate?",
    answer: "Any student interested in sports can participate in our programs."
  },
  {
    question: "Are there any fees?",
    answer: "Most of our events are free, but some may have a nominal fee to cover costs."
  },
  {
    question: "How can I contact you for more information?",
    answer: "You can reach us through our website's contact form or drop an email at studentsforsports@gmail.com for any inquiries."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`${styles.faq} ${styles.fadeUp}`}>
      <div className={styles.container}>
        <h2 className={`${styles.faqTitle} ${styles.fadeUp}`}>FAQ</h2>
        <div className={styles.faqItems}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${styles.fadeUp}`}
              data-expanded={openFaq === index}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className={styles.faqQuestionText}>{faq.question}</span>
                <HiChevronRight className={`${styles.faqArrow} ${openFaq === index ? styles.faqArrowOpen : ''}`} />
              </button>
              {openFaq === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
