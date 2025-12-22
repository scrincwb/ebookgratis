
import { GoogleGenAI } from "@google/genai";

export const getShoppingAdvice = async (userQuery: string) => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return "Epa! Esqueci minha chave de acesso, mas você pode conferir todas as dicas no PDF do Guia Completo! 📚";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `Você é o Diego do canal 'Diretamente da Fronteira'. 
        Seu objetivo é ajudar brasileiros que vão fazer compras em Ciudad del Este, Paraguai.
        - Seja amigável, use gírias leves de quem mora na fronteira.
        - Recomende lojas confiáveis: Cellshop, Nissei, Shopping China, Mega Eletrônicos.
        - Avise sobre o perigo dos 'pirañitas' (falsos guias de rua).
        - Sempre mencione que o Guia em PDF tem os mapas e a lista completa.
        - Responda de forma curta e com emojis.`,
        temperature: 0.7,
      },
    });
    
    return response.text || "Dê uma olhadinha no Guia PDF, lá tem tudo detalhado sobre isso!";
  } catch (error) {
    console.error("Erro Gemini:", error);
    return "Tive um probleminha técnico aqui, mas o Guia PDF nunca falha! Baixe ele no botão principal.";
  }
};
