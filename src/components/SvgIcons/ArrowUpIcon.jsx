import PropTypes from 'prop-types';

export const ArrowUpIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.95312 6.38L7.99979 2.33334L12.0465 6.38" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13.6666L8 2.44663" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


ArrowUpIcon.propTypes = {
  id: PropTypes.string.isRequired,
};