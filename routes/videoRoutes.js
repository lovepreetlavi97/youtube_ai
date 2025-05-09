import express from 'express';
import { generateVideo } from '../controllers/videoController.js';

const router = express.Router();

/**
 * @swagger
 * /api/videos/generate:
 *   post:
 *     summary: Generate a video from text
 *     tags:
 *       - Videos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "This is my script"
 *     responses:
 *       200:
 *         description: Video generation started
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Video generation started!
 */

router.post('/generate', generateVideo);


export default router;
