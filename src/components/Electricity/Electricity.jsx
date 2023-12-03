import styles from './Electricity.module.css';

const Electricity = () => {
  return (
    <section className={styles.electricity}>
      <div className={styles.container}>
          <h2 className={styles.electricity__title}>
            Electricity we produced for all time
        </h2>
        <div className={styles.electricity__timer}>
          <p className={styles.electricity__timerNumbers}>
            1.134.147.814
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