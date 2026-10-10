import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryPhoto } from '../data/birthdayContent';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else {
          onNavigate(photos.length - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < photos.length - 1) {
          onNavigate(currentIndex + 1);
        } else {
          onNavigate(0);
        }
      }
    },
    [isOpen, currentIndex, photos.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${currentPhoto.title}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFFDF8',
          marginBottom: '1rem',
          padding: '0 0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            opacity: 0.8,
            letterSpacing: '0.05em',
          }}
        >
          PHOTO {currentIndex + 1} OF {photos.length}
        </span>
        <button
          onClick={onClose}
          style={{
            color: '#FFFDF8',
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          aria-label="Close photo viewer"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Frame */}
      <div
        style={{
          position: 'relative',
          maxWidth: '850px',
          maxHeight: '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Navigation Buttons */}
        <button
          onClick={() =>
            onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1)
          }
          style={{
            position: 'absolute',
            left: '-52px',
            color: '#FFFDF8',
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            zIndex: 10,
          }}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          style={{
            background: '#FFFDF8',
            padding: '14px 14px 24px 14px',
            borderRadius: '4px',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
            maxWidth: '100%',
            maxHeight: '72vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            onError={(e) => {
              // Graceful placeholder inside lightbox if file missing
              e.currentTarget.style.display = 'none';
              const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextEl) nextEl.style.display = 'flex';
            }}
            style={{
              maxWidth: '100%',
              maxHeight: '56vh',
              objectFit: 'contain',
              borderRadius: '2px',
              display: 'block',
            }}
          />
          <div
            style={{
              display: 'none',
              width: '320px',
              height: '320px',
              maxWidth: '80vw',
              maxHeight: '50vh',
              backgroundColor: '#FAF4EB',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #C9B497',
              padding: '1.5rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#8B7569' }}>
              {currentPhoto.image}
            </span>
            <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', marginTop: '8px' }}>
              Add photograph to public folder
            </p>
          </div>

          <div style={{ marginTop: '14px', textAlign: 'center' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#352A28',
              }}
            >
              {currentPhoto.title}
            </h4>
            {currentPhoto.caption && (
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.25rem',
                  color: '#8B7569',
                  marginTop: '2px',
                }}
              >
                {currentPhoto.caption}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={() =>
            onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0)
          }
          style={{
            position: 'absolute',
            right: '-52px',
            color: '#FFFDF8',
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            zIndex: 10,
          }}
          aria-label="Next photograph"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
