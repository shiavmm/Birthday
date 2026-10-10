import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { ScrapbookImage } from './common/ScrapbookImage';
import { StampMark } from './common/StampMark';
import { WashiTape } from './common/WashiTape';
import { PaperClip } from './common/PaperClip';

interface WelcomeScreenProps {
  onOpen: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
  const { welcome, recipient } = birthdayContent;

  return (
    <section
      id="welcome-screen"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4.5rem) 1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Scrapbook Corner Elements */}
      <WashiTape
        variant="craft"
        style={{ top: '24px', left: '-20px', transform: 'rotate(-25deg)', width: '130px' }}
      />
      <WashiTape
        variant="dots"
        style={{ bottom: '24px', right: '-20px', transform: 'rotate(-25deg)', width: '140px' }}
      />

      <div
        className="container"
        style={{
          maxWidth: '920px',
        }}
      >
        {/* Main Cover Scrapbook Card */}
        <div
          style={{
            backgroundColor: 'var(--color-warm-white)',
            border: '1px solid var(--color-border-paper)',
            borderRadius: '10px',
            padding: 'clamp(2rem, 6vw, 3.8rem) clamp(1.5rem, 5vw, 3.2rem)',
            boxShadow: 'var(--shadow-paper-lift)',
            position: 'relative',
          }}
        >
          {/* Top Paperclip & Stamp */}
          <PaperClip style={{ top: '-16px', right: '48px' }} color="cherry" />
          <div
            style={{
              position: 'absolute',
              top: '22px',
              right: '24px',
              display: 'none',
            }}
          >
            <StampMark type="postmark" text="AIR MAIL" subtext={recipient.birthdayDate} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Left: Romantic Copy & Heading */}
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-blush-soft)',
                  border: '1px solid var(--color-blush)',
                  color: 'var(--color-cherry)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  marginBottom: '1.25rem',
                }}
              >
                <Heart size={13} fill="#A62B36" />
                <span>{welcome.badge}</span>
              </div>

              <h1
                style={{
                  color: 'var(--color-ink)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.18',
                }}
              >
                {welcome.heading}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                  lineHeight: '1.65',
                  color: 'var(--color-ink-muted)',
                  marginBottom: '2rem',
                }}
              >
                {welcome.subheading}
              </p>

              {/* Action Button & Note */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                <button
                  type="button"
                  id="open-surprise-button"
                  onClick={onOpen}
                  className="btn-scrapbook-primary"
                  style={{
                    fontSize: '1.1rem',
                    padding: '0.95rem 2.2rem',
                  }}
                  aria-label="Open your surprise scrapbook"
                >
                  <Sparkles size={18} />
                  <span>{welcome.ctaButton}</span>
                </button>

                <p
                  style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.25rem',
                    color: 'var(--color-muted-brown)',
                    marginTop: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {welcome.warningNote}
                </p>
              </div>
            </div>

            {/* Right: Real Photograph Slot / Designed Polaroid */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div style={{ maxWidth: '340px', width: '100%' }}>
                <ScrapbookImage
                  src={welcome.heroImage}
                  alt={`Photograph for ${recipient.name}'s birthday`}
                  caption={welcome.heroCaption}
                  subnote="October 21, 2026 • Made with love"
                  aspect="portrait"
                  rotation={-2.5}
                  tapeVariant="cherry"
                  hasPaperclip={false}
                />
              </div>
            </div>
          </div>

          {/* Bottom subtle detail: date stamp badge */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px dashed var(--color-border-paper)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif-subtle)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--color-muted-brown)',
              }}
            >
              Hand-assembled with permanent affection
            </span>
            <StampMark
              type="badge"
              text="FOR HER EYES ONLY"
              subtext="OCT 21, 2026"
              rotation={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
