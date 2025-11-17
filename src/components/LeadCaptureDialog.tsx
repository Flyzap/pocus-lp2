import { useEffect, useRef, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface LeadCaptureDialogProps {
  children: React.ReactNode;
  checkoutUrl?: string;
}

const WEBHOOK_URL = "https://webhook.automatizando.net/webhook/CAPTURA";

export default function LeadCaptureDialog({ children, checkoutUrl }: LeadCaptureDialogProps) {
  const [open, setOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const methods = useForm({ mode: 'onBlur' });
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Limpa form quando o modal reabre
  useEffect(() => {
    if (open && !formSuccess) {
      methods.reset();
      setFormError(null);
    }
  }, [open])

  // Responsável por fechar automaticamente após sucesso e redirecionar
  useEffect(() => {
    if (formSuccess && open) {
      closeTimer.current = setTimeout(() => {
        setOpen(false);
        // Redireciona para checkout após fechar o modal
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        }
      }, 2000);
    }
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [formSuccess, open, checkoutUrl]);

  const onSubmit = async (data: any) => {
    setFormError(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nome: data.nome, telefone: data.telefone })
      });
      if (!res.ok) throw new Error(`Erro ao enviar: status ${res.status}`);
      setFormSuccess(true);
    } catch (err) {
      setFormError("Não foi possível enviar. Tente novamente ou pelo WhatsApp.");
    }
  };

  // Quando fechar modal, reseta sucesso
  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setFormSuccess(false);
      setFormError(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {/* Header padrão */}
        {(!formSuccess) && (
          <DialogHeader>
            <DialogTitle>Garanta sua vaga</DialogTitle>
            <DialogDescription>Preencha seu nome e WhatsApp para receber contato prioritário.</DialogDescription>
          </DialogHeader>
        )}
        {formSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="bg-green-100 rounded-full p-4 shadow-inner mb-3 animate-check-bounce">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-xl font-bold text-green-700 mb-1">Dados recebidos!</div>
            <div className="text-base text-green-800 text-center mb-2">Em breve entraremos em contato 😉</div>
            <div className="text-xs text-green-500">Você pode fechar essa janela!</div>
          </div>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 mt-4" autoComplete="off">
              <div>
                <label htmlFor="nome" className="block text-base font-medium mb-1">Nome completo *</label>
                <Input id="nome" placeholder="Seu nome" {...methods.register("nome", { required: "Nome obrigatório" })} />
                {methods.formState.errors.nome && (
                  <div className="text-xs text-destructive mt-1">{methods.formState.errors.nome.message}</div>
                )}
              </div>
              <div>
                <label htmlFor="telefone" className="block text-base font-medium mb-1">Whatsapp *</label>
                <Input id="telefone" placeholder="DDD + número" {...methods.register("telefone", { required: "Número obrigatório", pattern: { value: /^[0-9]{10,12}$/, message: "Insira um número válido" } })} />
                {methods.formState.errors.telefone && (
                  <div className="text-xs text-destructive mt-1">{methods.formState.errors.telefone.message}</div>
                )}
              </div>
              {formError && <div className="text-xs text-red-500 mt-2 text-center">{formError}</div>}
              <DialogFooter>
                <Button type="submit" className="w-full">Enviar dados</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Animations utilitárias Tailwind (adicione no global se necessário):
//.animate-fade-in { animation: fadeIn 0.5s both; }
//@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//.animate-check-bounce { animation: checkBounce 0.7s both; }
//@keyframes checkBounce { 0% { transform: scale(0.2); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
