import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled'

import diff from 'date-fns/difference_in_seconds'

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.updateCountdown = this.updateCountdown.bind(this);
    this.state = {
      currentDate: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown() {
    this.setState({ currentDate: Date.now() });
  }

  getDifference(to, from) {
    let seconds = diff(new Date(from), new Date(to))

    if (seconds <= 0) {
      seconds = 0
    }

    const levels = [
      Math.floor((seconds % 31536000) / 86400),
      Math.floor(((seconds % 31536000) % 86400) / 3600),
      Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
      (((seconds % 31536000) % 86400) % 3600) % 60
    ]

    const units = ['days', 'hours', 'minutes', 'seconds']

    return levels
      .reduce((merged, unit, index) => {
        merged[units[index]] = unit
        return merged
      }, {})

  }

  render() {
    const { children, render = children } = this.props

    return render(this.getDifference(this.state.currentDate, this.props.toDate))
  }
}

Countdown.propTypes = {
  initialDate: PropTypes.string,
  toDate: PropTypes.string,
};

export default Countdown;
