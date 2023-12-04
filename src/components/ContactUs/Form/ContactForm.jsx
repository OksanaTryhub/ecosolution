import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Notiflix from 'notiflix';

import styles from './ContactForm.module.css';
import { ArrowRightIcon } from '../../SvgIcons';

const ContactForm = () => { 
  const validationSchema = object({
    name: string().required("Fullname is Required").matches(/^[a-zA-Zа-яА-Я\s]+$/, "Wrong Fullname"),
    email: string().email("Wrong Email").required("Email is Required"),
    phone: string().required("Phone is Required").matches(/^[0-9]{12}$/, "Wrong Phone"),
    message: string(),
  });

  const handleSubmit = (values, {resetForm}) => {
    Notiflix.Notify.success(`${values.name}, thanks for getting in touch! We'll get back to you soon`);
    resetForm();
  }
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form className={styles.form}> 
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor="name">* Full name:</label>
                <Field
                  id="name"
                  type="name"
                  name="name"
                  placeholder="John Rosie"
                  className={`${styles.input} ${touched.name && errors.name && styles.errorInput}`}
                />
            </div>
            <div className={styles.errorWrap}>
              <ErrorMessage name="name" component="div" className={styles.error}/>
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor="email">* E-mail:</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  className={`${styles.input} ${touched.email && errors.email && styles.errorInput}`}
                />
            </div>
            <div className={styles.errorWrap}>
              <ErrorMessage name="email" component="div" className={styles.error}/>
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor="phone">* Phone:</label>
                <Field
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="380961234567"
                  className={`${styles.input} ${touched.phone && errors.phone && styles.errorInput}`}
                />
            </div>
            <div className={styles.errorWrap}>
              <ErrorMessage name="phone" component="div" className={styles.error}/>
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor="phone">Message:</label>
                <Field
                  id="message"
                  as="textarea"
                  name="message"
                  placeholder="Your message"
              className={`${styles.input}  ${styles.textInput}`}
                />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" disabled={isSubmitting} className={styles.button}> 
              Send
              <div className={styles.arrowWrap}>
                <ArrowRightIcon id="svg" />
              </div>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm