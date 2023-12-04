import Slider from '../Slider/Slider';
// import { SliderArrowIcon } from '../SvgIcons';
import styles from './Cases.module.css';
import { slides } from '../../data/slides'; 

const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.cases__titleWrap}>
          <h2 className={styles.cases__title}>
            Successful cases of our company
          </h2>
          
          <Slider slides={slides}/> 
          {/* <Slider />  */}
   
        </div>
      </div>
    </section>
  )
}

export default Cases