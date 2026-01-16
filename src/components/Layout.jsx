import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children, onToggleTheme }) {
  return (
    <div className="container">
      <header className="topbar">
        <div className="brand">
          <div className="brand-badge">Q</div>
          <div>
            <h1>QuantOps Dashboard</h1>
            <p>Portfolio project by <b>pavannagendla</b></p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>Overview</NavLink>
          <NavLink to="/operations">Operations</NavLink>
          <NavLink to="/alerts">Alerts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="actions">
          <button className="pill ghost" onClick={onToggleTheme}>Toggle theme</button>
          <a className="pill" href="https://github.com/pavannagendla12" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <main>
        {children}
        <div className="footer">© {new Date().getFullYear()} pavannagendla · QuantOps React + Vite</div>
      </main>
    </div>
  )
}
