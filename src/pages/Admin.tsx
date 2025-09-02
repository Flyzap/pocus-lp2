import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RotateCcw, Settings, ArrowLeft } from "lucide-react";
import ImageManager from "@/components/ImageManager";
import { useImageManager } from "@/hooks/useImageManager";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { images, updateImage, resetImage, resetAllImages } = useImageManager();
  const { toast } = useToast();

  const handleResetAll = () => {
    resetAllImages();
    toast({
      title: "Todas as imagens foram restauradas!",
      description: "Todas as imagens voltaram aos padrões originais.",
    });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Voltar
              </Button>
              <div className="flex items-center gap-2">
                <Settings size={24} className="text-primary" />
                <h1 className="text-2xl font-bold text-foreground">
                  Painel de Administração
                </h1>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleResetAll}
              className="flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Restaurar Todas
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Instruções */}
          <Card>
            <CardHeader>
              <CardTitle>Como usar o Gerenciador de Imagens</CardTitle>
              <CardDescription>
                Aqui você pode alterar todas as imagens da sua landing page. As alterações são salvas automaticamente no navegador.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">📋 Instruções:</h4>
                  <ul className="space-y-1">
                    <li>• Clique em "Selecionar Nova Imagem"</li>
                    <li>• Escolha uma imagem do seu computador</li>
                    <li>• Visualize o preview antes de confirmar</li>
                    <li>• Clique em "Confirmar Alteração"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">✅ Formatos aceitos:</h4>
                  <ul className="space-y-1">
                    <li>• JPG/JPEG (recomendado)</li>
                    <li>• PNG (com transparência)</li>
                    <li>• WebP (otimizado)</li>
                    <li>• Tamanho máximo: 5MB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Gerenciadores de Imagem */}
          <div className="space-y-8">
            
            {/* Imagem Hero */}
            <ImageManager
              currentImage={images.instructorHero}
              onImageChange={(newSrc) => updateImage('instructorHero', newSrc)}
              title="Imagem Principal (Hero)"
              description="Esta é a imagem principal que aparece na seção de destaque da sua landing page."
              recommendedDimensions="1200x800px (16:9)"
            />

            {/* Imagem do Instrutor */}
            <ImageManager
              currentImage={images.instructorProfile}
              onImageChange={(newSrc) => updateImage('instructorProfile', newSrc)}
              title="Foto do Instrutor"
              description="Foto de perfil que aparece na seção 'Conheça seu Instrutor'."
              recommendedDimensions="800x800px (quadrada)"
            />

            {/* Imagem de Transformação */}
            <ImageManager
              currentImage={images.transformation}
              onImageChange={(newSrc) => updateImage('transformation', newSrc)}
              title="Imagem de Transformação"
              description="Imagem que ilustra a transformação profissional na seção de benefícios."
              recommendedDimensions="1200x800px (16:9)"
            />

          </div>

          {/* Footer da Administração */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  💡 <strong>Dica:</strong> As imagens são salvas localmente no seu navegador. 
                  Se você limpar os dados do navegador, as imagens voltarão ao padrão.
                </p>
                <p className="mt-2">
                  Para uma solução permanente, considere substituir os arquivos diretamente na pasta 
                  <code className="bg-background px-1 py-0.5 rounded text-xs mx-1">src/assets/</code>
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Admin;
