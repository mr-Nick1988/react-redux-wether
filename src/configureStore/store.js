import weatherReducer from "../features/weatherSlice.js";
import {configureStore} from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        weather: weatherReducer,
    }
})

export default store;