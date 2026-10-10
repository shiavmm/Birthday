import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { WashiTape } from './WashiTape';
import { PaperClip } from './PaperClip';

export interface ScrapbookImageProps {
  src: string;
  alt: string;
  caption?: string;
  subnote?: string;
  date?: string;
  aspect?: 'portrait' | 'landscape' | 'square' | 'tall' | 'wide' | 'auto';
  rotation?: number;
  tapeVariant?: 'blush' | 'craft' | 'cherry' | 'dots' | 'none';
  hasPaperclip?: boolean;
  className?: string;
  onClick?: () => void;
  isPolaroid?: boolean;
}

export const ScrapbookImage: React.FC<ScrapbookImageProps> = ({
  src,
  alt,
  caption,
  subnote,
  date,
  aspect = 'portrait',
  rotation = 0,
  tapeVariant = 'blush',
  hasPaperclip = false,
  className = '',
  onClick,
  isPolaroid = true,
}) => {
  const [hasError, setHasError] = useState(false);

  // Extract clean filename from src (e.g., "memory-01.jpg")
  const filename = src.split('/').pop() || 'photo.jpg';

  const getAspectRatioPadding = () => {
    switch (aspect) {
      case 'portrait':
        return '133%'; // 3:4
      case 'tall':
        return '150%'; // 2:3
      case 'landscape':
        return '75%'; // 4:3
      case 'wide':
        return '62.5%'; // 16:10
      case 'square':
        return '100%';
      case 'auto':
      default:
        return '100%';
    }
  };

  const imageContent = (
    <div
      className="polaroid-photo-box"
      style={{
        paddingTop: getAspectRatioPadding(),
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={onClick ? `View photo: ${alt}` : undefined}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          className="scrapbook-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <div className="scrapbook-placeholder-stamp">PHOTO SPOT</div>
          <Camera size={26} strokeWidth={1.5} color="#8B7569" style={{ opacity: 0.85 }} />
          <span className="scrapbook-placeholder-filename">{filename}</span>
          <span className="scrapbook-placeholder-tip">Add your photo in public/images/</span>
        </div>
      )}

      {date && (
        <span
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            background: 'rgba(53, 42, 40, 0.72)',
            color: '#FFFDF8',
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1rem',
            padding: '2px 8px',
            borderRadius: '3px',
            backdropFilter: 'blur(2px)',
            pointerEvents: 'none',
          }}
        >
          {date}
        </span>
      )}
    </div>
  );

  if (!isPolaroid) {
    return (
      <div
        className={`scrapbook-image-raw ${className}`}
        style={{
          transform: rotation ? `rotate(${rotation}deg)` : undefined,
          position: 'relative',
        }}
      >
        {tapeVariant !== 'none' && (
          <WashiTape variant={tapeVariant} position="top-center" />
        )}
        {hasPaperclip && <PaperClip style={{ top: '-14px', right: '14px' }} />}
        {imageContent}
      </div>
    );
  }

  return (
    <div
      className={`polaroid-frame ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
    >
      {tapeVariant !== 'none' && (
        <WashiTape
          variant={tapeVariant}
          position={rotation < 0 ? 'top-right' : 'top-left'}
        />
      )}
      {hasPaperclip && <PaperClip style={{ top: '-12px', right: '18px' }} />}
      {imageContent}
      {caption && <div className="polaroid-caption">{caption}</div>}
      {subnote && <div className="polaroid-subnote">{subnote}</div>}
    </div>
  );
};
