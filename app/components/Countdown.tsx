'use client'

import { useState, useEffect } from 'react'

const MAINNET_DATE = new Date('2026-09-16T00:00:00Z')

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const diff = MAINNET_DATE.getTime() - now.getTime()

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, live: true }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      live: false,
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (timeLeft.live) {
    return (
      <div className="px-6 py-8 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block text-sm px-4 py-2 rounded-full font-medium" style={{ backgroundColor: 'rgba(227,200,150,0.15)', color: '#E3C896', border: '1px solid rgba(227,200,150,0.3)' }}>
            Arc Mainnet Is Live
          </div>
        </div>
      </div>
    )
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="px-6 py-8 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#E3C896' }}>
          Arc Mainnet Launch
        </div>
        <div className="flex justify-center gap-4 md:gap-8 mb-3">
          {units.map((unit) => (
            <div key={unit.label}>
              <div
                className="text-2xl md:text-4xl font-medium tabular-nums w-16 md:w-20 text-center rounded-xl py-2"
                style={{ color: '#E3C896', backgroundColor: 'rgba(227,200,150,0.06)', border: '1px solid rgba(227,200,150,0.15)' }}
              >
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600 mt-1">{unit.label}</div>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-600">September 16, 2026</div>
      </div>
    </div>
  )
}