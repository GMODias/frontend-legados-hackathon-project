import React, { useState } from 'react';
import { Redirect } from 'react-router';
import configBtnImage from '../images/config.png';
// import mainBtnImage from '../images/house.png';
import '../css/components/ButtonConfig.css';

// const types = {
//   config: { route: '/userConfig', img: configBtnImage, btnClass: 'btnConfig', imgClass: 'configImg',
// altText: 'Configurations' }
// };

function ButtonConfig() {
  const [redirect, setRedirect] = useState(null);

  return (
    <>
      {redirect && <Redirect to={ redirect } />}
      <button
        className="btnConfig"
        type="button"
        onClick={ () => setRedirect('/userConfig') }
      >
        <img
          src={ configBtnImage }
          className="configImg"
          alt="Configurations"
        />
      </button>
    </>
  );
}

export default ButtonConfig;
