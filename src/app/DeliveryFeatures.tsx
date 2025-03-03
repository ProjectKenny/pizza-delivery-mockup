import React from 'react';
import Image from 'next/image';
import styles from './DeliveryFeatures.module.css';

const features = [
  {
    id: 1,
    title: 'Lightning Fast Delivery',
    description: 'Hot pizza at your doorstep in 30 minutes or it's free!',
    icon: '/images/delivery-icon-1.svg',
  },
  {
    id: 2,
    title: 'Real-Time Tracking',
    description: 'Follow your order from our kitchen to your home in real-time.',
    icon: '/images/delivery-icon-2.svg',
  },
  {
    id: 3,
    title: 'Contactless Delivery',
    description: 'Safe delivery options with no physical contact required.',
    icon: '/images/delivery-icon-3.svg',
  },
  {
    id: 4,
    title: 'Hot & Fresh Guarantee',
    description: 'We guarantee your pizza arrives hot and fresh every time.',
    icon: '/images/delivery-icon-4.svg',
  },
];

const DeliveryFeatures: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Choose Our Delivery?</h2>
        
        <div className={styles.features}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                  {/* Placeholder for SVG icon */}
                  <div className={styles.iconPlaceholder}>{feature.id}</div>
                </div>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeatures;