import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const featuredProducts = ['slider1.png', 'slider2.png', 'slider3.jpg'];

let count = 0;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    count =
      (currentIndex + featuredProducts.length - 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt=""></img>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPrevClick}>
          <ChevronLeftOutlinedIcon fontSize='large' style={{color:'#fff'}}/>
        </button>
        <button onClick={handleOnNextClick}>
          <ChevronRightOutlinedIcon fontSize='large' style={{color:'#fff'}}/>
        </button>
      </div>
    </div>
  );
}
