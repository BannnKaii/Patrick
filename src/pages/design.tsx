'use client'

import { useState } from 'react'

export default function ReflectApp() {
  const [currentDate] = useState('Sun, April 2nd, 2023')

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="app">
      <div className="sidebar">
        <div className="search-container">
          <input type="text" placeholder="Search anything..." />
          <span className="command-key">⌘K</span>
        </div>
        <nav>
          <div className="nav-item">
            <span className="icon">📝</span>
            Daily notes
          </div>
          <div className="nav-item">
            <span className="icon">📄</span>
            All notes
          </div>
          <div className="nav-item">
            <span className="icon">✓</span>
            Tasks
          </div>
          <div className="nav-item">
            <span className="icon">🗺️</span>
            Map
          </div>
        </nav>
      </div>
      
      <main className="content">
        <div className="content-header">
          <h1>{currentDate}</h1>
        </div>
        <div className="notes-section">
          <div className="note-item">
            <h2>What is Reflect?</h2>
            <p>A note-taking tool designed to mirror the way we think</p>
          </div>
          <div className="note-item">
            <h2>Today I started using Reflect</h2>
            <p>Our brains remember things through associations. Reflect mimics this by backlinking notes to each other.</p>
          </div>
        </div>
      </main>

      <aside className="calendar">
        <div className="calendar-header">
          <h3>April 2023</h3>
          <div className="calendar-nav">
            <button>←</button>
            <button>→</button>
          </div>
        </div>
        <div className="weekdays">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
        <div className="calendar-grid">
          {calendarDays.map(day => (
            <div key={day} className={`calendar-day ${day === 2 ? 'active' : ''}`}>
              {day}
            </div>
          ))}
        </div>
      </aside>

      <style>{`
        .app {
          display: grid;
          grid-template-columns: 250px 1fr 300px;
          height: 100vh;
          background: #0a0a16;
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .sidebar {
          padding: 1rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .search-container {
          position: relative;
          margin-bottom: 2rem;
        }

        .search-container input {
          width: 100%;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 6px;
          color: white;
        }

        .command-key {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .content {
          padding: 2rem;
          overflow-y: auto;
        }

        .content-header {
          margin-bottom: 2rem;
        }

        .note-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 8px;
        }

        .note-item h2 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .note-item p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .calendar {
          padding: 1rem;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .calendar-nav button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px 8px;
        }

        .calendar-nav button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .calendar-day:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .calendar-day.active {
          background: rgba(147, 51, 234, 0.5);
        }

        /* Purple glow effect */
        .app::before {
          content: '';
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </div>
  )
}

