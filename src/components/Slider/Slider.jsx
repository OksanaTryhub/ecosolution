import React, { useState, useRef } from 'react';
import styles from './Slider.module.css';

import { slides } from '../../data/slides';
import { SliderArrowIcon } from '../SvgIcons';
// import slide1 from '../../images/slider/slider1.jpg';
// import slide2 from '../../images/slider/slider2.jpg';
// import slide3 from '../../images/slider/slider3.jpg';
// import slide4 from '../../images/slider/slider4.jpg';
// import slide5 from '../../images/slider/slider5.jpg';

// const slides = [
//   <img src={slide1} alt="Slide 1" />,
//   <img src={slide2} alt="Slide 2" />,
//   <img src={slide3} alt="Slide 3" />,
//   <img src={slide4} alt="Slide 3" />,
//   <img src={slide5} alt="Slide 3" />,
// ];

const Slider = () => {
  const [index, setIndex] = useState(0); 
  const [dragStartX, setDragStartX] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const dragEndX = e.changedTouches[0].clientX;
    const difference = dragStartX - dragEndX;

    if (Math.abs(difference) > 100) {
      if (difference > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = (e) => {
    window.removeEventListener('mouseup', handleMouseUp);
    const dragEndX = e.clientX;
    const difference = dragStartX - dragEndX;

    if (Math.abs(difference) > 100) {
      if (difference > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <p className={styles.sliderCounter}>
            01 /05
        </p>
        <div className={styles.sliderArrows}>
          <button onClick={handlePrev} className={`${styles.sliderArrowWrap} ${styles.sliderArrowLeft}`}>
            <SliderArrowIcon id="svg" />
          </button>
          <button onClick={handleNext} className={`${styles.sliderArrowWrap} ${styles.sliderArrowRight}`}>
            <SliderArrowIcon id="svg"/>
          </button>
        </div>
      </div>
      <div 
        className={styles.slidesContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx} 
            className={styles.slide}
            style={{
              transform: `translateX(${(idx - index) * 100}%)`
            }}
          >
             <img className={ styles.slideImage} src={slide.image} alt={`Slide ${index + 1}`} />
            <div className={styles.slideInfo}>
              <div className={ styles.slideTitleWrap}>
                <p className={styles.slideTitle}>{slide.title}</p>
                <button className={styles.slideArrow}>
                    <SliderArrowIcon id="svg" />
                </button>
              </div>
            <div className={styles.slideDescriptionWrap}>
              <p className={ styles.slideDescription}>{slide.description}</p>
              <p className={ styles.slideDate}>{slide.date}</p>
            </div>
            </div>
            {/* {slide} */}
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Slider;