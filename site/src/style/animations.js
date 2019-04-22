import { keyframes } from '@emotion/core'

export const waveX = size => keyframes`
  0% {
    background-position-x: 100%, 0;
  }
  100% {
    background-position-x: 100%, ${size};
  }
`

export const waveY = size => keyframes`
  100% {
    background-position-y: 100%, 0;
  }
  0% {
    background-position-y: 100%, ${size};
  }
`
