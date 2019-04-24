import React from 'react'
import styled from '@emotion/styled'

import Header from '../components/header'
import Footer from '../components/footer'
import Fonts from '../components/fonts'
import Reset from '../components/reset'

const Children = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`

const titlesLookup = {
  speakers: `Speakers`
}

const normalize = parts => parts.split('/').find(part => part.length > 0)

export default function Index({ children, location }) {
  const title = titlesLookup[normalize(location.pathname)] || `React Finland`
  return (
    <>
      <Reset />
      <Fonts />
      <Header isHome={location.pathname === `/`} title={title} />
      <Children>{children}</Children>
      <Footer />
    </>
  )
}
