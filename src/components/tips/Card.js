import React, { useEffect, useState } from 'react';
import './css/card.css';
import PropTypes from 'prop-types';

const Linux = ({ idtips, title }) => {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const getVotes = localStorage.getItem('votes');
    if (!getVotes) {
      localStorage.setItem('votes', JSON.stringify([{
        id: idtips,
        likes: 0,
        usersLike: [],
      }]));
      setVotes(0);
    } else {
      const converted = JSON.parse(getVotes);
      const index = converted.findIndex(({ id }) => id === idtips);
      if (!converted[index].usersLike.includes('Marlon')) {
        localStorage.setItem('votes', JSON.stringify([
          ...converted,
        ]));
      }
      setVotes(converted[index].likes);
    }
  }, [idtips]);

  const handleClickVotes = () => {
    const getVotes = localStorage.getItem('votes');
    const converted = JSON.parse(getVotes);
    const index = converted.findIndex(({ id }) => id === idtips);
    if (!converted[index].usersLike.includes('Marlon')) {
      converted[index].likes += 1;
      converted[index].usersLike.push('Marlon');
      setVotes(converted[index].likes);
      localStorage.setItem('votes', JSON.stringify([
        ...converted,
      ]));
    }
  };

  const handleClickVotesPro = () => {

  };

  return (
    <div className="tipstheme">
      <div>
        { title }
      </div>
      <div className="likes">
        <button type="button" onClick={ handleClickVotes }>👍</button>
        <span>{ votes }</span>
        <button type="button" onClick={ handleClickVotesPro }>
          👍
          <span title="MENTORES">MENT</span>
        </button>
        <span>{ votes }</span>
      </div>
    </div>
  );
};

Linux.propTypes = {
  idtips: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Linux;
