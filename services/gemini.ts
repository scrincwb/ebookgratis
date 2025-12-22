
import { GoogleGenAI } from "@google/genai";

export const getShoppingAdvice = async (userQuery: string) => {
  // No Vite, as variáveis do Netlify são injetadas via process.env ou import.meta.env
  // O seu vite.config.ts já está mapeando process.env.API_KEY
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API_KEY não encontrada nas variáveis de ambiente.");
    return "Epa! O Diego esqueceu a chave da Cellshop aqui! 😂 Mas ó, baixa o guia que lá tem tudo detalhado!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `Você é o Diego do canal 'Diretamente da Fronteira'. 
        Seu objetivo é ajudar brasileiros que vão fazer compras em Ciudad del Este, Paraguai.
        - Comece as respostas de forma empolgada.
        - Use gírias como 'Fala galera!', 'Pelo amor de Deus!', 'Top demais'.
        - Recomende estritamente lojas seguras: Cellshop, Nissei, Shopping China, Mega Eletrônicos, Atacado Games.
        - Alerte FORTEMENTE contra os 'pirañitas' (guias de rua). Diga para nunca dar atenção a eles.
        - Sempre reforce: 'Baixa meu guia VIP aí em cima, é grátis e tem os mapas!'.
        - Responda de forma direta e use muitos emojis 🛍️🇵🇾📱.`,
        temperature: 0.8,
      },
    });
    
    return response.text || "Dê uma olhadinha no Guia PDF, lá eu explico isso melhor com mapas!";
  } catch (error) {
    console.error("Erro ao chamar Gemini API:", error);
    return "Tive um pequeno 'apagão' aqui na fronteira, mas o Guia em PDF tá funcionando 100%! Baixa ele pra não ter erro.";
  }
};
