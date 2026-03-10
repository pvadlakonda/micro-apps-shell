import { Link } from 'react-router-dom'

const APPS = [
  {
    slug: 'learning',
    label: 'Learning',
    description: 'Study tools, flashcards & progress tracking',
    icon: '📚',
    color: '#00f5a0',
    version: '1.0.0',
  },
  {
    slug: 'poker-calculator',
    label: 'Poker Calculator',
    description: 'Odds, outs & hand equity calculator',
    icon: '♠️',
    color: '#f5a623',
    version: '1.0.0',
  },
  {
    slug: 'kids',
    label: 'Kids',
    description: 'Games and activities for the little ones',
    icon: '🎨',
    color: '#f542a4',
    version: '1.0.0',
  },
]

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="header-eyebrow">
          <span className="dot" />
          <span>micro-apps.com</span>
        </div>
        <h1 className="home-title">
          Your Apps.<br />
          <span className="title-accent">One Place.</span>
        </h1>
        <p className="home-subtitle">
          Select an app to launch. Each one is independently built and deployed.
        </p>
      </header>

      <main className="app-grid">
        {APPS.map((app) => (
          <Link key={app.slug} to={`/${app.slug}`} className="app-card" style={{ '--accent': app.color }}>
            <div className="card-top">
              <span className="app-icon">{app.icon}</span>
              <span className="app-version">v{app.version}</span>
            </div>
            <div className="card-body">
              <h2 className="app-label">{app.label}</h2>
              <p className="app-description">{app.description}</p>
            </div>
            <div className="card-footer">
              <span className="card-path">/{app.slug}</span>
              <span className="card-arrow">→</span>
            </div>
            <div className="card-glow" />
          </Link>
        ))}
      </main>

      <footer className="home-footer">
        <span>Built with React · Git Submodules · React Router v6</span>
      </footer>
    </div>
  )
}
