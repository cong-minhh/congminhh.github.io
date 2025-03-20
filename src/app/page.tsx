import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Cong Minh Hoang</h1>
        <p className={styles.objective}>
          Passionate Full-Stack Developer with expertise in modern web and mobile technologies.
          Skilled in building scalable, user-centric applications with a focus on performance
          optimization, real-time functionality, and cross-platform compatibility.
        </p>
      </section>

      {/* Projects Grid */}
      <section className={styles.section}>
        <h2>Featured Projects</h2>
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
            <article key={i} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <time>{project.date}</time>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, j) => (
                  <span key={j} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className={styles.section}>
        <h2>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {[
            ['Frontend', 'React.js, Next.js, Material-UI, Framer Motion'],
            ['Backend', 'Node.js, Supabase, Spring Boot, REST APIs'],
            ['Database', 'MySQL, MongoDB, PostgreSQL, JPA/Hibernate'],
            ['Mobile', 'React Native, Reanimated, AsyncStorage']
          ].map(([category, skills], i) => (
            <div key={i} className={styles.skillCategory}>
              <h3>{category}</h3>
              <p>{skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section className={styles.section}>
        <h2>Education & Certifications</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>Eastern International University</h3>
            <p>Software Engineering · GPA 3.61</p>
            <time>2021-2024</time>
          </div>
          <div className={styles.timelineItem}>
            <h3>IELTS Certification</h3>
            <p>Overall Band Score 6.0</p>
            <time>2024</time>
          </div>
        </div>
      </section>
    </div>
  );
}
