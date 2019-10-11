import React from 'react';
import PropTypes from 'prop-types';
import './ControlButtons.css'


const ControlButtons = (props) => {
  const { activated, onStart, onPause, onReset, onSplit } = props;

  if(activated) {
    return (
      <div className='control-btn'>
        <button className='left-btn' onClick={onSplit}>计次</button>
        <button className='right-btn' onClick={onPause}>停止</button>
      </div>
    )
  } else {
    return (
      <div className='control-btn'>
        <button className='left-btn' onClick={onStart}>启动</button>
        <button className='right-btn' onClick={onReset}>复位</button>
      </div>
    )
  }
}

ControlButtons.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRquired,
  onPause: PropTypes.func.isRquired,
  onSplit: PropTypes.func.isRquired,
  onReset: PropTypes.func.isRquired,
}

export default ControlButtons;