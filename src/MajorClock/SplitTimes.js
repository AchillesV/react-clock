import MajorClock from './MajorClock';
import React from 'react';
import PropTypes from 'prop-types';

const SplitTimes = ({value=[]}) => {
  return (value.map((v, k) => (
        <MajorClock key={k} milliseconds={v} />
  )))


}

SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number)
};

export default SplitTimes;