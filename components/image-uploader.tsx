"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

export default function ImageUploader() {
	const [preview, setPreview] = useState<string | null>(null);
	const [image, setImage] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [result, setResult] = useState<string | null>(null);

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
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleClick = async () => {
		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ imageDataURL: preview }),
		});

		const data = await response.json();
		const geminiText = data.result.candidates[0].content.parts[0].text;
		setResult(geminiText)
		// console.log("Response", data.result.candidates[0].content.parts[0].text);
	};

	return (
		<div className="w-full max-w-md">
			<div
				className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4 ${preview ? "border-primary" : "border-border hover:border-primary/50"
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
					<Button onClick={handleClick} className="w-full">
						Upload Image
					</Button>
					<div>{result}</div>
				</div>
			)}
		</div>
	);
}
