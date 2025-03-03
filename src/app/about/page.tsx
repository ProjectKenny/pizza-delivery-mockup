import React from 'react';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us | Pizza Express',
  description: 'Learn about our mission, values, and the journey of Pizza Express',
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Pizza Express</h1>
          <p>Our journey from a small kitchen to your favorite pizza place</p>
        </div>
      </section>
      
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.contentBox}>
            <h2>Our Story</h2>
            <p>
              Founded in 2005, Pizza Express began with a simple mission: to create the perfect pizza 
              using the freshest ingredients and to deliver it quickly to hungry customers. What started 
              as a small pizza kitchen with just three employees has grown into a beloved brand with 
              locations throughout the city.
            </p>
            <p>
              Our founder, John Dough, was passionate about two things: making incredible pizza and 
              providing exceptional service. Today, these core values remain at the heart of everything we do.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            <h3>Our Journey</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2005</div>
                <div className={styles.timelineContent}>
                  <h4>Where It All Began</h4>
                  <p>First Pizza Express opened its doors with just three employees and one delivery driver.</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2010</div>
                <div className={styles.timelineContent}>
                  <h4>Expansion</h4>
                  <p>Opened our second and third locations after gaining popularity for our unique recipes.</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2015</div>
                <div className={styles.timelineContent}>
                  <h4>Innovation</h4>
                  <p>Launched our mobile app and real-time tracking system for deliveries.</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h4>Community Focus</h4>
                  <p>Implemented our "Pizza With Purpose" program to give back to local communities.</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>Today</div>
                <div className={styles.timelineContent}>
                  <h4>Continued Growth</h4>
                  <p>Now with 15+ locations and still dedicated to the same values we started with: quality ingredients and exceptional service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.valuesSection}>
        <div className="container">
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Fresh Ingredients</h3>
              <p>We source only the freshest, highest-quality ingredients for our pizzas.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>Craftsmanship</h3>
              <p>Each pizza is handcrafted with care and attention to detail.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>Customer Satisfaction</h3>
              <p>Your happiness is our priority, from order to delivery.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>Community</h3>
              <p>We believe in giving back and supporting the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.teamSection}>
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}></div>
              <h3>John Dough</h3>
              <p>Founder & CEO</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}></div>
              <h3>Maria Sauce</h3>
              <p>Head Chef</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}></div>
              <h3>Tony Pepperoni</h3>
              <p>Operations Manager</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}></div>
              <h3>Lisa Mozzarella</h3>
              <p>Customer Experience Director</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}