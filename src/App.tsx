import React from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ScrapbookIntroduction } from './components/ScrapbookIntroduction';
import { MemoryTimeline } from './components/MemoryTimeline';
import { LoveNotes } from './components/LoveNotes';
import { OpenWhenLetters } from './components/OpenWhenLetters';
import { PhotoGallery } from './components/PhotoGallery';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FinalSurprise } from './components/FinalSurprise';
import { ScrapbookNav } from './components/ScrapbookNav';
import { birthdayContent } from './data/birthdayContent';
import { Heart } from 'lucide-react';

export const App: React.FC = () => {
  const handleOpenSurprise = () => {
    const nextSection = document.getElementById('scrapbook-begins');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scrapbook-app-root">
      {/* Floating Scrapbook Chapter Navigation */}
      <ScrapbookNav />

      {/* Main Content Sections */}
      <main>
        {/* 1. Welcome Screen */}
        <WelcomeScreen onOpen={handleOpenSurprise} />

        {/* 2. The Scrapbook Begins */}
        <ScrapbookIntroduction />

        {/* 3. Our Little Memories */}
        <MemoryTimeline />

        {/* 4. Things I Adore About You */}
        <LoveNotes />

        {/* 5. Open When... Letters */}
        <OpenWhenLetters />

        {/* 6. Our Photo Album */}
        <PhotoGallery />

        {/* 7. A Letter From Shivam */}
        <BirthdayLetter />

        {/* 8. The Final Surprise */}
        <FinalSurprise />
      </main>

      {/* Footer / Scrapbook Back Cover */}
      <footer
        style={{
          borderTop: '1px dashed var(--color-border-paper)',
          backgroundColor: 'var(--color-warm-white)',
          padding: '2.5rem 1rem 5rem 1rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '600px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'var(--color-cherry)',
              marginBottom: '0.75rem',
            }}
          >
            <Heart size={16} fill="var(--color-cherry)" />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              FOR ANJALI WITH ALL MY LOVE
            </span>
            <Heart size={16} fill="var(--color-cherry)" />
          </div>

          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.4rem',
              color: 'var(--color-ink)',
              lineHeight: '1.3',
            }}
          >
            Handcrafted with love by Shivam for Anjali • {birthdayContent.recipient.birthdayDate}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--color-muted-brown)',
              marginTop: '0.5rem',
            }}
          >
            A personal digital keepsake made for her birthday.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
