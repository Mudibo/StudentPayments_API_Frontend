import React, { useRef, useState, useEffect } from 'react';
import './AuthPage.css';
import AuthLeft from '../components/auth/AuthLeft';
import MobileLogo from '../components/auth/MobileLogo';
import TabSwitcher from '../components/auth/TabSwitcher';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function AuthPage() {
  const authRightRef = useRef(null);
  const [activeTab, setActiveTab] = useState('login');

  // Tab switching
  function switchTab(tab) {
    setActiveTab(tab);
    if (authRightRef.current) {
      authRightRef.current.scrollTop = 0;
    }
  }

  // Password toggle
  function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      btn.style.opacity = '0.5';
    } else {
      input.type = 'password';
      btn.style.opacity = '1';
    }
  }

  // Checkbox toggle
  function toggleCheck(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('checked');
  }

  // Password strength
  useEffect(() => {
    const pwInput = document.getElementById('signupPw');
    const bars = Array.from(document.querySelectorAll('#pwStrength .pw-bar'));
    if (!pwInput || bars.length !== 4) return;
    function updateStrength() {
      const val = pwInput.value;
      let strength = 0;
      if (val.length >= 6) strength++;
      if (val.length >= 10) strength++;
      if (/[A-Z]/.test(val) || /[0-9]/.test(val)) strength++;
      if (/[^A-Za-z0-9]/.test(val) && val.length >= 8) strength++;
      const colors = ['#E24B4A', '#EF9F27', '#C9A84C', '#1D9E75'];
      bars.forEach((bar, i) => {
        bar.style.background = i < strength ? colors[Math.min(strength - 1, 3)] : 'rgba(15,26,61,0.1)';
        bar.style.transition = 'background 0.2s';
      });
    }
    pwInput.addEventListener('input', updateStrength);
    return () => pwInput.removeEventListener('input', updateStrength);
  }, []);

  // Initial tab state
  useEffect(() => {
    setActiveTab('login');
  }, []);

  return (
    <>
    <div className="auth-page">
      <AuthLeft />
      <div className="auth-right" ref={authRightRef}>
        <MobileLogo />
        <TabSwitcher activeTab={activeTab} onSwitch={switchTab} />
        {activeTab === 'login' ? (
          <LoginForm onSwitchTab={switchTab} togglePw={togglePw} toggleCheck={toggleCheck} />
        ) : (
          <SignupForm onSwitchTab={switchTab} togglePw={togglePw} toggleCheck={toggleCheck} />
        )}
      </div>
    </div>
    </>
  );
}

export default AuthPage;
