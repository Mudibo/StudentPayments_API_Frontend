import React from 'react';

function MobileLogo() {
  return (
    <div className="mobile-logo">
      <div className="crest">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l7 3v5c0 5-3.5 8-7 8s-7-3-7-8V5l7-3z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/></svg>
      </div>
      <div className="wordmark">
        <span className="uni" style={{ color: '#0f1a3d' }}>University XYZ</span>
        <span className="eyebrow">Advancing Knowledge</span>
      </div>
    </div>
  );
}

export default MobileLogo;
