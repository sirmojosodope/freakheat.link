import React, { useState } from 'react'
import BackgroundVideo from './Backgroundvideo'
import Landing from './Landing'
import Merch from './Merch'
import Live from './Live'
import '../styles/global.css'

type View = 'home' | 'merch' | 'live'

const App = () => {
  const [view, setView] = useState<View>('home')

  const renderView = () => {
    switch (view) {
      case 'merch':
        return <Merch onBack={() => setView('home')} />
      case 'live':
        return <Live onBack={() => setView('home')} />
      default:
        return <Landing onNavigate={setView} />
    }
  }

  return (
    <>
      <BackgroundVideo />
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">{renderView()}</div>
      </div>
    </>
  )
}

export default App
