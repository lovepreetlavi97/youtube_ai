// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI YouTube API',
      version: '1.0.0',
      description: 'API for auto-generating videos from text',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Swagger looks here for docs
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
