import { useState, useEffect } from 'react';
import styles from './Electricity.module.css';

const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);

const Electricity = () => {
  const [count, setCount] = useState(currentTimeInSeconds); 
  
  useEffect(() => { 
    const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatNumberWithDots(number) {
  const formattedNumberWithCommas = number.toLocaleString('en-US');
  const formattedNumberWithDots = formattedNumberWithCommas.replace(/,/g, '.');
  return formattedNumberWithDots;
}

const formattedNumber = formatNumberWithDots(count);

  return (
    <section className={styles.electricity}>
      <div className={styles.container}>
          <h2 className={styles.electricity__title}>
            Electricity we produced for all time
        </h2>
        <div className={styles.electricity__timer}>
          <p className={styles.electricity__timerNumbers}>
            {formattedNumber}
          </p>
          <p className={styles.electricity__timerText}>
            kWh
          </p>
        </div>
      </div>
    </section>
  )
}

export default Electricity