"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${initialTheme}-theme`);
    document.documentElement.style.setProperty('color-scheme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const themeName = newTheme ? 'dark' : 'light';
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${themeName}-theme`);
    document.documentElement.style.setProperty('color-scheme', themeName);
    localStorage.setItem('theme', themeName);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 100; // Adjusted navbar height with padding
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo} onClick={scrollToTop} role="button" tabIndex={0}>
        <Image src="/globe.svg" alt="Logo" width={32} height={32} className={styles.logoImage} />
      </div>
      
      <div className={styles.links}>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('github')}>GitHub</button>
        <button onClick={() => scrollToSection('education')}>Education</button>
      </div>

      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </motion.nav>
  );
}