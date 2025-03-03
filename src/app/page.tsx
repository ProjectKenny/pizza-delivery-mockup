import React from 'react';
import styles from './page.module.css';
import Hero from '../components/Hero/Hero';
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import DeliveryFeatures from '../components/DeliveryFeatures/DeliveryFeatures';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero 
        title="Hot & Fresh Pizza Delivered To Your Door" 
        subtitle="Order your favorite pizza in seconds and enjoy the best delivery experience"
      />
      
      <TwoColumnSection />
      
      <DeliveryFeatures />
    </main>
  );
}