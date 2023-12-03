import React from 'react'
import { LogoIcon, MenuIcon,ArrowDownIcon } from '../SvgIcons';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <a className={styles.header__logo} href='/'>
          <LogoIcon className={styles.header__logoIcon} id="svg" />
        </a>
        <div className={styles.header__nav}>
          <button type='button' className={styles.header__navMenuBtn}>
            <MenuIcon id="svg" />        
          </button>
          <a className={styles.header__navLink} href='#contact'>
            Get in touch
            <ArrowDownIcon id="svg"/>
          </a>
        </div>
      </div>
      {/* <BurgerMenu /> */}
    </header>
  )
}

export default Header;

