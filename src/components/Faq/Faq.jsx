import { useState } from 'react';

import { ArrowDownIcon, MinusIcon, PlusIcon } from '../SvgIcons';
import { faqData } from './../../data/faqData';

import styles from './Faq.module.css';


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);


  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };


  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.faq__title}>
            Frequently Asked Questions
        </h2>
        <ul className={styles.faq__questions}>
      {faqData.map((item, index) => (
        <li key={index} className="faq-item">
          <div
            className={styles.faq__question}
            onClick={() => toggleAnswer(index)}
          >
            {openIndex === index
              ? <button 
              className={styles.faq__questionBtn}
              onClick={() => toggleAnswer(index)}
              >
                <MinusIcon id="svg" />
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
        <p className={styles.faq__text}>Didn't find the answer to your question? </p>
        <button className={styles.faq__btn} type='button'>
            Contact Us
          <ArrowDownIcon id="svg"/>
        </button>
      </div>
    </section>
  )
}

export default Faq