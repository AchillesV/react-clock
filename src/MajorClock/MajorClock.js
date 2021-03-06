import React from 'react';
import PropTypes from 'prop-types';
import padStart from 'lodash/padStart'

const MajorClock = (milliseconds = 0) => {
  const ms = milliseconds.milliseconds;
  console.log(milliseconds.activated)
  const style = {
    'fontFamily': '黑体',
    'textAlign': 'center',
    'fontSize': '33px',
    'marginTop': '20px'
  }

  return (
    <React.Fragment>
      <style jsx>{`
        h1 {
          color: ${milliseconds.activated? 'red' : 'black'};
          font-family: monospace;
        }
      `}</style>
      <h1 style={style}> {ms2Time(ms)} </h1>

    </React.Fragment>
  )

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