import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { slides } from '../../data/slides';
import { SliderArrowIcon } from '../SvgIcons';

import styles from './Slider.module.css';

const Slide = ({ image, title, description, date, ind }) => (
  <div className={styles.slide}>
    <img className={styles.slide__image} src={image} alt={`Slide ${ind + 1}`} />
    <div className={styles.slide__info}>
      <div className={styles.slide__titleWrap}>
        <p className={styles.slide__title}>{title}</p>
        <button className={styles.slide__arrow}>
          <SliderArrowIcon id="svg" />
        </button>
      </div>
      <div className={styles.slide__descriptionWrap}>
        <p className={styles.slide__description}>{description}</p>
        <p className={styles.slide__date}>{date}</p>
      </div>
    </div>
  </div>
);

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [dragStartX, setDragStartX] = useState(0);
  const windowWidth = useWindowSize().width;

  const slideCount = slides.length;

  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [isMobile, windowWidth]);

  const handleNextSlide = () => {
    setActiveSlide((activeSlide + 1) % slideCount);
  };

  const handlePrevSlide = () => {
    setActiveSlide((activeSlide - 1 + slideCount) % slideCount);
  };

  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const dragEndX = e.changedTouches[0].clientX;
    const difference = dragStartX - dragEndX;

    if (Math.abs(difference) > 100) {
      if (difference > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
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
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
  };

  const slidesToRender = isMobile ? 1 : 2;

  const allSlides = [...slides, ...slides, ...slides];

return (
    <div className={styles.slider__container}>
      <div className={styles.slider__controls}>
        <div className={styles.slider__counter}>
          <span className={styles.slider__counterActive}>
            {`${activeSlide + 1}`.padStart(2, '0')}
            </span>
          <span className={styles.slider__counterQuantity}>
          {'\n'} /{`${slideCount}`.padStart(2, '0')}
          </span>
        </div>
        <div className={styles.slider__arrows}>
          <button
            onClick={handlePrevSlide}
            className={`${styles.slider__arrowWrap} ${styles.slider__arrowLeft}`}
          >
            <SliderArrowIcon id="svg" />
          </button>
          <button
            onClick={handleNextSlide}
            className={`${styles.slider__arrowWrap} ${styles.slider__arrowRight}`}
          >
            <SliderArrowIcon id="svg" />
          </button>
        </div>
      </div>
      <div
        className={styles.slide__container}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {allSlides
          .map((slide, idx) => (
            <Slide
              key={idx}
              image={slide.image}
              title={slide.title}
              description={slide.description}
              date={slide.date}
            />
          ))
          .slice(
            activeSlide + slides.length,
            activeSlide + slides.length + slidesToRender
          )}
      </div>
  </div>
  
  );
};

export default Slider;