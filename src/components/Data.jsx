import React from 'react';
import Form from './Form.jsx';
import Weather from './Weather.jsx';
import { useSelector } from 'react-redux';

const Data = () => {
    const weatherInfo = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);

    return (
        <div>
            <Form />
            <Weather message={message} weather={weatherInfo} />
        </div>
    );
};

export default Data;



