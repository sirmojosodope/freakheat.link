import React, { useState } from 'react'

interface Props {
  onBack: () => void
}

const merch = [
  {
    label: 'Mondo Tempo',
    url: 'https://freakheatwaves.bandcamp.com/album/mondo-tempo',
    image: '/images/mondotempo.png',
  },
  {
    label: 'Music Has An Interesting Power',
    url: 'https://freakheatwaves.bandcamp.com/album/music-has-an-interesting-power',
    image: '/images/music_has_an_interesting_power.png',
  },
]

const Merch = ({ onBack }: Props) => {
  const [preview, setPreview] = useState<string | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="channel-float text-white relative"
      onMouseMove={handleMouseMove}
    >
      <ul>
        {merch.map((item, i) => (
          <li
            key={i}
            onMouseEnter={() => setPreview(item.image)}
            onMouseLeave={() => setPreview(null)}
          >
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
        <li onClick={onBack}>
          <a className="cursor-pointer">back</a>
        </li>
      </ul>

      {/* 👁 Cursor-Bound Image */}
      {preview && (
        <img
          src={preview}
          alt=""
          className="fixed w-20 h-auto pointer-events-none opacity-60 grayscale blur-[1px] transition-opacity duration-300 z-50"
          style={{
            top: `${cursor.y - 20}px`,
            left: `${cursor.x + 40}px`,
          }}
        />
      )}
    </div>
  )
}

export default Merch
