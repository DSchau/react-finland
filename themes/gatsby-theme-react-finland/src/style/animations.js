import { keyframes } from "@emotion/core"

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

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
