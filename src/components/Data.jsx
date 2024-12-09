import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {data_weather} from "../actions/weatherActions.js";

const Data = () => {
    const dispatch = useDispatch();
    const weatherInfo = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);


    const getWeather = city => {

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(
                    data_weather({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    })
                );
            })


            .catch(() => {
                dispatch({
                    type: 'CITY_NAME',
                    payload: 'Enter CORRECT city name'
                });
            });
    };


    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo}/>
        </div>
    );
};


export default Data;

