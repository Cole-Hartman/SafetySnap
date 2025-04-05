import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY! });

const prompt = "What do you see in this image?";

export async function POST(req: NextRequest) {
  const { imageDataURL } = await req.json();

  const matches = imageDataURL.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!matches) {
    return NextResponse.json(
      { error: "Invalid image format" },
      { status: 400 },
    );
  }

  const mimeType = matches[1];
  const base64Data = matches[2];

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          inlineData: {
            data: base64Data,
            mimeType,
          },
        },
        prompt,
      ],
    });

    console.log("gemini's response", result.candidates[0].content);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gemini API error" }, { status: 500 });
  }
}
