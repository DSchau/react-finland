import styled from "@emotion/styled"

import { spin } from "../style"
import logo from "../assets/img/logo.svg"

const Logo = styled.img`
  width: auto;
  height: auto;
  margin-right: 12px;
  user-select: none;

  animation: ${spin} 10s linear infinite;
  animation-play-state: paused;

  :hover {
    animation-play-state: running;
  }
`

Logo.defaultProps = {
  src: logo,
}

export default Logo
