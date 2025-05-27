import React from 'react'
import BackgroundVideo from './Backgroundvideo'
import '../styles/global.css'

const App = () => {
  return (
    <>
      <BackgroundVideo />
      <div className="container">
        <h1>Freak Heat Waves</h1>
       
        <a
          href="https://freakheatwaves.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Bandcamp
        </a>
      </div>
    </>
  )
}

export default App
