import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I’m Derek Bradshaw</h1>
        <p>Developer, Problem-Solver, Lifelong Learner</p>
        <button onClick={() => window.location.href = "/about"}>Learn More About Me</button>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Welcome!</h2>
        <p>
          I’m passionate about creating meaningful, user-friendly solutions using technology. 
          With a strong foundation in software development and a love for continuous learning, 
          I’m driven to make an impact through innovation and collaboration.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>What I Bring</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Skills</h3>
            <p>Python, JavaScript, AzureAI, and more</p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>Automated workflows, web applications, and innovative solutions</p>
          </div>
          <div className="card">
            <h3>Passion</h3>
            <p>Always learning and pushing boundaries</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      
      <section className="cta">
        <h2>Let’s Connect</h2>
        <p>Have a question or want to collaborate? Get in touch!</p>
        <button onClick={() => window.location.href = "/contact"}>Contact Me</button>
      </section>
      
    </div>
  );
};

export default Home;
