import PropTypes from 'prop-types';

export const MapIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.29004 8.27998V18.01C2.29004 19.91 3.64004 20.69 5.28004 19.75L7.63004 18.41C8.14004 18.12 8.99004 18.09 9.52004 18.36L14.77 20.99C15.3 21.25 16.15 21.23 16.66 20.94L20.99 18.46C21.54 18.14 22 17.36 22 16.72V6.98998C22 5.08998 20.65 4.30998 19.01 5.24998L16.66 6.58998C16.15 6.87998 15.3 6.90998 14.77 6.63998L9.52004 4.01998C8.99004 3.75998 8.14004 3.77998 7.63004 4.06998L3.30004 6.54998C2.74004 6.86998 2.29004 7.64998 2.29004 8.27998Z" stroke="#173D33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.56006 4.5V17.5" stroke="#173D33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.73 7.11914V20.4991" stroke="#173D33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};


MapIcon.propTypes = {
  id: PropTypes.string.isRequired,
};