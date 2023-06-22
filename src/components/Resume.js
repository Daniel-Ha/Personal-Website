import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div>
      <h1 className='intro-text'>My Resume:</h1>
      <hr className="white-divider-r" />
      <embed className='resume-pdf'
        src={`${process.env.PUBLIC_URL}/Daniel_Ha_Resume.pdf`} 
        type="application/pdf" 
      />
    </div>
  );
}

export default Resume;
