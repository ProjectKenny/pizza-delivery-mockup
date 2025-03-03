import React from 'react';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | Pizza Express',
  description: 'Get in touch with Pizza Express for inquiries, feedback, or to place an order',
};

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>
      
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Have questions, feedback, or want to place an order? 
                We're here to help! Reach out to us using any of the methods below.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <h3>Visit Us</h3>
                  <address>
                    123 Pizza Street<br />
                    Food City, FC 12345<br />
                    United States
                  </address>
                </div>
                
                <div className={styles.contactMethod}>
                  <h3>Call Us</h3>
                  <p>(123) 456-7890</p>
                  <p>Mon-Thu: 11am - 10pm</p>
                  <p>Fri-Sat: 11am - 11pm</p>
                  <p>Sun: 12pm - 9pm</p>
                </div>
                
                <div className={styles.contactMethod}>
                  <h3>Email Us</h3>
                  <p>info@pizzaexpress.com</p>
                  <p>orders@pizzaexpress.com</p>
                  <p>careers@pizzaexpress.com</p>
                </div>
                
                <div className={styles.contactMethod}>
                  <h3>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.mapSection}>
        <div className="container">
          <h2>Find Us</h2>
          <div className={styles.mapContainer}>
            {/* Map will be integrated here. For now, using placeholder */}
            <div className={styles.mapPlaceholder}>
              <p>Interactive map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.faqSection}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How can I track my order?</h3>
              <p>
                You can track your order in real-time through our website or mobile app. 
                Simply enter your order number in the tracking section on our homepage.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What are your delivery hours?</h3>
              <p>
                We deliver during our regular operating hours: Monday to Thursday (11am - 10pm), 
                Friday to Saturday (11am - 11pm), and Sunday (12pm - 9pm).
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Is there a minimum order for delivery?</h3>
              <p>
                Yes, there is a $15 minimum order for delivery. Orders below this amount 
                can be picked up at our store.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Do you cater for events?</h3>
              <p>
                Yes! We offer catering services for events of all sizes. Please contact 
                us at least 48 hours in advance to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}