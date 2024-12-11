
import { useDispatch } from 'react-redux';
import { useState } from 'react';


import { api_key, base_url } from '../utils/constants.js';
import {setLoading, setMessage, setWeatherInfo} from "../features/weatherSlice.js";
import {fetchWeather} from "../features/api/weatherApi.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (city.trim() === '') {
            dispatch(setMessage('Please enter a city name'));
            return;
        }

        dispatch(setLoading(true));

        try {
            const weatherData = await fetchWeather(city, api_key, base_url);
            dispatch(setWeatherInfo(weatherData));
            dispatch(setMessage(''));
        } catch (error) {
            dispatch(setMessage(error.message));
        } finally {
            dispatch(setLoading(false));
        }

        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};
export default Form;





