import { ElevenLabsClient } from "elevenlabs";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { generateImages } from './imageController.js';
import { generateTalkingVideo } from './imageToVideo.js';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVEN_LABS_API_KEY,
});

// Example usage:
const prompts = [
  'A futuristic cityscape at sunset.',
];
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const imageFilePath = path.resolve(__dirname, '../output/lion.png');
const audioFilePath = path.resolve(__dirname, '../output/speech.mp3');

export const generateVideo = async (req, res) => {
  const result = await generateTalkingVideo(imageFilePath, audioFilePath);
  // const result = await generateImages(prompts);
  // console.log("Image generation result:", result);
  // try {
  //   const text = "The first move is what sets everything in motion.";
  //   const voiceId = "JBFqnCBsd6RMkjVDRZzb";

  //   // Generate audio stream using convert()
  //   const audioStream = await client.textToSpeech.convert(voiceId, {
  //     text,
  //     model_id: "eleven_multilingual_v2",
  //     output_format: "mp3_44100_128",
  //   });

  //   const outputDir = path.join(process.cwd(), "output");
  //   if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  //   const audioPath = path.join(outputDir, "speech.mp3");
  //   const writeStream = fs.createWriteStream(audioPath);

  //   audioStream.pipe(writeStream);

  //   writeStream.on("finish", () => {
  //     console.log("✅ Audio saved:", audioPath);
  //     res.status(200).json({ message: "Audio generated", filePath: audioPath });
  //   });

  //   writeStream.on("error", (err) => {
  //     console.error("❌ Error writing audio:", err);
  //     res.status(500).json({ error: "Error saving audio" });
  //   });
  // } catch (err) {
  //   console.error("❌ Error generating audio:", err.message);
  //   res.status(500).json({ error: "Audio generation failed" });
  // }
};







// app.post('/generate-video', async (req, res) => {
//   const { script, prompts } = req.body;

//   try {
//     // Step 1: Generate Audio
//     const audioPath = await generateAudio(script);

//     // Step 2: Generate Images
//     const imagePaths = await generateImages(prompts);

//     // Step 3: Combine Images and Audio into Video
//     const videoPath = './controllers/output/generated_video.mp4';
//     await createVideo(audioPath, imagePaths, videoPath);

//     // Step 4: Upload Video to YouTube
//     await uploadVideoToYouTube(videoPath, 'Philosophical Thoughts', 'A deep dive into philosophical topics');

//     res.status(200).json({
//       message: 'Video created and uploaded successfully',
//       videoUrl: `https://youtube.com/watch?v=${videoPath}`,
//     });
//   } catch (error) {
//     console.error('Error during video creation process:', error);
//     res.status(500).json({ error: 'Error creating or uploading video' });
//   }
// });
