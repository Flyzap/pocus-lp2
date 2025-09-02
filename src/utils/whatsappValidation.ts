// Utilitários para validação de WhatsApp brasileiro

// DDDs válidos no Brasil (atualizado 2025)
const VALID_DDDS = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, // São Paulo
  21, 22, 24, // Rio de Janeiro
  27, 28, // Espírito Santo
  31, 32, 33, 34, 35, 37, 38, // Minas Gerais
  41, 42, 43, 44, 45, 46, // Paraná
  47, 48, 49, // Santa Catarina
  51, 53, 54, 55, // Rio Grande do Sul
  61, // Distrito Federal
  62, 64, // Goiás
  63, // Tocantins
  65, 66, // Mato Grosso
  67, // Mato Grosso do Sul
  68, // Acre
  69, // Rondônia
  71, 73, 74, 75, 77, // Bahia
  79, // Sergipe
  81, 87, // Pernambuco
  82, // Alagoas
  83, // Paraíba
  84, // Rio Grande do Norte
  85, 88, // Ceará
  86, 89, // Piauí
  91, 93, 94, // Pará
  92, 97, // Amazonas
  95, // Roraima
  96, // Amapá
  98, 99, // Maranhão
];

// Números que não devem ser aceitos (muito comuns/falsos)
const INVALID_PATTERNS = [
  /^(\d)\1{10}$/, // Números repetidos (11111111111)
  /^1{11}$/, // Todos 1s
  /^0{11}$/, // Todos 0s
  /^9{11}$/, // Todos 9s
  /^12345/, // Sequências óbvias
  /^11111/, // Sequências óbvias
  /^99999/, // Sequências óbvias
];

export interface WhatsAppValidationResult {
  isValid: boolean;
  errorMessage?: string;
  formattedNumber?: string;
}

export const formatWhatsApp = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos
  const limitedNumbers = numbers.slice(0, 11);
  
  // Aplica a máscara (XX) XXXXX-XXXX
  if (limitedNumbers.length >= 11) {
    return limitedNumbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (limitedNumbers.length >= 7) {
    return limitedNumbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  } else if (limitedNumbers.length >= 3) {
    return limitedNumbers.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  } else if (limitedNumbers.length >= 1) {
    return limitedNumbers.replace(/(\d{0,2})/, '($1');
  }
  
  return limitedNumbers;
};

export const validateWhatsApp = (phone: string): WhatsAppValidationResult => {
  // Remove formatação
  const numbers = phone.replace(/\D/g, '');
  
  // Verifica se tem 11 dígitos
  if (numbers.length !== 11) {
    return {
      isValid: false,
      errorMessage: 'WhatsApp deve ter 11 dígitos'
    };
  }
  
  // Extrai DDD
  const ddd = parseInt(numbers.slice(0, 2));
  
  // Verifica se o DDD é válido
  if (!VALID_DDDS.includes(ddd)) {
    return {
      isValid: false,
      errorMessage: 'DDD inválido'
    };
  }
  
  // Verifica se o primeiro dígito do número é 9 (obrigatório para celular)
  if (numbers[2] !== '9') {
    return {
      isValid: false,
      errorMessage: 'Número deve ser de celular (iniciar com 9)'
    };
  }
  
  // Verifica padrões inválidos
  for (const pattern of INVALID_PATTERNS) {
    if (pattern.test(numbers)) {
      return {
        isValid: false,
        errorMessage: 'Número inválido'
      };
    }
  }
  
  return {
    isValid: true,
    formattedNumber: formatWhatsApp(numbers)
  };
};

export const sanitizeWhatsApp = (phone: string): string => {
  // Remove tudo que não é número e garante 11 dígitos
  const numbers = phone.replace(/\D/g, '');
  return numbers.slice(0, 11);
};

export const getWhatsAppLink = (phone: string, message?: string): string => {
  const sanitized = sanitizeWhatsApp(phone);
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/55${sanitized}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};
