import React, { useState } from 'react';
import { Image } from 'lucide-react';
import { birthdayContent } from '../data/birthdayContent';
import { ScrapbookImage } from './common/ScrapbookImage';
import { LightboxModal } from './LightboxModal';

export const PhotoGallery: React.FC = () => {
  const { gallery } = birthdayContent;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleClosePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <section id="photo-album" className="scrapbook-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Image size={14} />
            <span>OUR PHOTO ALBUM</span>
          </div>
          <h2 className="section-title">{gallery.heading}</h2>
          <p className="section-subtitle">{gallery.subheading}</p>
        </div>

        {/* Dynamic Scrapbook Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            alignItems: 'start',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {gallery.items.map((photo, index) => {
            const rotations = [-2, 1.5, -1.2, 2.3, -1.8, 1, -2.4, 1.8];
            const rotation = rotations[index % rotations.length];
            const tapeVarieties: Array<'blush' | 'craft' | 'cherry' | 'dots'> = [
              'blush',
              'craft',
              'cherry',
              'dots',
            ];
            const tapeVariant = tapeVarieties[index % tapeVarieties.length];

            return (
              <div
                key={photo.id}
                style={{
                  gridColumn: photo.size === 'wide' ? 'span 1' : undefined,
                }}
              >
                <ScrapbookImage
                  src={photo.image}
                  alt={photo.title}
                  caption={photo.title}
                  subnote={photo.caption}
                  date={photo.date}
                  aspect={photo.orientation}
                  rotation={rotation}
                  tapeVariant={tapeVariant}
                  hasPaperclip={index % 3 === 1}
                  onClick={() => handleOpenPhoto(index)}
                />
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          photos={gallery.items}
          currentIndex={selectedPhotoIndex}
          onClose={handleClosePhoto}
          onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
        />
      </div>
    </section>
  );
};
