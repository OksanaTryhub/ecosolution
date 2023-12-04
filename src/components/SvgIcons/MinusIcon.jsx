import PropTypes from 'prop-types';

export const MinusIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke="#173D33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


MinusIcon.propTypes = {
  id: PropTypes.string.isRequired,
};