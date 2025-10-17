

const fetchWeatherbyCity = async (city) => {
    try {
        const apiKey = 'bfef9d8a7cbc4d8489821053251710';
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const country = await response.json();
        
        return country;

    } catch (error) {
        console.error("Error al obtener los países:", error);
        throw error;
    };
};



module.exports = { fetchWeatherbyCity };