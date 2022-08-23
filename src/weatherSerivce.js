const API_KEY = "d1837c4413ca2f0b585174d2e246c24a";

const makeIconURL = (iconid) => `https://openweathermap.org/img/wn/${iconid}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data);
    const {
        weather,
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        wind: { speed },
        sys: { country },
        name,
    } = data; 

    const { description, icon } = weather[0];
    
    return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        pressure,
        speed,
        country,
        name
    };
};


export { getFormattedWeatherData };