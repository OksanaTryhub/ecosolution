import Form from './Form/ContactForm';
import { PhoneIcon, EmailIcon, MapIcon, FbIcon, InstagramIcon } from '../SvgIcons';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.contacts__title}>
            Contact us
        </h2>
        <ul className={styles.contacts__details}>
          <li className={styles.contacts__detail}>
            <p className={styles.contacts__detailTitle}>
              Phone:
            </p>
            <a href="tel:+380981234567" >
              <PhoneIcon id='svg' />
              38 (098) 12 34 567
            </a>
            <a href="tel:+380931234567" >
              <PhoneIcon id='svg' />
              38 (093) 12 34 567
            </a>
          </li>
          <li className={styles.contacts__detail}>
            <p className={styles.contacts__detailTitle}>
              E-mail:
            </p>
            <a href="mailto:office@ecosolution.com">
              <EmailIcon id='svg' />
              office@ecosolution.com
            </a>
          </li>
          <li className={styles.contacts__detail}>
            <p className={styles.contacts__detailTitle}>
             Address:
            </p>
            <a
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+7,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+79000/@49.8313557,24.0323843,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <MapIcon id='svg' />
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li className={styles.contacts__detail}>
            <p className={styles.contacts__detailTitle}>
             Social Networks:
            </p>
            <a className={styles.footer__socialIcon} href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer nofollow' >
                <FbIcon id='svg' />
            </a>
            <a className={styles.footer__socialIcon} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer nofollow' >
                <InstagramIcon id='svg' />
            </a>
          </li>          
        </ul>
        <Form/>
      </div>
    </section>
  )
}

export default ContactUs