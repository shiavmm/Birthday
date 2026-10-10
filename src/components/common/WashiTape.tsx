import React from 'react';

interface WashiTapeProps {
  variant?: 'blush' | 'craft' | 'cherry' | 'dots';
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-right' | 'custom';
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  variant = 'blush',
  position = 'top-center',
  className = '',
  style = {},
  width,
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'craft':
        return {
          backgroundColor: 'rgba(215, 190, 160, 0.72)',
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 117, 105, 0.08) 10px, rgba(139, 117, 105, 0.08) 20px)',
        };
      case 'cherry':
        return {
          backgroundColor: 'rgba(166, 43, 54, 0.35)',
          backgroundImage:
            'radial-gradient(circle, rgba(255, 253, 248, 0.4) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        };
      case 'dots':
        return {
          backgroundColor: 'rgba(233, 199, 197, 0.75)',
          backgroundImage:
            'radial-gradient(circle, rgba(166, 43, 54, 0.3) 1.2px, transparent 1.2px)',
          backgroundSize: '10px 10px',
        };
      case 'blush':
      default:
        return {
          backgroundColor: 'rgba(233, 199, 197, 0.75)',
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255, 255, 255, 0.35) 12px, rgba(255, 255, 255, 0.35) 24px)',
        };
    }
  };

  const positionClass =
    position === 'custom' ? '' : `washi-tape-${position}`;

  return (
    <div
      className={`washi-tape ${positionClass} ${className}`}
      style={{
        ...getVariantStyles(),
        ...(width ? { width } : {}),
        clipPath:
          'polygon(0% 4%, 2% 0%, 98% 2%, 100% 6%, 99% 94%, 97% 100%, 3% 98%, 0% 92%)',
        ...style,
      }}
      aria-hidden="true"
    />
  );
};
