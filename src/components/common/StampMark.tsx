import React from 'react';

interface StampMarkProps {
  type?: 'postmark' | 'seal' | 'badge';
  text?: string;
  subtext?: string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const StampMark: React.FC<StampMarkProps> = ({
  type = 'postmark',
  text = 'SPECIAL DELIVERY',
  subtext = 'OCT 21, 2026',
  rotation = -4,
  className = '',
  style = {},
}) => {
  if (type === 'seal') {
    return (
      <div
        className={`scrapbook-wax-seal ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#A62B36',
          color: '#FFFDF8',
          boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.25), 0 3px 8px rgba(135, 29, 38, 0.45)',
          border: '2px solid #871D26',
          transform: `rotate(${rotation}deg)`,
          userSelect: 'none',
          ...style,
        }}
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="#FFFDF8" stroke="#871D26" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (type === 'badge') {
    return (
      <div
        className={`scrapbook-stamp ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          ...style,
        }}
        aria-hidden="true"
      >
        <span>{text}</span>
        {subtext && <span style={{ fontSize: '0.62rem', opacity: 0.85 }}>{subtext}</span>}
      </div>
    );
  }

  // Default postmark with cancellation lines
  return (
    <div
      className={`scrapbook-postmark-group ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#A62B36',
        transform: `rotate(${rotation}deg)`,
        userSelect: 'none',
        opacity: 0.88,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          border: '1.5px solid #A62B36',
          borderRadius: '50%',
          width: '58px',
          height: '58px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2px',
          lineHeight: '1.1',
        }}
      >
        <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.08em' }}>{text}</span>
        <span style={{ fontSize: '0.6rem', fontWeight: 800, marginTop: '2px' }}>{subtext}</span>
      </div>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="#A62B36" strokeWidth="1.2">
        <path d="M0 4 Q 10 0 20 4 T 40 4" />
        <path d="M0 12 Q 10 8 20 12 T 40 12" />
        <path d="M0 20 Q 10 16 20 20 T 40 20" />
      </svg>
    </div>
  );
};
