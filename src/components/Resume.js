import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div>
      <h1 className='intro-text'>My Resume:</h1>
      <hr className="white-divider-r" />
      <div className="resume-pdf-wrapper">
        <object 
          className='resume-pdf'
          data={`${process.env.PUBLIC_URL}/Daniel_Ha_Resume.pdf`} 
          type="application/pdf"
        >
          <embed 
            src={`${process.env.PUBLIC_URL}/Daniel_Ha_Resume.pdf`} 
            type="application/pdf"
          />
          <p>It appears your web browser doesn't support iframes.</p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
