import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import './App.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('databasee.png');
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const siteSections = [
    { id: 1, title: "Home", component: <Home /> },
    { id: 2, title: "About", component: <About /> },
    { id: 3, title: "Experience", component: <Experience /> },
    { id: 4, title: "Skills", component: <Skills /> },
    { id: 5, title: "Contact", component: <Contact /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState); // Use the previous state to toggle
  };

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState); // Use the previous state to toggle
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 1024) {
        setImageSrc('databasee.png');
      } else {
        setImageSrc('portfolio-image.jpg');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar">
        <div className="navbarHeadings">
          {windowWidth <= 1024 ? (
            <>
              <div className="menu-icon" onClick={toggleSidebar}>
                ☰
              </div>
              <button className="theme-toggle" onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </>
          ) : (
            siteSections.map((section) => (
              <Link
                key={section.id}
                to={section.title}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {section.title}
              </Link>
            ))
          )}
           <button className="theme-toggle-big" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>

      {isOpen && windowWidth <= 1024 && (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="menu-icon" onClick={toggleSidebar}>
              ☰
            </div>
            
          </div>
          {siteSections.map((section) => (
            <Link
              key={section.id}
              to={section.title}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)} 
            >
              {section.title}
            </Link>
          ))}
        </div>
      )}

      <div className="homeContent-left">
        <img
          src="/databasee.png"
          alt="PicOfComputerScreen"
          width="700px"
          height="400px"
        />
      </div>

      {siteSections.map((section) => (
        <div className="contentText" id={section.title} key={section.id}>
          <div className="homeContent-right">
            <div className="contentArea-header">{section.title}</div>
            <div className="contentArea-body">{section.component}</div>
          </div>
        </div>
      ))}
      <Footer /> 
    </div>
  );
}

export default App;
