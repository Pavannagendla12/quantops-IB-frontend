import React from 'react'
import { alerts } from '../data/mockData'

export default function Alerts(){
  return (
    <section className="grid">
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Alerts Feed</h3>
            <p className="card-sub">Risk, Ops, Security, and Data notifications</p>
          </div>
          <span className="badge">Live</span>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr><th>Time</th><th>Type</th><th>Message</th><th>Severity</th></tr>
            </thead>
            <tbody>
              {alerts.map((a, idx) => (
                <tr key={idx}>
                  <td>{a.time}</td>
                  <td><span className="badge">{a.type}</span></td>
                  <td style={{color:'var(--text)'}}>{a.message}</td>
                  <td><span className={`badge ${a.severity}`}>{a.severity}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Interview Talking Points</h3>
            <p className="card-sub">How to explain this project</p>
          </div>
          <span className="badge">Notes</span>
        </div>
        <div className="card-body" style={{color:'var(--muted)', lineHeight:1.7}}>
          <p style={{marginTop:0}}>
            Built a QuantOps dashboard showcasing KPI monitoring, operational health, and alerts visualization.
            Designed for fast iteration and frictionless static deployment.
          </p>
          <ul style={{margin:0, paddingLeft:18}}>
            <li>Component-based layout and routing</li>
            <li>Mock data layer ready for API integration</li>
            <li>Netlify SPA routing via redirects</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
