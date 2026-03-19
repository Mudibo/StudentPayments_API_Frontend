import React from 'react';

function LoginForm({ onSwitchTab, togglePw, toggleCheck }) {
  return (
    <div className="form-panel" id="loginPanel">
      <div className="form-header">
        <div className="form-title">Welcome <em>back.</em></div>
        <div className="form-sub">Enter your credentials to access your dashboard.</div>
      </div>
      <form autoComplete="off">
        <label className="form-label" htmlFor="loginEmail">Email Address <span className="asterisk">*</span></label>
        <input className="form-input" type="email" id="loginEmail" name="email" placeholder="your@university.ac.ke" required />
        <label className="form-label" htmlFor="loginPw">Password <span className="asterisk">*</span></label>
        <div className="password-wrap">
          <input className="form-input" type="password" id="loginPw" name="password" placeholder="Enter your password" required />
          <button type="button" className="pw-toggle" onClick={e => togglePw('loginPw', e.currentTarget)} aria-label="Show/hide password">
            <svg width="16" height="16" fill="none" stroke="rgba(15,26,61,0.35)" strokeWidth="1.2"><ellipse cx="8" cy="8" rx="6" ry="4.5"/><circle cx="8" cy="8" r="2"/></svg>
          </button>
        </div>
        <div className="form-footer-row">
          <div className="checkbox-row">
            <div className="custom-checkbox" id="rememberMe" onClick={() => toggleCheck('rememberMe')} tabIndex={0} role="checkbox" aria-checked="false">
              <span className="checkmark">
                <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2"><polyline points="2,5 4,7 8,3"/></svg>
              </span>
            </div>
            <span className="checkbox-label">Remember me</span>
          </div>
          <a className="form-link" href="#">Forgot password?</a>
        </div>
        <button type="button" className="submit-btn gold">
          <svg width="15" height="15" fill="none" stroke="#0f1a3d" strokeWidth="1.2"><circle cx="7.5" cy="7.5" r="6"/><path d="M7.5 4.5v3.5l2.5 2"/></svg>
          Log In to Portal
        </button>
        <div className="switch-text">
          Don't have an account? <a onClick={() => onSwitchTab('signup')}>Create one here</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
