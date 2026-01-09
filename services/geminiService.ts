
import { GoogleGenAI, Type } from "@google/genai";
import { PageCopy } from "../types";

export const generateBetterCopy = async (currentCopy: string, context: string): Promise<PageCopy> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Melhore esta copy de VSL. 
    Contexto do produto: ${context}. 
    Copy atual: ${currentCopy}. 
    Retorne um JSON estruturado com: preHeadline (curto, urgente), headline (impactante, promessa forte), subHeadline (reforço emocional), ctaText (ação clara), ctaSubtext (segurança/garantia).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          preHeadline: { type: Type.STRING },
          headline: { type: Type.STRING },
          subHeadline: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          ctaSubtext: { type: Type.STRING },
        },
        required: ["preHeadline", "headline", "subHeadline", "ctaText", "ctaSubtext"]
      }
    }
  });

  return JSON.parse(response.text);
};
