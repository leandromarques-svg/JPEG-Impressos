
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
