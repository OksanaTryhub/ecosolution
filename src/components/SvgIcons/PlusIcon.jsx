import PropTypes from 'prop-types';
import styles from './SvgIcons.module.css'

export const PlusIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg className={styles.plusSvg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M7 14H21" stroke="#97D28B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 21V7" stroke="#97D28B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


PlusIcon.propTypes = {
  id: PropTypes.string.isRequired,
};