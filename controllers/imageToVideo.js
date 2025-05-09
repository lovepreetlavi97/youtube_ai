import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import path from 'path';

const D_ID_API_KEY = process.env.D_ID_API_KEY;

export const generateTalkingVideo = async (imagePath, audioPath) => {
  const formData = new FormData();
  formData.append('source_image', fs.createReadStream(imagePath));
  formData.append('script', JSON.stringify({
    type: 'audio',
    audio_url: `file://${path.resolve(audioPath)}`,
  }));

  try {
    const response = await axios.post('https://api.d-id.com/talks', formData, {
      headers: {
        'Authorization': `Bearer ${D_ID_API_KEY}`,
        ...formData.getHeaders(),
      },
    });

    const videoUrl = response.data.result_url;
    console.log('Talking video generated:', videoUrl);
    return videoUrl;

  } catch (error) {
    console.error('Failed to generate video:', error.response?.data || error.message);
    throw new Error('Video generation failed');
  }
};
