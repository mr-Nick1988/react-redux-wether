import weatherReducer from "../reducers/weatherReducer.js";
import {createStore} from 'redux';


const store = createStore(weatherReducer);

export default store;