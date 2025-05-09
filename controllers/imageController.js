import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const generateImages = async (prompts) => {
  const outputDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'output');

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const prompt of prompts) {
    const form = new FormData();
    form.append('prompt', prompt);
    form.append('output_format', 'png');

    try {
      const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: 'application/json',
          ...form.getHeaders(),
        },
        body: form
      });

      const data = await response.json();

      if (response.ok) {
        if (data && data.image_data) {
          const imageBuffer = Buffer.from(data.image_data, 'base64');
          const imagePath = path.join(outputDir, `generated_image_${Date.now()}.png`);

          // Save the image to the output folder
          fs.writeFileSync(imagePath, imageBuffer);
          console.log(`Image saved at: ${imagePath}`);
        } else {
          console.error('No image data returned for prompt:', prompt);
        }
      } else {
        console.error('API responded with an error:', data);
      }
    } catch (error) {
      console.error('Error generating image for prompt:', prompt, error);
    }
  }
};

