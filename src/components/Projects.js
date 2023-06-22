import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="container">
            <div className="page-content">
                {/* Intro text to project page*/}
                <p className="lead intro-text">
                    I enjoy the process of creating things using code and the learning that comes from it! Here are some projects I have worked on:
                </p>
                <hr className="white-divider" />

                {/*format for project display*/}
                {/*title for project*/}
                <div className="container">
                    <h2 className='projtitle-text'>
                        AcademIQ
                    </h2>
                </div>
                {/*project display content*/}
                <div className="project-container">
                    {/*video/image display*/}
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/1mcqaMI6CG8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/*Description of project*/}
                    <div className="desc-text">
                        <p>AcademIQ is a Chrome extension that aims to aid the research process by finding and recommending the most relevant scholarly papers from arXiv.org to the webpage currently being viewed.</p>
                        <p>I was responsible for the front end of the project and worked in a team of four to complete the project in 24 hours. From this project, I gained experience with the basics of front-end, including practice with Javascript, HTML, and CSS.</p>
                        <p>It was an entry in HackDartmouth VIII and won 3rd place! (scroll down to see the links to this project!)</p>
                        <p>Link to Devpost article: <a href="https://devpost.com/software/academiq" target="_blank" rel="noopener noreferrer">https://devpost.com/software/academiq</a></p>
                        <p>Link to Github: <a href="https://github.com/ZackNathan/AcademIQ" target="_blank" rel="noopener noreferrer">https://github.com/ZackNathan/AcademIQ</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
