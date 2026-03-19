import React from 'react';

function TabSwitcher({ activeTab, onSwitch }) {
  return (
    <div className="tab-switcher">
      <button id="loginTab" className={`tab-btn${activeTab === 'login' ? ' active' : ''}`} onClick={() => onSwitch('login')}>Log In</button>
      <button id="signupTab" className={`tab-btn${activeTab === 'signup' ? ' active' : ''}`} onClick={() => onSwitch('signup')}>Create Account</button>
    </div>
  );
}

export default TabSwitcher;
