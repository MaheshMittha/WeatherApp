import React, { useEffect, useState } from 'react'
import hotbg from './assets/hot.jpg'
// import coldbg from './assets/cold.jpg'
import Description from './Components/Description';
import { getFormattedWeatherData } from './weatherSerivce';

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("paris");
  // const [bg, setBg] = useState ("hotBg");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      // console.log(data);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    // console.log(currentUnit);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  // console.log(weather);

  return (
    <div className="app" style={{ backgroundImage: `url(${hotbg})` }}>
      <div className="overlay">

        {
          weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name='city' placeholder="Enter city.." className='search-bar' />
                <button onClick={handleUnitsClick} className="my-btn">°F</button>
              </div>
              <div className="section__temperature">
                <div className="icon">
                  <h3>{`${weather.name},${weather.country}`}</h3>
                  <img src={weather.iconURL} alt=" weatherIcon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temprature">
                  <h1 className="temp">{`${weather.temp?.toFixed()}° ${units === "metric" ? "C" : "F"
                    }`}</h1>
                </div>
              </div>

              {/* { Decscription for bootom} */}
              <Description weather={weather} units={units} />
            </div>

          )
        }

      </div>
    </div>
  )
}


export default App;
