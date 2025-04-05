import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY! });

const prompt = "What do you see in this image?";

export default async function useGemini(image: string) {
  try {
    const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);

    if (!matches) {
      throw new Error("Invalid image format. Must be a base64 data URL.");
    }

    const mimeType = matches[1]; // e.g., "image/jpeg"
    const base64Data = matches[2]; // just the base64 part

    const result = genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          inlineData: {
            data: base64Data,
            mimeType: mimeType,
          },
        },
        prompt,
      ],
    });
    return result;
  } catch (error) {
    throw error;
  }
}
