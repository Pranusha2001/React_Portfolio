import React, { useEffect, useRef, useState } from 'react';
import './About.css'

function About() {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const { top } = aboutRef.current.getBoundingClientRect();
                const isInView = top <= window.innerHeight && top >= 0;
                setIsVisible(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`aboutPage ${isVisible ? 'bloom' : ''}`} ref={aboutRef}>
            
            I am Pranusha S. Bavan.<br/>
            I focus on crafting dynamic, responsive user interfaces using technologies like ReactJS.<br/>
            In addition to my passion for frontend development , <br/> I enjoy working with data and have a strong interest in SQL for managing and querying databases.<br/>
            My goal is to create intuitive digital solutions that enhance user experience and bring ideas to life.<br/>
            <img src="/computer-engineer.png" alt="Coding_Image_in_about" className='home-img'/>
        </div>
        
    );
}

export default About;

