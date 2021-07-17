import React, { useState, useEffect } from 'react';

import Location from './Location';
import DailyFocust from './DailyFocust';
import TodaysCondition from './TodaysCondition';

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

  console.log(weather);
  
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
              
                      <button type="submit">
                        <i className="fas fa-search"></i>
                        <ion-icon name="search-outline"></ion-icon>
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

                {/* (typeof weather.main != "undefined") ? (
                  <div>
                    <Location 
                      key={weather.weather.id}
                      city={weather.name}
                      country={weather.sys.country}
                      temp={weather.main.temp}
                      description={weather.weather[0].description}
                    />
                  </div>
                ):('') */}
                
                <DailyFocust />

                <TodaysCondition />
            </div>  
        </div>
      </main>    
    </div>
  );
}

export default App;
