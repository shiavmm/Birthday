import React, { useState, useEffect, useCallback } from 'react';
import { Mail, X, Heart, Feather } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import type { OpenWhenLetter } from '../data/birthdayContent';
import { WashiTape } from './common/WashiTape';
import { StampMark } from './common/StampMark';

export const OpenWhenLetters: React.FC = () => {
  const { openWhen } = birthdayContent;
  const [activeLetter, setActiveLetter] = useState<OpenWhenLetter | null>(null);

  // Keyboard navigation: Escape key closes the letter modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeLetter) {
        setActiveLetter(null);
      }
    },
    [activeLetter]
  );

  useEffect(() => {
    if (activeLetter) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLetter, handleKeyDown]);

  return (
    <section id="open-when-letters" className="scrapbook-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Mail size={14} />
            <span>LETTERS ON STANDBY</span>
          </div>
          <h2 className="section-title">{openWhen.heading}</h2>
          <p className="section-subtitle">{openWhen.subheading}</p>
        </div>

        {/* Envelopes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {openWhen.letters.map((letter, index) => {
            const rotations = [-1.5, 1.2, -2, 1.8, -1];
            const rotation = rotations[index % rotations.length];

            return (
              <div
                key={letter.id}
                role="button"
                tabIndex={0}
                aria-label={`${letter.trigger}. Click to open letter.`}
                onClick={() => setActiveLetter(letter)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveLetter(letter);
                  }
                }}
                className="scrapbook-envelope-card"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  minHeight: '230px',
                }}
              >
                {/* Washi Tape */}
                <WashiTape
                  variant={index % 2 === 0 ? 'dots' : 'craft'}
                  position="top-right"
                  width="65px"
                />

                {/* Envelope Top info */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--color-cherry)',
                        textTransform: 'uppercase',
                        border: '1px solid var(--color-cherry)',
                        padding: '2px 7px',
                        borderRadius: '3px',
                      }}
                    >
                      {letter.stampText}
                    </span>

                    {letter.dateTag && (
                      <span
                        style={{
                          fontFamily: 'var(--font-handwriting)',
                          fontSize: '1.15rem',
                          color: 'var(--color-muted-brown)',
                        }}
                      >
                        {letter.dateTag}
                      </span>
                    )}
                  </div>

                  {/* Letter Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 2.4vw, 1.45rem)',
                      lineHeight: '1.3',
                      color: 'var(--color-ink)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {letter.trigger}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-ink-muted)',
                      lineHeight: '1.5',
                    }}
                  >
                    {letter.preview}
                  </p>
                </div>

                {/* Bottom Wax Seal Accent */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed var(--color-border-paper)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-cherry)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <Mail size={15} />
                    <span>Open letter</span>
                  </span>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-cherry)',
                      color: '#FFFDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 5px rgba(166, 43, 54, 0.35)',
                    }}
                    aria-hidden="true"
                  >
                    <Heart size={14} fill="#FFFDF8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Open Letter Viewer */}
        {activeLetter && (
          <div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveLetter(null);
            }}
          >
            <div className="letter-paper-sheet">
              {/* Top Washi Tape */}
              <WashiTape variant="cherry" position="top-center" width="100px" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveLetter(null)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-blush-soft)',
                  color: 'var(--color-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border-paper)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                }}
                aria-label="Close letter"
              >
                <X size={18} />
              </button>

              {/* Letterhead Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.75rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px dashed var(--color-border-paper)',
                  paddingRight: '2rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-cherry)',
                    }}
                  >
                    {activeLetter.stampText}
                  </span>
                  <h3
                    id="letter-modal-title"
                    style={{
                      fontSize: 'clamp(1.35rem, 3vw, 1.8rem)',
                      color: 'var(--color-ink)',
                      marginTop: '4px',
                    }}
                  >
                    {activeLetter.trigger}
                  </h3>
                </div>

                <div style={{ display: 'none' }}>
                  <StampMark type="postmark" text="AIR MAIL" subtext="TO ANJALI" />
                </div>
              </div>

              {/* Letter Paragraphs */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  fontSize: '1.05rem',
                  color: 'var(--color-ink)',
                  lineHeight: '1.85',
                  marginBottom: '2.5rem',
                }}
              >
                {activeLetter.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Signature */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border-paper)',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--color-muted-brown)',
                      fontSize: '0.82rem',
                    }}
                  >
                    <Feather size={14} />
                    <span>Signed in permanent ink</span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-handwriting)',
                      fontSize: '1.75rem',
                      color: 'var(--color-cherry)',
                      lineHeight: '1.2',
                      marginTop: '4px',
                    }}
                  >
                    {activeLetter.signature}
                  </p>
                </div>

                <StampMark
                  type="seal"
                  rotation={-5}
                />
              </div>

              {/* Close Button at bottom for easy thumb access on mobile */}
              <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
                <button
                  type="button"
                  onClick={() => setActiveLetter(null)}
                  className="btn-scrapbook-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.55rem 1.4rem' }}
                >
                  Fold and tuck letter back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
