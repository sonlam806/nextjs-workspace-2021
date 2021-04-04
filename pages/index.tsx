import fetch from 'isomorphic-unfetch'
import React from 'react'
import Header from '../src/atoms/Header/Header'
import NavBar from '../src/molecules/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Header />
    </>
  )
}

export default App
