export const DATA_WEATHER = 'DATA_WEATHER';
export const CITY_NAME = 'CITY_NAME';


export const data_weather = data =>({
    type: DATA_WEATHER,
    payload: data
})

export const city_name = name =>({
    type: CITY_NAME,
    payload: name
})