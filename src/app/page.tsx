'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-[#0a0b1e] relative" ref={containerRef}>
      {/* Cursor Effect */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          transition: 'transform 0.1s ease',
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ opacity, scale }}
          className="text-center z-10 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">
            NGUYEN CONG MINH
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-3">
            <p className="font-light tracking-wide">Full-Stack Developer</p>
            <p className="text-lg text-gray-400 font-light">minh.nguyencong.cit21@eiu.edu.vn | 0364266601</p>
          </div>
          <div className="flex gap-6 justify-center">
            {['GitHub', 'LinkedIn', 'Email'].map((platform, index) => (
              <motion.a
                key={platform}
                href={{
                  GitHub: 'https://github.com/congminhh',
                  LinkedIn: 'https://linkedin.com/in/congminhh',
                  Email: 'mailto:minh.nguyencong.cit21@eiu.edu.vn'
                }[platform]}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0061ff] to-[#60efff] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 font-medium text-white">{platform}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b1e] to-[#0a0b1e] z-10" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#2d3748_0%,_#1a202c_50%,_#030712_100%)] animate-pulse-slow" />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </section>

      {/* Sections with Enhanced Animations */}
      {['OBJECTIVE', 'SKILLS', 'PROJECTS', 'EDUCATION & CERTIFICATIONS'].map((section, index) => (
        <Section key={section} index={index}>
          {section === 'SKILLS' ? (
            <SkillsContent />
          ) : section === 'PROJECTS' ? (
            <ProjectsContent />
          ) : section === 'EDUCATION & CERTIFICATIONS' ? (
            <EducationContent />
          ) : (
            <ObjectiveContent />
          )}
        </Section>
      ))}
    </div>
  );
}

const Section = ({ children, index }) => (
  <section className={`py-20 px-4 md:px-8 max-w-6xl mx-auto ${index % 2 === 0 ? 'bg-opacity-5' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  </section>
);

const ObjectiveContent = () => (
  <div className="bg-gradient-to-br from-[#0a0b1e]/80 to-[#1e2040]/30 p-8 rounded-2xl backdrop-blur-sm border border-[#ffffff1a] shadow-[0_0_15px_rgba(0,97,255,0.1)]">
    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">OBJECTIVE</h2>
    <p className="text-gray-300 leading-relaxed text-lg">
      Passionate Full-Stack Developer with expertise in modern web and mobile technologies. Skilled in building scalable, user-centric applications with a focus on performance optimization, real-time functionality, and cross-platform compatibility. Dedicated to delivering clean, maintainable code while adopting industry best practices and innovative solutions.
    </p>
  </div>
);

const SkillsContent = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">SKILLS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: 'Programming Languages', skills: 'TypeScript, JavaScript, Java, PHP, C#' },
        { title: 'Frontend Development', skills: 'React.js, Next.js 15, Material-UI, Framer Motion, Bootstrap' },
        { title: 'Backend Development', skills: 'Node.js, RESTful APIs, Supabase, Spring Boot' },
        { title: 'Database & State Management', skills: 'MySQL, MongoDB, PostgreSQL, Zustand, React Query' }
      ].map((category) => (
        <motion.div
          key={category.title}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-[#0a0b1e]/80 to-[#1e2040]/30 p-6 rounded-xl backdrop-blur-sm border border-[#ffffff1a] shadow-[0_0_15px_rgba(0,97,255,0.1)]"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#60efff]">{category.title}</h3>
          <p className="text-gray-300">{category.skills}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProjectsContent = () => (
  <div className="space-y-12">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">PROJECTS</h2>
    {[
      {
        title: 'Xiangqi (Chinese Chess) Online Platform',
        date: 'October - December 2024',
        description: 'Developed a robust online Chinese Chess platform with real-time multiplayer gameplay, secure authentication, and a dynamic UI. Leveraged Next.js 15, TypeScript, and MongoDB for scalability and efficiency.',
        achievements: 'Delivered a high-performance gaming platform handling concurrent sessions and real-time states, supporting multiple authentication methods, utilize scalable proper data persistence, type safety and validation with modern development practices while ensuring maintainability.'
      },
      {
        title: 'Lumine Library Management System',
        date: 'January - March 2024',
        description: 'Architected full-stack library system utilizing Spring Boot microservices and React TypeScript. Implemented JWT authentication, role-based access control, and real-time book tracking.',
        achievements: 'Launched scalable platform optimized for concurrent operations with integrated ISBN tracking and JWT authentication. Enhanced system reliability through Spring JPA optimization and React Query caching.'
      }
    ].map((project) => (
      <motion.div
        key={project.title}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-[#0a0b1e]/80 to-[#1e2040]/30 p-8 rounded-2xl backdrop-blur-sm border border-[#ffffff1a] shadow-[0_0_15px_rgba(0,97,255,0.1)]"
      >
        <h3 className="text-2xl font-bold text-[#60efff] mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.date}</p>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="bg-[#1e2040]/50 p-4 rounded-xl border border-[#ffffff0a]">
          <h4 className="text-[#00ff87] font-semibold mb-2">Key Achievements:</h4>
          <p className="text-gray-300">{project.achievements}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const EducationContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0a0b1e]/80 to-[#1e2040]/30 p-8 rounded-2xl backdrop-blur-sm border border-[#ffffff1a] shadow-[0_0_15px_rgba(0,97,255,0.1)]"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">EDUCATION</h2>
      <h3 className="text-xl font-bold text-[#60efff] mb-2">Eastern International University</h3>
      <p className="text-gray-300 mb-2">Major: Software Engineering</p>
      <p className="text-gray-300 mb-2">Key Subjects: Web Development</p>
      <p className="text-gray-300">GPA: 3.61</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0a0b1e]/80 to-[#1e2040]/30 p-8 rounded-2xl backdrop-blur-sm border border-[#ffffff1a] shadow-[0_0_15px_rgba(0,97,255,0.1)]"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#0061ff] text-transparent bg-clip-text">CERTIFICATIONS</h2>
      <ul className="space-y-4 text-gray-300">
        <li>• IELTS: 6.0</li>
        <li>• ICPC Vietnam National Programming Contest 2024, Eastern International University</li>
        <li>• The 2024 ICPC Vietnam National Programming Contest Certificate of Achievement</li>
      </ul>
    </motion.div>
  </div>
);
