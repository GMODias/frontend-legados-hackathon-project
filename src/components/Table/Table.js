import React, { useState } from 'react';
import './Table.css'

const confirmedMock = [
  '{"time":"02:30 ","date":"12/12/2021"}', 
  '{"time":"02:30 ","date":"13/12/2021"}', 
  '{"time":"03:00 ","date":"13/12/2021"}', 
  '{"time":"03:30 ","date":"14/12/2021"}'
];

const teachingAvaiabilityMock = [
  '{"time":"01:00 ","date":"17/12/2021"}',
  '{"time":"01:00 ","date":"15/12/2021"}',
  '{"time":"00:30 ","date":"14/12/2021"}',
  '{"time":"00:00 ","date":"13/12/2021"}',
  '{"time":"03:30 ","date":"18/12/2021"}'
]


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

const cellBaseClName = 'baseCell'

function Table() {
const [dateInfo, setDateInfo] = useState(null);
const [timeNow,setTimeNow] = useState(null);
const [dataToSend, setDataToSend] = useState([]);

  const lenTwo = (num) => {
    if (num < 10 ) return '0' + String(num);
    return num;
  }

  const makeDateInfo = () => {
    const newdateInfo = [];
    const todayDate = new Date();
    setTimeNow(`${lenTwo(todayDate.getHours() + 12)}:${lenTwo(todayDate.getMinutes())}`)
    for (let index = 0; index < 7; index += 1) {
      newdateInfo.push({monthDay: todayDate.toLocaleDateString(), weekDay:weekDays[todayDate.getDay()]});
      if (index < 6) todayDate.setDate(todayDate.getDate() + 1);
    }
    setDateInfo(newdateInfo);
  };

  const removeDay = (time) =>{
    const timeData = time.split(':');
    const dayDifference = Number(timeData[0]) - 24;
    const removedTime = dayDifference > 0 ? `${lenTwo(dayDifference)}:${timeData[1]}` : '00:00';
    return removedTime;
  };

  const btnTimeClick = ({target}) => {
    const scheduleClickAction = {
      'greenlane': () => {
        setDataToSend(dataToSend.filter((e) => e !== target.id));
        target.className = `${cellBaseClName} emptybox`;
      },
      'emptybox': () => {
        setDataToSend([...dataToSend, target.id ]);
        target.className = `${cellBaseClName} greenlane`;
      },
      // Confirmed deverá abrir um modal para mostrar os dados do mentor, aluno, ok para sair e cancelar.
      'confirmed': () => 1,
       // Ao clicar no avaible e depois salvar marcações (botão a ser criado, ele deve enviar para o backend a marcação e atualizar os dados na tela).
      'avaiable' : () => 1,
      'blocked' : () => 1,
    }
    scheduleClickAction[target.classList[1]]();
  };

  const cellDate = (i, j,scheduleTimes, tableHeader) => {
    if (j === 0) return scheduleTimes[i];
    const id = JSON.stringify({time: scheduleTimes[i],date: dateInfo[j-1].monthDay});
    const cellStatus = 2 + confirmedMock.includes(id) * 4 + teachingAvaiabilityMock.includes(id) * 8
      + ((timeNow > scheduleTimes[i] && j === 1) 
      || (removeDay(timeNow) > scheduleTimes[i] && j === 2)) * 16;
        return (
      <button 
        id={id} 
        className = {`${cellBaseClName} ${tableCellClasses[parseInt(Math.log2(cellStatus,10))]}`}
        onClick={btnTimeClick}/>
    )
  }

  const makeDataTable = () => {
    const tableHeader = dateInfo.map((e) => `${e.monthDay.split('/20')[0]} \n\n ${e.weekDay}`);
    tableHeader.unshift('Horários');
    const scheduleTimes = Array.from({length: 48}, (_, i) => 
      `${lenTwo(parseInt(i/2))}:${lenTwo(i % 2 * 30)} `);
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {tableHeader.map((head, i) => <th key={ i }>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            { scheduleTimes.map((time, i) => (
              <tr key={ i }>
                { tableHeader.map((_, j) => (
                  <td
                    key={ String(i) + String(j) }
                  >
                    {cellDate(i, j, scheduleTimes, tableHeader)}
                  </td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      {!dateInfo && makeDateInfo()}
      {dateInfo && makeDataTable()}
    </>
  );
}

export default Table;
