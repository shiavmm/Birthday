export interface MemoryItem {
  id: string;
  image: string;
  date?: string;
  caption: string;
  handwrittenNote?: string;
  rotation?: number; // subtle angle in degrees e.g. -2, 1.5
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface LoveNote {
  id: string;
  title: string;
  content: string;
  tag: string;
  color?: 'cream' | 'blush' | 'warm';
  rotation?: number;
}

export interface OpenWhenLetter {
  id: string;
  trigger: string;
  preview: string;
  stampText: string;
  dateTag?: string;
  content: string[];
  signature: string;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption?: string;
  date?: string;
  orientation: 'portrait' | 'landscape' | 'square';
  size: 'standard' | 'tall' | 'wide';
}

export interface BirthdayContent {
  recipient: {
    name: string;
    nickname: string;
    birthdayDate: string; // October 21, 2026
    birthdayYear: number;
  };
  author: {
    nickname: string;
  };
  welcome: {
    badge: string;
    heading: string;
    subheading: string;
    ctaButton: string;
    warningNote: string;
    heroImage: string;
    heroCaption: string;
  };
  introduction: {
    heading: string;
    subheading: string;
    body: string[];
    journalNote: string;
  };
  memories: {
    heading: string;
    subheading: string;
    items: MemoryItem[];
  };
  loveNotes: {
    heading: string;
    subheading: string;
    items: LoveNote[];
  };
  openWhen: {
    heading: string;
    subheading: string;
    letters: OpenWhenLetter[];
  };
  gallery: {
    heading: string;
    subheading: string;
    items: GalleryPhoto[];
  };
  letter: {
    heading: string;
    subheading: string;
    date: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postScript?: string;
  };
  finalSurprise: {
    heading: string;
    subheading: string;
    buttonLabel: string;
    envelopeTitle: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    finalPhoto: string;
    finalPhotoCaption: string;
  };
}

export const birthdayContent: BirthdayContent = {
  recipient: {
    name: "Anjali",
    nickname: "Pretty Girl",
    birthdayDate: "October 21, 2026",
    birthdayYear: 2026,
  },
  author: {
    nickname: "Shivam",
  },
  welcome: {
    badge: "A LITTLE SOMETHING FOR ANJALI",
    heading: "Happy Birthday, Pretty Girl.",
    subheading:
      "Made with love, questionable levels of cheesiness, and an unreasonable amount of affection. From your Shivam.",
    ctaButton: "Open your surprise",
    warningNote: "Warning: may contain excessive cuteness.",
    heroImage: "/images/hero-photo.jpg",
    heroCaption: "To the birthday girl — our favourite smile in the world.",
  },
  introduction: {
    heading: "Okay, birthday girl. This one's for you.",
    subheading:
      "I could have just sent you a birthday message like a normal person. But apparently, Shivam decided to make an entire website. So here we are.",
    body: [
      "Consider this your personal digital keepsake — a corner of the internet stitched together with paper clips, washi tape, and fond memories.",
      "Take your time scrolling through. There are photos, open-when letters for whenever you need them, little notes I had to get off my chest, and a few reminders of how special you really are.",
    ],
    journalNote: "Page 1 • Handcrafted with love & a cup of coffee",
  },
  memories: {
    heading: "Proof that we have some pretty good moments.",
    subheading: "A little timeline of moments worth holding onto.",
    items: [
      {
        id: "mem-1",
        image: "/images/memory-01.jpg",
        caption: "A moment worth keeping.",
        handwrittenNote: "Still makes me smile every single time.",
        rotation: -2,
        aspect: "portrait",
      },
      {
        id: "mem-2",
        image: "/images/memory-02.jpg",
        caption: "One for the memory box.",
        handwrittenNote: "Proof that we look pretty great together.",
        rotation: 1.5,
        aspect: "landscape",
      },
      {
        id: "mem-3",
        image: "/images/memory-03.jpg",
        caption: "This one makes me smile.",
        handwrittenNote: "You caught off guard, being effortlessly cute.",
        rotation: -1,
        aspect: "square",
      },
      {
        id: "mem-4",
        image: "/images/memory-04.jpg",
        caption: "Adding this to my list of favourite things.",
        handwrittenNote: "A good day recorded in permanent ink.",
        rotation: 2.2,
        aspect: "portrait",
      },
      {
        id: "mem-5",
        image: "/images/memory-05.jpg",
        caption: "One of those quiet, perfect little moments.",
        handwrittenNote: "I wouldn't trade this for anything.",
        rotation: -1.8,
        aspect: "landscape",
      },
    ],
  },
  loveNotes: {
    heading: "Anjali, you're kind of a big deal.",
    subheading: "Here are a few reminders, because apparently one birthday message wasn't enough.",
    items: [
      {
        id: "note-1",
        title: "Official Record #01",
        tag: "Presidential Notice",
        content: "Your smile deserves its own fan club. I am currently the president.",
        color: "cream",
        rotation: -2,
      },
      {
        id: "note-2",
        title: "Official Record #02",
        tag: "Daily Observation",
        content: "You make ordinary moments feel a little less ordinary.",
        color: "blush",
        rotation: 1.5,
      },
      {
        id: "note-3",
        title: "Official Record #03",
        tag: "Certified Statement",
        content: "You're cute. This is an official announcement from Shivam.",
        color: "warm",
        rotation: -1.2,
      },
      {
        id: "note-4",
        title: "Official Record #04",
        tag: "Unfair Advantage",
        content: "You have a very unfair advantage: you can make me smile without even trying.",
        color: "cream",
        rotation: 2.4,
      },
      {
        id: "note-5",
        title: "Official Record #05",
        tag: "Birthday Truth",
        content: "You deserve all the happiness, cake, and affection in the world.",
        color: "blush",
        rotation: -1.6,
      },
    ],
  },
  openWhen: {
    heading: "Open when...",
    subheading: "A collection of letters for the days ahead. Open whichever one you need most right now.",
    letters: [
      {
        id: "when-miss-me",
        trigger: "Open when you miss me",
        preview: "For whenever distance feels a bit too loud.",
        stampText: "AIR MAIL • SPECIAL DELIVERY",
        dateTag: "Keep handy",
        content: [
          "Hey you,",
          "If you're opening this, I'm probably not right beside you this exact second — but I'm never that far away either.",
          "Close your eyes for three seconds and remember the sound of us laughing together, or that specific way I look at you when you're rambling about something you love.",
          "Whatever you're doing right now, take a deep breath. You're stuck with me, and I'm always just one message or call away.",
        ],
        signature: "Missing you right back, Shivam",
      },
      {
        id: "when-bad-day",
        trigger: "Open when you're having a bad day",
        preview: "A gentle reminder that today doesn't get the final say.",
        stampText: "COMFORT DISPATCH",
        dateTag: "Open with tea or cocoa",
        content: [
          "Hey pretty girl,",
          "I'm sorry today is being heavy or annoying or exhausting. You carry so much with so much grace, but you don't have to be superwoman 24/7.",
          "It's okay to log off, curl up under a blanket, order something delicious, and just be gentle with yourself for the rest of the evening.",
          "Tomorrow is a clean slate. And until then, I am here to listen, distract you, or just complain about the universe on your behalf.",
        ],
        signature: "Always in your corner, Shivam",
      },
      {
        id: "when-laugh",
        trigger: "Open when you need a laugh",
        preview: "A quick dose of teasing and bad jokes.",
        stampText: "EXPRESS HUMOR",
        dateTag: "No serious faces allowed",
        content: [
          "Hello, birthday girl,",
          "Quick reminder: Shivam spent actual hours crafting CSS margins and paper clipping digital Polaroid borders just to make you grin right now.",
          "If that level of affectionate foolishness doesn't crack a smile, I don't know what will.",
          "Also: remember that one time you made that funny face? Yeah. I still think about it. You're a menace, but you're my menace.",
        ],
        signature: "Your personal entertainer, Shivam",
      },
      {
        id: "when-special",
        trigger: "Open when you need a reminder of how special you are",
        preview: "The honest truth, unvarnished.",
        stampText: "CONFIDENTIAL TRUTH",
        dateTag: "Read slowly",
        content: [
          "Anjali,",
          "Sometimes you get so busy doing things and taking care of everything that you forget just how remarkable you are to the people around you — and especially to me.",
          "You are thoughtful, intelligent, hilarious, stunning, and genuinely good to your core. Walking through life with you makes everything brighter.",
          "Never doubt your worth, your capability, or how deeply valued you are.",
        ],
        signature: "Proud of you always, Shivam",
      },
      {
        id: "when-extra-love",
        trigger: "Open when you want a little extra love",
        preview: "Unconditional warmth on demand.",
        stampText: "PRIORITY AFFECTION",
        dateTag: "Unlimited uses",
        content: [
          "My favourite person,",
          "Here is an unlimited, non-expiring coupon for hugs, head scratches, forehead kisses, and Shivam listening to you talk about whatever you want.",
          "No special occasion needed. Just knowing you exists in my life is my favourite part of any day.",
          "You are cherished, Anjali. Today, tomorrow, and every day that comes after.",
        ],
        signature: "With all my love, Shivam",
      },
    ],
  },
  gallery: {
    heading: "Some things deserve to be kept forever.",
    subheading: "A little photo album of moments, laughs, and quiet frames.",
    items: [
      {
        id: "gal-1",
        image: "/images/gallery-01.jpg",
        title: "Golden Hour Glow",
        caption: "One of those afternoons where everything was just right.",
        orientation: "portrait",
        size: "standard",
      },
      {
        id: "gal-2",
        image: "/images/gallery-02.jpg",
        title: "Unfiltered Happiness",
        caption: "That candid laugh I will never get tired of seeing.",
        orientation: "landscape",
        size: "wide",
      },
      {
        id: "gal-3",
        image: "/images/gallery-03.jpg",
        title: "A Quiet Favorite",
        caption: "Tucked away in the scrapbook because it feels like home.",
        orientation: "portrait",
        size: "tall",
      },
      {
        id: "gal-4",
        image: "/images/memory-01.jpg",
        title: "Permanent Ink",
        caption: "Moments that stay with you long after they happen.",
        orientation: "square",
        size: "standard",
      },
      {
        id: "gal-5",
        image: "/images/memory-02.jpg",
        title: "The Good Stuff",
        caption: "No pose needed, just us.",
        orientation: "landscape",
        size: "wide",
      },
      {
        id: "gal-6",
        image: "/images/memory-03.jpg",
        title: "Little Things",
        caption: "Small details that made the day memorable.",
        orientation: "portrait",
        size: "standard",
      },
      {
        id: "gal-7",
        image: "/images/memory-04.jpg",
        title: "Caught in the Act",
        caption: "Being adorably yourself as always.",
        orientation: "square",
        size: "standard",
      },
      {
        id: "gal-8",
        image: "/images/memory-05.jpg",
        title: "Chapter by Chapter",
        caption: "Adding pages to our little book.",
        orientation: "landscape",
        size: "wide",
      },
    ],
  },
  letter: {
    heading: "Okay, jokes aside, I mean this.",
    subheading: "A birthday letter written in ink, from my heart to yours.",
    date: "October 21, 2026",
    salutation: "Happy birthday, Anjali.",
    paragraphs: [
      "I hope today makes you feel as special as you deserve to feel. I hope you get plenty of reasons to smile, plenty of things that make you happy, and all the little moments that turn an ordinary day into a lovely one.",
      "I wanted to make you something a little different this year. Something you could open, explore, laugh at, and keep as a small reminder of how much you mean to me.",
      "I know I tease you, and I reserve the right to continue doing so. But underneath all the jokes, I genuinely hope life brings you beautiful things, exciting opportunities, peaceful days, and so many reasons to be proud of yourself.",
      "Thank you for being you, Anjali.",
      "Happy birthday, pretty girl.",
    ],
    closing: "With lots of love,",
    signature: "Your Shivam.",
    postScript: "P.S. Yes, I really built this whole thing for you. And yes, you're worth every line of code.",
  },
  finalSurprise: {
    heading: "Wait, birthday girl. One last thing.",
    subheading: "Before you close the scrapbook, there's one final envelope tucked into the back cover.",
    buttonLabel: "Okay Shivam, what now?",
    envelopeTitle: "FINAL SEAL • FOR HER EYES ONLY",
    paragraphs: [
      "Surprise! You really thought Shivam would finish without one last cheesy moment?",
      "Happy birthday, Anjali. I hope this little corner of the internet makes you smile today and whenever you come back to it.",
      "You're very loved.",
    ],
    closing: "Love,",
    signature: "Shivam.",
    finalPhoto: "/images/final-photo.jpg",
    finalPhotoCaption: "Our favourite birthday girl • October 21, 2026",
  },
};
