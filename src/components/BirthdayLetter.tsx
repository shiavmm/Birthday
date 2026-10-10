import { Feather } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { WashiTape } from './common/WashiTape';
import { StampMark } from './common/StampMark';
import { PaperClip } from './common/PaperClip';

export const BirthdayLetter: React.FC = () => {
  const { letter, recipient, author } = birthdayContent;

  return (
    <section id="letter-from-shivam" className="scrapbook-section">
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Feather size={14} />
            <span>A LETTER FROM {author.nickname.toUpperCase()}</span>
          </div>
          <h2 className="section-title">{letter.heading}</h2>
          <p className="section-subtitle">{letter.subheading}</p>
        </div>

        {/* Parchment / Lined Stationery Letter Sheet */}
        <div
          style={{
            backgroundColor: 'var(--color-warm-white)',
            border: '1px solid var(--color-border-paper)',
            borderRadius: '8px',
            padding: 'clamp(2.5rem, 6vw, 4.2rem) clamp(1.75rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-paper-lift)',
            position: 'relative',
            backgroundRepeat: 'repeat-y',
            backgroundImage:
              'linear-gradient(to right, rgba(166, 43, 54, 0.12) 1px, transparent 1px), repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(139, 117, 105, 0.12) 32px)',
            backgroundSize: '100% 100%, 100% 32px',
            backgroundPosition: '36px 0, 0 0',
          }}
        >
          {/* Top Washi Tape & Paper Clip */}
          <WashiTape
            variant="craft"
            position="top-center"
            width="130px"
            style={{ transform: 'translateX(-50%) rotate(-1deg)' }}
          />
          <PaperClip style={{ top: '-16px', right: '36px' }} color="cherry" />

          {/* Letterhead Date & Tag */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px dashed var(--color-border-paper)',
              flexWrap: 'wrap',
              gap: '1rem',
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
                SPECIAL STATIONERY DISPATCH
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-serif-subtle)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--color-muted-brown)',
                  marginTop: '2px',
                }}
              >
                From {author.nickname} to {recipient.name}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                }}
              >
                {letter.date}
              </span>
            </div>
          </div>

          {/* Salutation */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
              color: 'var(--color-ink)',
              marginBottom: '1.75rem',
              lineHeight: '1.25',
            }}
          >
            {letter.salutation}
          </h3>

          {/* Letter Body Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
              lineHeight: '1.85',
              color: 'var(--color-ink)',
              marginBottom: '2.75rem',
            }}
          >
            {letter.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Letter Sign-off & Signature */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(139, 117, 105, 0.15)',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-serif-subtle)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--color-muted-brown)',
                  marginBottom: '0.25rem',
                }}
              >
                {letter.closing}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  color: 'var(--color-cherry)',
                  lineHeight: '1.1',
                }}
              >
                {letter.signature}
              </p>
            </div>

            {/* Wax Seal Stamp */}
            <StampMark
              type="seal"
              rotation={-3}
            />
          </div>

          {/* Postscript if provided */}
          {letter.postScript && (
            <div
              style={{
                marginTop: '2.25rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--color-blush-soft)',
                borderLeft: '3px solid var(--color-cherry)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.35rem',
                  color: 'var(--color-ink)',
                  lineHeight: '1.3',
                }}
              >
                {letter.postScript}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
