

const fetchCountry = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/name/japan');

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const country = await response.json();
        
        return country[0]['name']['common'];

    } catch (error) {
        console.error("Error al obtener los países:", error);
        throw error;
    };
};


module.exports = { fetchCountry };