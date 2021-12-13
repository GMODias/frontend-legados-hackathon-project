import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import configBtnImage from '../images/config.png';
import mainBtnImage from '../images/house.png';
import backBtnImage from '../images/back.png';
import '../css/components/ButtonWithImage.css';

function ButtonWithImage({ kind }) {
  const [redirect, setRedirect] = useState(null);

  const types = {
    config: {
      click: () => setRedirect('/userConfig'),
      img: configBtnImage,
      altText: 'Configurations',
    },
    main: {
      click: () => setRedirect('/main'),
      img: mainBtnImage,
      altText: 'Voltar',
    },
    back: {
      click: () => window.location.reload(false),
      img: backBtnImage,
      altText: 'Main',
    },
  };

  return (
    <>
      { redirect && <Redirect to={ redirect } /> }
      <button
        className="btnStyle"
        type="button"
        onClick={ () => types[kind].click() }
      >
        <img
          src={ types[kind].img }
          className="imgStyle"
          alt={ types[kind].altText }
        />
      </button>
    </>
  );
}

ButtonWithImage.propTypes = {
  kind: PropTypes.string.isRequired,
};

export default ButtonWithImage;
