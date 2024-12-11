import {CITY_NAME, DATA_WEATHER} from "../actions/weatherActions.js";

const initialState = {
    weatherInfo: {},
    message: 'ENTER CITY NAME'
};
 export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_WEATHER:
            return {...state, weatherInfo: action.payload, message: ''};
        case CITY_NAME:
            return{...state, message: action.payload};
        default:
            return state;
    }
}

