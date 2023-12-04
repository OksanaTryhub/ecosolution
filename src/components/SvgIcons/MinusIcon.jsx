import PropTypes from 'prop-types';
import styles from './SvgIcons.module.css'

export const MinusIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg className={styles.minusSvg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M7 14H21" stroke="#173D33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


MinusIcon.propTypes = {
  id: PropTypes.string.isRequired,
};