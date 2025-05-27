import React, { useState } from 'react'
import BackgroundVideo from './Backgroundvideo'
import Landing from './Landing'
import Merch from './Merch'
import Live from './Live'
import '../styles/global.css'

type View = 'home' | 'merch' | 'live'

const App = () => {
  const [view, setView] = useState<View>('home')

  return (
    <>
      <BackgroundVideo />
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto relative w-full h-full">
          {/* Home */}
          <div
            className={`transition-opacity duration-500 absolute inset-0 ${
              view === 'home' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {view === 'home' && <Landing onNavigate={setView} />}
          </div>

          {/* Merch */}
          <div
            className={`transition-opacity duration-500 absolute inset-0 ${
              view === 'merch' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {view === 'merch' && <Merch onBack={() => setView('home')} />}
          </div>

          {/* Live */}
          <div
            className={`transition-opacity duration-500 absolute inset-0 ${
              view === 'live' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {view === 'live' && <Live onBack={() => setView('ho
