import React, { useState, useEffect } from 'react';
import { api } from './config';
import Daylist from './DayList';


const DailyFocust = ({ longitude, latitude }) => {
    
    const longi = longitude;
    const lati = latitude;
    
    const [days, setDays] = useState(null);
    
    useEffect(()=>{
        // console.log('Got the data ');
        get7DayWeather();
    },[longi]);

    // fetching 7 day weather 
    const get7DayWeather = async () => {
        const response = await 
        fetch(`${api.base}onecall?lat=${lati}&lon=${longi}&exclude=current,hourly,minutely,alerts&units=metric&appid=${api.key}`)
        const data = await response.json();
        setDays(data.daily);
    };


    return ( 
            <div className="daily-focust">
                {days && <Daylist days={days}/>}
            </div>
        );
}

export default DailyFocust;