import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'React', icon: '⚛️' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'Tailwind CSS', icon: '🎐' }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚂' },
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '🎸' },
        { name: 'Java', icon: '☕' },
        { name: 'C#', icon: '🔷' },
        { name: 'ASP.NET Core', icon: '🌐' },
        { name: 'PHP', icon: '🐘' },
        { name: 'Laravel', icon: '🔺' }
      ]
    },
    database: {
      title: 'Database Technologies',
      skills: [
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' }
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <p className="section-subtitle">Technologies I work with</p>
      
      <div className="skills-tabs">
        <button 
          className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          Backend
        </button>
        <button 
          className={`tab-button ${activeTab === 'database' ? 'active' : ''}`}
          onClick={() => setActiveTab('database')}
        >
          Database
        </button>
      </div>

      <div className="skills-content">
        <h3 className="category-title">{skillCategories[activeTab].title}</h3>
        <div className="skills-list-progress">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div key={index} className="skill-item-progress">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="github-profile-section">
        <a 
          href="https://github.com/andargbogalle-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary github-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Skills;
