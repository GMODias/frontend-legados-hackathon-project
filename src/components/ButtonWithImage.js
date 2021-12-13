import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import configBtnImage from '../images/config.png';
import mainBtnImage from '../images/house.png';
import '../css/components/ButtonWithImage.css';

const types = {
  config: {
    route: '/userConfig',
    img: configBtnImage,
    altText: 'Configurations',
  },
  main: {
    route: '/Main',
    img: mainBtnImage,
    altText: 'Main',
  },
};

function ButtonWithImage({ kind }) {
  const [redirect, setRedirect] = useState(null);

  return (
    <>
      { redirect && <Redirect to={ redirect } /> }
      <button
        className="btnStyle"
        type="button"
        onClick={ () => setRedirect(types[kind].route) }
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
