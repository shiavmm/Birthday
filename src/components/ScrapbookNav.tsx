import React, { useState, useEffect } from 'react';
import { BookOpen, Heart, Camera, Mail, Image, Feather, Gift } from 'lucide-react';

export const ScrapbookNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('welcome-screen');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past initial cover header slightly
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const sections = [
        'welcome-screen',
        'scrapbook-begins',
        'memories-timeline',
        'things-i-adore',
        'open-when-letters',
        'photo-album',
        'letter-from-shivam',
        'final-surprise',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'scrapbook-begins', label: 'Journal', icon: BookOpen },
    { id: 'memories-timeline', label: 'Memories', icon: Camera },
    { id: 'things-i-adore', label: 'Notes', icon: Heart },
    { id: 'open-when-letters', label: 'Open When', icon: Mail },
    { id: 'photo-album', label: 'Album', icon: Image },
    { id: 'letter-from-shivam', label: 'Letter', icon: Feather },
    { id: 'final-surprise', label: 'Surprise', icon: Gift },
  ];

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Scrapbook chapters"
      style={{
        position: 'fixed',
        bottom: '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        backgroundColor: 'rgba(255, 253, 248, 0.95)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--color-border-paper)',
        borderRadius: '30px',
        padding: '6px 10px',
        boxShadow: 'var(--shadow-paper-lift)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        maxWidth: '92vw',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: isActive ? 'var(--color-cherry)' : 'transparent',
              color: isActive ? '#FFFDF8' : 'var(--color-ink)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={13} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
