import { css } from '@emotion/core'

import { waveX, waveY } from './animations'

import waves from '../assets/img/headers/front.svg'

// it's 🌊, my dudes
export default props => {
  const size = props.size || `10rem`
  return css`
    display: block;

    margin: 0;
    padding: 0;
    color: #f3f7f9;
    background-image: linear-gradient(#002fa9, rgba(82, 151, 233, 0.79)),
      url("${waves}");


    animation: ${waveX(size)} 10s linear infinite, ${waveY(size)} 10s linear infinite;
    animation-play-state: paused;
    background-size: 100% 100%, ${size} ${size};
    height: ${size};

    :hover {
      animation-play-state: running;
    }
  `
}
