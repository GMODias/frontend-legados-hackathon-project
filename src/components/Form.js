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
      className={ clas }
      id={ theme }
      key={ theme }
      type="button"
      onClick={ () => verifyTheme(theme) }
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

        { handleChekBox() }

        <input type="submit" value="Salvar" />
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
