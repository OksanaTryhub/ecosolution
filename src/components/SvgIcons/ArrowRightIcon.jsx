import PropTypes from 'prop-types';

export const ArrowRightIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.28418 4.49219L12.007 4.49219L12.007 10.215" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.99365 12.5062L11.9274 4.57243" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


ArrowRightIcon.propTypes = {
  id: PropTypes.string.isRequired,
};