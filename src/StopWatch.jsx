import React from 'react';
import MajorClock from './MajorClock/MajorClock';
import ControlButtons from './ControlButtons/ControlButtons';


class StopWatch extends React.Component {
  construct () {
    super(...argument)
    this.state = {
      isStart: false,
      startTime: null,
      currentTime: null,
      splits: []
    }
  }

  render () {
    return (
      <Fragment>
        <MajorClock />
        <ControlButtons 
          activated={this.state.isStart}
        />
        <SplitTimes />
      </Fragment>
    )
  }
}

export default StopWatch;