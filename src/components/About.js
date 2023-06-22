import React from 'react';
import './About.css';  // Assuming you have a separate CSS file for the About page

const About = () => {
  return (
    <div className="page-content">
      {/* Image of me with padding */}
      <div className="image-container">
        <img className="custom-image" src={process.env.PUBLIC_URL + '/Daniel_Pic.png'} alt="a pic of me" />
      </div>
      {/* Personal statement stuff */}
      <div className="container">
        <p className="lead personal-text">
          Hello! My name is Daniel. I am a prospective software engineer.
        </p>
        <p className="personal-text-content">
          I am a graduate of Dartmouth College where I received a BA in Cognitive Science with a focus in Intelligence. I am interested in all things related to cognition and am fascinated by how new technologies are seemingly able to replicate intelligent and intentioned behavior!
        </p>
        <p className="personal-text-content">
          Within the field of computer science, I am most passionate about machine learning and artificial intelligence.
        </p>
        <p className="personal-text-content">
          In my freetime, I enjoy playing the guitar, speedcubing (solving the Rubik's cube as fast as possible), and playing tennis.
        </p>
        <p className="personal-text-content">
          Please feel free to explore my website for a more comprehensive look at my academic background and coding experience. I welcome opportunities to collaborate and contribute to computer science related projects!
        </p>
        <p className="personal-text-content">
          If you would like to contact me, I can be reached by email at dannyha@outlook DOT com!
        </p>
      </div>
    </div>
  );
}

export default About;
