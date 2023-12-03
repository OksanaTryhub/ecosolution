import React from 'react';
import { CloseIcon, FbIcon, InstagramIcon, ArrowRightIcon } from '../SvgIcons';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerMenu__closeBtn} type='button'>
        <CloseIcon id="svg" className={styles.burgerMenu_closeIcon}/>
        close
      </button>
      <ul className={styles.burgerMenu__list}>
        <li className={styles.burgerMenu__item}>
          <a href='#main' className={styles.burgerMenu__link}>
            <span>Main</span>           
            <ArrowRightIcon id="svg" className={styles.burgerMenu__itemArrow}/>       
          </a>
        </li>
        <li className={styles.burgerMenu__item}>
          <a href='#about' className={styles.burgerMenu__link}>
            About
              <ArrowRightIcon id="svg"/>
          </a>
        </li>
        <li className={styles.burgerMenu__item}>
          <a href='#cases' className={styles.burgerMenu__link}>
            Cases
              <ArrowRightIcon id="svg"/>
          </a>
        </li>
        <li className={styles.burgerMenu__item}>
          <a href='#faq' className={styles.burgerMenu__link}>
            FAQ
              <ArrowRightIcon id="svg"/>
          </a>
        </li>
        <li className={styles.burgerMenu__item}>
          <a href='#contact' className={styles.burgerMenu__link}>
            Contact Us
              <ArrowRightIcon id="svg"/>
          </a>
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
