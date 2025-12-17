import React from 'react';
import './about-me.css';
import { images } from 'assets/images/general';

export default function AboutMe() {
  return (
    <div className="about-me-body">
      <h1 className="about-me-title">About Me Page</h1>
      <div className="about-me-center-body">
        <div className="about-me-first-section">
          <p>
            Hello! I'm [Your Name], a passionate developer with a love for
            creating innovative solutions. With a background in [Your
            Background], I enjoy working on projects that challenge me to grow
            and learn new skills. In my free time, I like to explore new
            technologies, contribute to open-source projects, and connect with
            fellow developers.
          </p>
        </div>
        <div className="about-me-second-section">
          <img
            src={images.Heart}
            width={'400px'}
            height={'400px'}
            alt="Pokemon Intro"
          />
        </div>
      </div>
    </div>
  );
}
