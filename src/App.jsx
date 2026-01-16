import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Overview from './pages/Overview.jsx'
import Operations from './pages/Operations.jsx'
import Alerts from './pages/Alerts.jsx'
import About from './pages/About.jsx'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('quantops_theme') || 'dark')

  useEffect(() => {
    if(theme === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('quantops_theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <Layout onToggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}
