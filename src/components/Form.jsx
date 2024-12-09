import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { data_weather, city_name } from '../actions/weatherActions';
import {api_key, base_url} from "../utils/constants.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getWeather = (e) => {
        e.preventDefault();
        if (city.trim() === '') {
            dispatch(city_name('Please enter a city name'));
            return;
        }

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                if (data) {
                    dispatch(data_weather({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    }));
                } else {
                    dispatch(city_name('City not found. Please try again.'));
                }
            })
            .catch(() => {
                dispatch(city_name('Error fetching data. Please try again.'));
            });
    };

    return (
        <form onSubmit={getWeather}>
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










