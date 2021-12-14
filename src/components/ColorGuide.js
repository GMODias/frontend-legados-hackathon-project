import React from 'react';
import '../css/components/ColorGuide.css';

function ColorGuide() {
  return (
    <div>
      <ol className="color-container">
        <ul>
          <div className="corAzul" />
          <span> representa o horário marcado</span>
        </ul>
        <ul>
          <div className="corVerde" />
          <span> representa o match</span>
        </ul>
        <ul>
          <div className="corAmarela" />
          <span> representa o horario para perguntar ou mentorar</span>
        </ul>
        <ul>
          <div className="corCinza" />
          <span> representa horario disponivel para marcação</span>
        </ul>
      </ol>
    </div>
  );
}

export default ColorGuide;
