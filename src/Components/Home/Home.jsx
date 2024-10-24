import React, { useState, useEffect } from 'react';
import './Home.css';
function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hiii ! Welcome to my portfolio!\nI am a Software Developer.  :)";
  const typingSpeed = 60;

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < fullText.length-1) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [fullText, typingSpeed]);

  return (
    <div className='content'>
      <div className='home'>{`{ ${typedText} }`}</div>
      <img src="/coding_image.png" alt="Coding_Image_in_home" className='home-img'/>
    </div>
  );
}

export default Home;



