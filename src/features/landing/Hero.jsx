
import './Hero.css';

function PersonIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#0f1a3d" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="5.2" r="2.2"/>
      <path d="M3.5 13c0-2.1 5-2.1 5 0" strokeLinecap="round"/>
    </svg>
  );
}
function DocumentIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="2"/>
      <line x1="5" y1="6" x2="11" y2="6"/>
      <line x1="5" y1="9" x2="11" y2="9"/>
    </svg>
  );
}
function ShieldGoldIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2l6 2.5v5c0 4-6 6-6 6s-6-2-6-6v-5L8 2z"/>
    </svg>
  );
}
function ClockGoldIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6"/>
      <path d="M8 4v4l2.5 2.5" strokeLinecap="round"/>
    </svg>
  );
}
function CheckGoldIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function FeatureDocIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="2"/>
      <line x1="5" y1="6" x2="11" y2="6"/>
      <line x1="5" y1="9" x2="11" y2="9"/>
    </svg>
  );
}
function FeatureTrendIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#5DCAA5" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <polyline points="3,13 7,9 10,12 13,5" strokeLinecap="round"/>
    </svg>
  );
}
function FeaturePersonCheckIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#85B7EB" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="5.2" r="2.2"/>
      <path d="M3.5 13c0-2.1 5-2.1 5 0" strokeLinecap="round"/>
      <path d="M12 8l2 2-2 2" strokeLinecap="round"/>
    </svg>
  );
}
function FeatureGridIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#F0997B" strokeWidth="1.3" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1"/>
      <rect x="9" y="2" width="5" height="5" rx="1"/>
      <rect x="2" y="9" width="5" height="5" rx="1"/>
      <rect x="9" y="9" width="5" height="5" rx="1"/>
    </svg>
  );
}
function StatsShieldIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M7 1l5 2v4c0 3-5 5-5 5S2 10 2 7V3l5-2z"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Decorative elements */}
      <div className="hero-deco hero-deco-large"></div>
      <div className="hero-deco hero-deco-small"></div>
      <div className="hero-deco hero-deco-dotgrid"></div>

      <div className="hero-grid">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line"></div>
            <span className="hero-eyebrow-label">Student & Admin Portal</span>
          </div>
          <h1 className="hero-headline">
            One Portal.<br />
            <em>Every Service.</em><br />
            Everyone.
          </h1>
          <p className="hero-subheading">
            Students access fee statements, payment history and notices. Administrators manage dues, verify bank payments, and oversee all registered students — from a single secure dashboard.
          </p>
          <div className="hero-cta-row">
            <button className="hero-btn hero-btn-primary">
              <span className="hero-btn-icon"><PersonIcon /></span>
              Login
            </button>
          </div>
          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <span className="hero-trust-icon"><ShieldGoldIcon /></span>
              <span>256-bit SSL encrypted</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon"><ClockGoldIcon /></span>
              <span>24/7 portal access</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon"><CheckGoldIcon /></span>
              <span>Bank-verified payments</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div className="hero-section-label">Platform features</div>
          <div className="hero-feature-grid">
            <div className="hero-feature-card hero-feature-card-core">
              <div className="hero-feature-icon" style={{background: 'rgba(201,168,76,0.18)'}}><FeatureDocIcon /></div>
              <div className="hero-feature-title">Student Dues Management</div>
              <div className="hero-feature-desc">Admins add, edit and track fee schedules per student</div>
            </div>
            <div className="hero-feature-card">
              <div className="hero-feature-icon" style={{background: 'rgba(29,158,117,0.18)'}}><FeatureTrendIcon /></div>
              <div className="hero-feature-title">Bank Payment Notifications</div>
              <div className="hero-feature-desc">Real-time alerts when payments are confirmed by the bank</div>
            </div>
            <div className="hero-feature-card">
              <div className="hero-feature-icon" style={{background: 'rgba(55,138,221,0.18)'}}><FeaturePersonCheckIcon /></div>
              <div className="hero-feature-title">Student Registry</div>
              <div className="hero-feature-desc">View, search and manage all registered students</div>
            </div>
            <div className="hero-feature-card">
              <div className="hero-feature-icon" style={{background: 'rgba(216,90,48,0.18)'}}><FeatureGridIcon /></div>
              <div className="hero-feature-title">Role-Based Dashboards</div>
              <div className="hero-feature-desc">Personalised views tailored for students and administrators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
