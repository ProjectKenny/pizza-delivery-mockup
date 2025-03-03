import React from 'react';
import Link from 'next/link';
import styles from './TwoColumnSection.module.css';

const TwoColumnSection: React.FC = () => {
  return (
    <section className={styles.twoColumnSection}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <h2>Become a Delivery Driver</h2>
              <p>
                Join our team of professional delivery drivers and earn competitive pay with flexible hours.
                Be part of our growing delivery network and help us deliver happiness!
              </p>
              <ul className={styles.benefits}>
                <li>Flexible working hours</li>
                <li>Competitive pay</li>
                <li>Weekly payouts</li>
                <li>Incentives and bonuses</li>
              </ul>
              <Link href="/drivers" className={styles.columnButton}>
                Apply Now
              </Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <h2>Track Your Delivery</h2>
              <p>
                Follow your pizza from our oven to your doorstep in real-time.
                Know exactly when your delicious pizza will arrive!
              </p>
              <div className={styles.trackForm}>
                <input 
                  type="text" 
                  placeholder="Enter your order number" 
                  className={styles.trackInput}
                />
                <Link href="/track" className={styles.columnButton}>
                  Track Order
                </Link>
              </div>
              <p className={styles.smallText}>
                Your order number can be found in your order confirmation email or SMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;