import { GoogleGenAI } from "@google/genai";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY! });

const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

const prompt = "You are OSHA expert";

export default async function useGemini(image: string) {
  try {
    const result = await model.generateContent([
      {
        inlineData: {
          data: image,
          mimeType: "image/jpeg",
        },
      },
      prompt,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
}
