"use client";

import styles from "./page.module.css";
import "./theme.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { BsCalendarEvent, BsGraphUp } from "react-icons/bs";
import { MdWork, MdSchool, MdTrendingUp } from "react-icons/md";
import { SiTypescript, SiSpringboot, SiMongodb, SiPostgresql, SiSupabase, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern} />
        </div>
        <motion.div className={styles.heroContent}>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Nguyen Cong Minh
          </motion.h1>
          <motion.div
            className={styles.heroSubtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Full-Stack Developer & UI/UX Enthusiast
          </motion.div>
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
          <motion.div
            className={styles.heroTechStack}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaReact className={styles.techIcon} />
            <SiNextdotjs className={styles.techIcon} />
            <SiTypescript className={styles.techIcon} />
            <FaNodeJs className={styles.techIcon} />
            <SiMongodb className={styles.techIcon} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        id="projects"
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
        id="skills"
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
            {
              category: 'Frontend',
              skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React Native', icon: <TbBrandReactNative /> }
              ]
            },
            {
              category: 'Backend',
              skills: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Spring Boot', icon: <SiSpringboot /> },
                { name: 'Java', icon: <FaJava /> },
              ]
            },
            {
              category: 'Database & Cloud',
              skills: [
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'Supabase', icon: <SiSupabase /> }
              ]
            }
          ].map((section, i) => (
            <motion.div
              key={i}
              className={styles.skillCategory}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3>{section.category}</h3>
              <div className={styles.skillIcons}>
                {section.skills.map((skill, j) => (
                  <div key={j} className={styles.skillIcon}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GitHub Stats */}
      <motion.section
        id="github"
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
          <BiGitBranch className={styles.sectionIcon} />
          GitHub Activity
        </motion.h2>
        <div className={styles.githubStats}>
          <motion.div
            className={styles.statCard}
            variants={fadeInUp}
          >
            <BsGraphUp className={styles.statIcon} />
            <h3>Contribution Streak</h3>
            <p>365+ days of consistent coding</p>
          </motion.div>
          <motion.div
            className={styles.statCard}
            variants={fadeInUp}
          >
            <MdTrendingUp className={styles.statIcon} />
            <h3>Most Used Languages</h3>
            <p>TypeScript, Java</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Learning Path */}
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
          <MdSchool className={styles.sectionIcon} />
          Current Learning Path
        </motion.h2>
        <div className={styles.learningPath}>
          {[
            'Advanced Rust Concurrency',
            'Distributed Systems Architecture',
            'Algorithm Optimization',
            'Cloud Native Development'
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.learningItem}
              variants={fadeInUp}
              custom={i}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Timeline */}
      <motion.section
        id="education"
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
