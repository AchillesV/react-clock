import React from 'react';
import PropTypes from 'prop-types';
import padStart from 'lodash/padStart'

const MajorClock = (milliseconds = 0) => {
  const ms = milliseconds.milliseconds;
  console.log(ms)
  return <h1> {ms2Time(ms)} </h1>
}

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;  // 毫秒数
  time = (milliseconds - ms)/1000;  // 总秒数
  const seconds = time%60;          // 秒数
  time = (time - seconds)/60;      // 总分钟数
  const minutes = time%60;         // 分钟数
  const hours = (time - minutes)/60;                         // 总小时数
  
  const result = padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
  return result;

}


export default MajorClock;