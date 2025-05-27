import React from 'react'
import BackgroundVideo from './Backgroundvideo'
import '../styles/global.css'

const channels = [
  { label: 'Bandcamp', url: 'https://freakheatwaves.bandcamp.com' },
  { label: 'YouTube', url: 'https://youtu.be/TrgAAZvx2As?si=eZ7HVP2P8awrbS_P' },
  { label: 'Spotify', url: 'https://open.spotify.com/artist/07Owzhi4WDxi731LiJ2tG0?si=AlMSgffKQHOX5SiD_9yyFg' },
  { label: 'Instagram', url: 'https://www.instagram.com/freakheatwaves' },
]

const App = () => {
  return (
    <>
      <BackgroundVideo />

      {/* <img
  src="/favicon.svg"
  alt="Freak Heat Waves Logo"
  className="site-logo"
/> */}


      <h1 className="site-title">Freak Heat Waves</h1>

      <div className="channel-float">
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
