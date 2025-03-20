"use client";

import styles from "./page.module.css";
import "./theme.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdWork } from "react-icons/md";

export default function Home() {
  const fadeInUp: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const defaultTransition = { duration: 0.5 };

  return (
    <motion.main
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Nguyen Cong Minh
        </motion.h1>
        <motion.p
          className={styles.objective}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Passionate Full-Stack Developer with expertise in modern web and mobile technologies.
          Skilled in building scalable, user-centric applications with a focus on performance
          optimization, real-time functionality, and cross-platform compatibility.
        </motion.p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className={styles.section}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          variants={fadeInUp}
          className={styles.sectionTitle}
        >
          <BiCodeAlt className={styles.sectionIcon} />
          Featured Projects
        </motion.h2>
        <div className={styles.projectsGrid}>
          {[
            {
              title: 'Xiangqi Online Platform',
              date: 'Oct - Dec 2024',
              description: 'Real-time Chinese Chess platform with multiplayer gameplay',
              role: 'Full-Stack Developer',
              tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'NextAuth']
            },
            {
              title: 'Lumine Library Management',
              date: 'Jan - Mar 2024',
              description: 'Full-stack library system with Spring Boot microservices',
              role: 'Full-Stack Developer',
              tech: ['Spring Boot', 'React', 'TypeScript', 'Material-UI']
            },
            {
              title: 'SpendWise',
              date: 'Nov 2024 - Present',
              description: 'Cross-platform financial management mobile app',
              role: 'Full-Stack Developer',
              tech: ['React Native', 'Supabase', 'Reanimated']
            }
          ].map((project, i) => (
            <motion.article
              key={i}
              className={styles.projectCard}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3>{project.title}</h3>
              <time>{project.date}</time>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, j) => (
                  <span key={j} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Skills Matrix */}
      <motion.section
        className={styles.section}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          variants={fadeInUp}
          className={styles.sectionTitle}
        >
          <MdWork className={styles.sectionIcon} />
          Technical Skills
        </motion.h2>
        <div className={styles.skillsGrid}>
          {[
            ['Frontend', 'React.js, Next.js, Material-UI, Framer Motion'],
            ['Backend', 'Node.js, Supabase, Spring Boot, REST APIs'],
            ['Database', 'MySQL, MongoDB, PostgreSQL, JPA/Hibernate'],
            ['Mobile', 'React Native, Reanimated, AsyncStorage']
          ].map(([category, skills], i) => (
            <motion.div
              key={i}
              className={styles.skillCategory}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3>{category}</h3>
              <p>{skills}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Timeline */}
      <motion.section
        className={styles.section}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          variants={fadeInUp}
          className={styles.sectionTitle}
        >
          <BsCalendarEvent className={styles.sectionIcon} />
          Education & Certifications
        </motion.h2>
        <div className={styles.timeline}>
          <motion.div
            className={styles.timelineItem}
            variants={fadeInUp}
          >
            <h3>Eastern International University</h3>
            <p>Software Engineering · GPA 3.61</p>
            <time>2021-2024</time>
          </motion.div>
          <motion.div
            className={styles.timelineItem}
            variants={fadeInUp}
          >
            <h3>IELTS Certification</h3>
            <p>Overall Band Score 6.0</p>
            <time>2024</time>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.div
        className={styles.socialLinks}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="https://github.com/cong-minhh" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/minh-nguy%E1%BB%85n-c%C3%B4ng-843438255/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </motion.div>
    </motion.main>
  );
}
