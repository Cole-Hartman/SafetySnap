import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY! });

export async function POST(req: NextRequest) {
  const { encodedImage, ticketID, publicImageURL } = await req.json();

  if (!ticketID || !publicImageURL) {
    return NextResponse.json(
      { error: "no valid id or image url " },
      { status: 500 },
    );
  }

  console.log(ticketID, publicImageURL);

  const matches = encodedImage.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!matches) {
    return NextResponse.json(
      { error: "Invalid image format" },
      { status: 400 },
    );
  }

  const filePath = path.resolve(process.cwd(), "prompt.txt");

  const prompt = await fs.readFile(filePath, "utf-8");
  const footer = `




		THE FOLLOWING CONTENT BELOW IS THE DATA PROVIDED BY ME THAT MUST BE INCLUDEDIN THE FINAL OUTPUT	
		<PROVIDED>
			"id": ${ticketID}
			"imageUrl": ${publicImageURL}
		</PROVIDED>



	`;

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
        prompt + footer,
      ],
    });

    console.log("gemini's response", result.candidates[0].content);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gemini API error" }, { status: 500 });
  }
}
