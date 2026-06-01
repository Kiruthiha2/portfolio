import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.28 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>Kiru</span>thiha
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#resume"
            className={activeSection === "resume" ? "active" : ""}
            onClick={closeMenu}
          >
            Resume
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={closeMenu}
          >
            Education
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </header>

      <section className="hero reveal show" id="home">
        <div className="hero-content">
          <div className="hero-badge">Frontend Developer • MERN Stack </div>
          <p className="hero-intro">Hello, I’m</p>
          <h1>Kiruthihashree S</h1>
          <h2>Building elegant web experiences with code and creativity</h2>

          <p className="hero-description">
            Passionate Computer Science Engineer skilled in ReactJS, MERN Stack,
            Python, and AWS, focused on creating responsive, clean, and impactful
            user interfaces.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore Projects
            </a>
            <a href="#contact" className="btn secondary-btn">
              Let’s Connect
            </a>
                      <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
             Download CV
          </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>3+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h3>2</h3>
              <p>Internships</p>
            </div>
            <div className="stat-card">
              <h3>8.46</h3>
              <p>CGPA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" id="about">
        <div className="section-heading">
          <span>01</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-card">
          <div className="card-glow"></div>
          <p>
            I am a Computer Science Engineering graduate from Sri Eshwar College
            of Engineering with strong knowledge in full-stack development, cloud
            computing, and AI-based applications.
          </p>
          <p>
            I enjoy building user-friendly applications using ReactJS and
            exploring cloud technologies through AWS.
          </p>
        </div>
      </section>

      <section className="section section-alt reveal" id="education">
        <div className="section-heading">
          <span>02</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Sri Eshwar College of Engineering</h3>
            <p>B.E Computer Science Engineering</p>
            <span>CGPA: 8.49 · 2022 - 2026</span>
          </div>

          <div className="card">
            <h3>Holy Angel’s Matric Hr Sec School</h3>
            <p>HSC - 92%</p>
            <span>2020 - 2022</span>
          </div>

          <div className="card">
            <h3>Holy Angel’s Matric Hr Sec School</h3>
            <p>SSLC - 91%</p>
            <span>2019 - 2020</span>
          </div>
        </div>
      </section>

      <section className="section reveal" id="skills">
        <div className="section-heading">
          <span>03</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Java, Python, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Frameworks</h3>
            <p>ReactJS, NodeJS, ExpressJS, Flask, Streamlit</p>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <p>MongoDB, MySQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>GitHub, VS Code, Postman, AWS</p>
          </div>
        </div>
      </section>

      <section className="section section-alt reveal" id="projects">
        <div className="section-heading">
          <span>04</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid">
          <div className="project-card featured">
            <h3>GMeet–Trello Team Management Project</h3>
            <p>
              AI-powered meeting automation system using Chrome Extension, NLP,
              and Trello API integration.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>Flask</span>
              <span>NLP</span>
              <span>Trello API</span>
            </div>
            <div className="project-links">
               <a href="https://github.com/Kiruthiha2/gmeettrellobackend" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>

             
            </div>
          </div>

          <div className="project-card">
            <h3>Blog Application</h3>
            <p>
              Full-stack CRUD blog application with authentication and real-time
              database operations.
            </p>
            <div className="tags">
              <span>ReactJS</span>
              <span>NodeJS</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Kiruthiha2/blogapp" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
              
            </div>
          </div>

          <div className="project-card">
            <h3>Real-time Mood Analysis</h3>
            <p>
              AI-driven music recommendation system using webcam mood detection
              and TensorFlow.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>Streamlit</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Kiruthiha2/Aurora_-harmony" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" id="contact">
        <div className="section-heading">
          <span>05</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-card">
          <h3>Let’s Build Something Great</h3>
          <div className="social-links">
  <a href="https://github.com/Kiruthiha2" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/kiruthihashree-srinivasan-2b910625a/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>

 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kiruthihashreesrinivasan@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />

  </a>
</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Kiruthihashree S · Frontend Developer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;