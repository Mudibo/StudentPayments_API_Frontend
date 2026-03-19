import './Features.css';

function DocIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="#1a2560" strokeWidth="1.5" viewBox="0 0 20 20" aria-hidden="true">
      <rect x="4" y="4" width="12" height="12" rx="2"/>
      <line x1="7" y1="7" x2="13" y2="7" />
      <line x1="7" y1="10" x2="13" y2="10" />
      <line x1="7" y1="13" x2="13" y2="13" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="#1a2560" strokeWidth="1.5" viewBox="0 0 20 20" aria-hidden="true">
      <polyline points="3,17 7,8 10,11 14,5" strokeLinecap="round" />
    </svg>
  );
}
function PersonCheckIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="#1a2560" strokeWidth="1.5" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.5" />
      <path d="M4.5 17c0-3.2 7-3.2 7 0" strokeLinecap="round" />
      <polyline points="14,13 16,15 18,13" strokeLinecap="round" />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Key Features</h2>
        <p>Everything your institution needs to manage students, payments and communication in one place.</p>
      </div>
      <div className="features-grid">
        <div className="features-card">
          <div className="features-icon-wrapper"><DocIcon /></div>
          <div className="features-card-title">Dues Management</div>
          <div className="features-card-desc">Create and assign fee schedules to individual students or groups.</div>
        </div>
        <div className="features-card">
          <div className="features-icon-wrapper"><TrendIcon /></div>
          <div className="features-card-title">Payment Tracking</div>
          <div className="features-card-desc">Receive instant bank notifications and reconcile payments automatically.</div>
        </div>
        <div className="features-card">
          <div className="features-icon-wrapper"><PersonCheckIcon /></div>
          <div className="features-card-title">Student Registry</div>
          <div className="features-card-desc">Centralised record of all enrolled students with search and filter tools.</div>
        </div>
      </div>
    </section>
  );
}
