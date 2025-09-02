import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Check, X, Info, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { optimizeImageQuality, analyzeImageQuality } from "@/utils/imageOptimizer";

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
  const [imageAnalysis, setImageAnalysis] = useState<any>(null);
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

    // Analisar qualidade da imagem
    analyzeImageQuality(file)
      .then(analysis => {
        setImageAnalysis(analysis);
        
        // Otimizar imagem para máxima qualidade
        return optimizeImageQuality(file, {
          maxWidth: 2048,
          maxHeight: 2048,
          quality: 0.98,
          format: 'jpeg'
        });
      })
      .then(optimizedImageSrc => {
        setPreviewImage(optimizedImageSrc);
        setIsUploading(false);
        
        toast({
          title: "Imagem processada!",
          description: "Imagem otimizada para máxima qualidade.",
        });
      })
      .catch(error => {
        console.error('Erro ao processar imagem:', error);
        setIsUploading(false);
        toast({
          title: "Erro ao processar imagem",
          description: "Tente novamente com uma imagem diferente.",
          variant: "destructive"
        });
      });
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
    setImageAnalysis(null);
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

        {/* Análise de Qualidade */}
        {imageAnalysis && (
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              {imageAnalysis.isHighQuality ? (
                <Info className="text-green-500" size={16} />
              ) : (
                <AlertTriangle className="text-yellow-500" size={16} />
              )}
              <span className="text-sm font-medium">
                Análise de Qualidade
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-3">
              <div>Resolução: {imageAnalysis.width}x{imageAnalysis.height}px</div>
              <div>Tamanho: {Math.round(imageAnalysis.size / 1024)}KB</div>
            </div>
            
            {imageAnalysis.recommendations.length > 0 && (
              <div>
                <p className="text-xs font-medium text-yellow-600 mb-2">Recomendações:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {imageAnalysis.recommendations.map((rec: string, index: number) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Preview da Nova Imagem */}
        {previewImage && (
          <div>
            <label className="text-sm font-medium text-primary">Nova Imagem (Otimizada):</label>
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
