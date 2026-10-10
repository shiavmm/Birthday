import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { ScrapbookImage } from './common/ScrapbookImage';
import { WashiTape } from './common/WashiTape';
import { StampMark } from './common/StampMark';

export const FinalSurprise: React.FC = () => {
  const { finalSurprise } = birthdayContent;
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);

    // Subtle, restrained confetti that respects reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.75 },
        colors: ['#A62B36', '#E9C7C5', '#FFFDF8', '#D4AF37'],
        ticks: 200,
        gravity: 0.9,
        scalar: 0.9,
        disableForReducedMotion: true,
      });
    }
  };

  return (
    <section
      id="final-surprise"
      className="scrapbook-section"
      style={{
        paddingBottom: '6rem',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Gift size={14} />
            <span>ONE LAST THING</span>
          </div>
          <h2 className="section-title">{finalSurprise.heading}</h2>
          <p className="section-subtitle">{finalSurprise.subheading}</p>

          {!isRevealed && (
            <div style={{ marginTop: '2rem' }}>
              <button
                type="button"
                id="reveal-surprise-button"
                onClick={handleReveal}
                className="btn-scrapbook-primary"
                style={{
                  fontSize: '1.15rem',
                  padding: '1rem 2.4rem',
                }}
                aria-expanded={isRevealed}
              >
                <Sparkles size={18} />
                <span>{finalSurprise.buttonLabel}</span>
              </button>
            </div>
          )}
        </div>

        {/* Revealed Envelope Content */}
        {isRevealed && (
          <div
            style={{
              backgroundColor: 'var(--color-warm-white)',
              border: '1px solid var(--color-border-paper)',
              borderRadius: '8px',
              padding: 'clamp(2rem, 5vw, 3.8rem) clamp(1.5rem, 5vw, 3rem)',
              boxShadow: 'var(--shadow-paper-lift)',
              position: 'relative',
              animation: 'scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Washi Tape */}
            <WashiTape variant="cherry" position="top-center" width="130px" />

            {/* Top Seal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px dashed var(--color-border-paper)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-cherry)',
                }}
              >
                {finalSurprise.envelopeTitle}
              </span>

              <StampMark
                type="badge"
                text="SEALED WITH LOVE"
                subtext="OCTOBER 2026"
                rotation={2}
              />
            </div>

            {/* Content Grid: Letter text & Final Photo */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(2rem, 4vw, 3rem)',
                alignItems: 'center',
              }}
            >
              {/* Text */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    fontSize: '1.1rem',
                    lineHeight: '1.75',
                    color: 'var(--color-ink)',
                    marginBottom: '2rem',
                  }}
                >
                  {finalSurprise.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Sign-off */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif-subtle)',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: 'var(--color-muted-brown)',
                    }}
                  >
                    {finalSurprise.closing}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-handwriting)',
                      fontSize: '2.5rem',
                      color: 'var(--color-cherry)',
                      lineHeight: '1.1',
                      marginTop: '2px',
                    }}
                  >
                    {finalSurprise.signature}
                  </p>
                </div>
              </div>

              {/* Final Favorite Photograph */}
              <div style={{ maxWidth: '340px', width: '100%', margin: '0 auto' }}>
                <ScrapbookImage
                  src={finalSurprise.finalPhoto}
                  alt="Final birthday memory photograph"
                  caption={finalSurprise.finalPhotoCaption}
                  aspect="portrait"
                  rotation={2}
                  tapeVariant="dots"
                  hasPaperclip={true}
                />
              </div>
            </div>

            {/* Bottom Closing Note */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px dashed var(--color-border-paper)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif-subtle)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--color-muted-brown)',
                }}
              >
                Thank you for being the sweetest part of my life, Anjali. Happy Birthday.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
