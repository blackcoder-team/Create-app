import './hero.css'
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const fullText = "We Love To Build Mobile Apps";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 70); // harflar orasidagi vaqt (ms)

    return () => clearInterval(interval);
  }, [index]);
  
  return (
    <div id='hero'>
      <div className='hero'>
        <div className='hero_text'>
          <p className='hero_text_title'>{displayedText}|</p>
          <p className='hero_text_p'>Free Web Template by Colorlib</p>
          <button className='hero_text_btn'>Watch Video</button>
        </div>
      </div>
    </div>
  )
}

export default Hero