
import './Header.css';
import './Header.fonts.css';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
];

function ShieldIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 2L18 5.5V10.5C18 16.5 10 20 10 20C10 20 2 16.5 2 10.5V5.5L10 2Z" fill="#C9A84C"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="rgba(201,168,76,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect y="6" width="28" height="3" rx="1.5" fill={open ? '#1a2560' : '#6b6f7c'} />
      <rect y="13" width="28" height="3" rx="1.5" fill={open ? 'rgba(201,168,76,0.9)' : '#6b6f7c'} />
      <rect y="20" width="28" height="3" rx="1.5" fill={open ? '#1a2560' : '#6b6f7c'} />
    </svg>
  );
}


import { useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sticky header scroll elevation
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu close on nav click
  const handleNavClick = (idx) => {
    setMenuOpen(false);
    setClickedIdx(idx);
    setMobileOpen(false);
  };

  // Hamburger click
  const handleHamburgerClick = () => setMobileOpen((v) => !v);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`} role="banner">
      {/* Brand Lockup */}
      <a href="#home" className="header-brand" aria-label="University XYZ Home">
        <span className="header-brand-icon">
          <span className="header-brand-icon-bg">
            <ShieldIcon />
          </span>
        </span>
        <span className="header-brand-text">
          <span className="header-brand-wordmark">University XYZ</span>
          <span className="header-brand-tagline">Advancing Knowledge</span>
        </span>
      </a>

      {/* Hamburger for mobile (always rendered, visible at <=768px) */}
      <button
        className="header-hamburger"
        aria-label="Toggle menu"
        type="button"
        onClick={handleHamburgerClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation (centered, responsive) */}
      <nav
        className="header-nav"
        aria-label="Main Navigation"
        id="header-nav-menu"
      >
        {NAV_LINKS.map(({ label, href }, idx) => {
          const isActive = clickedIdx === idx;
          return (
            <a
              key={href}
              href={href}
              className={`header-nav-link${isActive ? ' active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => handleNavClick(idx)}
            >
              {label}
            </a>
          );
        })}
        {/* Log In button for mobile dropdown */}
        {mobileOpen && (
          <button className="header-btn header-btn-ghost" type="button" style={{ width: '100%', textAlign: 'center', marginTop: 8, fontSize: 15, padding: '10px 12px' }}>Log In</button>
        )}
      </nav>

      {/* Actions (right) - visible except mobile */}
      <div className="header-actions">
        <button className="header-btn header-btn-ghost" type="button">Log In</button>
        <button className="header-btn header-btn-primary" type="button">
          <span className="header-btn-icon"><ArrowIcon /></span>
          Get Started
        </button>
      </div>
    </header>
  );
}
