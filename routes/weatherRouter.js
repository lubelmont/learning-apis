const express = require('express');
const router = express.Router();


const weatherController = require('../controllers/weatherContriller');
const { route } = require('./usersRouter');


/**
 * @swagger
 * /api/v1/weather/findbycity/{city}:
 *   get:
 *     summary: Obtiene el clima por ciudad
 *     description: Retorna información meteorológica actual de una ciudad específica
 *     tags:
 *       - Clima
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la ciudad para consultar el clima
 *         example: "Madrid"
 *     responses:
 *       200:
 *         description: Información meteorológica obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ciudad:
 *                   type: string
 *                   description: Nombre de la ciudad consultada
 *                   example: "Madrid"
 *                 temperatura:
 *                   type: number
 *                   description: Temperatura actual en grados Celsius
 *                   example: 22.5
 *                 descripcion:
 *                   type: string
 *                   description: Descripción del clima actual
 *                   example: "Soleado"
 *                 humedad:
 *                   type: number
 *                   description: Porcentaje de humedad
 *                   example: 65
 *                 viento:
 *                   type: object
 *                   properties:
 *                     velocidad:
 *                       type: number
 *                       description: Velocidad del viento en km/h
 *                       example: 12.5
 *                     direccion:
 *                       type: string
 *                       description: Dirección del viento
 *                       example: "NO"
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa con datos del clima
 *                 value:
 *                   ciudad: "Madrid"
 *                   temperatura: 22.5
 *                   descripcion: "Soleado"
 *                   humedad: 65
 *                   viento:
 *                     velocidad: 12.5
 *                     direccion: "NO"
 *       400:
 *         description: Solicitud incorrecta - ciudad no válida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Nombre de ciudad no válido"
 *       404:
 *         description: Ciudad no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Ciudad no encontrada"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error interno del servidor al consultar el clima"
 */
router.get('/findbycity/:city', weatherController.getWeatherByCity);


module.exports = router;