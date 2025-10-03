const express = require('express');
const router = express.Router();

// Datos de ejemplo (en una app real esto vendría de una base de datos)
const users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'María García', email: 'maria@example.com' },
  { id: 3, name: 'Carlos López', email: 'carlos@example.com' }
];


const usersV2 = [
  { id: 1, name: 'Juan', lastName: 'Pérez', email: 'juan@example.com' },
  { id: 2, name: 'María', lastName: 'García', email: 'maria@example.com' },
  { id: 3, name: 'Carlos', lastName: 'López', email: 'carlos@example.com' }
];



/**
 * @swagger
 * /api/v2/users:
 *   get:
 *     summary: Obtener todos los usuarios del sistema
 *     description: Retorna una lista de usuarios de ejemplo
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   email:
 *                     type: string
 *                     example: "juan@example.com"
 */
router.get('/', (req, res) => {
  res.json(usersV2);
});


/**
 * @swagger
 * /api/v2/users:
 *   get:
 *     summary: Obtener todos los usuarios del sistema
 *     description: Retorna una lista de usuarios de ejemplo
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   email:
 *                     type: string
 *                     example: "juan@example.com"
 */
router.get('/', (req, res) => {
  res.json(usersV2);
});


/**
 * @swagger
 * /api/v2/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersV2.find(u => u.id === userId);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});



/**
 * @swagger
 * /api/v2/primeruser/:
 *   get:
 *     summary: Obtener primer usuario
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/primeruser/', (req, res) => {
  const user = users[0];
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});


/**
 * @swagger
 * /api/v2/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ana Martínez"
 *               email:
 *                 type: string
 *                 example: "ana@example.com"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;