import React from 'react';
import { BookOpen, Feather } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { WashiTape } from './common/WashiTape';
import { StampMark } from './common/StampMark';

export const ScrapbookIntroduction: React.FC = () => {
  const { introduction } = birthdayContent;

  return (
    <section
      id="scrapbook-begins"
      className="scrapbook-section"
      style={{
        paddingTop: '3rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Handmade Journal Page Card */}
        <div
          style={{
            backgroundColor: 'var(--color-warm-white)',
            border: '1px solid var(--color-border-paper)',
            borderRadius: '8px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-paper)',
            position: 'relative',
            backgroundRepeat: 'repeat-y',
            backgroundImage:
              'linear-gradient(to right, rgba(166, 43, 54, 0.15) 1px, transparent 1px)',
            backgroundSize: '100% 100%',
            backgroundPosition: '42px 0',
          }}
        >
          {/* Top Washi Tape */}
          <WashiTape
            variant="craft"
            position="top-center"
            width="120px"
            style={{ transform: 'translateX(-50%) rotate(0.5deg)' }}
          />

          {/* Page Tag & Bookmark Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.75rem',
              paddingBottom: '1rem',
              borderBottom: '1px dashed var(--color-border-paper)',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="var(--color-cherry)" />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-cherry)',
                }}
              >
                ENTRY NO. 01 • THE SCRAPBOOK BEGINS
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.25rem',
                color: 'var(--color-muted-brown)',
              }}
            >
              {introduction.journalNote}
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)',
              marginBottom: '1.25rem',
              color: 'var(--color-ink)',
              lineHeight: '1.25',
            }}
          >
            {introduction.heading}
          </h2>

          {/* Main Statement */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.28rem)',
              color: 'var(--color-ink)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif-subtle)',
              marginBottom: '1.75rem',
              lineHeight: '1.6',
              paddingLeft: '1.2rem',
              borderLeft: '3px solid var(--color-cherry)',
            }}
          >
            "{introduction.subheading}"
          </p>

          {/* Journal Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              fontSize: '1.02rem',
              lineHeight: '1.7',
              color: 'var(--color-ink-muted)',
              marginBottom: '2rem',
            }}
          >
            {introduction.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Bottom Journal Stamp & Sign-off */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(139, 117, 105, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Feather size={16} color="var(--color-muted-brown)" />
              <span
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.35rem',
                  color: 'var(--color-ink)',
                }}
              >
                Turn the page to see our memories ↓
              </span>
            </div>

            <StampMark
              type="postmark"
              text="CERTIFIED"
              subtext="GENUINE LOVE"
              rotation={-3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
