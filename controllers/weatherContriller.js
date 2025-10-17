const weatherService = require('../services/weatherFetchService');

const getWeatherByCity = async (req, res) => {
    const { city } = req.params;

    try {
        const weather = await weatherService.fetchWeatherbyCity(city);
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el clima' });
    }
};

module.exports = { getWeatherByCity };