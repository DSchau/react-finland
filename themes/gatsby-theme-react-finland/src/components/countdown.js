import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import diff from 'date-fns/difference_in_seconds'

const getDifference = (to, from) => {
  let seconds = diff(new Date(from), new Date(to))

  if (seconds <= 0) {
    seconds = 0
  }

  // #poop 💩
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

function Countdown({ children, render = children, toDate }) {
  const [date, setDate] = useState(Date.now())
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [toDate])

  const difference = getDifference(date, toDate)

  return render(difference)
}

Countdown.propTypes = {
  toDate: PropTypes.string,
};

export default Countdown;
