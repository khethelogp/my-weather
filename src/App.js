import React, { useState, useEffect } from 'react';

import Location from './Location';
import DailyFocust from './DailyFocust';

const api = {
  key: "d4b88f832947932fedb5238b37a19012",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Pretoria');

  useEffect(()=>{
    getWeather();
  },[query]);

  const getWeather = async () => {
    const response = await 
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    const data = await response.json();
    setWeather(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  



  return (
    <div className="app">
      <main>
        <div className="container">
            <div className="grid-wrapper">

                <div className="searchBar">
                  <form className="search-form"
                    onSubmit={getSearch}>
                      <input 
                        className="search-bar" 
                        type="text" 
                        placeholder="Enter a Town or City"
                        value={search}
                        onChange={updateSearch}
                      />
              
                      <button type="submit" title="search">
                        <i class="bi bi-search"></i>
                      </button>   
                  </form>
                </div>

                {weather.main && <Location 
                    key={weather.weather.id}
                    city={weather.name}
                    country={weather.sys.country}
                    temp={weather.main.temp}
                    description={weather.weather[0].main}
                />}
                
                <DailyFocust />

                <div className="todays-condition">
                    <h2>Today's Weather Condition</h2>
                    <div className="condition">
                        <h4>Humidity</h4>
                        <h4>{weather.main.humidity}%</h4>
                    </div>
                    <div className="condition">
                        <h4>Feels Like</h4>
                        <h4>{Math.round(weather.main.feels_like)}°C</h4>
                    </div>
                    <div className="condition">
                        <h4>Min Temp</h4>
                        <h4>{Math.round(weather.main.temp_min)}°C</h4>
                    </div>
                    <div className="condition">
                        <h4>Max Temp</h4>
                        <h4>{Math.round(weather.main.temp_max)}°C</h4>
                    </div>
                    <div className="condition">
                        <h4>Condition</h4>
                        <h4>{weather.weather[0].description}</h4>
                    </div>
                    <div className="condition">
                        <h4>Wind Direction</h4>
                        <h4>{weather.wind.deg}</h4>
                    </div>
                        <div className="condition">
                        <h4>Wind Speed</h4>
                        <h4>{weather.wind.speed} km/h</h4>
                    </div>
                    <div className="condition">
                        <h4>Pressure</h4>
                        <h4>{weather.main.pressure}</h4>
                    </div>
                    <div className="condition">
                        <h4>Sunrise</h4>
                        <h4>{weather.sys.sunrise}</h4>
                    </div>
                    <div className="condition">
                        <h4>Sunset</h4>
                        <h4>{weather.sys.sunrise}</h4>
                    </div>
                </div>
              
              {/*  {weather.main && <TodaysCondition 
                    key={weather.weather.id}
                    humidity={weather.main.humidity}
                    feels={weather.main.feels_like}
                    minTemp={weather.main.temp_min}
                    maxTemp={weather.main.temp_max}
                    condition={weather.weather[0].description}
                    windDirection={weather.wind.deg}
                    windSpeed={weather.wind.speed} 
                    pressure={weather.main.pressure}
                    sunrise={weather.sys.sunrise}
                    sunset={weather.sys.sunset}
                />} */}

            </div>  
        </div>
      </main>    
    </div>
  );
}

export default App;
