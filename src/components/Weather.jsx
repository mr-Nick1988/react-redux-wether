import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);
    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}°C</p>
                    <p>Pressure: {weather.pressure} hPa</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            <>{message}</>
        </div>
    )
};
export default Weather;
