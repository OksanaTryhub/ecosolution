import { Link as ScrollLink } from 'react-scroll';
import { ArrowRightIcon } from '../SvgIcons';
import mainBg from '../../images/main-bg.jpg';
import mainBg2x from '../../images/main-bg@2x.jpg';
import mainBgTab from '../../images/main-bg-tab.jpg';
import mainBgTab2x from '../../images/main-bg-tab@2x.jpg';
import mainBgDesk from '../../images/main-bg-desk.jpg';
import mainBgDesk2x from '../../images/main-bg-desk@2x.jpg';
import styles from './Main.module.css';

const Main = () => { 

  return (
    <section id="main" className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__wrap}>
          <h1 className={styles.main__title}>RENEWABLE ENERGY For any task</h1>
          <div className={styles.main__textWrap}>
            <p className={styles.main__text}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
        
            <ScrollLink
            to="cases"
            spy={true}
            smooth="ease"
            duration={2000}
            className={styles.main__link}
            >
              Learn more
              <div className={styles.arrowWrap}>
                <ArrowRightIcon id="svg" />
              </div>              
          </ScrollLink>
          </div>
        </div>
        
        <div className={styles.main__contacts} >
          <a
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/@49.8313557,24.0323843,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.main__address}
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
          
          <a href="mailto:office@ecosolution.com" className={styles.main__email} >office@ecosolution.com</a>
              
          <p className={styles.main__rights}>ecosolution &#169; 2023</p>
        </div>

        <picture className={styles.main__img}>
          <source
            type="image/jpeg"
            media="(max-width: 767px)"
            sizes="(min-width: 320w) 639w, 320w"
            srcSet={`${mainBg} 320w, ${mainBg2x} 639w`}
            src='../../images/main-bg@2x.jpg'
          />

          <source
            type="image/jpeg"
            media="(min-width: 768px) and (max-width: 1279px)"
            sizes="(min-width: 708w) 1416w, 708w"
            srcSet={`${mainBgTab} 708w, ${mainBgTab2x} 1416w`}
          />

          <source
            type="image/jpeg"
            media="(min-width: 1280px)"
            sizes="(min-width: 1240w) 2480w, 1240w"
            srcSet={`${mainBgDesk} 1240w, ${mainBgDesk2x} 2480w`}
          />

          <img
            srcSet={`${mainBg} 320w, ${mainBg2x} 639w`}           
            src="../../images/main-bg.jpg"
            alt="Wind turbine"
          />
        </picture>
      </div>
    </section>
  )
}

export default Main;