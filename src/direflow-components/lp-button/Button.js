import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './Button.scss';

const App = ({ variant, theme, size, title }) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('onClick');
    dispatch(event);
  };

  const themeClass = `theme-${theme || "light"}`;
  const variantClass = `button--${variant || "primary"}`;
  const sizeClass = `button--${size || "medium"}`;

  return (
    <Styled styles={styles} scoped={false}>
      <button
        className={`${["button", themeClass, variantClass, sizeClass].join(" ")}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </Styled>
  );
};

App.defaultProps = {
  title: 'Lp Button',
  variant: 'primary',
  theme: 'light',
  sizeClass: 'medium'
}

App.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.string,
  sizeClass: PropTypes.string,
};

export default App;
