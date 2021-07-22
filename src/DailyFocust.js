import React, { useState, useEffect } from 'react';
import { api } from './config';
import Daylist from './DayList';


const DailyFocust = ({ longitude, latitude }) => {
    
    const longi = longitude;
    const lati = latitude;
    
    const [sevenDayWeather, setWeather] = useState({});
    const [days, setDays] = useState([
        { day: 'Sunday', icon: 'bi bi-sun', min: 17.17 , max: 19.49 },
        { day: 'Monday', icon: 'bi bi-cloud', min: 10 , max: 17.49 },
        { day: 'Tuesday', icon: 'bi bi-cloud-rain', min: 5.2 , max: 10.5 }
    ]);
    
    useEffect(()=>{
        // console.log('Got the data ');
        get7DayWeather();
    },[longi]);

    // fetching 7 day weather 
    const get7DayWeather = async () => {
        const response = await 
        fetch(`${api.base}onecall?lat=${lati}&lon=${longi}&exclude=current,hourly,minutely,alerts&units=metric&appid=${api.key}`)
        const data = await response.json();
        setWeather(data);
    };



    return ( 
            <div className="daily-focust">
                <Daylist days={days}/>
            </div>
        );
}

export default DailyFocust;