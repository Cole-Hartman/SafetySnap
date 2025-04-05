import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY! });

const prompt = "You are OSHA expert";

export default async function useGemini(image: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [prompt, image],
    });
    return response;
  } catch (error) {
    throw error;
  }
}
