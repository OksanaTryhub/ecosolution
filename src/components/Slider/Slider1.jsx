import { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { SliderArrowIcon } from '../SvgIcons';

const Slider = ({slides} ) => {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval);  
  }, [currentIndex, slides.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <p className={styles.slider__counter}>
          01 /05
        </p>
        <div className={styles.slider__arrows}>
          <button onClick={handlePrev} className={`${styles.slider__arrowWrap} ${styles.slider__arrowLeft}`}>
              <SliderArrowIcon id="svg" />
          </button>
          <button onClick={handleNext} className={`${styles.slider__arrowWrap} ${styles.slider__arrowRight}`}>
            <SliderArrowIcon id="svg" className={styles.slider__arrows}/>
          </button>
        </div>
      </div> 
      <div 
        className={styles.slider__container} 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`className={ styles.slider__slide} ${index === currentIndex ? 'active' : ''}`}
          style={{
              transform: `translateX(${(index - index) * 100}%)`
            }}
          >
            <img className={ styles.slide__image} src={slide.image} alt={`Slide ${index + 1}`} />
            <div className={styles.slide__info}>
              <div className={ styles.slide__titleWrap}>
                <p className={styles.slide__title}>{slide.title}</p>
                <button className={`${styles.slide__arrow} ${styles.slider__arrowLeft}`}>
                    <SliderArrowIcon id="svg" />
                </button>
              </div>
            <div className={styles.slide__descriptionWrap}>
              <p className={ styles.slide__description}>{slide.description}</p>
              <p className={ styles.slide__date}>{slide.date}</p>
            </div>
            </div>
          </div>
        ))} 
        </div>
    </div>
  );
};

export default Slider;