import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = () => {
  const { activated, onStart, onPause, onReset, onSplit } = this.props;
  if(activated) {
    return (
      <div>
        <button onclick={onSplit}>计次</button>
        <button onclick={onPause}>停止</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onclick={onStart}>启动</button>
        <button onclick={onReset}>复位</button>
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