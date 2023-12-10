import { Link as ScrollLink } from 'react-scroll';
import { LogoIcon, ArrowUpIcon, InstagramIcon, FbIcon } from '../SvgIcons';
import styles from './Footer.module.css';

const Footer = () => {
    
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.container__sm}`}>
        <div className={styles.footer__logoWrapper}>
          <a className={styles.footer__logoLink} href='/'>
            <LogoIcon className={styles.logo} id="svg" />
          </a>
          <button type='button' className={styles.footer__upArrowBtn}>
            <ArrowUpIcon id="svg" />        
          </button>
        </div>
        <ul className={styles.footer__socials}>
          <li className={styles.footer__social}>
            <a className={styles.footer__socialIcon} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer nofollow' >
              <FbIcon id='svg' />
            </a>
          </li>
          <li className={styles.footer__social}>
            <a className={styles.footer__socialIcon} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer nofollow' >
              <InstagramIcon id='svg' />
            </a>
          </li>
        </ul>
        <div className={styles.footer__contacts}>
          <address>
            <ul className={styles.footer__contactsList} >
              <li className={styles.footer__contactsItem} >
                <a
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/@49.8313557,24.0323843,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={styles.footer__contactsLink}
                >
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </a>
              </li>
              <li className={styles.footer__contactsItem}>
                <a href="mailto:office@ecosolution.com" className={styles.footer__contactsLink} >office@ecosolution.com</a>
              </li>
            </ul>
          </address>
          <p className={styles.footer__rights}>ecosolution &#169; 2023</p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.container__xl}`}>
        <div className={`${styles.footer__large} ${styles.block1}`}>
          <a className={styles.footer__logoLink} href='/'>
            <LogoIcon className={styles.logo} id="svg" />
          </a>
          <a
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/@49.8313557,24.0323843,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.footer__contactsLink}
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>          
        </div>
        <div className={styles.blocksWrap}>
          <div className={`${styles.footer__large} ${styles.block2}`}>
          <ul className={styles.footer__socials}>
            <li className={styles.footer__social}>
              <a className={styles.footer__socialIcon} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer nofollow' >
                <FbIcon id='svg' />
              </a>
            </li>
            <li className={styles.footer__social}>
              <a className={styles.footer__socialIcon} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer nofollow' >
                <InstagramIcon id='svg' />
              </a>
            </li>
          </ul>
          <a href="mailto:office@ecosolution.com" className={styles.footer__contactsLink} >office@ecosolution.com</a>
        </div>
        <div className={`${styles.footer__large} ${styles.block3}`}>
          <ScrollLink
            to="main"
            spy={true}
            smooth="ease"
            duration={2000}
            className={styles.footer__upArrowBtn}
          >
              <ArrowUpIcon id="svg" />   
          </ScrollLink> 
          <p className={styles.footer__rights}>ecosolution &#169; 2023</p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
