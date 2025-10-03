const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Importar rutas
const usersRoutes = require('./routes/usersRouter');
const usersRoutesV2 = require('./routes/usersRouter_v2');
const countryRoutes = require('./routes/countriesRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Learn APIs',
      version: '1.0.0',
      description: 'API para aprender desarrollo con Express y Swagger',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./index.js', './routes/*.js'], // incluir archivos de rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home
 *     description: Retorna un mensaje de bienvenida
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "¡Bienvenido a la API!"
 */
app.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido a la API!' });
});

// Usar las rutas de usuarios
app.use('/api/v1/users', usersRoutes);
app.use('/api/v2/users', usersRoutesV2);
app.use(countryRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});