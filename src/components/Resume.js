import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div>
      <h1 className='intro-text'>My Resume:</h1>
      <hr className="white-divider-r" />
      <div className="resume-pdf-wrapper">
        <embed className='resume-pdf'
          src={`${process.env.PUBLIC_URL}/Daniel_Ha_Resume.pdf`} 
          type="application/pdf" 
        />
      </div>
    </div>
  );
}

export default Resume;
