import React from 'react'
import { opsTickets } from '../data/mockData'

export default function Operations(){
  return (
    <section className="grid">
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Ops Workboard</h3>
            <p className="card-sub">Incident & pipeline health (mock)</p>
          </div>
          <span className="badge">SLA</span>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr><th>ID</th><th>Title</th><th>Priority</th><th>Status</th><th>Owner</th></tr>
            </thead>
            <tbody>
              {opsTickets.map(t => (
                <tr key={t.id}>
                  <td><span className="badge">{t.id}</span></td>
                  <td style={{color:'var(--text)'}}>{t.title}</td>
                  <td><span className="badge">{t.priority}</span></td>
                  <td>{t.status}</td>
                  <td>{t.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Runbook</h3>
            <p className="card-sub">What this project demonstrates</p>
          </div>
          <span className="badge">React</span>
        </div>
        <div className="card-body" style={{color:'var(--muted)', lineHeight:1.7}}>
          <ul style={{margin:0, paddingLeft:18}}>
            <li>React Router SPA navigation</li>
            <li>Deploy-ready Netlify config (SPA redirect)</li>
            <li>Component-driven layout + theme toggle</li>
            <li>Mock data layer for quick iteration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
