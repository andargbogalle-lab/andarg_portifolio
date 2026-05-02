import React from 'react';
import './CV.css';

function CV() {
  const education = [
    {
      degree: 'BSc in Information Technology',
      institution: 'Wollo University',
      period: '2023 - Present',
      description: 'Focused on software development and system design. Developed academic and personal projects to strengthen practical skills.'
    }
  ];

  const experience = [
    {
      title: 'Freelance Developer',
      company: 'Remote',
      period: '2024 - Present',
      responsibilities: [
        'Developed full-stack web and mobile applications',
        'Built and integrated RESTful APIs and third-party services',
        'Designed responsive, user-friendly interfaces',
        'Implemented scalable and real-time system features'
      ]
    }
  ];

  const skills = [
    'Full-Stack Development: End-to-end web & mobile application development',
    'Frontend: HTML, CSS, JavaScript, React, Flutter, Responsive Design, UI/UX Basics',
    'Backend: Node.js, Express, Django, RESTful APIs, Authentication Systems',
    'Database: MySQL, PostgreSQL, Database Design, Query Optimization'
  ];

  const languages = ['English', 'Amharic'];

  const interests = [
    'Web & Mobile Application Development',
    'Learning Emerging Technologies',
    'Problem Solving',
    'Scalable System Design'
  ];

  return (
    <section id="cv" className="cv-section">
      <h2>Curriculum Vitae</h2>
      <p className="section-subtitle">My professional background and qualifications</p>
      
      <div className="cv-container">
        {/* Summary */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">👨‍💻</span>
            <h3>Professional Summary</h3>
          </div>
          <div className="cv-content">
            <p className="cv-description">
              Passionate Full-Stack and Flutter Mobile Developer experienced in building modern, 
              scalable web and mobile applications. Skilled in both frontend and backend development, 
              creating seamless user experiences and robust server-side systems. Proficient in Django, 
              Node.js, Express, and Flutter, with a strong focus on RESTful APIs, real-time applications, 
              and responsive design. Committed to solving real-world problems and continuously improving 
              technical skills.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">🎓</span>
            <h3>Education</h3>
          </div>
          <div className="cv-content">
            {education.map((edu, index) => (
              <div key={index} className="cv-item">
                <h4 className="cv-title">{edu.degree}</h4>
                <p className="cv-institution">{edu.institution}</p>
                <p className="cv-period">{edu.period}</p>
                <p className="cv-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">💼</span>
            <h3>Professional Experience</h3>
          </div>
          <div className="cv-content">
            {experience.map((exp, index) => (
              <div key={index} className="cv-item">
                <h4 className="cv-title">{exp.title}</h4>
                <p className="cv-institution">{exp.company}</p>
                <p className="cv-period">{exp.period}</p>
                <ul className="cv-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">⚡</span>
            <h3>Skills</h3>
          </div>
          <div className="cv-content">
            <ul className="cv-list">
              {skills.map((skill, index) => (
                <li key={index} className="cv-list-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">🌐</span>
            <h3>Languages</h3>
          </div>
          <div className="cv-content">
            <div className="cv-languages">
              {languages.map((lang, index) => (
                <span key={index} className="cv-language-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">💡</span>
            <h3>Interests</h3>
          </div>
          <div className="cv-content">
            <ul className="cv-list">
              {interests.map((interest, index) => (
                <li key={index} className="cv-list-item">{interest}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download Button */}
        <div className="cv-download-section">
          <a 
            href="/cv/Andargachew_Bogale_CV.pdf"
            download
            className="btn btn-primary"
          >
            📥 Download Full CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
