import React from 'react';
import './About.css';

function About() {
  const services = [
    {
      icon: '💻',
      title: 'Full-Stack Web Development',
      description: 'Building complete web applications with modern frontend and backend technologies.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications using Flutter for iOS and Android.'
    },
    {
      icon: '🔌',
      title: 'API Development',
      description: 'Designing and developing RESTful APIs for seamless data integration.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Implementation',
      description: 'Crafting responsive and intuitive user interfaces that work across all devices.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* Left Side - About Me */}
        <div className="about-left">
          <div className="about-card">
            <div className="about-profile-image">
              <img src="/images/profile.jpg" alt="Andargachew Bogale" />
            </div>
            <h3 className="section-heading">
              <span className="heading-icon">👨‍💻</span>
              About Me
            </h3>
            <div className="about-text">
              <p>
                I am a motivated Full-Stack Developer and Flutter Mobile Developer with a strong 
                interest in building efficient, scalable, and user-focused applications. I work 
                across both frontend and backend technologies to deliver smooth digital experiences 
                and reliable system functionality.
              </p>
              <p>
                Through my learning and projects, I have gained hands-on experience with technologies 
                such as Django, Node.js, Express.js, and Flutter. I enjoy designing and developing 
                RESTful APIs, building responsive user interfaces, and creating applications that 
                perform consistently across web and mobile platforms.
              </p>
              <p>
                I am committed to continuous growth, always exploring new tools and improving my 
                problem-solving skills. I aim to build impactful solutions by combining creativity 
                with solid technical knowledge, whether working on web systems or mobile applications.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - What I Do */}
        <div className="about-right">
          <div className="what-i-do-card">
            <h3 className="section-heading">
              <span className="heading-icon">⚡</span>
              What I Do
            </h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <span className="service-icon">{service.icon}</span>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
