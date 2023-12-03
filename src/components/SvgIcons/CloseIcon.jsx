import PropTypes from 'prop-types';

export const CloseIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5.8335 5.83331L14.1668 14.1666M5.8335 14.1666L14.1668 5.83331" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


CloseIcon.propTypes = {
  id: PropTypes.string.isRequired,
};