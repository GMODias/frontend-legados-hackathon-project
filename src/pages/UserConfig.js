import React from 'react';
import { ButtonWithImage, Form } from '../components/index';
import '../css/pages/UserConfig.css';

function UserConfig() {
  return (
    <>
      <header className="navigateBtns">
        <ButtonWithImage kind="main" />
      </header>
      <Form />
    </>
  );
}

export default UserConfig;
