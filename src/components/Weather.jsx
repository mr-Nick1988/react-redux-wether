import {useSelector} from "react-redux";

export const Weather = () => {
    const weather = useSelector(state => state.weather.weatherInfo);
    const message = useSelector(state => state.weather.message);
    const loading = useSelector(state =>state.weather.loading);

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={'infoWeath'}>
            {message && <p>{message}</p>}

            {!message && (
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}°C</p>
                    <p>Pressure: {weather.pressure} hPa</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            )}
        </div>
    );
};
