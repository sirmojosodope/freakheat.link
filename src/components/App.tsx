import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import '../styles/global.css'

const channels = [
  { label: '📺 Channel 01 — Bandcamp', url: 'https://freakheatwaves.bandcamp.com' },
  { label: '📼 Channel 02 — YouTube', url: 'https://youtu.be/TrgAAZvx2As?si=eZ7HVP2P8awrbS_P' },
  { label: '🛰 Channel 03 — Spotify', url: 'https://open.spotify.com/artist/07Owzhi4WDxi731LiJ2tG0?si=AlMSgffKQHOX5SiD_9yyFg' },
  { label: '📡 Channel 04 — Instagram', url: 'https://www.instagram.com/freakheatwaves' },
  
]

const App = () => {
  return (
    <>
      <BackgroundVideo />

      <h1 className="site-title">Freak Heat Waves</h1>

      <div className="channel-float">
        {/* <h2>:: SIGNAL INDEX</h2> */}
        <ul>
          {channels.map((ch, i) => (
            <li key={i}>
              <a href={ch.url} target="_blank" rel="noopener noreferrer">
                {ch.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
