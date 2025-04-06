"use client";
import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default function ImageUploader({ user }: { user: User }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreview(null);
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = async () => {
    if (!image) return;
    setIsLoading(true);

    const ticketID = uuidv4();

    const filePath = `${user.id}/${ticketID}/${image.name}`;

    const { _, error } = await supabase.storage
      .from("images")
      .upload(filePath, image);

    const { data, e } = await supabase.storage
      .from("images")
      .getPublicUrl(filePath);

    console.log("this is the data", data.publicUrl);

    const response = await fetch("/api/process-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        encodedImage: preview,
        ticketID: ticketID,
        publicImageURL: data.publicUrl,
      }),
    });

    const res = await response.json();

    const geminiText = res.result.candidates[0].content.parts[0].text;

    const cleanedJson = geminiText
      .replace(/^```json\s*/, "") // Remove opening \`\`\`json and any whitespace
      .replace(/\s*```$/, ""); // Remove closing \`\`\` and any whitespace before it

    console.log("Cleaned text:", cleanedJson);

    const ticketData = JSON.parse(cleanedJson);

    await supabase.from("tickets").insert([
      {
        ticket: ticketData,
        user_id: user.id,
      }, // insert the whole ticket object into the ticket column
    ]);

    window.location.href = "/dashboard";
  };

  return (
    <div className="w-full max-w-md">
      <div
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4 ${
          preview ? "border-primary" : "border-border hover:border-primary/50"
        } transition-colors`}
      >
        {!preview ? (
          <>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">
                Drag and drop your image here
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                or click to browse files (PNG, JPG, JPEG up to 10MB)
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="mt-2"
            >
              Select Image
            </Button>
          </>
        ) : (
          <div className="relative w-full">
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 bg-background rounded-full p-1 shadow-sm hover:bg-accent transition-colors"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={preview || "/placeholder.svg"}
              alt="Preview"
              className="w-full h-auto max-h-64 object-contain rounded-md"
            />
          </div>
        )}
      </div>
      {preview && (
        <div className="mt-4">
          <Button onClick={handleClick} className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"></div>
                Processing...
              </>
            ) : (
              "Upload Image"
            )}
          </Button>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}
