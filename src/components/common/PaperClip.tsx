import React from 'react';

interface PaperClipProps {
  color?: 'cherry' | 'brass' | 'silver';
  className?: string;
  style?: React.CSSProperties;
}

export const PaperClip: React.FC<PaperClipProps> = ({
  color = 'cherry',
  className = '',
  style = {},
}) => {
  const strokeColor =
    color === 'cherry'
      ? '#A62B36'
      : color === 'brass'
      ? '#B5935B'
      : '#8B7569';

  return (
    <svg
      viewBox="0 0 24 56"
      width="20"
      height="46"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`scrapbook-paperclip ${className}`}
      style={{
        position: 'absolute',
        filter: 'drop-shadow(1px 2px 2px rgba(53, 42, 40, 0.25))',
        zIndex: 6,
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      <path d="M12 4 C6 4 6 14 6 36 C6 48 18 48 18 36 C18 16 18 10 18 10 C18 2 12 2 10 2 C4 2 2 10 2 26 C2 44 2 52 14 52 C22 52 22 42 22 24" />
    </svg>
  );
};
