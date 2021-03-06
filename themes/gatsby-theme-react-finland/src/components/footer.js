import React from "react"
import styled from "@emotion/styled"

import Subscribe from "./subscribe-form"
import waves from "../style/waves"

const Container = styled.footer`
  margin: 0;
  padding: 0;

  background-color: #002fa9;
`

const Waves = styled.div`
  ${waves}

  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 12.5rem;
`

export default function Footer({ children }) {
  return (
    <Container>
      <Waves size={`10rem`}>
        <Subscribe />
      </Waves>
      <Links>{children}</Links>
    </Container>
  )
}
