import React, { useEffect, useState } from 'react';
import './css/card.css';
import PropTypes from 'prop-types';

const Linux = ({ idtips, title }) => {
  const [votes, setVotes] = useState(0);
  const [mentVotes, setMentVotes] = useState(0);

  useEffect(() => {
    const getVotes = localStorage.getItem('uservotes');
    if (!getVotes) {
      localStorage.setItem('uservotes', JSON.stringify([{
        id: idtips,
        userlikes: 0,
        mentLike: 0,
        usersLike: [],
      }]));
      setVotes(0);
    } else {
      const converted = JSON.parse(getVotes);
      const index = converted.findIndex(({ id }) => id === idtips);
      if (!converted[index].usersLike.includes('Marlon')) {
        localStorage.setItem('uservotes', JSON.stringify([
          ...converted,
        ]));
      }
      setMentVotes(converted[index].mentLike);
      setVotes(converted[index].userlikes);
    }
  }, [idtips]);

  const handleClickVotes = () => {
    const getVotes = localStorage.getItem('uservotes');
    const converted = JSON.parse(getVotes);
    const index = converted.findIndex(({ id }) => id === idtips);

    if (!converted[index].usersLike.includes('Other User')) {
      converted[index].userlikes += 1;
      converted[index].usersLike.push('Other User');
      setVotes(converted[index].userlikes);
    }

    localStorage.setItem('uservotes', JSON.stringify([
      ...converted,
    ]));
  };

  const handleClickVotesPro = () => {
    const getVotes = localStorage.getItem('uservotes');
    const converted = JSON.parse(getVotes);
    const index = converted.findIndex(({ id }) => id === idtips);
    if (!converted[index].usersLike.includes('Marlon')) {
      converted[index].mentLike += 1;
      converted[index].usersLike.push('Marlon');
      setMentVotes(converted[index].mentLike);
    }

    localStorage.setItem('uservotes', JSON.stringify([
      ...converted,
    ]));
  };

  return (
    <div className="tipstheme">
      <a href="/" target="_blank">
        { title }
      </a>
      <div className="likes">
        <button type="button" onClick={ handleClickVotes }>👍</button>
        <span>{ votes }</span>
        <button type="button" onClick={ handleClickVotesPro }>
          👍
          <span title="MENTORES">MENT</span>
        </button>
        <span>{ mentVotes }</span>
      </div>
    </div>
  );
};

Linux.propTypes = {
  idtips: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Linux;
