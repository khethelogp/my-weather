import React, {useEffect, useState} from 'react';
import './App.css';

import SearchBar from './SearchBar';
import Location from './Location';
import DailyFocust from './DailyFocust';
import TodaysCondition from './TodaysCondition';

const App = () => {
  const APP_ID = "d4b88f832947932fedb5238b37a19012";

  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState(''); 
  
  useEffect(()=>{
    getWeather();
  },[location]);

  const getWeather = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Pretoria,za&APPID=d4b88f832947932fedb5238b37a19012`)
    const data = await response.json();
    setWeather(data.weather);
    console.log(data.weather);
};

const updateSearch = e => {
    setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setLocation(search);
  setSearch('');
}

return (
    <div className="App">
        <div className="container">
            <div className="grid-wrapper">

                <SearchBar />

                <Location />
                
                <DailyFocust />

                <TodaysCondition />
            </div>  
        </div>    
    </div>
  );
}

export default App;
