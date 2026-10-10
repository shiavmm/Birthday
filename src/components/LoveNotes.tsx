import React, { useState } from 'react';
import { Heart, Check, Sparkles } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { WashiTape } from './common/WashiTape';
import { PaperClip } from './common/PaperClip';

export const LoveNotes: React.FC = () => {
  const { loveNotes } = birthdayContent;
  // Track revealed state for each note
  const [revealedNotes, setRevealedNotes] = useState<Record<string, boolean>>({});

  const toggleNote = (id: string) => {
    setRevealedNotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const revealAll = () => {
    const all: Record<string, boolean> = {};
    loveNotes.items.forEach((item) => {
      all[item.id] = true;
    });
    setRevealedNotes(all);
  };

  return (
    <section id="things-i-adore" className="scrapbook-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Heart size={14} fill="#A62B36" />
            <span>THINGS I ADORE ABOUT YOU</span>
          </div>
          <h2 className="section-title">{loveNotes.heading}</h2>
          <p className="section-subtitle">{loveNotes.subheading}</p>

          <div style={{ marginTop: '1rem' }}>
            <button
              type="button"
              onClick={revealAll}
              className="btn-scrapbook-secondary"
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              <Sparkles size={14} />
              <span>Reveal all 5 notes</span>
            </button>
          </div>
        </div>

        {/* Paper Notes Pinboard Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.2rem)',
            maxWidth: '1040px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
        >
          {loveNotes.items.map((note, index) => {
            const isRevealed = !!revealedNotes[note.id];
            const rotation = note.rotation || (index % 2 === 0 ? -1.5 : 1.8);

            const getBackgroundColor = () => {
              if (note.color === 'blush') return 'var(--color-blush-soft)';
              if (note.color === 'warm') return '#FCF6ED';
              return 'var(--color-warm-white)';
            };

            return (
              <div
                key={note.id}
                role="button"
                tabIndex={0}
                aria-expanded={isRevealed}
                aria-label={`${note.title}: ${note.tag}. Click to ${isRevealed ? 'fold' : 'unfold'}`}
                onClick={() => toggleNote(note.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleNote(note.id);
                  }
                }}
                style={{
                  backgroundColor: getBackgroundColor(),
                  border: '1px solid var(--color-border-paper)',
                  borderRadius: '6px',
                  padding: '1.75rem 1.5rem',
                  boxShadow: isRevealed
                    ? 'var(--color-paper-lift, 0 10px 25px rgba(53, 42, 40, 0.12))'
                    : 'var(--shadow-paper)',
                  position: 'relative',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'all 0.28s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '210px',
                  outline: 'none',
                }}
                className="love-note-card"
              >
                {/* Washi Tape / Paperclip */}
                {index % 2 === 0 ? (
                  <WashiTape
                    variant={index === 0 ? 'cherry' : 'craft'}
                    position="top-center"
                    width="70px"
                  />
                ) : (
                  <PaperClip style={{ top: '-14px', right: '24px' }} color="cherry" />
                )}

                {/* Card Top Header */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-cherry)',
                      }}
                    >
                      {note.title}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-serif-subtle)',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: 'var(--color-muted-brown)',
                        backgroundColor: 'rgba(139, 117, 105, 0.08)',
                        padding: '2px 8px',
                        borderRadius: '3px',
                      }}
                    >
                      {note.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  {isRevealed ? (
                    <div
                      style={{
                        animation: 'fadeIn 0.25s ease-out',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-handwriting)',
                          fontSize: '1.45rem',
                          lineHeight: '1.3',
                          color: 'var(--color-ink)',
                          marginTop: '0.5rem',
                        }}
                      >
                        "{note.content}"
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: '1.25rem 0',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-blush-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-cherry)',
                          marginBottom: '0.5rem',
                          border: '1px dashed var(--color-cherry)',
                        }}
                      >
                        <Heart size={18} fill="#A62B36" />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif-subtle)',
                          fontStyle: 'italic',
                          fontSize: '1.05rem',
                          color: 'var(--color-muted-brown)',
                        }}
                      >
                        Tap to unfold note
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Bottom status indicator */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px dashed var(--color-border-paper)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: isRevealed ? 'var(--color-cherry)' : 'var(--color-muted-brown)',
                      fontWeight: 600,
                    }}
                  >
                    {isRevealed ? 'Note Unfolded' : 'Folded paper'}
                  </span>

                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: isRevealed
                        ? 'var(--color-cherry)'
                        : 'rgba(139, 117, 105, 0.12)',
                      color: '#FFFDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                    }}
                  >
                    {isRevealed ? <Check size={14} strokeWidth={2.5} /> : '?'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
