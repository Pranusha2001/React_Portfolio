import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa'; 
import './Contact.css';

function Contact() {
  return (
    <div className='contactSection'>
      <div className='contactIcons'>
        <a href="https://www.linkedin.com/in/pranusha-bavan-b91461269/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Pranusha2001" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="icon" />
          <span>GitHub</span>
        </a>
        <a href="mailto:pranusha1103@gmail.com">
          <FaEnvelope size={40} className="icon" />
          <span>Email</span>
        </a>
        <a href="https://drive.google.com/file/d/1-9aCJJZ-2LnxPHsxhKRkby6-Hj977eq2/view" target="_blank" rel="noopener noreferrer">
          <FaFileDownload size={40} className="icon" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;

