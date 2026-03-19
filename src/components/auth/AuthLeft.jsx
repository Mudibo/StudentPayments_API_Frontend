import React from 'react';


function AuthLeft() {
  return (
    <div className="auth-left">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <div className="dot-grid"></div>
      <div className="content">
        <div className="logo-lockup">
          <div className="crest">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l7 3v5c0 5-3.5 8-7 8s-7-3-7-8V5l7-3z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/></svg>
          </div>
          <div className="wordmark">
            <span className="uni">University XYZ</span>
            <span className="eyebrow">Advancing Knowledge</span>
          </div>
        </div>
        <div className="eyebrow-row">
          <div className="gold-line"></div>
          <span className="eyebrow-text">Student & Admin Portal</span>
        </div>
        <h1>
          Your gateway<br />to <em>seamless</em><br />management.
        </h1>
        <p>Access fee statements, payment history, student records and institutional tools — all from one secure dashboard.</p>
        <div className="feature-list">
          <div className="feature-item">
            <div className="icon-wrap">
              <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2"><rect x="2" y="2" width="10" height="10" rx="2"/><line x1="4" y1="5" x2="10" y2="5"/><line x1="4" y1="7" x2="10" y2="7"/><line x1="4" y1="9" x2="7" y2="9"/></svg>
            </div>
            <span className="feature-text">View and manage student dues</span>
          </div>
          <div className="feature-item">
            <div className="icon-wrap">
              <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2"><polyline points="2,12 6,7 9,10 12,2"/><circle cx="2" cy="12" r="1"/><circle cx="6" cy="7" r="1"/><circle cx="9" cy="10" r="1"/><circle cx="12" cy="2" r="1"/></svg>
            </div>
            <span className="feature-text">Track bank payment notifications</span>
          </div>
          <div className="feature-item">
            <div className="icon-wrap">
              <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2"><circle cx="7" cy="5" r="2.5"/><path d="M2.5 11c0-2.2 4-2.2 4-2.2s4 0 4 2.2"/></svg>
            </div>
            <span className="feature-text">Personalised role-based dashboard</span>
          </div>
          <div className="feature-item">
            <div className="icon-wrap">
              <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2"><path d="M7 2l5 2v3c0 3-2.5 5-5 5s-5-2-5-5V4l5-2z"/></svg>
            </div>
            <span className="feature-text">256-bit SSL encrypted access</span>
          </div>
        </div>
      </div>
      <a className="bottom-link" href="/">
        <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"><polyline points="8,3 4,6 8,9"/></svg>
        Back to main site
      </a>
    </div>
  );
}

export default AuthLeft;
