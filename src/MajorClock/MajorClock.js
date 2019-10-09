import React from 'react';
import PropTypes from 'prop-types';
import padStart from 'lodash/padStart'

const MajorClock = (milliseconds = 0) => {
  return <h1> {ms2Time(milliseconds)} </h1>
}

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;  // 毫秒数
  time = (milliseconds - ms)/1000;  // 总秒数
  const second = time%60;          // 秒数
  time = (time - second)/60;      // 总分钟数
  const minute = time%60;         // 分钟数
  const hour = (time - minute)/60;                         // 总小时数
  
  const result = padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
  return result;

}


export default MajorClock;