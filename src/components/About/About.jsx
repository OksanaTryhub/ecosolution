import { ChipIcon, CircleIcon, GlobeIcon, PodiumIcon } from '../SvgIcons';
import img1Tab from '../../images/img1-tab.jpg';
import img1Tab2x from '../../images/img1-tab@2x.jpg';
import img2Tab from '../../images/img2-tab.jpg';
import img2Tab2x from '../../images/img2-tab@2x.jpg';
import img1Desk from '../../images/img1-desk.jpg';
import img1Desk2x from '../../images/img1-desk@2x.jpg';
import img2Desk from '../../images/img2-desk.jpg';
import img2Desk2x from '../../images/img2-desk@2x.jpg';

import styles from './About.module.css';


const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__titleWrap}>
          <h2 className={styles.about__title}>
            Main values of our company
          </h2>
          <p className={styles.about__info}>
            EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.
          </p>
        </div>
        <ul className={styles.about__values}>
          <li className={styles.about__value}>
            <div className={styles.about__valueWrap}> 
              <CircleIcon id="svg" className={styles.about__valueIcon}/>
              <h3 className={styles.about__valueTitle}>Openness</h3>
            </div>
            <p className={ styles.about__valueDescription}>to the world, people, new ideas and projects</p>
          </li>
          <li className={styles.about__value}>
            <div className={styles.about__valueWrap}>
              <GlobeIcon id="svg" className={styles.about__valueIcon}/>
            <h3 className={styles.about__valueTitle}>Responsibility</h3>
            </div>
            <p className={ styles.about__valueDescription}>we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
          </li>
          <li className={`${styles.about__valueImg} ${styles.img1}`}>
            <div className={styles.about__img1}>
             <picture className={styles.about__img}>
              <source
                type="image/jpeg"
                media="(min-width: 768px) and (max-width: 1279px)"
                sizes="(min-width: 342w)  684w, 342w"
                srcSet={`${img2Tab} 342w, ${img2Tab2x}  684w`}
              />

              <source
                type="image/jpeg"
                media="(min-width: 1280px)"
                sizes="(min-width: 596w) 1192w, 596w"
                srcSet={`${img2Desk} 596w, ${img2Desk2x} 1192w`}
              />

              <img
                srcSet={`${img2Tab} 342w, ${img2Tab2x} 684w`}           
                src="../../images/main-bg.jpg"
                alt="Wind farm fields"
              />
            </picture>
            </div>
          </li>
          <li className={`${styles.about__valueImg} ${styles.img2}`}>
            <div className={styles.about__img2}>
             <picture className={styles.about__img}>
              <source
                type="image/jpeg"
                media="(min-width: 768px) and (max-width: 1279px)"
                sizes="(min-width: 342w)  684w, 342w"
                srcSet={`${img1Tab} 342w, ${img1Tab2x}  684w`}
              />

              <source
                type="image/jpeg"
                media="(min-width: 1280px)"
                sizes="(min-width: 596w) 1192w, 596w"
                srcSet={`${img1Desk} 596w, ${img1Desk2x} 1192w`}
              />

              <img
                srcSet={`${img1Tab} 342w, ${img1Tab2x} 684w`}           
                src="../../images/main-bg.jpg"
                alt="Man working in a field with solar panels"
              />
            </picture>
            </div>
          </li>
          
          <li className={styles.about__value}>
            <div className={styles.about__valueWrap}>
            <ChipIcon id="svg" className={styles.about__valueIcon}/>
            <h3 className={styles.about__valueTitle}>Innovation</h3>
            </div>
            <p className={ styles.about__valueDescription}>we use the latest technology to implement non-standard solutions</p>
          </li>
          <li className={styles.about__value}>
            <div className={styles.about__valueWrap}>
            <PodiumIcon id="svg" className={styles.about__valueIcon}/>
            <h3 className={styles.about__valueTitle}>Quality</h3>
            </div>
            <p className={ styles.about__valueDescription}>we do not strive to be the first among others, but we want to be the best in our business</p>
          </li>

        </ul>      
      </div>
    </section>
  )
}

export default About