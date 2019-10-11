import React from 'react';
import MajorClock from './MajorClock/MajorClock';
import ControlButtons from './ControlButtons/ControlButtons';
import SplitTimes from './MajorClock/SplitTimes'

class StopWatch extends React.Component {
  state = {
    isStart: false,
    startTime: 0,
    currentTime: 0,
    splits: [],
    nowTime: 0
  }



  onSplit = () => {
    const {currentTime, startTime} = this.state
    this.setState({
      splits: [...this.state.splits, currentTime-startTime]
    })
  }

  onStart = () => {

    this.setState({
      isStart: true,
      startTime: new Date(),
      currentTime: new Date(),
      
    })
    this.intervalHandle = setInterval(()=>{
      this.setState({currentTime: new Date()})
    },1000/60)
  }

  onPause = () => {
    clearInterval(this.intervalHandle)

    this.setState({
      isStart: false,
      
    })
  }

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    })
  }

  render () {
    const { currentTime, startTime, isStart} = this.state
  
    return (
      <React.Fragment>
        <style jsx>{`
          h2 {
            color: green;
            text-align: center;
          }
        `}</style>
        <h2>秒表</h2>
        <MajorClock
          milliseconds = {currentTime-startTime}
          activated={isStart}
        />
        <ControlButtons 
          activated={this.state.isStart}
          onSplit={this.onSplit}
          onReset={this.onReset}
          onStart={this.onStart}
          onPause={this.onPause}
        />
        <SplitTimes 
          value={this.state.splits}
        />
      </React.Fragment>
    )
  }
}

export default StopWatch;