import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions';
import '../css/components/Table.css';

const confirmedMock = [];

const avaiableMock = [
  '{"time":"01:00","date":"17/12/2021"}',
  '{"time":"01:00","date":"15/12/2021"}',
  '{"time":"00:30","date":"14/12/2021"}',
  '{"time":"00:00","date":"17/12/2021"}',
  '{"time":"03:30","date":"18/12/2021"}',
  '{"time":"02:30","date":"15/12/2021"}',
  '{"time":"02:30","date":"16/12/2021"}',
  '{"time":"03:00","date":"17/12/2021"}',
  '{"time":"03:30","date":"18/12/2021"}',
];

const weekDays = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado',
};

const tableCellClasses = {
  1: 'emptybox',
  2: 'confirmed',
  3: 'avaiable',
  4: 'blocked',
};

const cellBaseClName = 'baseCell';

function Table({ modal }) {
  const [dateInfo, setDateInfo] = useState(null);
  const [timeNow, setTimeNow] = useState(null);
  const [dataToSend, setDataToSend] = useState([]);
  const dispatch = useDispatch();

  if (!dateInfo) {
    localStorage.setItem('confirmed', JSON.stringify(confirmedMock));
    localStorage.setItem('avaiable', JSON.stringify(avaiableMock));
  }

  const lenTwo = (num) => {
    const dez = 10;
    if (num < dez) {
      const string = String(num);
      return `0${string}`;
    }
    return num;
  };

  const makeDateInfo = () => {
    const newdateInfo = [];
    const todayDate = new Date();
    const safetyTime = 12;
    const qtdCalendarDay = 7;
    setTimeNow(`${lenTwo(todayDate.getHours() + safetyTime)}`
      + `:${lenTwo(todayDate.getMinutes())}`);

    for (let index = 0; index < qtdCalendarDay; index += 1) {
      newdateInfo
        .push({
          monthDay: todayDate
            .toLocaleDateString('pt-br'),
          weekDay: weekDays[todayDate.getDay()],
        });
      if (index < qtdCalendarDay - 1) todayDate.setDate(todayDate.getDate() + 1);
    }
    setDateInfo(newdateInfo);
  };

  const removeDay = (time) => {
    const hoursInDay = 24;
    const timeData = time.split(':');
    const dayDifference = Number(timeData[0]) - hoursInDay;
    const removedTime = dayDifference > 0 ? `${lenTwo(dayDifference)}:${timeData[1]}`
      : '00:00';
    return removedTime;
  };

  const btnTimeClick = ({ target }) => {
    const scheduleClickAction = {
      greenlane: () => {
        setDataToSend(dataToSend.filter((e) => e !== target.id));
        target.className = `${cellBaseClName} emptybox`;
      },
      emptybox: () => {
        setDataToSend([...dataToSend, target.id]);
        target.className = `${cellBaseClName} greenlane`;
      },
      confirmed: () => {
        dispatch(actions.addAssignment({ id: target.id, modalType: 'confirmed' }));
        modal(true);
      },
      avaiable: () => {
        dispatch(actions.addAssignment({ id: target.id, modalType: 'avaiable' }));
        modal(true);
      },
      blocked: () => 1,
    };
    scheduleClickAction[target.classList[1]]();
    console.log(dataToSend);
  };

  const cellDate = (i, j, scheduleTimes) => {
    const avaiable = JSON.parse(localStorage.getItem('avaiable'));
    const confirmed = JSON.parse(localStorage.getItem('confirmed'));
    const bit2 = 2;
    const bit3 = 4;
    const bit4 = 8;
    const bit5 = 16;
    if (j === 0) return scheduleTimes[i];
    const id = JSON.stringify({
      time: scheduleTimes[i],
      date: dateInfo[j - 1].monthDay,
    });
    const cellStatus = bit2 + confirmed.includes(id) * bit3
      + avaiable.includes(id) * bit4
      + ((timeNow > scheduleTimes[i] && j === 1)
        || (removeDay(timeNow) > scheduleTimes[i] && j === 2)) * bit5;
    return (
      <button
        type="button"
        id={ id }
        aria-label="s"
        className={ `${cellBaseClName} `
          + `${tableCellClasses[parseInt(Math.log2(cellStatus), 10)]}` }
        onClick={ btnTimeClick }
      />
    );
  };

  const makeDataTable = () => {
    const halfHour = 30;
    const tableHeader = dateInfo.map((e) => `${e.monthDay.split('/20')[0]}`
      + `\n\n ${e.weekDay}`);

    tableHeader.unshift('Horários');

    const scheduleTimes = Array.from({ length: 48 },
      (_, i) => `${lenTwo(parseInt(i / 2, 10))}:${lenTwo((i % 2) * halfHour)}`);

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              { tableHeader.map((head, i) => <th key={ i }>{ head }</th>) }
            </tr>
          </thead>
          <tbody>
            { scheduleTimes.map((time, i) => (
              <tr key={ i }>
                { tableHeader.map((_, j) => (
                  <td
                    key={ String(i) + String(j) }
                  >
                    { cellDate(i, j, scheduleTimes) }
                  </td>)) }
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      { !dateInfo && makeDateInfo() }
      { dateInfo && makeDataTable() }
    </>
  );
}

Table.propTypes = {
  modal: PropTypes.func.isRequired,
};

export default Table;
