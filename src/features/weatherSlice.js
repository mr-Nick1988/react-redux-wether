import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    weatherInfo: {},
    message: 'ENTER CITY NAME',
    loading: false
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setWeatherInfo: (state, action) => {
            state.weatherInfo = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },


    }
})
export const {setMessage, setWeatherInfo, setLoading} = weatherSlice.actions;
export default weatherSlice.reducer;