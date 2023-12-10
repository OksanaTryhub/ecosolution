
// import { animateScroll as scroll } from 'react-scroll';

// const scrollToComponent = ({componentId, duration}) => {
//   const element = document.getElementById(componentId);

//   if (element) {
//     scroll.scrollTo(element.offsetTop, {
//       duration: duration,
//       smooth: 'ease',
//     });
//   }
// };

// export default scrollToComponent;

// scrollToComponent.js
import { animateScroll as scroll } from 'react-scroll';

const scrollToComponent = ({ componentId, duration }) => {
  const handleScroll = () => {
    const element = document.getElementById(componentId);

    if (element) {
      scroll.scrollTo(element.offsetTop, {
        duration: duration,
        smooth: 'ease',
      });
    }
  };

  handleScroll(); // Вызываем функцию сразу, если это нужно
};

export default scrollToComponent;
