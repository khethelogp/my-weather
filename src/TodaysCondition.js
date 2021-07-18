import React from 'react';

const TodaysCondition = ({ humidity, feels, minTemp, maxTemp, condition, windDirection, windSpeed, pressure, sunrise, sunset}) => {

    // Converting javascript timestamps to normal time
    function getNormalTime(unixTimestamp){
        let date = new Date(unixTimestamp * 1000);
        let hours = ("0" + date.getHours()).slice(-2);
        let minutes = ("0" + date.getMinutes()).slice(-2); 
        let time = `${hours}:${minutes}`;
        return time;
    }

    // Wind direction function
    let WIND_DIRECTION;

    function getWindDirection(d){
        switch (true) {
            case 0 :
            case 360:
                WIND_DIRECTION = "N";
            break;
            case 90 :
                WIND_DIRECTION = "E";
            break;
            case 180 :
                WIND_DIRECTION = "S";
            break;
            case 270 :
                WIND_DIRECTION = "W";
            break;
            case (d>0 && d<90) :
                WIND_DIRECTION = "NE";
            break;
            case (d>90 && d<180) :
                WIND_DIRECTION = "SE";
            break;
            case (d>180 && d<270) :
                WIND_DIRECTION = "SW";
            break;
            case (d>270 && d<360) :
                WIND_DIRECTION = "NW";
            break;
            default:
                WIND_DIRECTION = "-";
                break;
        }

        return WIND_DIRECTION;
    }

    return ( 
        <div className="todays-condition">
            <h2>Today's Weather Condition</h2>
            <div className="condition">
                <h4>Humidity</h4>
                <h4>{humidity}%</h4>
            </div>
            <div className="condition">
                <h4>Feels Like</h4>
                <h4>{Math.round(feels)}°C</h4>
            </div>
            <div className="condition">
                <h4>Min Temp</h4>
                <h4>{Math.round(minTemp)}°C</h4>
            </div>
            <div className="condition">
                <h4>Max Temp</h4>
                <h4>{Math.round(maxTemp)}°C</h4>
            </div>
            <div className="condition">
                <h4>Condition</h4>
                <h4>{condition}</h4>
            </div>
            <div className="condition">
                <h4>Wind Direction</h4>
                <h4>{getWindDirection(windDirection)}</h4>
            </div>
                <div className="condition">
                <h4>Wind Speed</h4>
                <h4>{Math.round(windSpeed)} km/h</h4>
            </div>
            <div className="condition">
                <h4>Pressure</h4>
                <h4>{pressure}</h4>
            </div>
            <div className="condition">
                <h4>Sunrise</h4>
                <h4>{getNormalTime(sunrise)}</h4>
            </div>
            <div className="condition">
                <h4>Sunset</h4>
                <h4>{getNormalTime(sunset)}</h4>
            </div>
        </div>
     );
}
export default TodaysCondition;