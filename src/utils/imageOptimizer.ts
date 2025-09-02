/**
 * Utilitários para otimização de qualidade de imagem
 */

interface ImageOptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp';
  maintainAspectRatio?: boolean;
}

/**
 * Otimiza uma imagem mantendo a máxima qualidade possível
 */
export const optimizeImageQuality = (
  file: File,
  options: ImageOptimizationOptions = {}
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 2048,
      maxHeight = 2048,
      quality = 0.95,
      format = 'jpeg',
      maintainAspectRatio = true
    } = options;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }

    img.onload = () => {
      // Calcular dimensões otimizadas
      let { width, height } = img;
      
      if (maintainAspectRatio) {
        const aspectRatio = width / height;
        
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
        
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      } else {
        width = Math.min(width, maxWidth);
        height = Math.min(height, maxHeight);
      }

      // Configurar canvas para máxima qualidade
      canvas.width = width;
      canvas.height = height;
      
      // Configurações de alta qualidade
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Desenhar imagem com qualidade máxima
      ctx.drawImage(img, 0, 0, width, height);
      
      // Converter para base64 com alta qualidade
      const mimeType = `image/${format}`;
      const result = canvas.toDataURL(mimeType, quality);
      
      resolve(result);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    // Carregar imagem do arquivo
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Pré-carrega uma imagem para melhor performance
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Analisa a qualidade de uma imagem
 */
export const analyzeImageQuality = (
  file: File
): Promise<{
  width: number;
  height: number;
  size: number;
  aspectRatio: number;
  isHighQuality: boolean;
  recommendations: string[];
}> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const { width, height, naturalWidth, naturalHeight } = img;
      const size = file.size;
      const aspectRatio = naturalWidth / naturalHeight;
      
      // Critérios de qualidade
      const isHighResolution = naturalWidth >= 1200 && naturalHeight >= 1200;
      const isGoodFileSize = size >= 500 * 1024; // 500KB+
      const isHighQuality = isHighResolution && isGoodFileSize;
      
      const recommendations: string[] = [];
      
      if (naturalWidth < 1200) {
        recommendations.push('Use uma imagem com largura de pelo menos 1200px');
      }
      if (naturalHeight < 1200) {
        recommendations.push('Use uma imagem com altura de pelo menos 1200px');
      }
      if (size < 500 * 1024) {
        recommendations.push('Use uma imagem menos comprimida (>500KB)');
      }
      if (aspectRatio < 0.8 || aspectRatio > 1.2) {
        recommendations.push('Para melhor resultado, use uma imagem quadrada ou próxima ao quadrado');
      }
      
      resolve({
        width: naturalWidth,
        height: naturalHeight,
        size,
        aspectRatio,
        isHighQuality,
        recommendations
      });
    };
    
    img.onerror = () => {
      reject(new Error('Failed to analyze image'));
    };
    
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};
