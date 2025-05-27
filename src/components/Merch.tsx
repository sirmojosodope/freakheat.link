import React from 'react'

interface Props {
  onBack: () => void
}

const merch = [
  {
    label: 'Mondo Tempo',
    url: 'https://freakheatwaves.bandcamp.com/album/mondo-tempo',
  },
  {
    label: 'Music Has An Interesting Power Bumper Sticker',
    url: 'https://freakheatwaves.bandcamp.com/merch/music-has-an-interesting-power-bumper-sticker',
  },
  // Add more items here
]

const Merch = ({ onBack }: Props) => {
  return (
    <div className="channel-float text-white">
      <ul>
        {merch.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-glow transition"
            >
              {item.label}
            </a>
          </li>
        ))}
        <li onClick={onBack} className="cursor-pointer">
          <a>back</a>
        </li>
      </ul>
    </div>
  )
}

export default Merch
