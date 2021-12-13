import React from 'react';
import './css/card.css';

const Linux = () => {
  const votes = () => {

  };
  return (
    <div className="tipstheme">
      <div>
        Como configurar seu linux para desenvolvimento
      </div>
      <div className="likes">
        <button type="button" onClick={ votes }>👍</button>
        <span>6</span>
      </div>
    </div>
  );
};

export default Linux;
