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
        mentLikes: 0,
        usersLike: [],
      }]));

      setVotes(0);
    } else {
      const converted = JSON.parse(getVotes);
      const index = converted.findIndex(({ id }) => id === idtips);
      if (index >= 0) {
        setMentVotes(converted[index].mentLike);
        setVotes(converted[index].userlikes);
      }
    }
  }, [idtips]);

  const handleClickVotes = () => {
    const getVotes = localStorage.getItem('uservotes');
    const converted = JSON.parse(getVotes);
    const index = converted.findIndex(({ id }) => id === idtips);

    if (index < 0) {
      converted.push({
        id: idtips,
        userlikes: 0,
        mentLikes: 0,
        usersLike: [],
      });
    }

    const nindex = converted.findIndex(({ id }) => id === idtips);
    if (!converted[nindex].usersLike.includes('Other User')) {
      converted[nindex].userlikes += 1;
      converted[nindex].usersLike.push('Other User');
      setVotes(converted[nindex].userlikes);
    }

    localStorage.setItem('uservotes', JSON.stringify([
      ...converted,
    ]));
  };

  const handleClickVotesPro = () => {
    const getVotes = localStorage.getItem('uservotes');
    const converted = JSON.parse(getVotes);
    const index = converted.findIndex(({ id }) => id === idtips);

    if (!index) {
      converted.push({
        id: idtips,
        userlikes: 0,
        mentLikes: 0,
        usersLike: [],
      });
    }

    const nindex = converted.findIndex(({ id }) => id === idtips);
    if (!converted[nindex].usersLike.includes('Marlon')) {
      converted[nindex].mentLikes += 1;
      converted[nindex].usersLike.push('Marlon');
      setMentVotes(converted[nindex].mentLikes);
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
