import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/components/ButtonWithImage.css';
import allThemes from '../allThemes';

function ThemeSelector({ setTheme }) {
  const [themes, setThemes] = useState([]);

  const getThemes = () => setThemes(allThemes);

  const createThemeBtns = () => (
    themes.map((theme, i) => (
      <button
        className="themeBtn"
        id={ theme }
        key={ `tsBtn${i}` }
        type="button"
        onClick={ ({ target: { id } }) => setTheme(id) }
      >
        { theme }
      </button>
    ))
  );

  return (
    <>
      { themes.length < 1 && getThemes() }
      { themes.length > 0 && createThemeBtns() }
    </>
  );
}

ThemeSelector.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSelector;
