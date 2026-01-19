'use client';

import { useState } from 'react';
import styles from './GetInTouch.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaChevronDown } from 'react-icons/fa';

export default function GetInTouch() {
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfoColumn}>
            <h2 className={styles.contactTitle}>Get in Touch</h2>
            <p className={styles.contactDescription}>
              We're here to help and answer any questions you may have!
            </p>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodBubble}>
                  <FaEnvelope className={styles.methodIcon} />
                  <span className={styles.methodTitle}>Email:</span>
                </div>
                <a href="mailto:studentsforsportsorg@gmail.com" className={styles.methodLink}>
                  studentsforsportsorg@gmail.com
                </a>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodBubble}>
                  <FaPhone className={styles.methodIcon} />
                  <span className={styles.methodTitle}>Phone:</span>
                </div>
                <a href="tel:9083041678" className={styles.methodLink}>
                  (908) 304-1678
                </a>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodBubble}>
                  <FaMapMarkerAlt className={styles.methodIcon} />
                  <span className={styles.methodTitle}>Location:</span>
                </div>
                <span className={styles.methodText}>
                  600 Garretson Road, Bridgewater, NJ 08807
                </span>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.methodBubble}>
                  <FaClock className={styles.methodIcon} />
                  <span className={styles.methodTitle}>Hours:</span>
                </div>
                <span className={styles.methodText}>
                  9 AM - 5 PM
                </span>
              </div>
            </div>
          </div>
          <div className={styles.contactFormColumn}>
            <form className={styles.contactForm}>
              <input 
                type="text" 
                className={styles.formInput}
                placeholder="Your name"
              />
              <input 
                type="email" 
                className={styles.formInput}
                placeholder="Your email"
              />
              <input 
                type="tel" 
                className={styles.formInput}
                placeholder="Your phone number"
              />
              <div className={styles.selectWrapper}>
                <select 
                  className={`${styles.formSelect} ${!selectedTopic ? styles.placeholder : ''}`}
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <option value="">Select a topic</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="volunteer">Volunteer Information</option>
                  <option value="donation">Equipment Donation</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
                <FaChevronDown className={styles.selectIcon} />
              </div>
              <textarea 
                className={styles.formTextarea}
                placeholder="Additional information"
                rows="5"
              />
              <button type="submit" className={styles.submitButton}>
                <span>Submit</span>
                <FaPaperPlane className={styles.submitIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
