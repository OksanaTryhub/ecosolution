import PropTypes from 'prop-types';

export const PlusIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke="#97D28B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12V4" stroke="#97D28B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      );
    default:
      return <svg></svg>;
  }
};


PlusIcon.propTypes = {
  id: PropTypes.string.isRequired,
};