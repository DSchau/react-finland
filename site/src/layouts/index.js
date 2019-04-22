import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Reset from '../components/reset'

export default function Index({ children, location }) {
  return (
    <>
      <Reset />
      <Header isHome={location.pathname === `/`}/>
      {children}
      <Footer />
    </>
  )
}
