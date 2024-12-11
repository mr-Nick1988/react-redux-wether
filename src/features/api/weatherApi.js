export const fetchWeather = async (city, apiKey, baseUrl) => {
    try {
        const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data) {
            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            };
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        throw new Error('Error fetching data');
    }
};