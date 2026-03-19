import './Footer.css';

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L16 5.5V10.5C16 15.5 9 18 9 18C9 18 2 15.5 2 10.5V5.5L9 2Z" fill="#C9A84C" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1.5A5.5 5.5 0 1 0 7 12.5A5.5 5.5 0 1 0 7 1.5Z"/><path d="M8.5 4.5h-1c-.6 0-1 .4-1 1v1h-1v1h1v3h1v-3h1l.5-1h-1.5v-1c0-.3.2-.5.5-.5h1V4.5z"/></svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 3l8 8"/><path d="M11 3l-8 8"/></svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="2" width="10" height="10" rx="2"/><path d="M4 5v4"/><path d="M7 5v4"/><path d="M7 5c0-1.1 2-1.1 2 0v4"/></svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="2" width="10" height="10" rx="3"/><circle cx="7" cy="7" r="2"/><circle cx="10.5" cy="3.5" r="0.7"/></svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6h8M8 3l3 3-3 3"/></svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 2.5a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 5.5-3.5 5.5S3.5 8.5 3.5 6A3.5 3.5 0 0 1 7 2.5z"/><circle cx="7" cy="6" r="1" fill="#C9A84C"/></svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="3" width="10" height="8" rx="2"/><path d="M2 3l5 4 5-4"/></svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 2.5c1.5 3.5 5.5 7.5 7 7.5l1.5-1.5c.5-.5.5-1.5-.5-2l-2-1c-.5-.5-1.5-.5-2 0l-1 2c-.5.5-1.5.5-2 0l-1.5-1.5c-.5-.5-.5-1.5.5-2l2-1c.5-.5 1.5-.5 2 0l1 2c.5.5 1.5.5 2 0l1.5-1.5c.5-.5.5-1.5-.5-2l-2-1c-.5-.5-1.5-.5-2 0l-1 2c-.5.5-1.5.5-2 0l-1.5-1.5c-.5-.5-.5-1.5.5-2z"/></svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Newsletter Banner */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-deco footer-newsletter-deco1"></div>
        <div className="footer-newsletter-deco footer-newsletter-deco2"></div>
        <div className="footer-newsletter-content">
          <div className="footer-newsletter-left">
            <div className="footer-newsletter-eyebrow">
              <div className="footer-newsletter-eyebrow-line"></div>
              <span className="footer-newsletter-eyebrow-label">Stay informed</span>
            </div>
            <h3 className="footer-newsletter-title">
              University updates,<br />
              <em>straight to your inbox.</em>
            </h3>
            <p className="footer-newsletter-desc">
              Fee deadlines, academic notices, and portal announcements — never missed.
            </p>
          </div>
          <div className="footer-newsletter-right">
            <form className="footer-newsletter-form">
              <div className="footer-newsletter-input-row">
                <input type="email" placeholder="Enter your university email address" className="footer-newsletter-input" />
                <button type="submit" className="footer-newsletter-btn">Subscribe</button>
              </div>
              <p className="footer-newsletter-disclaimer">We only send institutional notices. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-lockup">
              <div className="footer-brand-icon"><ShieldIcon /></div>
              <div className="footer-brand-wordmark">
                <span className="footer-brand-title">University XYZ</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              A secure, unified portal for students and administrators. Manage dues, payments, and institutional records — all in one place.
            </p>
            <div className="footer-social-row">
              <button className="footer-social-btn"><FacebookIcon /></button>
              <button className="footer-social-btn"><XIcon /></button>
              <button className="footer-social-btn"><LinkedInIcon /></button>
              <button className="footer-social-btn"><InstagramIcon /></button>
            </div>
          </div>
          {/* Quick Links Column */}
          <div className="footer-col footer-col-links">
            <div className="footer-col-title">Quick Links</div>
            <nav className="footer-links-nav">
              <a href="#home">Home <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#about">About Us <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#features">Features <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#testimonials">Testimonials <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#contact">Contact Us <span className="footer-link-arrow"><ArrowIcon /></span></a>
            </nav>
          </div>
          {/* Portal Access Column */}
          <div className="footer-col footer-col-portal">
            <div className="footer-col-title">Portal Access</div>
            <nav className="footer-links-nav">
              <a href="#student-login">Login <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#fee-statements">Fee Statements <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#payment-history">Payment History <span className="footer-link-arrow"><ArrowIcon /></span></a>
              <a href="#support">Support <span className="footer-link-arrow"><ArrowIcon /></span></a>
            </nav>
          </div>
          {/* Contact Us Column */}
          <div className="footer-col footer-col-contact">
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><PinIcon /></div>
                <div className="footer-contact-text">
                  <strong className="footer-contact-label">Campus Address</strong>
                  <span className="footer-contact-detail">123 University Avenue, Nairobi, Kenya 00100</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><MailIcon /></div>
                <div className="footer-contact-text">
                  <strong className="footer-contact-label">Email Address</strong>
                  <span className="footer-contact-detail">info@universityxyz.ac.ke<br />support@universityxyz.ac.ke</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><PhoneIcon /></div>
                <div className="footer-contact-text">
                  <strong className="footer-contact-label">Phone</strong>
                  <span className="footer-contact-detail">+254 700 000 000<br />Mon – Fri, 8am – 5pm EAT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Legal Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-copyright">
            © {new Date().getFullYear()}<span className="footer-bottom-university"> University XYZ</span>. All rights reserved.
          </p>
          <div className="footer-bottom-legal">
            <a href="#privacy">Privacy Policy</a>
            <div className="footer-bottom-divider"></div>
            <a href="#terms">Terms of Use</a>
            <div className="footer-bottom-divider"></div>
            <a href="#cookies">Cookie Policy</a>
            <div className="footer-bottom-divider"></div>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

