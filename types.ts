import React from 'react';

export interface ServiceEvent {
  day: string;
  title: string;
  time: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface BibleVerse {
  text: string;
  reference: string;
}

export interface Leader {
  name: string;
  role: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
}