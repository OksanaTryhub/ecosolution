import { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { LogoIcon, MenuIcon,ArrowDownIcon } from '../SvgIcons';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Header.module.css';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const header = document.getElementById("header");
    
    setIsScrolled(scrollY > header.offsetTop);
  };

  
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    setIsOpen(false);
  }
  };
    
  return (
    <header id="header" className={`${styles.header} ${isScrolled ? styles.stickyHeader : ''}`}
    >
      <div className={`${styles.container} ${styles.header__container}`}>
        <a className={styles.header__logo} href='/'>
          <LogoIcon className={styles.header__logoIcon} id="svg" />
        </a>
        <div className={styles.header__nav}>
          <button type='button' className={styles.header__navMenuBtn} onClick={handleToggleMenu}>
            <MenuIcon id="svg" />        
          </button>
          <ScrollLink
            to="contact"
            spy={true}
            smooth="ease"
            duration={2000}
            className={styles.header__navLink}
          >
            Get in touch
            <ArrowDownIcon id="svg" />
          </ScrollLink>
        </div>
        <BurgerMenu className={styles.header__burger} toggleMenu={handleToggleMenu} isOpen={isOpen}/>
      </div>
      <div className={styles.backdrop} style={{display: isOpen ? "block" : "none"}} onClick={handleToggleMenu} >
      </div>
    </header>
  )
}

export default Header;

