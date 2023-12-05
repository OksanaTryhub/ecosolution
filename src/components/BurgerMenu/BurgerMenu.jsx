import { Link as ScrollLink} from 'react-scroll';

import { CloseIcon, FbIcon, InstagramIcon, ArrowRightIcon } from '../SvgIcons';
import scrollToComponent from '../../utils/scrollToComponent';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ toggleMenu, isOpen, className }) => {

  return (
    <div className={`${className} ${styles.burgerMenu}`} style={{display: isOpen ? "block" : "none"}}>
      <button className={styles.burgerMenu__closeBtn} type='button' onClick={toggleMenu} >
        <CloseIcon id="svg" className={styles.burgerMenu_closeIcon}/>
        close
      </button>
      <ul className={styles.burgerMenu__list}>
        <li className={styles.burgerMenu__item}>
          <ScrollLink
            to="main"
            spy={true}
            smooth="ease"
            duration={3000}
            onClick={() => scrollToComponent('main', 3000)}
            className={styles.burgerMenu__link}
          >
            Main       
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/> 
          </ScrollLink> 
        </li>
        <li className={styles.burgerMenu__item}>
          <ScrollLink
            to="about"
            spy={true}
            smooth="ease"
            duration={2500}
            onClick={() => scrollToComponent('about', 2500)}
            className={styles.burgerMenu__link}
          >
            About       
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/> 
          </ScrollLink>
        </li>
        <li className={styles.burgerMenu__item}>
          <ScrollLink
            to="cases"
            spy={true}
            smooth="ease"
            duration={2500}
            onClick={() => scrollToComponent('cases', 2500)}
            className={styles.burgerMenu__link}
          >
            Cases       
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/> 
          </ScrollLink>
        </li>
        <li className={styles.burgerMenu__item}>
          <ScrollLink
            to="faq"
            spy={true}
            smooth="ease"
            duration={2500}
            onClick={() => scrollToComponent('faq', 2500)}
            className={styles.burgerMenu__link}
          >
            FAQ       
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/> 
          </ScrollLink>
        </li>
        <li className={styles.burgerMenu__item}>
          <ScrollLink
            to="contact"
            spy={true}
            smooth="ease"
            duration={2500}
            onClick={() => scrollToComponent('contact', 2500)}
            className={styles.burgerMenu__link}
          >
            Contact Us       
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/> 
          </ScrollLink>
        </li>
      </ul>
    
      <ul className={styles.burgerMenu__socials}>
        <li className={styles.burgerMenu__social}>
          <a className={styles.burgerMenu__socialIcon} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer nofollow' >
            <FbIcon id='svg' />
          </a>
        </li>
        <li className={styles.burgerMenu__social}>
          <a className={styles.burgerMenu__socialIcon} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer nofollow' >
            <InstagramIcon id='svg' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu
