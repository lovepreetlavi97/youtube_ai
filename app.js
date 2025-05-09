import express from 'express';
import videoRoutes from './routes/videoRoutes.js';

import fs from 'fs';
import yaml from 'yaml';
import path from 'path';
import { fileURLToPath } from 'url';
import { swaggerUi, swaggerSpec } from './swagger.js';

const app = express();
app.use(express.json());

// Needed for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger setup
const swaggerFile = fs.readFileSync(path.join(__dirname, 'docs', 'swagger.yaml'), 'utf8');
const swaggerDocument = yaml.parse(swaggerFile);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/videos', videoRoutes);

export default app;
