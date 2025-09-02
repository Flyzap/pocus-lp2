import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageManagerProps {
  currentImage: string;
  onImageChange: (newImageSrc: string) => void;
  title: string;
  description: string;
  recommendedDimensions?: string;
}

const ImageManager: React.FC<ImageManagerProps> = ({
  currentImage,
  onImageChange,
  title,
  description,
  recommendedDimensions = "800x600px"
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo de arquivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Formato não suportado",
        description: "Por favor, selecione uma imagem JPG, PNG ou WebP.",
        variant: "destructive"
      });
      return;
    }

    // Validar tamanho (máximo 10MB para melhor qualidade)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Arquivo muito grande",
        description: "A imagem deve ter no máximo 10MB.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    // Criar preview da imagem
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageSrc = e.target?.result as string;
      setPreviewImage(imageSrc);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleConfirmChange = () => {
    if (previewImage) {
      onImageChange(previewImage);
      setPreviewImage(null);
      toast({
        title: "Imagem atualizada!",
        description: "A nova imagem foi aplicada com sucesso.",
      });
    }
  };

  const handleCancelChange = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon size={20} />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
          <br />
          <span className="text-xs text-muted-foreground">
            Dimensões recomendadas: {recommendedDimensions} | Formatos: JPG, PNG, WebP | Máximo: 10MB
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Imagem Atual */}
        <div>
          <label className="text-sm font-medium text-muted-foreground">Imagem Atual:</label>
          <div className="mt-2 border border-border rounded-lg overflow-hidden">
            <img 
              src={currentImage} 
              alt="Imagem atual"
              className="w-full h-48 object-cover high-quality-image"
            />
          </div>
        </div>

        {/* Preview da Nova Imagem */}
        {previewImage && (
          <div>
            <label className="text-sm font-medium text-primary">Nova Imagem (Preview):</label>
            <div className="mt-2 border border-primary rounded-lg overflow-hidden">
              <img 
                src={previewImage} 
                alt="Preview da nova imagem"
                className="w-full h-48 object-cover high-quality-image"
              />
            </div>
            
            {/* Botões de Confirmação */}
            <div className="flex gap-2 mt-3">
              <Button 
                onClick={handleConfirmChange}
                className="flex items-center gap-2"
                size="sm"
              >
                <Check size={16} />
                Confirmar Alteração
              </Button>
              <Button 
                onClick={handleCancelChange}
                variant="outline"
                className="flex items-center gap-2"
                size="sm"
              >
                <X size={16} />
                Cancelar
              </Button>
            </div>
          </div>
        )}

        {/* Upload */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full flex items-center gap-2"
            disabled={isUploading}
          >
            <Upload size={16} />
            {isUploading ? 'Carregando...' : 'Selecionar Nova Imagem'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageManager;
