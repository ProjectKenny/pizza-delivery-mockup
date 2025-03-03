import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Listen for scroll events to adjust navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Define navigation links
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Pizza<span className={styles.highlight}>Express</span></span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path} className={styles.navItem}>
                <Link 
                  href={link.path} 
                  className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.navRight}>
          <Link href="/cart" className={styles.cartButton}>
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </Link>
          
          <button className={styles.orderButton}>
            Order Now
          </button>
          
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`${styles.menuBar} ${isMobileMenuOpen ? styles.active : ''}`}></div>
            <div className={`${styles.menuBar} ${isMobileMenuOpen ? styles.active : ''}`}></div>
            <div className={`${styles.menuBar} ${isMobileMenuOpen ? styles.active : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.path} className={styles.mobileNavItem}>
              <Link 
                href={link.path}
                className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className={styles.mobileNavItem}>
            <Link 
              href="/cart"
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;