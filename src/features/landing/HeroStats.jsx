import './HeroStats.css';

export default function HeroStats() {
  return (
    <section className="hero-stats-section">
      <div className="hero-stats-grid">
        <div className="hero-stats-item">
          <span className="hero-stats-number">12K+</span>
          <span className="hero-stats-label">Registered students</span>
        </div>
        <div className="hero-stats-item">
          <span className="hero-stats-number">24/7</span>
          <span className="hero-stats-label">Portal Uptime</span>
        </div>
        <div className="hero-stats-item">
          <span className="hero-stats-number">50+</span>
          <span className="hero-stats-label">Programs managed</span>
        </div>
      </div>
    </section>
  );
}