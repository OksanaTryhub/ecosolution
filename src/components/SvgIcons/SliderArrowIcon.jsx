import PropTypes from 'prop-types';

export const SliderArrowIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M21.6458 8.89343L30.7508 17.9984L21.6458 27.1034" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.25098 17.9988H30.496" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


SliderArrowIcon.propTypes = {
  id: PropTypes.string.isRequired,
};