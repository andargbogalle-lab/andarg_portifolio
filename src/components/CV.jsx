import React from 'react';
import './CV.css';

function CV() {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Your University Name',
      period: '2020 - 2024',
      description: 'Focused on software development, system design, and database management.'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Company Name',
      period: '2023 - Present',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Built RESTful APIs and integrated with databases',
        'Collaborated with team members on project requirements'
      ]
    }
  ];

  const certifications = [
    'Web Development Certification',
    'Database Management',
    'Software Engineering Principles'
  ];

  return (
    <section id="cv" className="cv-section">
      <h2>Curriculum Vitae</h2>
      <p className="section-subtitle">My professional background and qualifications</p>
      
      <div className="cv-container">
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
            <h3>Experience</h3>
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

        {/* Certifications */}
        <div className="cv-card">
          <div className="cv-card-header">
            <span className="cv-icon">📜</span>
            <h3>Certifications & Achievements</h3>
          </div>
          <div className="cv-content">
            <ul className="cv-list">
              {certifications.map((cert, index) => (
                <li key={index} className="cv-list-item">{cert}</li>
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
