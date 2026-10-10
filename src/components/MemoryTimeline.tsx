import React from 'react';
import { Camera, Calendar, Sparkles } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import type { MemoryItem } from '../data/birthdayContent';
import { ScrapbookImage } from './common/ScrapbookImage';
import { WashiTape } from './common/WashiTape';

interface MemoryTimelineProps {
  onPhotoClick?: (item: MemoryItem) => void;
}

export const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ onPhotoClick }) => {
  const { memories } = birthdayContent;

  return (
    <section id="memories-timeline" className="scrapbook-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Camera size={14} />
            <span>OUR LITTLE MEMORIES</span>
          </div>
          <h2 className="section-title">{memories.heading}</h2>
          <p className="section-subtitle">{memories.subheading}</p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            position: 'relative',
            maxWidth: '960px',
            margin: '0 auto',
            padding: '1rem 0',
          }}
        >
          {/* Subtle dashed timeline line down the middle on desktop */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '50%',
              width: '2px',
              background: 'repeating-linear-gradient(to bottom, var(--color-border-paper) 0, var(--color-border-paper) 8px, transparent 8px, transparent 16px)',
              transform: 'translateX(-50%)',
              display: 'var(--timeline-line-display, block)',
              opacity: 0.8,
            }}
            className="timeline-center-line"
            aria-hidden="true"
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(3rem, 6vw, 4.5rem)',
            }}
          >
            {memories.items.map((item, index) => {
              const isEven = index % 2 === 0;
              const tapeVarieties: Array<'blush' | 'craft' | 'cherry' | 'dots'> = [
                'blush',
                'craft',
                'cherry',
                'dots',
                'blush',
              ];
              const tapeVariant = tapeVarieties[index % tapeVarieties.length];

              return (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                  className={`memory-entry ${isEven ? 'memory-even' : 'memory-odd'}`}
                >
                  {/* Photo Column */}
                  <div
                    style={{
                      order: isEven ? 1 : 2,
                      display: 'flex',
                      justifyContent: isEven ? 'flex-end' : 'flex-start',
                      maxWidth: '420px',
                      width: '100%',
                      margin: isEven ? '0 0 0 auto' : '0 auto 0 0',
                    }}
                    className="memory-photo-col"
                  >
                    <ScrapbookImage
                      src={item.image}
                      alt={item.caption}
                      caption={item.caption}
                      subnote={item.handwrittenNote}
                      date={item.date}
                      aspect={item.aspect || (index % 2 === 0 ? 'portrait' : 'landscape')}
                      rotation={item.rotation || (isEven ? -1.8 : 1.6)}
                      tapeVariant={tapeVariant}
                      hasPaperclip={index === 1 || index === 3}
                      onClick={() => onPhotoClick && onPhotoClick(item)}
                    />
                  </div>

                  {/* Note / Journal Entry Column */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      maxWidth: '380px',
                      margin: isEven ? '0 auto 0 0' : '0 0 0 auto',
                    }}
                    className="memory-text-col"
                  >
                    <div
                      style={{
                        backgroundColor: 'var(--color-warm-white)',
                        border: '1px solid var(--color-border-paper)',
                        borderRadius: '6px',
                        padding: '1.5rem 1.75rem',
                        boxShadow: 'var(--shadow-paper-subtle)',
                        position: 'relative',
                        transform: `rotate(${isEven ? 1 : -1}deg)`,
                      }}
                    >
                      <WashiTape
                        variant="craft"
                        position={isEven ? 'top-left' : 'top-right'}
                        width="65px"
                      />

                      {/* Header Badge */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--color-cherry)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '0.65rem',
                        }}
                      >
                        <Sparkles size={13} />
                        <span>MOMENT #{index + 1}</span>
                      </div>

                      {/* Date if provided */}
                      {item.date && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--color-muted-brown)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.85rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <Calendar size={13} />
                          <span>{item.date}</span>
                        </div>
                      )}

                      {/* Caption */}
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          color: 'var(--color-ink)',
                          marginBottom: '0.75rem',
                          lineHeight: '1.3',
                        }}
                      >
                        {item.caption}
                      </h3>

                      {/* Handwritten Note */}
                      {item.handwrittenNote && (
                        <p
                          style={{
                            fontFamily: 'var(--font-handwriting)',
                            fontSize: '1.35rem',
                            color: 'var(--color-cherry-dark)',
                            lineHeight: '1.25',
                            marginTop: '0.5rem',
                            paddingTop: '0.5rem',
                            borderTop: '1px dashed var(--color-border-paper)',
                          }}
                        >
                          "{item.handwrittenNote}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
