import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = (props) => {
  const { activated, onStart, onPause, onReset, onSplit } = props;
  if(activated) {
    return (
      <div>
        <button onClick={onSplit}>计次</button>
        <button onClick={onPause}>停止</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={onStart}>启动</button>
        <button onClick={onReset}>复位</button>
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