import React, { useState, useEffect } from 'react';
import { api } from './config'

import Location from './Location';
import DailyFocust from './DailyFocust';
import TodaysCondition from './TodaysCondition';


const App = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Pretoria');
  const [isPending, setIsPending] = useState(true); 
  const [rError, setRError] = useState(null);

  useEffect(()=>{
    setTimeout(() => {
      getWeather();
    },1000);

  },[query]);

  // fetching daily weather 
  const getWeather = async () => {
    try {
      const response = await 
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)      
      if(!response.ok) {
        throw Error('Oops, could not fetch the data for that resource!');  
      }else{
        const data = await response.json();
        setWeather(data);  
        setIsPending(false);
        setRError(null);
      }
    } catch (error) {
      setIsPending(false);
      setRError(error.message);
    }
  };

  //fetch 7 days weather

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setIsPending(true);
  }
  
  /* Setting the background Image of the app */
  function setBackgroundImg(){
    let desc = "";
    if(weather.main){
      desc = (weather.weather[0].main).toLowerCase();
    }
    return desc;
  }
  

  return (
    <div className={`app ${setBackgroundImg()}`}>
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

                {rError && <div className="rError">{ rError } </div> }

                {isPending && <div className="pending"><h3>Loading...</h3></div>}
                
                {weather.main && <Location 
                    key={weather.weather.id}
                    city={weather.name}
                    country={weather.sys.country}
                    temp={weather.main.temp}
                    description={weather.weather[0].main}
                />}
                
                {weather.main && <DailyFocust 
                    key={weather.weather.id}
                    longitude={weather.coord.lon}
                    latitude={weather.coord.lat}
                />}
              
              {weather.main && <TodaysCondition 
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
              />}

            </div>  
        </div>
      </main>    
    </div>
  );
}

export default App;
