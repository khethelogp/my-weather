import React from 'react';

let desc = "";

const Location = ({city, country, temp, description}) => {
    const weatherConditions = {
        Thunderstorm: "cloud-lightning-rain",
        Rain: "cloud-rain-heavy",
        Drizzle: "cloud-drizzle",
        Snow: "cloud-snow",
        Mist: "cloud-fog2",
        Smoke: "cloud-haze-1",
        Haze: "cloud-haze",
        Dust: "cloud-haze2-fill",
        Fog: "cloud-fog2",
        Sand: "tornado",
        Ash: "cloud-snow",
        Squall: "wind",
        Tornado: "tornado",
        Hurricane: "hurricane",
        Clear: "sun",
        Cloud: "cloud",
        Clouds: "clouds",

    }

    
    switch(description) {
        case "Thunderstorm":
            desc = weatherConditions[description];
        break;
        case "Rain":
            desc = weatherConditions[description];
        break;
        case "Drizzle":
            desc = weatherConditions[description];
        break;
        case "Snow":
            desc = weatherConditions[description];
        break;
        case "Mist":
            desc = weatherConditions[description];
        break;
        case "Smoke":
            desc = weatherConditions[description];
        break;
        case "Haze":
            desc = weatherConditions[description];
        break;
        case "Dust":
            desc = weatherConditions[description];
        break;
        case "Fog":
            desc = weatherConditions[description];
        break;
        case "Sand":
            desc = weatherConditions[description];
        break;
        case "Ash":
            desc = weatherConditions[description];
        break;
        case "Squall":
            desc = weatherConditions[description];
        break;
        case "Tornado":
            desc = weatherConditions[description];
        break;
        case "Hurricane":
            desc = weatherConditions[description];
        break;
        case "Cloud":
            desc = weatherConditions[description];
        break;
        case "Clouds":
            desc = weatherConditions[description];
        break;
        
        default:
            desc = weatherConditions[description];
    } 
    

    return (  
        <div className="location">
                <div className="data">
                    <h1>{city}, {country}</h1>
                    <h3>Current</h3>
                    <h2>{Math.round(temp)}°C</h2>
                    <h4>{description}</h4>
                </div>
                <div className="data-icon">
                    <i class={`bi bi-${desc}`}></i>
                </div>
        </div>
    );
}
 
export default Location;