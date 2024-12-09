
import {useState} from "react";
import {useDispatch} from "react-redux";
import {city_name} from "../actions/weatherActions.js";


const Form = ({getWeather}) => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        dispatch(city_name(city))
        getWeather(city);
    }


    return (
        <form onSubmit={getCity}>
            <input
                onChange={e => setCity(e.target.value)}
                type="text"
                value={city}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};


export default Form;

