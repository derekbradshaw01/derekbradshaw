import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <img src="./Images/profile-picture.JPG" alt="Profile" className="profile-pic" />
      <p className="about-me-description">
        Welcome to my corner of the web! I'm someone who's always been 
        fascinated by the intersection of creativity and technology. From an early age, I found myself drawn 
        to the problem-solving nature of programming and the limitless possibilities it offered for building 
        innovative solutions. Over the years, this passion has grown into a deep commitment to developing 
        efficient, user-friendly applications that make life easier for others. 
      </p>
      <p className="about-me-description">
      Beyond coding, I’m a lifelong learner who enjoys exploring new technologies, refining my skills, and 
      sharing knowledge with the tech community. Whether it's brainstorming ways to automate tedious tasks 
      or diving into the latest trends in software development, I thrive on challenges that encourage growth. 
      In my downtime, I love pushing myself to take on new challenges, embracing opportunities to learn, and 
      continuously striving to achieve more.
      </p>
    </div>
  );
};

export default About;
