import React, { useState } from 'react';
import allThemes from '../allThemes';
import '../css/components/Form.css';

function Form() {
  const [themes, setThemes] = useState([]);
  const [clas, setClas] = useState('no-select');
  console.log(themes);

  const verifyTheme = (theme) => {
    if (themes.includes(theme)) {
      setClas('no-select');
      const result = themes.filter((t) => t !== theme);
      return setThemes(result);
    }
    setClas('select');
    console.log(clas);
    return setThemes([...themes, theme]);
  };

  const handleChekBox = () => allThemes.map((theme) => (
    <button
      className="no-select"
      id={ theme }
      key={ theme }
      type="button"
      onClick={ ({ target }) => {
        verifyTheme(theme);
        target.className = target.className === 'select' ? 'no-select' : 'select';
      } }
    >
      { theme }
    </button>
  ));

  return (
    <div>
      <form>
        <label htmlFor="ensinar">
          <input type="radio" name="ensinar" id="ensinar" />
          Quero ser mentor!
        </label>
        <div className="btntipes ">
          { handleChekBox() }
        </div>

        <input type="button" value="Salvar" />
      </form>

      <form>
        <label htmlFor="name">
          Nome:
          <input id="name" type="text" name="name" />
        </label>

        <label htmlFor="email">
          Email:
          <input id="email" type="email" name="email" />
        </label>

        <label htmlFor="password">
          Password:
          <input id="password" type="password" name="password" />
        </label>

        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
}

export default Form;
