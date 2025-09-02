import { useState, useEffect } from 'react';

// Imagens padrão (fallback)
import instructorHeroDefault from "@/assets/instructor-hero.jpg";
import instructorProfileDefault from "@/assets/instructor-profile.jpg";

// Chaves para localStorage
const STORAGE_KEYS = {
  instructorHero: 'pocus-instructor-hero-image',
  instructorProfile: 'pocus-instructor-profile-image'
};

// Imagens padrão
const DEFAULT_IMAGES = {
  instructorHero: instructorHeroDefault,
  instructorProfile: instructorProfileDefault
};

export type ImageKey = keyof typeof DEFAULT_IMAGES;

interface UseImageManagerReturn {
  images: Record<ImageKey, string>;
  updateImage: (key: ImageKey, newImageSrc: string) => void;
  resetImage: (key: ImageKey) => void;
  resetAllImages: () => void;
}

export const useImageManager = (): UseImageManagerReturn => {
  const [images, setImages] = useState<Record<ImageKey, string>>(() => {
    // Carregar imagens do localStorage na inicialização
    const savedImages: Partial<Record<ImageKey, string>> = {};
    
    Object.keys(STORAGE_KEYS).forEach((key) => {
      const imageKey = key as ImageKey;
      const savedImage = localStorage.getItem(STORAGE_KEYS[imageKey]);
      if (savedImage) {
        savedImages[imageKey] = savedImage;
      }
    });

    return {
      instructorHero: savedImages.instructorHero || DEFAULT_IMAGES.instructorHero,
      instructorProfile: savedImages.instructorProfile || DEFAULT_IMAGES.instructorProfile
    };
  });

  const updateImage = (key: ImageKey, newImageSrc: string) => {
    setImages(prev => ({
      ...prev,
      [key]: newImageSrc
    }));
    
    // Salvar no localStorage
    localStorage.setItem(STORAGE_KEYS[key], newImageSrc);
  };

  const resetImage = (key: ImageKey) => {
    setImages(prev => ({
      ...prev,
      [key]: DEFAULT_IMAGES[key]
    }));
    
    // Remover do localStorage
    localStorage.removeItem(STORAGE_KEYS[key]);
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
    
    // Limpar todo o localStorage relacionado às imagens
    Object.values(STORAGE_KEYS).forEach(storageKey => {
      localStorage.removeItem(storageKey);
    });
  };

  return {
    images,
    updateImage,
    resetImage,
    resetAllImages
  };
};
