import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { ArrowDownIcon, MinusIcon, PlusIcon } from '../SvgIcons';
import { faqData } from './../../data/faqData';
import scrollToComponent from '../../utils/scrollToComponent';

import styles from './Faq.module.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const handleScrollToComponent = (componentId, duration) => () => {
    scrollToComponent(componentId, duration);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faq__largeWrapper}>
          <h2 className={`${styles.faq__title} ${styles.faq__mobile}`}>
            Frequently Asked Questions
          </h2>
          <ul className={styles.faq__list}>
            {faqData.map((item, index) => (
              <li key={index} className={styles.faq__item}>
                <div
                  className={styles.faq__question}
                  onClick={() => toggleAnswer(index)}
                >
                {openIndex === index
                  ? <button 
                      className={styles.faq__questionBtn}
                      onClick={() => toggleAnswer(index)}
                    >
                      <MinusIcon id="svg" className={styles.icons}/>
                    </button>
                  : <button 
                      className={styles.faq__questionBtn}
                      onClick={() => toggleAnswer(index)}
                    >
                      <PlusIcon id="svg" />                
                    </button>}  
                  <div className={styles.faq__questionText}>{item.question}</div>
                </div>
                {openIndex === index && (
                  <div className={styles.faq__answer}>
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p className={`${styles.faq__text} ${styles.faq__mobile}`}>Didn't find the answer to your question? </p>
          <button className={`${styles.faq__btn}  ${styles.faq__mobile}`} type='button'>
            Contact Us
            <ArrowDownIcon id="svg"/>
          </button>
          
          <div className={styles.faq__large}>
            <h2 className={styles.faq__title}>
              Frequently Asked Questions
            </h2>
            <p className={styles.faq__text}>Didn't find the answer to your question? </p>
            <ScrollLink
              to="contact"
              spy={true}
              smooth="ease"
              duration={1000}
              onClick={handleScrollToComponent('contact', 1000)}
              className={styles.faq__btn}
              >
                Contact Us
              <ArrowDownIcon id="svg"/>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq