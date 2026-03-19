import React from 'react';

function SignupForm({ onSwitchTab, togglePw, toggleCheck }) {
  return (
    <div className="form-panel" id="signupPanel">
      <div className="form-header">
        <div className="form-title">Create your <em>account.</em></div>
        <div className="form-sub">Fill in your details to register for portal access.</div>
      </div>
      <form autoComplete="off">
        <div className="form-section-label">Personal Information<div className="fsl-line"></div></div>
        <div className="form-row">
          <div>
            <label className="form-label" htmlFor="firstName">First Name <span className="asterisk">*</span></label>
            <input className="form-input" type="text" id="firstName" name="firstName" placeholder="e.g. Peter" required />
          </div>
          <div>
            <label className="form-label" htmlFor="lastName">Last Name <span className="asterisk">*</span></label>
            <input className="form-input" type="text" id="lastName" name="lastName" placeholder="e.g. Kenneth" required />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label className="form-label" htmlFor="signupEmail">Email Address <span className="asterisk">*</span></label>
            <input className="form-input" type="email" id="signupEmail" name="email" placeholder="pkenneth@gmail.com" required />
          </div>
          <div>
            <label className="form-label" htmlFor="mobileNumber">Mobile Number <span className="asterisk">*</span></label>
            <input className="form-input" type="tel" id="mobileNumber" name="mobileNumber" placeholder="e.g. 0723851904" required />
          </div>
        </div>
        <div className="form-section-label">Academic Details<div className="fsl-line"></div></div>
        <div className="form-row">
          <div>
            <label className="form-label" htmlFor="admissionNumber">Admission Number <span className="asterisk">*</span></label>
            <input className="form-input" type="text" id="admissionNumber" name="admissionNumber" placeholder="e.g. 98765" required />
          </div>
          <div>
            <label className="form-label" htmlFor="program">Program <span className="asterisk">*</span></label>
            <select className="form-input" id="program" name="program" required>
              <option value="" disabled selected>Select program</option>
              <option value="Law">Law</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Engineering">Engineering</option>
              <option value="Medicine">Medicine</option>
              <option value="Education">Education</option>
              <option value="Economics">Economics</option>
            </select>
          </div>
        </div>
        <div>
          <label className="form-label" htmlFor="enrollmentStatus">Enrollment Status <span className="asterisk">*</span></label>
          <select className="form-input" id="enrollmentStatus" name="enrollmentStatus" required>
            <option value="" disabled selected>Select enrollment status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Deferred">Deferred</option>
            <option value="Graduated">Graduated</option>
            <option value="Suspended">Suspended</option>
          </select>
          <div className="input-hint">Your current registration status with the university</div>
        </div>
        <div className="form-section-label">Security<div className="fsl-line"></div></div>
        <div>
          <label className="form-label" htmlFor="signupPw">Password <span className="asterisk">*</span></label>
          <div className="password-wrap">
            <input className="form-input" type="password" id="signupPw" name="password" placeholder="Create a strong password" required />
            <button type="button" className="pw-toggle" onClick={e => togglePw('signupPw', e.currentTarget)} aria-label="Show/hide password">
              <svg width="16" height="16" fill="none" stroke="rgba(15,26,61,0.35)" strokeWidth="1.2"><ellipse cx="8" cy="8" rx="6" ry="4.5"/><circle cx="8" cy="8" r="2"/></svg>
            </button>
          </div>
          <div className="input-hint">Minimum 8 characters — use a mix of letters and numbers</div>
          <div id="pwStrength">
            <div className="pw-bar"></div>
            <div className="pw-bar"></div>
            <div className="pw-bar"></div>
            <div className="pw-bar"></div>
          </div>
        </div>
        <div>
          <label className="form-label" htmlFor="confirmPw">Confirm Password <span className="asterisk">*</span></label>
          <div className="password-wrap">
            <input className="form-input" type="password" id="confirmPw" placeholder="Re-enter your password" required />
            <button type="button" className="pw-toggle" onClick={e => togglePw('confirmPw', e.currentTarget)} aria-label="Show/hide password">
              <svg width="16" height="16" fill="none" stroke="rgba(15,26,61,0.35)" strokeWidth="1.2"><ellipse cx="8" cy="8" rx="6" ry="4.5"/><circle cx="8" cy="8" r="2"/></svg>
            </button>
          </div>
        </div>
        <div className="checkbox-row" style={{ marginBottom: 4 }}>
          <div className="custom-checkbox" id="termsCheck" onClick={() => toggleCheck('termsCheck')} tabIndex={0} role="checkbox" aria-checked="false">
            <span className="checkmark">
              <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2"><polyline points="2,5 4,7 8,3"/></svg>
            </span>
          </div>
          <span className="checkbox-label">
            I agree to the <a className="form-link" href="#">Terms of Use</a> and <a className="form-link" href="#">Privacy Policy</a>
          </span>
        </div>
        <button type="button" className="submit-btn gold" style={{ marginTop: 20 }}>
          <svg width="15" height="15" fill="none" stroke="#0f1a3d" strokeWidth="1.5"><polyline points="3,8 7,12 12,4"/></svg>
          Create My Account
        </button>
        <div className="switch-text">
          Already have an account? <a onClick={() => onSwitchTab('login')}>Log in here</a>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
