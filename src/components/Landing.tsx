import React from 'react'

interface Props {
  onNavigate: (view: 'merch' | 'live') => void
}

const channels = [
  { label: 'Music', url: 'https://freakheatwaves.bandcamp.com/music' },
  // { label: 'YouTube', url: 'https://youtu.be/TrgAAZvx2As?si=eZ7HVP2P8awrbS_P' },
  // { label: 'Spotify', url: 'https://open.spotify.com/artist/07Owzhi4WDxi731LiJ2tG0?si=AlMSgffKQHOX5SiD_9yyFg' },
  // { label: 'Instagram', url: 'https://www.instagram.com/freakheatwaves' },
]

const Landing = ({ onNavigate }: Props) => {
  return (
    <>
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
          <li onClick={() => onNavigate('merch')} className="cursor-pointer">
            <a>merch</a>
          </li>
          <li onClick={() => onNavigate('live')} className="cursor-pointer">
            <a>live</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Landing
