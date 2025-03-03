import React from 'react';
import styles from './Hero.module.css';
import SearchBar from '@/components/SearchBar/SearchBar';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;